import { NextRequest, NextResponse } from 'next/server';
import { Paddle, EventName } from '@paddle/paddle-node-sdk';
import { initializeFirebase } from '@/firebase';
import { doc, updateDoc, setDoc, serverTimestamp } from 'firebase/firestore';

const paddle = new Paddle(process.env.PADDLE_API_KEY || '');

export async function POST(req: NextRequest) {
  const signature = req.headers.get('paddle-signature') || '';
  const body = await req.text();
  const secret = process.env.PADDLE_WEBHOOK_SECRET || '';

  try {
    const event = paddle.webhooks.unmarshal(body, secret, signature);
    
    if (!event) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    const { firestore } = initializeFirebase();

    // Handle the events
    switch (event.eventType) {
      case EventName.TransactionCompleted:
      case EventName.SubscriptionActivated:
      case EventName.SubscriptionUpdated:
        const userId = (event.data as any).custom_data?.userId;
        if (userId) {
          const userRef = doc(firestore, 'users', userId);
          const isSubscription = 'subscription_id' in event.data;
          
          await updateDoc(userRef, {
            accessLevel: 'pro',
            updatedAt: serverTimestamp(),
            paddleCustomerId: event.data.customer_id,
            activeSubscriptionId: isSubscription ? (event.data as any).subscription_id : null,
          });

          // Also record the specific subscription or license details
          if (isSubscription) {
             const subId = (event.data as any).subscription_id;
             const subRef = doc(firestore, 'users', userId, 'subscriptions', subId);
             await setDoc(subRef, {
               id: subId,
               userId,
               paddleSubscriptionId: subId,
               status: 'active',
               updatedAt: serverTimestamp(),
               createdAt: serverTimestamp(),
             }, { merge: true });
          }
        }
        break;

      case EventName.SubscriptionCanceled:
        const canceledUserId = (event.data as any).custom_data?.userId;
        if (canceledUserId) {
          const userRef = doc(firestore, 'users', canceledUserId);
          await updateDoc(userRef, {
            accessLevel: 'free',
            updatedAt: serverTimestamp(),
          });
        }
        break;
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Paddle Webhook Error:', error.message);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}
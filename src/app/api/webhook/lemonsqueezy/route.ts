
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { initializeFirebase } from '@/firebase';
import { doc, updateDoc, setDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('x-signature') || '';
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET || '';

  // Verify signature
  const hmac = crypto.createHmac('sha256', secret);
  const digest = Buffer.from(hmac.update(body).digest('hex'), 'utf8');
  const signatureBuffer = Buffer.from(signature, 'utf8');

  if (signatureBuffer.length !== digest.length || !crypto.timingSafeEqual(digest, signatureBuffer)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }

  const event = JSON.parse(body);
  const eventName = event.meta.event_name;
  const customData = event.meta.custom_data;
  const userId = customData?.user_id;

  if (!userId) {
    return NextResponse.json({ received: true });
  }

  const { firestore } = initializeFirebase();
  const userRef = doc(firestore, 'users', userId);

  try {
    switch (eventName) {
      case 'order_created':
      case 'subscription_created':
      case 'subscription_updated':
        await updateDoc(userRef, {
          accessLevel: 'pro',
          updatedAt: serverTimestamp(),
          lemonSqueezyCustomerId: event.data.attributes.customer_id,
        });
        
        // Record details
        if (eventName.includes('subscription')) {
          const subId = event.data.id;
          const subRef = doc(firestore, 'users', userId, 'subscriptions', subId);
          await setDoc(subRef, {
            id: subId,
            userId,
            lemonSqueezySubscriptionId: subId,
            status: event.data.attributes.status,
            updatedAt: serverTimestamp(),
            createdAt: serverTimestamp(),
          }, { merge: true });
        }
        break;

      case 'subscription_cancelled':
      case 'subscription_expired':
        await updateDoc(userRef, {
          accessLevel: 'free',
          updatedAt: serverTimestamp(),
        });
        break;
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Lemon Squeezy Webhook Error:', error.message);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}


import { NextRequest, NextResponse } from 'next/server';
import { initializeFirebase } from '@/firebase';
import { 
  collection, 
  query, 
  where, 
  getDocs, 
  doc, 
  updateDoc, 
  serverTimestamp 
} from 'firebase/firestore';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');
  
  // Security check for the webhook secret
  if (secret !== process.env.PAYHIP_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const type = formData.get('type');
    const email = formData.get('email')?.toString();

    // Payhip sends 'paid' event for successful transactions
    if (type !== 'paid' || !email) {
      return NextResponse.json({ received: true });
    }

    const { firestore } = initializeFirebase();
    const usersRef = collection(firestore, 'users');
    const q = query(usersRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.warn(`Payhip Webhook: No user found for email ${email}`);
      return NextResponse.json({ received: true });
    }

    // Update all matching users (usually just one)
    const updatePromises = querySnapshot.docs.map((userDoc) => {
      const userRef = doc(firestore, 'users', userDoc.id);
      return updateDoc(userRef, {
        accessLevel: 'ltd',
        isLifetime: true,
        plan: 'lifetime',
        updatedAt: serverTimestamp(),
        payhipTransactionId: formData.get('transaction_id'),
      });
    });

    await Promise.all(updatePromises);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Payhip Webhook Error:', error.message);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}

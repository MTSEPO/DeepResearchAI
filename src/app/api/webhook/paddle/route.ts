
import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ message: 'Paddle webhooks are no longer supported. Please use /api/webhook/lemonsqueezy' }, { status: 410 });
}

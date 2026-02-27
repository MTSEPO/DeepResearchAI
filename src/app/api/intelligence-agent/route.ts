import { competitiveIntelligenceAgent } from '@/ai/flows/competitive-intelligence-agent';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';
export const maxDuration = 10;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = await competitiveIntelligenceAgent(body);
    return NextResponse.json(result);
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: error.message || 'Agent analysis failed' }, { status: 500 });
  }
}

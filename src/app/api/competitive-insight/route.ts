import { competitiveInsightGeneration } from '@/ai/flows/competitive-insight-generation';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';
export const maxDuration = 10;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = await competitiveInsightGeneration(body);
    return NextResponse.json(result);
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: error.message || 'Insight generation failed' }, { status: 500 });
  }
}

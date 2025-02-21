import openai from '@/lib/openai';
import { questionRequest } from '@/lib/questionRequests';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await openai.chat.completions.create(questionRequest);
    return NextResponse.json(JSON.parse(response.choices[0].message?.content || '{}'));
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

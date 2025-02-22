import { NextResponse } from 'next/server';
import mockedQuestions from './mocks/mockedQuestions.json';

export async function GET() {
  try {
    // const response = await openai.chat.completions.create(questionRequest);
    // return NextResponse.json(JSON.parse(response.choices[0].message?.content || '{}'));
    return NextResponse.json(mockedQuestions);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

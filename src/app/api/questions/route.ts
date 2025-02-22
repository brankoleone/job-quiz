import { NextResponse } from 'next/server';
import mockedQuestions from './mocks/mockedQuestions.json';

export async function POST(request: Request) {
  try {
    const { numQuestions, numChoices } = await request.json();

    // You can use the parameters numQuestions, numChoices, and devLevel here
    // For now, we will just return the mockedQuestions as an example
    console.log({ numQuestions, numChoices });

    // const questionRequest = getQuestionRequest(numQuestions, numChoices);
    // console.log(questionRequest);
    // const response = await openai.chat.completions.create(questionRequest);
    // return NextResponse.json(JSON.parse(response.choices[0].message?.content || '{}'));

    return NextResponse.json(mockedQuestions);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

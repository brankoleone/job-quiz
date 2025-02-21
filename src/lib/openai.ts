import OpenAI from 'openai';

// Ensure your OpenAI API key is set in your environment variables.
// For example, add this line to your .env file: OPENAI_API_KEY=your_api_key
if (!process.env.OPENAI_API_KEY) {
  throw new Error('Please set your OpenAI API key in the environment variables.');
}
// Ensure your OpenAI organization ID is set in your environment variables.
// For example, add this line to your .env file: OPENAI_ORG_ID=your_org_id
else if (!process.env.OPENAI_ORG_ID) {
  throw new Error('Please set your OpenAI organization ID in the environment variables.');
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORG_ID,
});

export default openai;

export const models = {
  GPT_4o: 'gpt-4o',
  CHATGPT_4o_LATEST: 'chatgpt-4o-latest',
  GPT_4o_MINI: 'gpt-4o-mini',
  o1: 'o1',
  o1_MINI: 'o1-mini',
  o3_MINI: 'o3-mini',
  o1_PREVIEW: 'o1-preview',
  GPT_4o_REALTIME_PREVIEW: 'gpt-4o-realtime-preview',
  GPT_4o_MINI_REALTIME_PREVIEW: 'gpt-4o-mini-realtime-preview',
  GPT_4o_AUDIO_PREVIEW: 'gpt-4o-audio-preview',
} as const;

export type ModelKeys = keyof typeof models;
export type ModelValues = (typeof models)[ModelKeys];

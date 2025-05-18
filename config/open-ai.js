import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.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,
});

const openai = new OpenAIApi(configuration);

export default openai;

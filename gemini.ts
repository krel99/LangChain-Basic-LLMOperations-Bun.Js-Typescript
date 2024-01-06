// bun gemini.ts
// install Better Comments extension for VSCode if you want to see the comments in colors properly
// remove unhighlighted comments to run script of your choice
// make sure you are in the available regions if you are EU: https://ai.google.dev/available_regions
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import basicInvocation from "./functions/basicInvocation";

// * environment variables
// save your Google Generative Language API key in .env file as GEMINI=your_api_key
// Bun runtime will automatically go through .env .env.production .env.development .env.local
const GEMINI = process.env.GEMINI;

if (!GEMINI) {
  throw new Error("OPENAI environment variable is not set");
}

const chatModel = new ChatGoogleGenerativeAI({ apiKey: GEMINI });

// * Basic invocation
basicInvocation(chatModel, "What is LangSmith? Explain in 1 sentence.");

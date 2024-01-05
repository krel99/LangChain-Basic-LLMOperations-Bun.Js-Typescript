// bun openai.ts
// install Better Comments extension for VSCode if you want to see the comments in colors properly
// remove unhighlighted comments to run script of your choice
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import basicInvocation from "./functions/openAI/basicInvocation";
import basicTemplateInvocation from "./functions/openAI/basicTemplateInvocation";
import basicTemplateWithParser from "./functions/openAI/basicTemplateWithParser";
import retrievalWithCheerio from "./functions/openAI/retrievalWithCheerio";

// * environment variables
// save your OpenAI API key in .env file as OPENAI=your_api_key
// Bun runtime will automatically go through .env .env.production .env.development .env.local
const OPEN_AI_KEY = process.env.OPENAI;

if (!OPEN_AI_KEY) {
  throw new Error("OPENAI environment variable is not set");
}

const chatModel = new ChatOpenAI({ openAIApiKey: OPEN_AI_KEY });

// * Basic invocation
// basicInvocation(chatModel, "What is LangSmith? Explain in 1 sentence.");

// * Basic template invocation
// * pipe is used to connect data streams and provide data as it becomes available
// basicTemplateInvocation(chatModel, "What is LangSmith? Explain in 1 sentence.");

// * Basic template invocation with parser
// basicTemplateWithParser(chatModel, "What is LangSmith?");

// * Retrieval with Cheerio
// retrievalWithCheerio(chatModel, "What is LangSmith?", OPEN_AI_KEY);

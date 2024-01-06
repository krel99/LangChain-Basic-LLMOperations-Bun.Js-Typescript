import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatOpenAI } from "langchain/chat_models/openai";

export type anyChatModel = ChatOpenAI | ChatGoogleGenerativeAI;

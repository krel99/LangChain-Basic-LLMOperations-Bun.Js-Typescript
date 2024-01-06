import { ChatOpenAI } from "@langchain/openai";
import { anyChatModel } from "../types/chatModels.t";
import color from "colors";
color.enable();

export default async (chatModel: anyChatModel, question: string) => {
  const basicInvocation = await chatModel.invoke(question);
  console.log(`${basicInvocation}`.bgCyan.red);
};

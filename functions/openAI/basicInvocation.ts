import { ChatOpenAI } from "@langchain/openai";
import color from "colors";
color.enable();

export default async (chatModel: ChatOpenAI, question: string) => {
  const basicInvocation = await chatModel.invoke(question);
  console.log(`${basicInvocation}`.bgCyan.red);
};

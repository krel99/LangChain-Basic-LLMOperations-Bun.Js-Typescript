import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import color from "colors";
color.enable();

export default async (chatModel: ChatOpenAI, question: string) => {
  const prompt = ChatPromptTemplate.fromMessages([
    ["system", "You are a world class technical documentation writer."],
    ["user", "{input}"],
  ]);

  const chain = prompt.pipe(chatModel);

  const basicTemplateInvocation = await chain.invoke({
    input: question,
  });

  console.log(`${basicTemplateInvocation.content}`.bgMagenta);
};

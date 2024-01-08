import { PromptTemplate } from "langchain/prompts";

const standaloneQuestionTemplate = `Convert the text to a standalone question. 
question: {question} 
standalone question:`;

const standaloneQuestionPrompt: PromptTemplate = PromptTemplate.fromTemplate(standaloneQuestionTemplate);

export default standaloneQuestionPrompt;

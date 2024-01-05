import { ChatOpenAI } from "@langchain/openai";
import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "@langchain/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { createRetrievalChain } from "langchain/chains/retrieval";

export default async (chatModel: ChatOpenAI, question: string, OPEN_AI_KEY: string) => {
  // Retrieval with Cheerio
  const loader = new CheerioWebBaseLoader("https://docs.smith.langchain.com/overview");
  const splitter = new RecursiveCharacterTextSplitter();
  const embeddings = new OpenAIEmbeddings({ openAIApiKey: OPEN_AI_KEY });

  const docs = await loader.load();
  const splitDocs = await splitter.splitDocuments(docs);
  const vectorstore = await MemoryVectorStore.fromDocuments(splitDocs, embeddings);

  const prompt = ChatPromptTemplate.fromTemplate(`Answer the following question based only on the provided context:

<context>
{context}
</context>

Question: {input}`);

  const documentChain = await createStuffDocumentsChain({
    llm: chatModel,
    prompt,
  });

  const retriever = vectorstore.asRetriever();

  const retrievalChain = await createRetrievalChain({
    combineDocsChain: documentChain,
    retriever,
  });

  const result = await retrievalChain.invoke({
    input: "what is LangSmith?",
  });

  console.log(`${result.answer}`.bgCyan.red);
};

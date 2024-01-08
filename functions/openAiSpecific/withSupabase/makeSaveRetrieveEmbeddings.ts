// bun functions/openAiSpecific/withSupabase/makeSaveRetrieveEmbeddings.ts
//
// this shows how to prepare database on Supabase's side: https://js.langchain.com/docs/integrations/vectorstores/supabase/
//
import { OpenAIEmbeddings } from "@langchain/openai";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import color from "colors";
color.enable();

const OPEN_AI_KEY = process.env.OPENAI;
const SUPABASE_PROJECT_URL = process.env.SUPABASE_PROJECT_URL;
const SUPABASE_PROJECT_API = process.env.SUPABASE_PROJECT_API;

if (!OPEN_AI_KEY || !SUPABASE_PROJECT_URL || !SUPABASE_PROJECT_API) {
  throw new Error("An environment variable is not set");
}

const model = new OpenAIEmbeddings({ openAIApiKey: OPEN_AI_KEY, batchSize: 500, stripNewLines: true, maxRetries: 3 });
const client = createClient(SUPABASE_PROJECT_URL, SUPABASE_PROJECT_API);

const query = "What would be a good company name for a company that makes colorful socks?";
const potentialAnswersArray = [
  "Sunny Days Apparel - A bright choice for every wardrobe!", // Inaccurate
  "Colorful Steps - Walk in a rainbow of comfort!", // Borderline Relevant
  "Sock Spectrum - Weaving creativity and color into every step you take!", // Exact Answer
];

const vectorsQuestion = await model.embedQuery(query);
const vectorsInformation = await model.embedDocuments(potentialAnswersArray);
console.log(`[Success]`.green + ` Embeddings created. Saving them to Supabase...`);

// save embeddings to Supabase

const vectorStore = new SupabaseVectorStore(model, {
  client,
  tableName: "test",
});

// const documents = [
//   {
//     pageContent: potentialAnswersArray[0],
//     metadata: { id: 1 },
//   },
//   {
//     pageContent: potentialAnswersArray[1],
//     metadata: { custom: "anything goes 'ere" },
//   },
//   {
//     pageContent: potentialAnswersArray[2],
//     metadata: { custom: "anything goes 'ere" },
//   },
// ];

// await vectorStore.addVectors(vectorsInformation, documents);

console.log(`[Success]`.green + ` Embeddings saved to Supabase. `);

const retrieved = await vectorStore.similaritySearchVectorWithScore(vectorsQuestion, 1);
// const retrieved = await vectorStore.similaritySearch(query, 1);

console.log(`[Success]`.green + ` Retrieved: `);
console.log(retrieved);

# Using LangChain For Large Language Models Integration With Bun.Js

This is a repository of basic building blocks for integrating various Large Language Models in apps.

## Features

### OpenAI

- Basic query against the default model
- Basic template query against the default model
- Template query with output parser
- Retrieval chain with access to website via Cheerio library

## Planned Features

- Ideally, support of all models
- Basic Discord bot, but it will most likely be a separate repository
- Interactive storyteller (game, sort of), also likely a separate repository
- Tracking token usage
- Price estimator component
- Supabase integration
- Firebase integration (for Gemini)
- Anything I will need repetitively in my line of freelancing

## Installation

## Prerequisities

You need either Bun.Js installed or Node with Typescript interpreter.
You need to create your .env file with relevant keys.

To install dependencies:

```bash
bun install
```

To run:

1. Uncomment a script in the index file (currently openai.ts)
2. Run the command below
```bash
bun run openai.ts
```
## Documentation

LangChain: https://js.langchain.com/docs/
Bun.Js: https://bun.sh/docs
Cheerio: https://cheerio.js.org/docs/

## Licensing

Copy everything as you see fit. A lot of current functions are from the Quickstart guide.

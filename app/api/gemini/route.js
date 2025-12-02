import { streamText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY, // Your real API key
});

export const runtime = "edge";

const KNOWLEDGE = `
You are an AI support agent for Intercom SIM Cards UK.
Answer only about:
- Domestic SIM
- Commercial SIM
- Gate SIM
- Pricing
- Activation / Cancel process
- Support steps
If the user asks outside this, politely refuse.
`;

export async function POST(req) {
  const { messages } = await req.json();

  console.log(messages , "check receive")

  const lastMessage = messages[messages.length - 1]?.content || "";

  const prompt = `
${KNOWLEDGE}

User: ${lastMessage}
AI:
`;

  const result = await streamText({
    model: google("gemini-1.5-flash"),
    prompt,
  });

  return result.toAIStreamResponse();
}

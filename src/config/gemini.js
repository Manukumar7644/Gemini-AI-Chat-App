import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "API KEY HERE",
});

async function runChat(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });

  return response.text;
}

export default runChat;

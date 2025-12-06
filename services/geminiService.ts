import { GoogleGenAI } from "@google/genai";

// Initialize the client with the API key from environment variables
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Sends a text prompt to the Gemini 2.5 Flash model and returns the response.
 */
export const sendMessageToGemini = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    // Access the text property directly as per SDK guidelines
    return response.text || "I couldn't generate a text response.";
  } catch (error) {
    console.error("Gemini Service Error:", error);
    throw new Error("Failed to communicate with Gemini.");
  }
};
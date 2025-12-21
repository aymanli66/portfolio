
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async sendMessage(history: Message[], message: string): Promise<string> {
    try {
      const chat = this.ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are Ayman's Studio Assistant. Ayman is a high-end, world-class premium photographer known for minimalist, moody, and sophisticated imagery. 
          Your tone should be professional, elegant, sophisticated, and helpful. 
          You can answer questions about Ayman's style (minimalist, portraiture, high-fashion), his availability (you should suggest contacting through the form), and his process (he works exclusively with natural light and high-end studio setups).
          Keep responses concise and refined. Do not use emojis excessively.`,
        },
      });

      const response = await chat.sendMessage({ message });
      return response.text || "I apologize, I am unable to process your request at the moment.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I'm having trouble connecting to the studio server. Please try again shortly.";
    }
  }
}

export const geminiService = new GeminiService();

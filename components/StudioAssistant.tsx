
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { Message } from '../types';

const StudioAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Welcome to Ayman's Studio. I am the digital concierge. How may I assist you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await geminiService.sendMessage(messages, input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <section id="studio" className="py-32 px-6 md:px-12 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Studio Concierge</h2>
          <p className="text-gray-400 mb-8 leading-relaxed max-w-lg">
            Experience our personalized AI assistant. Ask about Ayman's methodology, booking availability, or discuss a creative concept you have in mind.
          </p>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-px bg-white/30" />
            <span className="text-[10px] uppercase tracking-widest text-gray-500">AI Powered Interface</span>
          </div>
        </div>

        <div className="bg-black/40 border border-white/5 p-8 rounded-sm h-[500px] flex flex-col backdrop-blur-sm">
          <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-6 mb-6 scrollbar-hide">
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] text-sm leading-relaxed p-4 rounded-sm ${
                  msg.role === 'user' 
                    ? 'bg-white/10 text-white' 
                    : 'text-gray-400 border border-white/5'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="space-x-1 flex p-4 text-gray-500">
                  <span className="animate-bounce">.</span>
                  <span className="animate-bounce delay-100">.</span>
                  <span className="animate-bounce delay-200">.</span>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-4 border-t border-white/5 pt-6">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your inquiry..."
              className="bg-transparent border-none focus:ring-0 text-sm flex-1 placeholder:text-gray-600"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="text-[10px] uppercase tracking-widest text-white hover:text-gray-400 transition-colors disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioAssistant;

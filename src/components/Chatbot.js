"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Bot, RotateCw, Minus } from 'lucide-react';
import Link from 'next/link';
import searchData from '../../search-data.json';

// --- Search Function ---
const searchWebsite = (query) => {
    const queryWords = query.toLowerCase().split(/\s+/);
    let bestMatch = { score: 0, result: null };

    searchData.forEach(item => {
        let currentScore = 0;
        const contentWords = item.content.toLowerCase();
        const keywordString = item.keywords.join(" ").toLowerCase();

        queryWords.forEach(word => {
            if (contentWords.includes(word)) { currentScore++; }
            if (keywordString.includes(word)) { currentScore += 2; }
        });

        if (currentScore > bestMatch.score) {
            bestMatch = { score: currentScore, result: item };
        }
    });
    return bestMatch.score > 1 ? bestMatch.result : null;
};

// --- Bot's Brain ---
const getBotResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
        return { text: "Hello! I am Chanakya, your financial assistant. How can I help you today?" };
    }
    const searchResult = searchWebsite(message);
    if (searchResult) {
        return { text: `I found some information about that on our ${searchResult.pageName} page.`, link: { url: searchResult.pageUrl, text: `Go to ${searchResult.pageName}` } };
    }
    return { text: "I'm sorry, I'm not sure how to answer that. Please try rephrasing your question or visit our FAQs page." };
};

// --- Suggestion Chips ---
const suggestions = [
    "What is an IPO?",
    "How to open an account?",
    "Tell me about Mutual Funds"
];

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const chatEndRef = useRef(null);
    const initialMessage = { sender: 'bot', text: "Hello! I am Chanakya, your financial guide. You can ask me a question or choose a suggestion below." };

    useEffect(() => {
        if (isOpen) { setMessages([initialMessage]); }
    }, [isOpen]);
    
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleRestart = () => {
        setMessages([initialMessage]);
    };

    const handleSuggestionClick = (suggestion) => {
        setMessages(prev => [...prev, { sender: 'user', text: suggestion }]);
        setTimeout(() => {
            const botResponse = getBotResponse(suggestion);
            setMessages(prev => [...prev, { sender: 'bot', ...botResponse }]);
        }, 1000);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        const userMessage = inputValue.trim();
        if (!userMessage) return;

        setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
        setInputValue('');

        setTimeout(() => {
            const botResponse = getBotResponse(userMessage);
            setMessages(prev => [...prev, { sender: 'bot', ...botResponse }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
                    >
                        {/* --- Header with Restart, Minimize, and Close Buttons --- */}
                        <div className="bg-primary p-4 text-white flex items-center justify-between flex-shrink-0">
                            <div className="flex items-center"><Bot size={24} className="mr-3" /><h3 className="font-bold text-lg">Chanakya</h3></div>
                            <div className="flex items-center space-x-2">
                                <button onClick={handleRestart} className="hover:opacity-75" title="Restart Chat"><RotateCw className='text-blue-950' size={18} /></button>
                                <button onClick={() => setIsOpen(false)} className="hover:opacity-75" title="Minimize Chat"><Minus className='text-blue-950' size={20} /></button>
                                <button onClick={() => setIsOpen(false)} className="hover:opacity-75" title="Close Chat"><X className='text-blue-950' size={20} /></button>
                            </div>
                        </div>
                        
                        <div className="flex-1 p-4 overflow-y-auto bg-light-bg">
                            <div className="space-y-4">
                                {messages.map((msg, index) => (
                                    <div key={index}>
                                        <div className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
                                            <div className={`max-w-[80%] p-3 rounded-2xl ${msg.sender === 'bot' ? 'bg-slate-100 text-text-primary rounded-bl-none' : 'bg-slate-100 rounded-br-none'}`}>
                                                <p>{msg.text}</p>
                                                {msg.link && (<Link href={msg.link.url} className="mt-2 inline-block font-semibold text-accent bg-green-100 px-3 py-1 rounded-full text-sm">{msg.link.text}</Link>)}
                                            </div>
                                        </div>
                                        {/* Render suggestion chips after the first message */}
                                        {msg.sender === 'bot' && index === 0 && (
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {suggestions.map(suggestion => (
                                                    <button 
                                                        key={suggestion} 
                                                        onClick={() => handleSuggestionClick(suggestion)}
                                                        className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-primary hover:bg-gray-100"
                                                    >
                                                        {suggestion}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <div ref={chatEndRef} />
                            </div>
                        </div>

                        <form onSubmit={handleSendMessage} className="p-4 border-t bg-white flex-shrink-0">
                            <div className="relative">
                                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Ask a question..." className="w-full pr-12 py-2 px-4 rounded-full border-2 border-gray-200 focus:ring-secondary focus:border-secondary"/>
                                <button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-secondary text-white rounded-full hover:bg-primary transition-colors"><Send className='text-blue-950' size={20} /></button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(true)} className={`bg-primary text-white p-4 rounded-full shadow-xl transition-opacity duration-300 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
                <MessageSquare className='text-blue-950' size={32} />
            </motion.button>
        </div>
    );
};

export default Chatbot;
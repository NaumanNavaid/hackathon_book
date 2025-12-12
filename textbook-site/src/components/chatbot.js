// // src/components/Chatbot.js
// import React, { useState, useRef, useEffect } from 'react';
// import clsx from 'clsx';
// import './Chatbot.css';

// export default function Chatbot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { id: 1, text: "Hi! I'm your AI Tutor. Ask me about ROS 2 or SLAM!", sender: 'bot' }
//   ]);
//   const [input, setInput] = useState("");
//   const messagesEndRef = useRef(null);

//   useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

//   const handleSend = async () => {
//     if (!input.trim()) return;
//     const userMsg = { id: Date.now(), text: input, sender: 'user' };
//     setMessages(prev => [...prev, userMsg]);
//     setInput("");

//     // 1. Try Python Backend
//     try {
//       const response = await fetch('http://localhost:8000/chat', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message: userMsg.text }),
//       });
//       const data = await response.json();
//       setMessages(prev => [...prev, { id: Date.now()+1, text: data.reply, sender: 'bot' }]);
//     } catch (e) {
//       // 2. Fallback if Python is down (Hackathon Saver!)
//       setTimeout(() => {
//         let reply = "I'm having trouble reaching my brain 🧠. But I know that ROS 2 uses nodes and topics!";
//         if(userMsg.text.toLowerCase().includes('slam')) reply = "SLAM (Simultaneous Localization and Mapping) lets robots map unknown areas.";
//         setMessages(prev => [...prev, { id: Date.now()+1, text: reply, sender: 'bot' }]);
//       }, 1000);
//     }
//   };

//   return (
//     <div className="chatbot-container">
//       <button className={clsx("chatbot-toggle", isOpen && "open")} onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? '✕' : '💬'}
//       </button>
//       <div className={clsx("chatbot-window", isOpen && "visible")}>
//         <div className="chatbot-header"><h3>AI Tutor 🧠</h3></div>
//         <div className="chatbot-messages">
//           {messages.map(m => (
//             <div key={m.id} className={clsx("message-bubble", m.sender)}>{m.text}</div>
//           ))}
//           <div ref={messagesEndRef} />
//         </div>
//         <div className="chatbot-input-area">
//           <input value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSend()} placeholder="Ask a question..." />
//           <button onClick={handleSend}>➤</button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import './Chatbot.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm your AI Tutor. Ask me about the book!", sender: 'bot' }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    try {
      // Try Python Backend
      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.text }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, { id: Date.now()+1, text: data.reply, sender: 'bot' }]);
    } catch (e) {
      // 🟢 FAIL-SAFE: If backend is down, give a smart fake answer
      setTimeout(() => {
        let reply = "I can help with that! Please check the 'Book' section for detailed chapters on this topic.";
        if(userMsg.text.toLowerCase().includes('ros')) reply = "ROS 2 uses Nodes and Topics to communicate. It's covered in Part II.";
        if(userMsg.text.toLowerCase().includes('slam')) reply = "SLAM stands for Simultaneous Localization and Mapping. Check Chapter 15.";
        setMessages(prev => [...prev, { id: Date.now()+1, text: reply, sender: 'bot' }]);
      }, 800);
    }
  };

  return (
    <div className="chatbot-container">
      <button className={clsx("chatbot-toggle", isOpen && "open")} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '💬'}
      </button>
      <div className={clsx("chatbot-window", isOpen && "visible")}>
        <div className="chatbot-header"><h3>AI Tutor 🧠</h3></div>
        <div className="chatbot-messages">
          {messages.map(m => (
            <div key={m.id} className={clsx("message-bubble", m.sender)}>{m.text}</div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="chatbot-input-area">
          <input value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSend()} placeholder="Ask a question..." />
          <button onClick={handleSend}>➤</button>
        </div>
      </div>
    </div>
  );
}
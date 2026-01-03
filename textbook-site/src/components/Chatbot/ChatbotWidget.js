import React, { useState, useRef, useEffect } from 'react';
import './ChatbotWidget.css';

const API_URL = 'https://wasay-ingestion.onrender.com';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m your textbook AI assistant. Ask me questions about your book!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedText, setSelectedText] = useState('');
  const [showSelectionPopup, setShowSelectionPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle text selection
  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      const text = selection?.toString().trim() || '';

      if (text.length > 0) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        setSelectedText(text);
        setPopupPosition({
          x: rect.left + rect.width / 2,
          y: rect.top - 50
        });
        setShowSelectionPopup(true);
      } else {
        setShowSelectionPopup(false);
      }
    };

    document.addEventListener('mouseup', handleSelection);
    document.addEventListener('touchend', handleSelection);

    return () => {
      document.removeEventListener('mouseup', handleSelection);
      document.removeEventListener('touchend', handleSelection);
    };
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    const userInput = input;
    setInput('');
    setIsLoading(true);

    try {
      if (selectedText) {
        const response = await fetch(`${API_URL}/chatbot/ask-selection`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            selected_text: selectedText,
            question: userInput
          }),
        });

        if (!response.ok) throw new Error('Failed to get response');

        const data = await response.json();

        setMessages(prev => [...prev, {
          role: 'assistant',
          content: data.answer,
          selectedTextPreview: data.selected_text_preview
        }]);

        setSelectedText('');
        setShowSelectionPopup(false);
      } else {
        const response = await fetch(`${API_URL}/chatbot/query`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            question: userInput,
            top_k: 5
          }),
        });

        if (!response.ok) throw new Error('Failed to get response');

        const data = await response.json();

        setMessages(prev => [...prev, {
          role: 'assistant',
          content: data.answer,
          sources: data.sources || [],
          retrievedCount: data.retrieved_chunk_count
        }]);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        className="chatbot-toggle-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chatbot"
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>AI Assistant</h3>
            <button
              className="chatbot-close-button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>

          {/* Selected Text Indicator */}
          {selectedText && (
            <div className="selected-text-indicator">
              <span className="indicator-icon">✂️</span>
              <span className="indicator-text">
                {selectedText.length > 50 ? selectedText.substring(0, 50) + '...' : selectedText}
              </span>
              <button
                className="clear-selection-button"
                onClick={() => {
                  setSelectedText('');
                  setShowSelectionPopup(false);
                }}
              >
                ✕
              </button>
            </div>
          )}

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chatbot-message ${message.role === 'user' ? 'user' : 'assistant'}`}
              >
                <div className="message-content">{message.content}</div>
                {message.sources && message.sources.length > 0 && (
                  <div className="message-sources">
                    <strong>Sources:</strong>
                    <ul>
                      {message.sources.map((source, idx) => (
                        <li key={idx}>
                          <a href={source.source_url} target="_blank" rel="noopener noreferrer">
                            📖 {source.chapter_section}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="chatbot-message assistant">
                <div className="message-content typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-area">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              rows={1}
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="send-button"
              aria-label="Send message"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Selection Popup */}
      {showSelectionPopup && !isOpen && (
        <div
          className="selection-popup"
          style={{
            left: `${popupPosition.x}px`,
            top: `${popupPosition.y}px`
          }}
        >
          <button
            className="ask-about-selection-button"
            onClick={() => {
              setIsOpen(true);
              setShowSelectionPopup(false);
            }}
          >
            <span>💬</span>
            <span>Ask about this</span>
          </button>
        </div>
      )}
    </>
  );
}
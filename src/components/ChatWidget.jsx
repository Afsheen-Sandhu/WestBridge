import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const WHATSAPP_URL =
  'https://wa.me/16043657605?text=' +
  encodeURIComponent('Hi WestBridge! I saw your website and would like to discuss a project.');

const QUICK_PROMPTS = [
  'What services do you offer?',
  'Show me your portfolio',
  'How do I get started?',
];

const WELCOME =
  "Hi! I'm the WestBridge assistant. Ask about our services, portfolio, or how to start a project.";

const ChatWidget = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ role: 'assistant', content: WELCOME }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open && listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, open, loading]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open]);

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setError(null);
    const userMsg = { role: 'user', content: trimmed };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const history = nextMessages
        .filter((m) => m.role === 'user' || m.role === 'assistant')
        .slice(-12);

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to get a response');
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      setError(err.message);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            "I'm having trouble connecting right now. Please reach us via WhatsApp or our contact page.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const panelBg = isDark ? '#0a0a0a' : '#ffffff';
  const border = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
  const muted = isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)';
  const userBubble = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)';
  const botBubble = isDark ? 'rgba(0,102,255,0.15)' : 'rgba(0,102,255,0.08)';

  return (
    <div className="fixed bottom-8 left-8 z-[9998] flex flex-col items-start gap-3">
      {open && (
        <div
          role="dialog"
          aria-label="WestBridge chat assistant"
          className="flex flex-col overflow-hidden shadow-2xl"
          style={{
            width: 'min(380px, calc(100vw - 48px))',
            height: 'min(520px, calc(100vh - 120px))',
            background: panelBg,
            border: `1px solid ${border}`,
            borderRadius: '16px',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 shrink-0"
            style={{ borderBottom: `1px solid ${border}` }}
          >
            <div>
              <p
                className="text-sm font-semibold tracking-tight"
                style={{ color: isDark ? '#fff' : '#000' }}
              >
                WestBridge Assistant
              </p>
              <p className="text-[11px]" style={{ color: muted }}>
                Ask about services &amp; portfolio
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="p-1.5 rounded-full transition-colors hover:opacity-70"
              style={{ color: isDark ? '#fff' : '#000' }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={listRef}
            className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className="max-w-[85%] px-3 py-2 text-sm leading-relaxed rounded-2xl"
                  style={{
                    background: msg.role === 'user' ? userBubble : botBubble,
                    color: isDark ? '#fff' : '#000',
                    borderBottomRightRadius: msg.role === 'user' ? '4px' : '16px',
                    borderBottomLeftRadius: msg.role === 'assistant' ? '4px' : '16px',
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-2xl text-sm"
                  style={{ background: botBubble, color: muted }}
                >
                  <Loader2 size={14} className="animate-spin" />
                  Thinking…
                </div>
              </div>
            )}
          </div>

          {/* Quick prompts */}
          {messages.length <= 1 && !loading && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="text-[11px] px-2.5 py-1 rounded-full transition-opacity hover:opacity-80"
                  style={{
                    border: `1px solid ${border}`,
                    color: isDark ? '#fff' : '#000',
                  }}
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Handoff links */}
          <div
            className="px-4 py-2 flex gap-3 text-[11px] shrink-0"
            style={{ borderTop: `1px solid ${border}`, color: muted }}
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
              WhatsApp
            </a>
            <Link to="/contact" className="hover:underline" onClick={() => setOpen(false)}>
              Contact form
            </Link>
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-3 py-3 shrink-0"
            style={{ borderTop: `1px solid ${border}` }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              maxLength={500}
              disabled={loading}
              className="flex-1 text-sm px-3 py-2 rounded-full outline-none"
              style={{
                background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                border: `1px solid ${border}`,
                color: isDark ? '#fff' : '#000',
              }}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="p-2.5 rounded-full transition-all disabled:opacity-40"
              style={{
                background: isDark ? '#fff' : '#000',
                color: isDark ? '#000' : '#fff',
              }}
            >
              <Send size={16} />
            </button>
          </form>

          {error && (
            <p className="px-4 pb-2 text-[11px] text-red-400">{error}</p>
          )}
        </div>
      )}

      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat assistant'}
        aria-expanded={open}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-500 hover:scale-110 active:scale-95"
        style={{
          background: 'var(--text-color)',
          color: 'var(--bg-color)',
        }}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
        <span className="sr-only">Chat with WestBridge</span>
      </button>
    </div>
  );
};

export default ChatWidget;

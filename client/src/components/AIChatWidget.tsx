import { useState, useRef, useEffect, useCallback, type KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { nanoid } from "nanoid";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

function getSessionId(): string {
  const key = "blueally-chat-session";
  let sessionId = sessionStorage.getItem(key);
  if (!sessionId) {
    sessionId = nanoid();
    sessionStorage.setItem(key, sessionId);
  }
  return sessionId;
}

const QUICK_ACTIONS = [
  "Tell me about your framework",
  "What industries do you serve?",
  "How do I get started?",
];

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [isUnavailable, setIsUnavailable] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isStreaming) return;

      const userMessage: ChatMessage = {
        id: nanoid(),
        role: "user",
        content: text.trim(),
      };

      const assistantMessage: ChatMessage = {
        id: nanoid(),
        role: "assistant",
        content: "",
      };

      setMessages((prev) => [...prev, userMessage, assistantMessage]);
      setInput("");
      setIsStreaming(true);
      setIsUnavailable(false);

      const controller = new AbortController();
      abortControllerRef.current = controller;

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: text.trim(),
            sessionId: getSessionId(),
          }),
          signal: controller.signal,
        });

        if (response.status === 503) {
          setIsUnavailable(true);
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantMessage.id
                ? {
                    ...msg,
                    content:
                      "AI assistant is currently unavailable. Contact us at (800) 886-5369 or ai@blueally.com for assistance.",
                  }
                : msg
            )
          );
          setIsStreaming(false);
          return;
        }

        if (response.status === 429) {
          const data = await response.json();
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantMessage.id
                ? {
                    ...msg,
                    content:
                      data.error ||
                      "Rate limit reached. Please try again later or contact us at (800) 886-5369.",
                  }
                : msg
            )
          );
          setIsStreaming(false);
          return;
        }

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const reader = response.body?.getReader();
        if (!reader) throw new Error("No response body");

        const decoder = new TextDecoder();
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");

          // Keep the last potentially incomplete line in the buffer
          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data: ")) continue;

            const data = trimmed.slice(6);

            if (data === "[DONE]") {
              break;
            }

            if (data === "[ERROR]") {
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === assistantMessage.id
                    ? {
                        ...msg,
                        content:
                          msg.content ||
                          "Sorry, an error occurred. Please try again or contact us at (800) 886-5369.",
                      }
                    : msg
                )
              );
              break;
            }

            // Append the text chunk to the assistant message
            setMessages((prev) =>
              prev.map((msg) =>
                msg.id === assistantMessage.id
                  ? { ...msg, content: msg.content + data }
                  : msg
              )
            );
          }
        }
      } catch (error) {
        if ((error as Error).name === "AbortError") return;

        console.error("Chat error:", error);
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMessage.id
              ? {
                  ...msg,
                  content:
                    msg.content ||
                    "Sorry, something went wrong. Please try again or reach out to us at (800) 886-5369.",
                }
              : msg
          )
        );
      } finally {
        setIsStreaming(false);
        abortControllerRef.current = null;
      }
    },
    [isStreaming]
  );

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const handleClose = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="w-[400px] max-sm:w-[calc(100vw-2rem)] max-sm:fixed max-sm:left-4 max-sm:right-4 max-sm:bottom-6 h-[550px] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-[#1E3A5F] flex flex-col bg-[#0A1628]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#003B73] shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#00A3E0]/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-[#00A3E0]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white leading-tight">
                    BlueAlly AI Assistant
                  </h3>
                  <p className="text-xs text-[#00A3E0]">
                    {isStreaming ? "Thinking..." : "Online"}
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scrollbar-thin">
              {messages.length === 0 && !isUnavailable && (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#00A3E0]/10 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-[#00A3E0]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#F5F5F5] mb-1">
                      How can I help you today?
                    </p>
                    <p className="text-xs text-[#999999]">
                      Ask about our AI services, framework, or how to get started.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 w-full max-w-[280px]">
                    {QUICK_ACTIONS.map((action) => (
                      <button
                        key={action}
                        onClick={() => sendMessage(action)}
                        disabled={isStreaming}
                        className="text-xs text-left px-3 py-2 rounded-lg bg-[#0F2240] border border-[#1E3A5F] text-[#00A3E0] hover:bg-[#1E3A5F] hover:border-[#00A3E0]/30 transition-colors disabled:opacity-50"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full bg-[#00A3E0]/20 flex items-center justify-center mr-2 mt-1 shrink-0">
                      <Bot className="w-3 h-3 text-[#00A3E0]" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap break-words ${
                      msg.role === "user"
                        ? "bg-[#00A3E0] text-white rounded-2xl rounded-br-sm"
                        : "bg-[#0F2240] text-[#F5F5F5] rounded-2xl rounded-bl-sm"
                    }`}
                  >
                    {msg.content ||
                      (msg.role === "assistant" && isStreaming ? (
                        <TypingIndicator />
                      ) : null)}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-6 h-6 rounded-full bg-[#003B73] flex items-center justify-center ml-2 mt-1 shrink-0">
                      <User className="w-3 h-3 text-[#F5F5F5]" />
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="px-3 py-3 bg-[#0F2240] border-t border-[#1E3A5F] shrink-0">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  disabled={isStreaming}
                  className="flex-1 bg-[#0A1628] border border-[#1E3A5F] rounded-xl px-3 py-2 text-sm text-[#F5F5F5] placeholder-[#999999] focus:outline-none focus:border-[#00A3E0] transition-colors disabled:opacity-50"
                  maxLength={2000}
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || isStreaming}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#00A3E0] text-white hover:bg-[#0090c7] transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-[#999999] mt-1.5 text-center">
                Powered by BlueAlly AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating toggle button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-[#00A3E0] text-white shadow-lg shadow-[#00A3E0]/25 flex items-center justify-center hover:bg-[#0090c7] transition-colors"
          aria-label="Open AI chat assistant"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 py-1 px-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

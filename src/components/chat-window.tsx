"use client";
import { useTodo } from "@/contexts/TodoContext";
import { CopilotChat } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import { Loader2, RotateCw, SendIcon, Square, Globe } from "lucide-react";
import { FC, useContext, useRef, useState } from "react";
import { Loader } from "./Loader";
import { ServerConfigsContext } from "@/providers/Providers";
import { motion } from "framer-motion";

export const ChatWindow: FC = () => {
  const { todos } = useTodo();
  const serverConfigsContext = useContext(ServerConfigsContext);
  const mcpApps = serverConfigsContext?.config || [];

  const handleBadgeClick = (serverName: string) => {
    setTimeout(() => {
      const textarea = document.querySelector('.copilotkit-chat-input textarea') as HTMLTextAreaElement;
      if (textarea) {
        textarea.value = `Check ${serverName} connection`;
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
        textarea.focus();
      }
    }, 100);
  };

  return (
    <div className="flex flex-col h-full pb-20">
      {/* Animated Welcome Bubble for CopilotChat initial message */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="relative w-fit max-w-xl mx-auto mt-6 mb-4 px-6 py-4 bg-gradient-to-br from-white/90 to-blue-100/80 rounded-3xl shadow-2xl border-l-4 border-blue-400/70 backdrop-blur-md"
        style={{ boxShadow: "0 8px 32px 0 rgba(80, 120, 255, 0.13)" }}
      >
        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 mb-2 drop-shadow-lg">
          Hi! I'm <span className="text-blue-600 bg-none">Sara</span>, your smart assistant.
        </div>
        <div className="text-base text-gray-800 font-medium mb-1">I'm here to help you organize, manage, and simplify all your tasks using App Store applications.</div>
        <div className="text-base text-purple-700 font-semibold">What would you like to start with today?</div>
        {/* Triangle bubble centré */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-0 h-0" style={{ filter: 'drop-shadow(0 2px 6px rgba(80,120,255,0.13))' }}>
          <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,0 32,0 16,20" fill="url(#triangleGradient)" />
            <defs>
              <linearGradient id="triangleGradient" x1="0" y1="0" x2="32" y2="20" gradientUnits="userSpaceOnUse">
                <stop stopColor="#60a5fa" />
                <stop offset="1" stopColor="#a23cdc" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>
      <CopilotChat
        className="flex-1 flex flex-col"
        instructions={`Always use the App Store to complete the task. You will be provided with a list of App Store applications. Use the appropriate application to complete the task.\nTo perform any actions over the todo task use the following data for manipulation ${JSON.stringify(todos)}`}
        labels={{
          title: "To-do Assistant",
          initial: `Hi! I'm Sara, your smart assistant.\nI'm here to help you organize, manage, and simplify all your tasks using App Store applications.\nWhat would you like to start with today?`,
          placeholder: "Type your message here...",
          regenerateResponse: "Try another response",
        }}
        icons={{
          sendIcon: (
            <SendIcon className="w-4 h-4 hover:scale-110 transition-transform" />
          ),
          activityIcon: (
            <Loader
              texts={[
                "Thinking...",
                "Analyzing Your Query...",
                "Taking Action...",
              ]}
            />
          ),
          spinnerIcon: <Loader2 className="w-4 h-4 animate-spin" />,
          stopIcon: (
            <Square className="w-4 h-4 hover:text-red-500 transition-colors" />
          ),
          regenerateIcon: (
            <RotateCw className="w-4 h-4 hover:rotate-180 transition-transform duration-300" />
          ),
        }}
      />
      {mcpApps.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="sticky top-0 z-20 w-full bg-white/80 backdrop-blur-md px-6 py-4 flex flex-wrap gap-6 items-center justify-center shadow-2xl rounded-2xl border border-blue-100 copilotkit-mcp-bar mb-6"
          style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
        >
          {mcpApps.map((app, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.08, boxShadow: "0 4px 24px 0 rgba(80, 120, 255, 0.25)" }}
              className="flex items-center gap-2 text-sm text-gray-900 bg-gradient-to-br from-blue-100/80 to-white/80 rounded-xl px-3 py-1 shadow-lg border border-blue-200 cursor-pointer transition-all"
              title={app.endpoint}
              onClick={() => handleBadgeClick(app.serverName)}
            >
              <motion.span
                whileHover={{ rotate: 20 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Globe className="w-5 h-5 text-blue-500 drop-shadow-lg" />
              </motion.span>
              <span className="font-semibold tracking-wide truncate max-w-[100px]">{app.serverName}</span>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

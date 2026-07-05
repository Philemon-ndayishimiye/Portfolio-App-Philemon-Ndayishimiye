"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send } from "lucide-react"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

const botResponses: Record<string, string[]> = {
  project: [
    "Philemon has built 4 major projects! His flagship is Rise Motive (risemotive.rw), a full-stack marketplace platform for Rwanda. He also built InzoziSchool, an E-commerce Platform, and a Road Traffic Law App.",
    "Check out Rise Motive at risemotive.rw — it's a full marketplace connecting clients with taskers and vendors across Rwanda!",
    "The InzoziSchool platform helps students find and transfer between schools. Built with React, TypeScript and PostgreSQL.",
  ],
  skill: [
    "Philemon is skilled in Python, Java, C, C++, Dart, and JavaScript. On the frameworks side, he works with React.js, Node.js, Flutter, Express, and Tailwind CSS.",
    "He has strong database skills with MongoDB, PostgreSQL, SQL, and Supabase. For security, he uses JWT and Helmet.",
    "He's proficient with AI tools like GitHub Copilot, Cursor, Claude, ChatGPT, Gemini, and many more!",
    "For deployment, he uses Vercel, Render, Railway, and Contabo VPS with CI/CD pipelines.",
  ],
  experience: [
    "Philemon has worked at 4 companies: Rise Motive (Software Developer), Solvit Africa (Frontend Intern), DynaSoft (Network and SOD), and Ishyiga (Java Intern).",
    "At Rise Motive, he built a full marketplace platform with React/TypeScript frontend and Node.js/Express/Prisma backend.",
    "At Solvit Africa, he developed applications with React and TypeScript while learning AI prompt engineering.",
  ],
  certification: [
    "Philemon holds 5 certifications: Cisco Networking Basics, Introduction to Cybersecurity (Cisco), Frontend Development (Solvit Africa), Software Development (MUYEX Academy), and AI/ML & Big Data Analysis.",
  ],
  contact: [
    "You can reach Philemon at philemonndayi@gmail.com or call +250 785 436 374. He's based in Kigali, Rwanda.",
    "Feel free to send him an email or connect on LinkedIn and GitHub!",
  ],
  default: [
    "Hi! I'm Philemon's portfolio assistant. Ask me about his projects, skills, experience, or certifications!",
    "Philemon is a Full-Stack Developer based in Kigali, Rwanda. He graduated with a BSc in Information Systems from University of Rwanda.",
    "Thanks for visiting! Feel free to explore the portfolio or ask me anything about Philemon's work.",
    "Philemon is open to new opportunities! Reach out via the contact section or email philemonndayi@gmail.com.",
  ],
}

function getBotResponse(input: string): string {
  const lower = input.toLowerCase()

  if (lower.includes("project") || lower.includes("work") || lower.includes("build") || lower.includes("portfolio")) {
    return botResponses.project[Math.floor(Math.random() * botResponses.project.length)]
  }
  if (lower.includes("skill") || lower.includes("tech") || lower.includes("language") || lower.includes("framework")) {
    return botResponses.skill[Math.floor(Math.random() * botResponses.skill.length)]
  }
  if (lower.includes("experience") || lower.includes("company") || lower.includes("job") || lower.includes("intern")) {
    return botResponses.experience[Math.floor(Math.random() * botResponses.experience.length)]
  }
  if (lower.includes("cert") || lower.includes("cisco") || lower.includes("ccna") || lower.includes("certificate")) {
    return botResponses.certification[Math.floor(Math.random() * botResponses.certification.length)]
  }
  if (lower.includes("contact") || lower.includes("email") || lower.includes("phone") || lower.includes("hire") || lower.includes("reach")) {
    return botResponses.contact[Math.floor(Math.random() * botResponses.contact.length)]
  }
  return botResponses.default[Math.floor(Math.random() * botResponses.default.length)]
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! 👋 I'm Philemon's portfolio assistant. Ask me about his projects, skills, experience, or certifications!",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    const userInput = inputValue
    setInputValue("")

    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: getBotResponse(userInput),
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 800)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] shadow-lg shadow-[#2563EB]/30 transition-all duration-300 hover:scale-105"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 shadow-2xl border-[#E5E7EB] animate-fade-in-up rounded-2xl overflow-hidden">
          <CardHeader className="bg-[#0F172A] text-white pb-3 pt-4">
            <CardTitle className="text-base flex items-center gap-2">
              <div className="p-1.5 bg-[#2563EB] rounded-lg">
                <MessageCircle className="h-4 w-4" />
              </div>
              Portfolio Assistant
              <div className="ml-auto flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-xs text-gray-400 font-normal">Online</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex flex-col" style={{ height: "380px" }}>
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F8FAFC]">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                      message.isBot
                        ? "bg-white text-[#1F2937] shadow-sm border border-[#E5E7EB] rounded-tl-md"
                        : "bg-[#2563EB] text-white rounded-tr-md"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-[#E5E7EB] bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask about skills, projects..."
                  className="flex-1 px-4 py-2.5 text-sm border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] bg-[#F8FAFC] transition-all"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl px-3"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}

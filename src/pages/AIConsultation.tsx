import Navbar from "@/components/Navbar";
import { Bot, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Message {
  role: "ai" | "user";
  content: string;
}

const initialMessages: Message[] = [
  {
    role: "ai",
    content: "مرحباً بك! أنا المساعد الطبي الذكي. يمكنني مساعدتك في التشخيص الأولي وتوجيهك للطبيب المناسب. ما هي الأعراض التي تعاني منها؟",
  },
];

const AIConsultation = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponses: Record<string, string> = {
        default: "شكراً لمشاركتي هذه المعلومات. بناءً على الأعراض التي وصفتها، أنصحك بالتواصل مع طبيب متخصص. هل تريدني أن أقترح عليك أطباء مناسبين؟",
      };

      const response: Message = {
        role: "ai",
        content: input.includes("صداع")
          ? "الصداع قد يكون له أسباب متعددة. هل يرافقه أعراض أخرى مثل الغثيان أو الحساسية للضوء؟ بناءً على إجابتك يمكنني توجيهك لطبيب أعصاب أو طبيب عام."
          : input.includes("حرارة") || input.includes("حمى")
          ? "ارتفاع الحرارة قد يشير لعدوى. منذ متى تعاني من هذا؟ هل هناك أعراض أخرى كالسعال أو آلام الجسم؟ أنصحك بمراجعة طبيب أسرة."
          : aiResponses.default,
      };

      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-16 flex flex-col">
        <div className="bg-gradient-primary text-primary-foreground py-6">
          <div className="container flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-display font-bold text-lg">المساعد الطبي الذكي</h1>
              <p className="text-sm opacity-80">تشخيص أولي وتوجيه للطبيب المناسب</p>
            </div>
          </div>
        </div>

        <div className="flex-1 container max-w-3xl py-6 flex flex-col">
          <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""} animate-fade-in`}>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                  msg.role === "ai" ? "bg-primary/10" : "bg-medical-blue-light"
                }`}>
                  {msg.role === "ai" ? <Bot className="w-5 h-5 text-primary" /> : <User className="w-5 h-5 text-medical-blue" />}
                </div>
                <div className={`max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed ${
                  msg.role === "ai"
                    ? "bg-card shadow-card border border-border/50 text-foreground"
                    : "bg-gradient-primary text-primary-foreground"
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <Input
              placeholder="اكتب أعراضك هنا..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSend()}
              className="h-12 rounded-xl text-base"
            />
            <Button onClick={handleSend} size="icon" className="h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground shrink-0">
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIConsultation;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Stethoscope } from "lucide-react";
import { useState } from "react";

const Register = () => {
  const [role, setRole] = useState<"patient" | "doctor">("patient");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-medical-teal-light via-background to-medical-blue-light p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-display text-2xl font-bold text-foreground">طبيبي</span>
          </Link>
          <h1 className="text-2xl font-display font-bold text-foreground mb-2">إنشاء حساب جديد</h1>
          <p className="text-muted-foreground">انضم إلينا واحصل على رعاية طبية مميزة</p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border/50">
          {/* Role Selector */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setRole("patient")}
              className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${
                role === "patient" ? "bg-gradient-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              مريض
            </button>
            <button
              onClick={() => setRole("doctor")}
              className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${
                role === "doctor" ? "bg-gradient-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              طبيب
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">الاسم الكامل</label>
              <Input placeholder="أدخل اسمك الكامل" className="h-11 rounded-xl" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">البريد الإلكتروني</label>
              <Input type="email" placeholder="email@example.com" className="h-11 rounded-xl" dir="ltr" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">كلمة المرور</label>
              <Input type="password" placeholder="••••••••" className="h-11 rounded-xl" dir="ltr" />
            </div>
            {role === "doctor" && (
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">التخصص الطبي</label>
                <Input placeholder="مثال: طب القلب" className="h-11 rounded-xl" />
              </div>
            )}

            <Button className="w-full h-11 bg-gradient-primary text-primary-foreground hover:opacity-90 rounded-xl">
              إنشاء الحساب
            </Button>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          لديك حساب بالفعل؟{" "}
          <Link to="/login" className="text-primary font-medium hover:underline">تسجيل الدخول</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

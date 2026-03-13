import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Stethoscope } from "lucide-react";

const Login = () => {
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
          <h1 className="text-2xl font-display font-bold text-foreground mb-2">مرحباً بعودتك</h1>
          <p className="text-muted-foreground">سجّل دخولك للوصول إلى حسابك</p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border/50">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">البريد الإلكتروني</label>
              <Input type="email" placeholder="email@example.com" className="h-11 rounded-xl" dir="ltr" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">كلمة المرور</label>
              <Input type="password" placeholder="••••••••" className="h-11 rounded-xl" dir="ltr" />
            </div>

            <Button className="w-full h-11 bg-gradient-primary text-primary-foreground hover:opacity-90 rounded-xl">
              تسجيل الدخول
            </Button>
          </div>

          {/* Quick Demo Access */}
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground text-center mb-3">وصول سريع (تجريبي)</p>
            <div className="grid grid-cols-3 gap-2">
              <Link to="/admin">
                <Button variant="outline" size="sm" className="w-full text-xs">المسؤول</Button>
              </Link>
              <Link to="/doctor">
                <Button variant="outline" size="sm" className="w-full text-xs">الطبيب</Button>
              </Link>
              <Link to="/patient">
                <Button variant="outline" size="sm" className="w-full text-xs">المريض</Button>
              </Link>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          ليس لديك حساب؟{" "}
          <Link to="/register" className="text-primary font-medium hover:underline">إنشاء حساب</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Stethoscope, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 glass-card border-b">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold text-foreground">i-Shifa <br />
            <pre className="text-sm">آي- شفا </pre>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">المميزات</a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">كيف يعمل</a>
          <a href="#doctors" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">الأطباء</a>
          <a href="#ai" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">الذكاء الاصطناعي</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {/* <Link to="/login"> */}
          <Link to="/">

            <Button variant="ghost" size="sm">تسجيل الدخول</Button>
          </Link>
          {/* <Link to="/register"> */}
          <Link to="/">

            <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90">إنشاء حساب</Button>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-t p-4 space-y-3 animate-fade-in">
          <a href="#features" className="block py-2 text-sm text-muted-foreground">المميزات</a>
          <a href="#how-it-works" className="block py-2 text-sm text-muted-foreground">كيف يعمل</a>
          <a href="#doctors" className="block py-2 text-sm text-muted-foreground">الأطباء</a>
          <div className="flex gap-2 pt-2">
            <Link to="/" className="flex-1">
              <Button variant="outline" className="w-full" size="sm">تسجيل الدخول</Button>
            </Link>
            <Link to="/" className="flex-1">
              <Button className="w-full bg-gradient-primary text-primary-foreground" size="sm">إنشاء حساب</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

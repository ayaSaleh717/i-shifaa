import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Stethoscope, ChevronLeft } from "lucide-react";

interface SidebarItem {
  icon: ReactNode;
  label: string;
  path: string;
}

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  items: SidebarItem[];
  role: "admin" | "doctor" | "patient";
}

const roleLabels = {
  admin: "المسؤول",
  doctor: "الطبيب",
  patient: "المريض",
};

const DashboardLayout = ({ children, title, items, role }: DashboardLayoutProps) => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-sidebar text-sidebar-foreground border-l border-sidebar-border hidden lg:flex flex-col">
        <div className="p-5 border-b border-sidebar-border">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Stethoscope className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <div className="font-display font-bold text-sm text-sidebar-foreground">طبيبي</div>
              <div className="text-xs text-sidebar-foreground/50">{roleLabels[role]}</div>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {items.map((item, i) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={i}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-sidebar-border">
          <Link
            to="/"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-sidebar-foreground/60 hover:bg-sidebar-accent transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            العودة للرئيسية
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-muted/30">
        <header className="h-16 bg-card border-b border-border flex items-center px-6">
          <h1 className="font-display font-bold text-lg text-foreground">{title}</h1>
        </header>
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;

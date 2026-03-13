import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import { LayoutDashboard, Stethoscope, CreditCard, User, FileText, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const sidebarItems = [
  { icon: <LayoutDashboard className="w-4 h-4" />, label: "الإحصائيات", path: "/patient" },
  { icon: <Bot className="w-4 h-4" />, label: "استشارة ذكية", path: "/ai-consultation" },
  { icon: <Stethoscope className="w-4 h-4" />, label: "استشاراتي", path: "/patient/consultations" },
  { icon: <CreditCard className="w-4 h-4" />, label: "الرصيد", path: "/patient/balance" },
  { icon: <FileText className="w-4 h-4" />, label: "السجل الطبي", path: "/patient/records" },
  { icon: <User className="w-4 h-4" />, label: "الملف الشخصي", path: "/patient/profile" },
];

const PatientDashboard = () => {
  return (
    <DashboardLayout title="لوحة تحكم المريض" items={sidebarItems} role="patient">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">
        <StatCard
          icon={<Stethoscope className="w-6 h-6 text-medical-teal" />}
          label="إجمالي الاستشارات"
          value="15"
          colorClass="bg-medical-teal-light"
        />
        <StatCard
          icon={<CreditCard className="w-6 h-6 text-medical-green" />}
          label="الرصيد المتاح"
          value="350 ر.س"
          colorClass="bg-medical-green-light"
        />
        <StatCard
          icon={<FileText className="w-6 h-6 text-medical-blue" />}
          label="التقارير الطبية"
          value="8"
          colorClass="bg-medical-blue-light"
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 mb-6">
        <h3 className="font-display font-bold text-foreground mb-4">إجراءات سريعة</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link to="/ai-consultation">
            <div className="p-4 rounded-xl bg-medical-teal-light hover:shadow-card transition-all text-center cursor-pointer group">
              <Bot className="w-8 h-8 text-medical-teal mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-bold text-foreground">استشارة ذكية</p>
              <p className="text-xs text-muted-foreground">تشخيص أولي بالذكاء الاصطناعي</p>
            </div>
          </Link>
          <Link to="/doctors">
            <div className="p-4 rounded-xl bg-medical-blue-light hover:shadow-card transition-all text-center cursor-pointer group">
              <Stethoscope className="w-8 h-8 text-medical-blue mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-bold text-foreground">حجز استشارة</p>
              <p className="text-xs text-muted-foreground">اختر طبيبك المفضل</p>
            </div>
          </Link>
          <div className="p-4 rounded-xl bg-medical-green-light hover:shadow-card transition-all text-center cursor-pointer group">
            <CreditCard className="w-8 h-8 text-medical-green mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <p className="text-sm font-bold text-foreground">شحن الرصيد</p>
            <p className="text-xs text-muted-foreground">أضف رصيداً لحسابك</p>
          </div>
        </div>
      </div>

      {/* Recent Consultations */}
      <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
        <h3 className="font-display font-bold text-foreground mb-4">آخر الاستشارات</h3>
        <div className="space-y-3">
          {[
            { doctor: "د. أحمد محمد", specialty: "طب القلب", date: "15 فبراير 2026", status: "مكتملة" },
            { doctor: "د. سارة العلي", specialty: "طب الأطفال", date: "10 فبراير 2026", status: "مكتملة" },
            { doctor: "د. فاطمة الزهراء", specialty: "الأمراض الجلدية", date: "5 فبراير 2026", status: "ملغاة" },
          ].map((c, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
              <div>
                <p className="text-sm font-medium text-foreground">{c.doctor}</p>
                <p className="text-xs text-muted-foreground">{c.specialty} • {c.date}</p>
              </div>
              <span className={`text-xs px-3 py-1 rounded-full ${
                c.status === "مكتملة" ? "bg-medical-green-light text-medical-green" : "bg-destructive/10 text-destructive"
              }`}>
                {c.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PatientDashboard;

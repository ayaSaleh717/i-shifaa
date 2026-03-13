import { Button } from "@/components/ui/button";
import { Video, Bot, Star, ArrowLeft, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "./../../assests/hero-doctor.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-bl from-medical-teal-light via-background to-medical-blue-light" />

      {/* Floating shapes */}
      <div className="absolute top-32 left-10 w-20 h-20 rounded-full bg-primary/10 animate-float" />
      <div className="absolute bottom-40 right-20 w-14 h-14 rounded-full bg-accent/20 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-60 right-40 w-8 h-8 rounded-full bg-medical-green/15 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-32 left-50 w-20 h-20 rounded-full bg-primary/10 animate-float" />
      <div className="absolute bottom-10 right-50 w-14 h-14 rounded-full bg-accent/20 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-40 right-5 w-8 h-8 rounded-full bg-medical-green/15 animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-10  animate-fade-in-up">
            <div className="inline-flex mx-2 items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Bot className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">مدعوم بالذكاء الاصطناعي</span>
            </div>
            <div className="inline-flex mx-2 items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Video className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">تواصل عبر الفيديو مع طبيبك</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground">
              استشاراتك الطبية
              <br />
              <span className="text-gradient-primary">أصبحت أسهل</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              منصة رقمية شاملة تقدم استشارات طبية عن بُعد عبر الفيديو، مع مساعد ذكاء اصطناعي للتشخيص الأولي وتوجيهك للطبيب المناسب
            </p>

            <div className="flex flex-wrap gap-4">
              {/* <Link to="/ai-consultation"> */}
              <Link to="/">

                <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 gap-2 text-base px-8">
                  <Bot className="w-5 h-5" />
                  ابدأ استشارة ذكية
                </Button>
              </Link>
              <Link to="/doctors">
                <Button size="lg" variant="outline" className="gap-2 text-base px-8">
                  تصفح الأطباء
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">+500</div>
                <div className="text-xs text-muted-foreground">طبيب متخصص</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">+10K</div>
                <div className="text-xs text-muted-foreground">استشارة ناجحة</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="flex items-center gap-1 text-center">
                <div>
                  <div className="text-2xl font-bold text-foreground">4.9</div>
                  <div className="text-xs text-muted-foreground">تقييم المرضى</div>
                </div>
                <Star className="w-5 h-5 text-accent fill-accent" />
              </div>
            </div>
          </div>

          <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-elevated">
                <img src={heroImage} alt="طبيب يقدم استشارة عن بعد" className="w-full h-auto object-cover" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4 shadow-elevated animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-medical-green-light flex items-center justify-center">
                    <Video className="w-6 h-6 text-medical-green" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">استشارة مباشرة</div>
                    <div className="text-xs text-muted-foreground">متاحة الآن</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

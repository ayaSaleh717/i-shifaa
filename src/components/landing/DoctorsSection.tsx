import { Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import doctorsData from "./../data/doctor.json";

const DoctorsSection = () => {
  const doctors = doctorsData.doctors;

  return (
    <section id="doctors" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            أطباؤنا <span className="text-gradient-primary">المتميزون</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            نخبة من الأطباء المعتمدين في مختلف التخصصات
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors
            .filter((doc) => doc.rating >= 4.8)
            .map((doc, i) => (
              <div
                key={doc.id}
                className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="h-3 bg-gradient-primary" />

                <div className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {doc.name.charAt(3)}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-foreground text-center mb-1">
                    {doc.name}
                  </h3>

                  <p className="text-sm text-primary text-center mb-3">
                    {doc.specialty}
                  </p>

                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="text-sm font-bold text-foreground">
                      {doc.rating}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      ({doc.reviews} تقييم)
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-4">
                    <MapPin className="w-3 h-3" />
                    {doc.location}
                  </div>

                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        doc.available
                          ? "bg-medical-green-light text-medical-green"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {doc.available ? "متاح الآن" : "غير متاح"}
                    </span>

                    <Link to="/">
                      <Button size="sm" variant="outline" className="text-xs">
                        عرض الملف
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/doctors">
            <Button size="lg" variant="outline" className="px-10">
              عرض جميع الأطباء
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
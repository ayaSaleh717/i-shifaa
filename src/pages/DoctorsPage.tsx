import Navbar from "@/components/Navbar";
import Footer from "@/components/landing/Footer";
import DoctorsMap from "./../components/DoctorsMap";
import { Star, MapPin, Search, Map, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import doctors from "./../components/data/doctor.json";

const allDoctors = doctors.doctors;

// const allDoctors = [
//   { id: 1, name: "د. أحمد محمد", specialty: "طب القلب", rating: 4.9, reviews: 142, location: "الرياض", price: 150, available: true, lat: 24.7136, lng: 46.6753 },
//   { id: 2, name: "د. سارة العلي", specialty: "طب الأطفال", rating: 4.8, reviews: 98, location: "جدة", price: 120, available: true, lat: 21.4858, lng: 39.1925 },
//   { id: 3, name: "د. خالد الحسن", specialty: "طب الأسرة", rating: 4.7, reviews: 210, location: "الدمام", price: 100, available: false, lat: 26.3927, lng: 49.9777 },
//   { id: 4, name: "د. فاطمة الزهراء", specialty: "الأمراض الجلدية", rating: 4.9, reviews: 175, location: "الرياض", price: 130, available: true, lat: 24.7500, lng: 46.7100 },
//   { id: 5, name: "د. عمر السعيد", specialty: "طب العيون", rating: 4.6, reviews: 89, location: "جدة", price: 140, available: true, lat: 21.5200, lng: 39.2100 },
//   { id: 6, name: "د. نورة الفهد", specialty: "طب الأعصاب", rating: 4.8, reviews: 120, location: "الرياض", price: 200, available: true, lat: 24.6800, lng: 46.6500 },
//   { id: 7, name: "د. ماجد العتيبي", specialty: "جراحة عامة", rating: 4.5, reviews: 67, location: "الدمام", price: 180, available: false, lat: 26.4200, lng: 50.0900 },
//   { id: 8, name: "د. هند الشمري", specialty: "أمراض نساء", rating: 4.9, reviews: 195, location: "جدة", price: 160, available: true, lat: 21.4500, lng: 39.1800 },
// ];

const DoctorsPage = () => {
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "map">("grid");
  const filtered = allDoctors.filter(d =>
    d.name.includes(search) || d.specialty.includes(search) || d.location.includes(search)
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              اعثر على <span className="text-gradient-primary">طبيبك</span>
            </h1>
            <p className="text-muted-foreground">ابحث عن أفضل الأطباء حسب التخصص أو الموقع</p>
          </div>

          {/* Search + View Toggle */}
          <div className="max-w-2xl mx-auto mb-10 flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="ابحث عن طبيب، تخصص، أو مدينة..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pr-12 h-12 rounded-xl text-base"
              />
            </div>
            <div className="flex gap-1 bg-muted rounded-xl p-1">
              <button
                onClick={() => setView("grid")}
                className={`p-2.5 rounded-lg transition-colors ${view === "grid" ? "bg-card shadow-sm text-primary" : "text-muted-foreground"}`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setView("map")}
                className={`p-2.5 rounded-lg transition-colors ${view === "map" ? "bg-card shadow-sm text-primary" : "text-muted-foreground"}`}
              >
                <Map className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Map View */}
          {view === "map" && (
            <div className="mb-10 animate-fade-in">
              <DoctorsMap doctors={filtered} />
            </div>
          )}

          {/* Doctor Grid */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${view === "map" ? "" : "animate-fade-in"}`}>
            {filtered.map((doc) => (
              <div
                key={doc.id}
                className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-2 bg-gradient-primary" />
                <div className="p-5">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-primary">{doc.name.charAt(3)}</span>
                  </div>
                  <h3 className="font-display font-bold text-foreground text-center mb-1">{doc.name}</h3>
                  <p className="text-sm text-primary text-center mb-3">{doc.specialty}</p>

                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="text-sm font-bold text-foreground">{doc.rating}</span>
                    <span className="text-xs text-muted-foreground">({doc.reviews})</span>
                  </div>

                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-1">
                    <MapPin className="w-3 h-3" />
                    {doc.location}
                  </div>
                  <p className="text-center text-sm font-bold text-foreground mb-3">{doc.price} ر.س</p>

                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-1 rounded-full ${doc.available ? "bg-medical-green-light text-medical-green" : "bg-muted text-muted-foreground"}`}>
                      {doc.available ? "متاح" : "غير متاح"}
                    </span>
                    <Button size="sm" className="bg-gradient-primary text-primary-foreground text-xs" disabled={!doc.available}>
                      احجز الآن
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorsPage;

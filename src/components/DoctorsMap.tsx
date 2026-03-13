import { useEffect, useRef } from "react";
import { Star, MapPin } from "lucide-react";
import doctors from "./data/doctor.json";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  location: string;
  price: number;
  available: boolean;
  lat: number;
  lng: number;
}

interface DoctorsMapProps {
  doctors: Doctor[];
}

const DoctorsMap = ({ doctors }: DoctorsMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Load Leaflet dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = () => {
      const L = (window as any).L;
      if (!L || !mapRef.current) return;

      const map = L.map(mapRef.current).setView([24.7136, 46.6753], 6);
      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
      }).addTo(map);

      doctors.forEach((doc) => {
        const popup = `
          <div style="text-align:center;direction:rtl;font-family:Tajawal,sans-serif;min-width:140px;padding:4px">
            <h3 style="font-weight:bold;font-size:14px;margin:0 0 4px">${doc.name}</h3>
            <p style="color:#0d9488;font-size:12px;margin:0 0 4px">${doc.specialty}</p>
            <p style="font-size:12px;margin:0 0 4px">⭐ ${doc.rating} (${doc.reviews} تقييم)</p>
            <p style="font-weight:bold;font-size:13px;margin:0 0 4px">${doc.price} ر.س</p>
            <span style="font-size:11px;padding:2px 8px;border-radius:10px;background:${doc.available ? '#dcfce7' : '#f3f4f6'};color:${doc.available ? '#16a34a' : '#9ca3af'}">
              ${doc.available ? "متاح الآن" : "غير متاح"}
            </span>
          </div>
        `;
        L.marker([doc.lat, doc.lng]).addTo(map).bindPopup(popup);
      });
    };
    document.head.appendChild(script);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [doctors]);

  return (
    <div className="rounded-2xl overflow-hidden border border-border/50 shadow-card">
      <div ref={mapRef} style={{ height: "400px", width: "100%" }} />
    </div>
  );
};

export default DoctorsMap;

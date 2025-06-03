
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X, Calendar, MapPin, Users } from "lucide-react";
import { cn } from "@/lib/utils";

// Dữ liệu hình ảnh sự kiện mẫu
const eventImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
    alt: "Hội thảo phòng chống ma túy tại trường THPT",
    category: "workshop",
    eventName: "Hội thảo phòng chống ma túy",
    date: "15/11/2024",
    location: "Trường THPT Nguyễn Du",
    participants: 200
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop",
    alt: "Đào tạo chuyên viên tư vấn",
    category: "training",
    eventName: "Đào tạo kỹ năng tư vấn",
    date: "20/11/2024", 
    location: "Trung tâm đào tạo",
    participants: 50
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    alt: "Chiến dịch tuyên truyền cộng đồng",
    category: "campaign",
    eventName: "Chiến dịch Say No với ma túy",
    date: "25/11/2024",
    location: "Quảng trường thành phố",
    participants: 500
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
    alt: "Buổi tư vấn nhóm cho học sinh",
    category: "counseling",
    eventName: "Tư vấn nhóm học sinh THCS",
    date: "30/11/2024",
    location: "Trường THCS Lê Lợi",
    participants: 80
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&h=600&fit=crop",
    alt: "Đào tạo kỹ năng cho phụ huynh",
    category: "training",
    eventName: "Kỹ năng nuôi dạy con",
    date: "05/12/2024",
    location: "Hội trường quận 1",
    participants: 120
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    alt: "Hoạt động tình nguyện viên",
    category: "volunteer",
    eventName: "Ngày hội tình nguyện viên",
    date: "10/12/2024",
    location: "Công viên Tao Đàn",
    participants: 300
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    alt: "Chương trình giáo dục tại trường",
    category: "education",
    eventName: "Giáo dục phòng ngừa ma túy",
    date: "15/12/2024",
    location: "Trường Đại học Sư phạm",
    participants: 400
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
    alt: "Lễ tốt nghiệp khóa đào tạo",
    category: "graduation",
    eventName: "Lễ tốt nghiệp khóa đào tạo",
    date: "20/12/2024",
    location: "Trung tâm hội nghị",
    participants: 150
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filteredImages, setFilteredImages] = useState(eventImages);
  const [activeFilter, setActiveFilter] = useState("all");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Filter gallery images by category
  const filterGallery = (category: string) => {
    setActiveFilter(category);
    
    if (category === "all") {
      setFilteredImages(eventImages);
    } else {
      setFilteredImages(eventImages.filter(img => img.category === category));
    }
  };
  
  // Handle lightbox navigation
  const navigateGallery = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };
  
  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        navigateGallery("prev");
      } else if (e.key === "ArrowRight") {
        navigateGallery("next");
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredImages]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Hình ảnh sự kiện
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                Những khoảnh khắc đáng nhớ từ các hoạt động phòng chống ma túy trong cộng đồng
              </p>
            </div>
          </div>
        </section>
        
        {/* Gallery Filters */}
        <section className="py-8">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in">
              {[
                { key: "all", label: "Tất cả" },
                { key: "workshop", label: "Hội thảo" },
                { key: "training", label: "Đào tạo" },
                { key: "campaign", label: "Chiến dịch" },
                { key: "counseling", label: "Tư vấn" },
                { key: "volunteer", label: "Tình nguyện" },
                { key: "education", label: "Giáo dục" },
                { key: "graduation", label: "Tốt nghiệp" }
              ].map((category) => (
                <button
                  key={category.key}
                  onClick={() => filterGallery(category.key)}
                  className={cn(
                    "px-6 py-2 rounded-full transition-all",
                    activeFilter === category.key
                      ? "bg-primary text-white shadow-lg"
                      : "bg-card hover:bg-muted"
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className="relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setSelectedImage(image.id)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-semibold text-sm mb-1">{image.eventName}</h3>
                    <div className="flex items-center gap-4 text-white/80 text-xs">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{image.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{image.participants}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in">
            <button 
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Đóng</span>
            </button>
            
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => navigateGallery("prev")}
            >
              <span className="sr-only">Trước</span>
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="max-w-5xl max-h-[80vh] overflow-hidden">
              {filteredImages.find(img => img.id === selectedImage) && (
                <div className="relative">
                  <img 
                    src={filteredImages.find(img => img.id === selectedImage)?.src} 
                    alt={filteredImages.find(img => img.id === selectedImage)?.alt}
                    className="max-w-full max-h-[70vh] object-contain"
                  />
                  <div className="bg-black/60 text-white p-4 rounded-b-lg">
                    <h3 className="text-xl font-semibold mb-2">
                      {filteredImages.find(img => img.id === selectedImage)?.eventName}
                    </h3>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{filteredImages.find(img => img.id === selectedImage)?.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{filteredImages.find(img => img.id === selectedImage)?.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{filteredImages.find(img => img.id === selectedImage)?.participants} người tham gia</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => navigateGallery("next")}
            >
              <span className="sr-only">Tiếp</span>
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

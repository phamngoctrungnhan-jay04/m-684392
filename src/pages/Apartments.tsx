
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  BookOpen, 
  Users, 
  Clock, 
  Award,
  Calendar,
  Video,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";

// Dữ liệu khóa học mẫu
const allCourses = [
  {
    id: "1",
    title: "Kiến thức cơ bản về ma túy và tác hại",
    description: "Khóa học cung cấp kiến thức tổng quan về các loại ma túy phổ biến và tác hại của chúng đối với sức khỏe, xã hội.",
    instructor: "TS. Nguyễn Văn A",
    duration: "4 tuần",
    sessions: 8,
    format: "online",
    ageGroup: "13-18",
    level: "Cơ bản",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
    price: "Miễn phí",
    enrolled: 1250
  },
  {
    id: "2", 
    title: "Kỹ năng từ chối và ra quyết định",
    description: "Trang bị kỹ năng từ chối áp lực tiêu cực từ bạn bè, đồng trang lứa và biết cách đưa ra quyết định đúng đắn.",
    instructor: "ThS. Trần Thị B",
    duration: "3 tuần",
    sessions: 6,
    format: "hybrid",
    ageGroup: "13-18",
    level: "Trung cấp",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
    price: "Miễn phí",
    enrolled: 890
  },
  {
    id: "3",
    title: "Hiểu con - Phòng ngừa sớm cho cha mẹ",
    description: "Hướng dẫn cha mẹ nhận biết dấu hiệu và cách giao tiếp hiệu quả với con về vấn đề ma túy.",
    instructor: "PGS. Lê Văn C",
    duration: "6 tuần",
    sessions: 12,
    format: "offline",
    ageGroup: "parent",
    level: "Nâng cao",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=400&h=250&fit=crop",
    price: "Miễn phí",
    enrolled: 560
  },
  {
    id: "4",
    title: "Hậu quả pháp lý và xã hội",
    description: "Khóa học về các hậu quả pháp lý, xã hội khi sử dụng ma túy và cách bảo vệ bản thân khỏi rủi ro.",
    instructor: "Luật sư Phạm Thị D",
    duration: "2 tuần", 
    sessions: 4,
    format: "online",
    ageGroup: "18+",
    level: "Cơ bản",
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=250&fit=crop",
    price: "Miễn phí",
    enrolled: 720
  },
  {
    id: "5",
    title: "Kỹ năng giáo dục đồng trang lứa",
    description: "Đào tạo các bạn trẻ trở thành tình nguyện viên tuyên truyền phòng chống ma túy trong cộng đồng.",
    instructor: "ThS. Hoàng Văn E",
    duration: "8 tuần",
    sessions: 16,
    format: "hybrid",
    ageGroup: "18+",
    level: "Nâng cao",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    price: "Miễn phí",
    enrolled: 340
  },
  {
    id: "6",
    title: "Tâm lý trẻ vị thành niên và phòng ngừa",
    description: "Hiểu rõ tâm lý lứa tuổi dậy thì và các phương pháp phòng ngừa hiệu quả dành cho độ tuổi này.",
    instructor: "TS. Vũ Thị F",
    duration: "5 tuần",
    sessions: 10,
    format: "online",
    ageGroup: "<13",
    level: "Trung cấp",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    price: "Miễn phí",
    enrolled: 980
  }
];

export default function Courses() {
  const [filteredCourses, setFilteredCourses] = useState(allCourses);
  const [ageGroupFilter, setAgeGroupFilter] = useState("all");
  const [formatFilter, setFormatFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Apply filters
  useEffect(() => {
    let result = allCourses;
    
    if (ageGroupFilter !== "all") {
      result = result.filter(course => course.ageGroup === ageGroupFilter);
    }
    
    if (formatFilter !== "all") {
      result = result.filter(course => course.format === formatFilter);
    }
    
    if (levelFilter !== "all") {
      result = result.filter(course => course.level === levelFilter);
    }
    
    setFilteredCourses(result);
  }, [ageGroupFilter, formatFilter, levelFilter]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Các khóa học phòng ngừa
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                Nâng cao kiến thức và kỹ năng phòng ngừa ma túy cho mọi lứa tuổi
              </p>
            </div>
          </div>
        </section>
        
        {/* Filter Section */}
        <section className="py-8 border-b">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
              {/* Age Group Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nhóm tuổi
                </label>
                <Select value={ageGroupFilter} onValueChange={setAgeGroupFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Chọn nhóm tuổi" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả</SelectItem>
                    <SelectItem value="<13">Dưới 13 tuổi</SelectItem>
                    <SelectItem value="13-18">13-18 tuổi</SelectItem>
                    <SelectItem value="18+">Trên 18 tuổi</SelectItem>
                    <SelectItem value="parent">Phụ huynh</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Format Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Hình thức học
                </label>
                <Select value={formatFilter} onValueChange={setFormatFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Chọn hình thức" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả</SelectItem>
                    <SelectItem value="online">Trực tuyến</SelectItem>
                    <SelectItem value="offline">Trực tiếp</SelectItem>
                    <SelectItem value="hybrid">Kết hợp</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Level Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Trình độ
                </label>
                <Select value={levelFilter} onValueChange={setLevelFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Chọn trình độ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả</SelectItem>
                    <SelectItem value="Cơ bản">Cơ bản</SelectItem>
                    <SelectItem value="Trung cấp">Trung cấp</SelectItem>
                    <SelectItem value="Nâng cao">Nâng cao</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-6 animate-fade-in [animation-delay:200ms]">
              <p className="text-muted-foreground">
                Hiển thị {filteredCourses.length} trong số {allCourses.length} khóa học
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setAgeGroupFilter("all");
                  setFormatFilter("all");
                  setLevelFilter("all");
                }}
              >
                Xóa bộ lọc
              </Button>
            </div>
          </div>
        </section>
        
        {/* Courses Grid */}
        <section className="section">
          <div className="container">
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course, index) => (
                  <Card key={course.id} className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                    <div className="aspect-video rounded-t-lg overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                        <Badge variant="secondary">{course.price}</Badge>
                      </div>
                      <CardDescription className="line-clamp-3">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{course.instructor}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <span>{course.sessions} buổi</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          {course.format === 'online' ? (
                            <Video className="h-4 w-4 text-muted-foreground" />
                          ) : course.format === 'offline' ? (
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                          )}
                          <span>{course.format === 'online' ? 'Trực tuyến' : course.format === 'offline' ? 'Trực tiếp' : 'Kết hợp'}</span>
                        </div>
                        <Badge variant="outline">{course.level}</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {course.enrolled} học viên
                        </span>
                        <Badge>{course.ageGroup === 'parent' ? 'Phụ huynh' : course.ageGroup}</Badge>
                      </div>
                      
                      <Button className="w-full" asChild>
                        <Link to="/booking">
                          <Award className="mr-2 h-4 w-4" />
                          Đăng ký khóa học
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <h3 className="text-xl font-semibold mb-2">Không tìm thấy khóa học phù hợp</h3>
                <p className="text-muted-foreground mb-6">Vui lòng thử điều chỉnh bộ lọc để tìm khóa học khác</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setAgeGroupFilter("all");
                    setFormatFilter("all");
                    setLevelFilter("all");
                  }}
                >
                  Xóa bộ lọc
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

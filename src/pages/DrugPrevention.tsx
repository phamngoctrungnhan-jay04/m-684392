
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Users, 
  Calendar, 
  ClipboardList, 
  Heart, 
  Shield, 
  UserCheck, 
  TrendingUp,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

export default function DrugPrevention() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Khóa học đào tạo online",
      description: "Các khóa học được phân theo độ tuổi: học sinh, sinh viên, phụ huynh, giáo viên với nội dung phù hợp",
      features: ["Nhận thức về ma túy", "Kỹ năng phòng tránh", "Kỹ năng từ chối", "Giáo dục gia đình"]
    },
    {
      icon: <ClipboardList className="h-8 w-8 text-primary" />,
      title: "Đánh giá nguy cơ",
      description: "Bài khảo sát trắc nghiệm ASSIST, CRAFFT để xác định mức độ nguy cơ sử dụng ma túy",
      features: ["Khảo sát ASSIST", "Khảo sát CRAFFT", "Đánh giá rủi ro", "Đề xuất hành động"]
    },
    {
      icon: <UserCheck className="h-8 w-8 text-primary" />,
      title: "Tư vấn chuyên viên",
      description: "Đặt lịch hẹn trực tuyến với chuyên viên tư vấn có chuyên môn và kinh nghiệm",
      features: ["Tư vấn 1:1", "Hỗ trợ tâm lý", "Kế hoạch can thiệp", "Theo dõi tiến độ"]
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Chương trình cộng đồng",
      description: "Quản lý các chương trình truyền thông và giáo dục cộng đồng về ma túy",
      features: ["Sự kiện cộng đồng", "Chiến dịch tuyên truyền", "Hoạt động nhóm", "Đánh giá hiệu quả"]
    }
  ];

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "5,000+", label: "Người được hỗ trợ" },
    { icon: <BookOpen className="h-6 w-6" />, value: "50+", label: "Khóa học online" },
    { icon: <UserCheck className="h-6 w-6" />, value: "25+", label: "Chuyên viên tư vấn" },
    { icon: <TrendingUp className="h-6 w-6" />, value: "95%", label: "Tỷ lệ hài lòng" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950">
          <div className="container relative z-10 pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <span className="text-sm text-primary font-medium uppercase tracking-wider">
                    Tổ chức tình nguyện
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Phòng ngừa sử dụng <span className="text-primary">ma túy</span> trong cộng đồng
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Chúng tôi cung cấp các chương trình đào tạo, đánh giá nguy cơ và tư vấn chuyên nghiệp 
                  để giúp cộng đồng phòng ngừa tệ nạn xã hội ma túy một cách hiệu quả.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Tham gia khóa học
                  </Button>
                  <Button variant="outline" size="lg">
                    <ClipboardList className="mr-2 h-5 w-5" />
                    Đánh giá nguy cơ
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-fade-in [animation-delay:300ms]">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop"
                    alt="Cộng đồng và giáo dục" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-card p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                      <Heart className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-semibold">Hỗ trợ 24/7</p>
                      <p className="text-sm text-muted-foreground">Luôn đồng hành cùng bạn</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Dịch vụ của chúng tôi
              </h2>
              <p className="text-lg text-muted-foreground">
                Cung cấp giải pháp toàn diện từ giáo dục, đánh giá đến hỗ trợ tư vấn chuyên nghiệp
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        {service.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="mt-3">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6" variant="outline">
                      Tìm hiểu thêm
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-card">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Về tổ chức của chúng tôi
                </h2>
                <p className="text-muted-foreground mb-6">
                  Chúng tôi là một tổ chức tình nguyện cam kết phòng ngừa và hỗ trợ cộng đồng 
                  trong việc tránh xa tệ nạn ma túy. Với đội ngũ chuyên viên giàu kinh nghiệm 
                  và phương pháp tiếp cận khoa học.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <span>Phương pháp tiếp cận dựa trên bằng chứng khoa học</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <span>Đội ngũ chuyên viên được đào tạo bài bản</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <span>Cam kết hỗ trợ lâu dài cho cộng đồng</span>
                  </div>
                </div>
              </div>
              
              <div className="relative animate-fade-in [animation-delay:300ms]">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop"
                  alt="Đội ngũ chuyên viên" 
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sẵn sàng bắt đầu hành trình phòng ngừa?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Hãy để chúng tôi đồng hành cùng bạn trong việc xây dựng một cộng đồng khỏe mạnh, 
              tránh xa tệ nạn xã hội
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Calendar className="mr-2 h-5 w-5" />
                Đặt lịch tư vấn
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Phone className="mr-2 h-5 w-5" />
                Liên hệ ngay
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Hotline hỗ trợ</h3>
                <p className="text-muted-foreground">0123 456 789</p>
                <p className="text-sm text-muted-foreground">24/7 - Miễn phí</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">support@drugprevention.org</p>
                <p className="text-sm text-muted-foreground">Phản hồi trong 24h</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Địa chỉ</h3>
                <p className="text-muted-foreground">123 Đường ABC, Quận 1</p>
                <p className="text-sm text-muted-foreground">TP. Hồ Chí Minh</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}


import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    subject: "",
    message: "",
    urgency: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.subject || !formData.message) {
      alert("Vui lòng điền đầy đủ thông tin bắt buộc");
      return;
    }
    
    console.log("Contact form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        subject: "",
        message: "",
        urgency: ""
      });
    }, 3000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Liên hệ với chúng tôi
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                Gửi thông tin và câu hỏi trực tiếp cho đội ngũ chuyên viên của chúng tôi
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information & Form */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="animate-fade-in [animation-delay:100ms]">
                <h2 className="text-2xl font-bold mb-6">Thông tin liên hệ</h2>
                
                <div className="glass-card p-6 space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Địa chỉ trung tâm</h3>
                      <p className="text-muted-foreground">
                        123 Đường ABC, Quận 1<br />
                        TP. Hồ Chí Minh<br />
                        Việt Nam
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Hotline hỗ trợ</h3>
                      <p className="text-muted-foreground">0123 456 789 (24/7)</p>
                      <p className="text-muted-foreground">0987 654 321 (Tư vấn khẩn cấp)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">support@drugprevention.org</p>
                      <p className="text-muted-foreground">emergency@drugprevention.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Giờ làm việc</h3>
                      <p className="text-muted-foreground">
                        Thứ 2 - Thứ 6: 8:00 - 17:00<br />
                        Thứ 7: 8:00 - 12:00<br />
                        Chủ nhật: Hotline 24/7
                      </p>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact Card */}
                <Card className="border-red-200 bg-red-50 dark:bg-red-950/20">
                  <CardHeader>
                    <CardTitle className="text-red-600 dark:text-red-400 flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Trường hợp khẩn cấp
                    </CardTitle>
                    <CardDescription>
                      Nếu bạn hoặc người thân đang gặp nguy hiểm tức thời
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button variant="destructive" className="w-full" size="lg">
                        <Phone className="mr-2 h-5 w-5" />
                        Gọi ngay: 113 (Cảnh sát)
                      </Button>
                      <Button variant="outline" className="w-full border-red-300 text-red-600 hover:bg-red-50">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Hotline khẩn cấp: 0987 654 321
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Contact Form */}
              <div className="animate-fade-in [animation-delay:300ms]">
                <h2 className="text-2xl font-bold mb-6">Gửi thông tin liên hệ</h2>
                
                <div className="glass-card p-6">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">
                            Họ và tên <span className="text-red-500">*</span>
                          </Label>
                          <Input 
                            id="name" 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Nhập họ và tên" 
                            required 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="age">Tuổi</Label>
                          <Input 
                            id="age" 
                            name="age"
                            type="number"
                            value={formData.age}
                            onChange={handleInputChange}
                            placeholder="Nhập tuổi" 
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">
                            Số điện thoại <span className="text-red-500">*</span>
                          </Label>
                          <Input 
                            id="phone" 
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Nhập số điện thoại" 
                            required 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email" 
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Nhập email" 
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="subject">
                            Chủ đề <span className="text-red-500">*</span>
                          </Label>
                          <select 
                            id="subject" 
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="w-full p-3 rounded-md border border-input bg-background"
                            required
                          >
                            <option value="">Chọn chủ đề</option>
                            <option value="consultation">Tư vấn phòng ngừa</option>
                            <option value="course-info">Thông tin khóa học</option>
                            <option value="emergency">Trường hợp khẩn cấp</option>
                            <option value="family-support">Hỗ trợ gia đình</option>
                            <option value="volunteer">Tình nguyện viên</option>
                            <option value="other">Khác</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="urgency">Mức độ cấp thiết</Label>
                          <select 
                            id="urgency" 
                            name="urgency"
                            value={formData.urgency}
                            onChange={handleInputChange}
                            className="w-full p-3 rounded-md border border-input bg-background"
                          >
                            <option value="">Chọn mức độ</option>
                            <option value="low">Không gấp</option>
                            <option value="medium">Bình thường</option>
                            <option value="high">Cần hỗ trợ sớm</option>
                            <option value="urgent">Khẩn cấp</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">
                          Nội dung tin nhắn <span className="text-red-500">*</span>
                        </Label>
                        <textarea 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Mô tả chi tiết tình trạng, yêu cầu hỗ trợ hoặc câu hỏi của bạn..." 
                          className="w-full min-h-[120px] p-3 rounded-md border border-input bg-background"
                          required 
                        />
                      </div>
                      
                      <Button type="submit" className="w-full btn-primary">
                        <Send className="mr-2 h-4 w-4" />
                        Gửi thông tin
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        Chúng tôi sẽ phản hồi trong vòng 24 giờ. <br />
                        Trường hợp khẩn cấp, vui lòng gọi hotline trực tiếp.
                      </p>
                    </form>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Đã gửi thông tin thành công!</h3>
                      <p className="text-muted-foreground mb-6">
                        Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất có thể.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="section bg-muted">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Câu hỏi thường gặp</h2>
              <p className="text-muted-foreground">
                Những thông tin cơ bản về dịch vụ hỗ trợ của chúng tôi
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in [animation-delay:200ms]">
              {[
                {
                  question: "Dịch vụ có miễn phí không?",
                  answer: "Tất cả dịch vụ tư vấn, đào tạo và hỗ trợ của chúng tôi đều hoàn toàn miễn phí."
                },
                {
                  question: "Thông tin cá nhân có được bảo mật?",
                  answer: "Chúng tôi cam kết bảo mật tuyệt đối thông tin cá nhân và không chia sẻ với bên thứ ba."
                },
                {
                  question: "Làm thế nào để đặt lịch tư vấn?",
                  answer: "Bạn có thể đặt lịch qua website, gọi hotline hoặc gửi thông tin liên hệ trực tiếp."
                },
                {
                  question: "Có hỗ trợ ngoài giờ làm việc không?",
                  answer: "Hotline khẩn cấp hoạt động 24/7. Các trường hợp thường sẽ được hỗ trợ trong giờ hành chính."
                }
              ].map((faq, index) => (
                <div key={index} className="glass-card p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

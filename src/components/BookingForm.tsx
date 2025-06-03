
import { useState } from "react";
import { Check, CalendarIcon, Users, Clock, User } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Dữ liệu chuyên gia mẫu
const experts = [
  {
    id: "1",
    name: "TS. Nguyễn Văn A",
    specialty: "Tâm lý trẻ vị thành niên",
    gender: "male",
    availableSlots: ["09:00", "10:30", "14:00", "15:30"]
  },
  {
    id: "2",
    name: "ThS. Trần Thị B", 
    specialty: "Tư vấn cai nghiện",
    gender: "female",
    availableSlots: ["08:30", "10:00", "13:30", "16:00"]
  },
  {
    id: "3",
    name: "PGS. Lê Văn C",
    specialty: "Kỹ năng cha mẹ",
    gender: "male",
    availableSlots: ["09:30", "11:00", "14:30", "16:30"]
  },
  {
    id: "4",
    name: "TS. Phạm Thị D",
    specialty: "Phòng ngừa ma túy",
    gender: "female", 
    availableSlots: ["08:00", "09:30", "13:00", "15:00"]
  }
];

export default function BookingForm() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedExpert, setSelectedExpert] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [consultationType, setConsultationType] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const selectedExpertData = experts.find(expert => expert.id === selectedExpert);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!selectedDate || !selectedExpert || !selectedTime || !consultationType || !fullName || !phone) {
      alert("Vui lòng điền đầy đủ thông tin bắt buộc");
      return;
    }

    const bookingData = {
      date: selectedDate,
      expert: selectedExpertData,
      time: selectedTime,
      consultationType,
      fullName,
      phone,
      email,
      notes
    };
    
    console.log("Booking submitted:", bookingData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setSelectedDate(undefined);
      setSelectedExpert("");
      setSelectedTime("");
      setConsultationType("");
      setFullName("");
      setPhone("");
      setEmail("");
      setNotes("");
    }, 3000);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="glass-card p-6 space-y-6 animate-fade-in [animation-delay:200ms]"
    >
      <h3 className="text-2xl font-bold text-center mb-6">Đặt lịch tư vấn chuyên gia</h3>
      
      <div className="space-y-4">
        {/* Consultation Type */}
        <div className="space-y-2">
          <Label htmlFor="consultation-type" className="block text-sm font-medium">
            Loại tư vấn <span className="text-red-500">*</span>
          </Label>
          <Select value={consultationType} onValueChange={setConsultationType}>
            <SelectTrigger id="consultation-type" className="w-full">
              <SelectValue placeholder="Chọn loại tư vấn" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="prevention">Tư vấn phòng ngừa</SelectItem>
              <SelectItem value="intervention">Can thiệp cấp độ trung bình</SelectItem>
              <SelectItem value="emergency">Can thiệp khẩn cấp</SelectItem>
              <SelectItem value="family">Tư vấn gia đình</SelectItem>
              <SelectItem value="follow-up">Tư vấn theo dõi</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Expert Selection */}
        <div className="space-y-2">
          <Label htmlFor="expert" className="block text-sm font-medium">
            Chọn chuyên gia <span className="text-red-500">*</span>
          </Label>
          <Select value={selectedExpert} onValueChange={setSelectedExpert}>
            <SelectTrigger id="expert" className="w-full">
              <SelectValue placeholder="Chọn chuyên gia tư vấn" />
            </SelectTrigger>
            <SelectContent>
              {experts.map((expert) => (
                <SelectItem key={expert.id} value={expert.id}>
                  <div className="flex flex-col">
                    <span>{expert.name}</span>
                    <span className="text-xs text-muted-foreground">{expert.specialty}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Date Selection */}
          <div className="space-y-2">
            <Label htmlFor="consultation-date" className="block text-sm font-medium">
              Ngày tư vấn <span className="text-red-500">*</span>
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="consultation-date"
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !selectedDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, "dd/MM/yyyy") : <span>Chọn ngày</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  initialFocus
                  disabled={(date) => date < new Date() || date.getDay() === 0}
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Time Selection */}
          <div className="space-y-2">
            <Label htmlFor="time" className="block text-sm font-medium">
              Giờ tư vấn <span className="text-red-500">*</span>
            </Label>
            <Select value={selectedTime} onValueChange={setSelectedTime} disabled={!selectedExpert}>
              <SelectTrigger id="time" className="w-full">
                <SelectValue placeholder="Chọn giờ" />
              </SelectTrigger>
              <SelectContent>
                {selectedExpertData?.availableSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Personal Information */}
        <div className="space-y-4 border-t pt-4">
          <h4 className="font-medium">Thông tin cá nhân</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">
                Họ và tên <span className="text-red-500">*</span>
              </Label>
              <Input 
                id="fullName" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Nhập họ và tên" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">
                Số điện thoại <span className="text-red-500">*</span>
              </Label>
              <Input 
                id="phone" 
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Nhập số điện thoại" 
                required 
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email (tùy chọn)</Label>
            <Input 
              id="email" 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email để nhận xác nhận" 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Ghi chú thêm (tùy chọn)</Label>
            <textarea 
              id="notes" 
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Mô tả ngắn gọn tình trạng hoặc yêu cầu đặc biệt..."
              className="w-full min-h-[80px] p-3 rounded-md border border-input bg-background"
            />
          </div>
        </div>
      </div>
      
      <Button type="submit" className="w-full btn-primary relative">
        {submitted ? (
          <>
            <Check className="mr-2 h-4 w-4" />
            Đặt lịch thành công!
          </>
        ) : (
          <>
            <Calendar className="mr-2 h-4 w-4" />
            Xác nhận đặt lịch
          </>
        )}
      </Button>

      {submitted && (
        <div className="text-center text-sm text-muted-foreground">
          Chúng tôi sẽ liên hệ xác nhận lịch hẹn trong vòng 24h
        </div>
      )}
    </form>
  );
}

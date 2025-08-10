import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Code, 
  Search, 
  ShoppingCart,
  BarChart3,
  Shield,
  Zap,
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Globe,
      title: 'เว็บไซต์ธุรกิจ',
      description: 'สร้างเว็บไซต์ที่สวยงามและใช้งานง่าย เหมาะสำหรับธุรกิจทุกประเภท',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Admin Panel'],
      price: 'เริ่มต้น ฿15,000',
      color: 'blue',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      icon: ShoppingCart,
      title: 'ร้านค้าออนไลน์',
      description: 'ระบบ E-commerce ครบครัน พร้อมระบบชำระเงินและจัดการสินค้า',
      features: ['Payment Gateway', 'Inventory Management', 'Order Tracking', 'Analytics'],
      price: 'เริ่มต้น ฿25,000',
      color: 'green',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      icon: Smartphone,
      title: 'แอปพลิเคชัน',
      description: 'พัฒนาแอปมือถือสำหรับ iOS และ Android ด้วยเทคโนโลยีล่าสุด',
      features: ['Cross Platform', 'Push Notifications', 'Offline Support', 'App Store Ready'],
      price: 'เริ่มต้น ฿35,000',
      color: 'purple',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'ออกแบบ User Interface และ User Experience ที่ใช้งานง่าย',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design System'],
      price: 'เริ่มต้น ฿8,000',
      color: 'pink',
      bgGradient: 'from-pink-500/10 to-rose-500/10',
      borderColor: 'border-pink-500/20'
    },
    {
      icon: Search,
      title: 'SEO & Marketing',
      description: 'เพิ่มการมองเห็นในเว็บไซต์และดึงดูดลูกค้าใหม่',
      features: ['Keyword Research', 'Content Strategy', 'Link Building', 'Analytics'],
      price: 'เริ่มต้น ฿5,000/เดือน',
      color: 'orange',
      bgGradient: 'from-orange-500/10 to-yellow-500/10',
      borderColor: 'border-orange-500/20'
    },
    {
      icon: Shield,
      title: 'ความปลอดภัย',
      description: 'ระบบรักษาความปลอดภัยและการสำรองข้อมูล',
      features: ['SSL Certificate', 'Data Backup', 'Security Monitoring', '24/7 Support'],
      price: 'เริ่มต้น ฿3,000/เดือน',
      color: 'red',
      bgGradient: 'from-red-500/10 to-pink-500/10',
      borderColor: 'border-red-500/20'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'ปรึกษาและวางแผน',
      description: 'พูดคุยเกี่ยวกับความต้องการและเป้าหมายของโปรเจค'
    },
    {
      step: '02',
      title: 'ออกแบบและพัฒนา',
      description: 'สร้างต้นแบบและพัฒนาตามที่ตกลงกัน'
    },
    {
      step: '03',
      title: 'ทดสอบและปรับปรุง',
      description: 'ทดสอบการทำงานและปรับแต่งให้สมบูรณ์'
    },
    {
      step: '04',
      title: 'ส่งมอบและดูแล',
      description: 'ส่งมอบงานและให้การสนับสนุนต่อเนื่อง'
    }
  ];

  const getIconColor = (color: string) => {
    const colors = {
      blue: 'text-blue-400',
      green: 'text-green-400',
      purple: 'text-purple-400',
      pink: 'text-pink-400',
      orange: 'text-orange-400',
      red: 'text-red-400'
    };
    return colors[color as keyof typeof colors] || 'text-blue-400';
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
            <span className="text-blue-400 text-sm font-medium">บริการของเรา</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            บริการที่
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              ครบครัน
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            เราให้บริการครบวงจรตั้งแต่การออกแบบไปจนถึงการพัฒนาและดูแลระบบ
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`p-8 bg-gradient-to-br ${service.bgGradient} rounded-2xl border ${service.borderColor} hover:border-opacity-50 transition-all duration-300 group hover:transform hover:scale-105`}
              >
                <div className={`p-4 bg-slate-800/50 rounded-xl mb-6 ${getIconColor(service.color)} group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className={`w-4 h-4 ${getIconColor(service.color)}`} />
                      <span className="text-slate-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-white">{service.price}</span>
                  <button className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group">
                    <span className="text-sm">เรียนรู้เพิ่มเติม</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ขั้นตอนการทำงาน
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              เราทำงานอย่างเป็นระบบเพื่อให้ได้ผลลัพธ์ที่ดีที่สุด
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { number: '500+', label: 'โปรเจคสำเร็จ' },
            { number: '98%', label: 'ความพึงพอใจ' },
            { number: '50+', label: 'ประเทศที่ให้บริการ' },
            { number: '24/7', label: 'การสนับสนุน' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 p-8 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-2xl border border-blue-500/20">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">พร้อมเริ่มโปรเจคแล้วใช่ไหม?</h3>
              <p className="text-slate-300">ติดต่อเราวันนี้เพื่อปรึกษาและรับใบเสนอราคาฟรี</p>
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
              ติดต่อเรา
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
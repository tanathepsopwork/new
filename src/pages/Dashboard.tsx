import React, { useState } from 'react';
import { 
  Globe, 
  Plus, 
  Settings, 
  BarChart3, 
  Users, 
  CreditCard, 
  FileText, 
  HelpCircle,
  Search,
  Filter,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Calendar,
  TrendingUp,
  Activity,
  Wallet,
  QrCode,
  Smartphone,
  Gift,
  Hash,
  X
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface Website {
  id: string;
  name: string;
  domain: string;
  status: 'active' | 'inactive' | 'pending';
  plan: 'Basic' | 'Professional' | 'Enterprise';
  visitors: number;
  lastUpdated: string;
  thumbnail: string;
}

export function Dashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('websites');
  const [searchTerm, setSearchTerm] = useState('');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [userCredit, setUserCredit] = useState(15750); // Mock user credit

  const websites: Website[] = [
    {
      id: '1',
      name: 'My Portfolio',
      domain: 'myportfolio.com',
      status: 'active',
      plan: 'Professional',
      visitors: 1250,
      lastUpdated: '2 hours ago',
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '2',
      name: 'E-commerce Store',
      domain: 'mystore.shop',
      status: 'active',
      plan: 'Enterprise',
      visitors: 3420,
      lastUpdated: '1 day ago',
      thumbnail: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '3',
      name: 'Blog Site',
      domain: 'myblog.net',
      status: 'pending',
      plan: 'Basic',
      visitors: 0,
      lastUpdated: '3 days ago',
      thumbnail: 'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const stats = [
    {
      title: 'Total Websites',
      value: '3',
      change: '+1 this month',
      icon: Globe,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      title: 'Total Visitors',
      value: '4,670',
      change: '+12% from last month',
      icon: Users,
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/10'
    },
    {
      title: 'Active Plans',
      value: '2',
      change: 'Professional & Enterprise',
      icon: CreditCard,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      title: 'Performance',
      value: '98.5%',
      change: 'Uptime this month',
      icon: TrendingUp,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    }
  ];

  const menuItems = [
    { id: 'websites', label: 'My Websites', icon: Globe },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'support', label: 'Support', icon: HelpCircle }
  ];

  const paymentMethods = [
    {
      id: 'qr',
      name: 'เติมเงินผ่าน QR Code',
      description: 'สแกน QR Code เพื่อชำระเงิน',
      icon: QrCode,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      id: 'truemoney',
      name: 'เติมเงินผ่าน TrueMoney',
      description: 'ชำระผ่าน TrueMoney Wallet',
      icon: Smartphone,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      id: 'angpao',
      name: 'เติมเงินด้วยอั่งเปา',
      description: 'ใช้อั่งเปาสำหรับเติมเงิน',
      icon: Gift,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10'
    },
    {
      id: 'code',
      name: 'เติมเงินผ่านโค้ด',
      description: 'กรอกโค้ดเติมเงินของคุณ',
      icon: Hash,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-500/10';
      case 'inactive': return 'text-red-400 bg-red-500/10';
      case 'pending': return 'text-yellow-400 bg-yellow-500/10';
      default: return 'text-gray-400 bg-gray-500/10';
    }
  };

  const handlePaymentMethodSelect = (methodId: string) => {
    setSelectedPaymentMethod(methodId);
    // Here you would implement the actual payment logic
    console.log('Selected payment method:', methodId);
  };

  const PaymentModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-2xl border border-slate-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">เติมเงิน</h2>
            <button
              onClick={() => setShowPaymentModal(false)}
              className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-slate-400" />
            </button>
          </div>
          <p className="text-slate-400 mt-2">เลือกวิธีการเติมเงินที่คุณต้องการ</p>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {paymentMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <button
                  key={method.id}
                  onClick={() => handlePaymentMethodSelect(method.id)}
                  className="p-6 bg-slate-700/50 hover:bg-slate-700 rounded-xl border border-slate-600 hover:border-slate-500 transition-all text-left group"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${method.bgColor}`}>
                      <IconComponent className={`w-6 h-6 ${method.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1 group-hover:text-blue-400 transition-colors">
                        {method.name}
                      </h3>
                      <p className="text-slate-400 text-sm">{method.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          
          <div className="mt-6 p-4 bg-slate-700/30 rounded-lg">
            <h4 className="text-white font-medium mb-2">ข้อมูลสำคัญ</h4>
            <ul className="text-slate-400 text-sm space-y-1">
              <li>• เครดิตจะเข้าระบบภายใน 5-10 นาที</li>
              <li>• ขั้นต่ำในการเติมเงิน 100 บาท</li>
              <li>• สามารถติดต่อฝ่ายสนับสนุนได้ตลอด 24 ชั่วโมง</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderWebsitesTab = () => (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search websites..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-3">
          <button className="flex items-center space-x-2 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-300 hover:text-white transition-colors">
            <Filter className="w-5 h-5" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all">
            <Plus className="w-5 h-5" />
            <span>New Website</span>
          </button>
        </div>
      </div>

      {/* Websites Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {websites.map((website) => (
          <div key={website.id} className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden hover:border-slate-600 transition-all group">
            <div className="relative">
              <img 
                src={website.thumbnail} 
                alt={website.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4">
                <button className="p-2 bg-slate-900/80 backdrop-blur-sm rounded-lg text-slate-300 hover:text-white opacity-0 group-hover:opacity-100 transition-all">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(website.status)}`}>
                  {website.status}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{website.name}</h3>
                  <p className="text-slate-400 text-sm">{website.domain}</p>
                </div>
                <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">{website.plan}</span>
              </div>
              
              <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{website.visitors.toLocaleString()} visitors</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{website.lastUpdated}</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 flex items-center justify-center space-x-2 py-2 px-3 bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white rounded-lg transition-colors">
                  <Eye className="w-4 h-4" />
                  <span>View</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  <Edit className="w-4 h-4" />
                  <span>Edit</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                  <IconComponent className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-slate-400 text-sm mb-2">{stat.title}</p>
              <p className="text-xs text-slate-500">{stat.change}</p>
            </div>
          );
        })}
      </div>
      
      <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
        <h3 className="text-xl font-semibold text-white mb-4">Website Performance</h3>
        <div className="h-64 flex items-center justify-center text-slate-400">
          <div className="text-center">
            <Activity className="w-12 h-12 mx-auto mb-4 text-slate-500" />
            <p>Analytics charts will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBillingTab = () => (
    <div className="space-y-6">
      <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
        <h3 className="text-xl font-semibold text-white mb-4">Current Plans</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
            <div>
              <h4 className="text-white font-medium">Professional Plan</h4>
              <p className="text-slate-400 text-sm">myportfolio.com</p>
            </div>
            <div className="text-right">
              <p className="text-white font-semibold">฿5,999/month</p>
              <p className="text-slate-400 text-sm">Next billing: Jan 15, 2025</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
            <div>
              <h4 className="text-white font-medium">Enterprise Plan</h4>
              <p className="text-slate-400 text-sm">mystore.shop</p>
            </div>
            <div className="text-right">
              <p className="text-white font-semibold">฿12,999/month</p>
              <p className="text-slate-400 text-sm">Next billing: Jan 20, 2025</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
        <h3 className="text-xl font-semibold text-white mb-4">Payment History</h3>
        <div className="space-y-3">
          {[
            { date: 'Dec 15, 2024', amount: '฿5,999', plan: 'Professional', status: 'Paid' },
            { date: 'Dec 20, 2024', amount: '฿12,999', plan: 'Enterprise', status: 'Paid' },
            { date: 'Nov 15, 2024', amount: '฿5,999', plan: 'Professional', status: 'Paid' }
          ].map((payment, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
              <div>
                <p className="text-white font-medium">{payment.plan}</p>
                <p className="text-slate-400 text-sm">{payment.date}</p>
              </div>
              <div className="text-right">
                <p className="text-white font-semibold">{payment.amount}</p>
                <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded">
                  {payment.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'websites': return renderWebsitesTab();
      case 'analytics': return renderAnalyticsTab();
      case 'billing': return renderBillingTab();
      case 'settings': return (
        <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
          <h3 className="text-xl font-semibold text-white mb-4">Account Settings</h3>
          <p className="text-slate-400">Settings panel will be implemented here</p>
        </div>
      );
      case 'support': return (
        <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
          <h3 className="text-xl font-semibold text-white mb-4">Support Center</h3>
          <p className="text-slate-400">Support options and help documentation</p>
        </div>
      );
      default: return renderWebsitesTab();
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="container mx-auto px-6 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back, {user?.name}! 👋
          </h1>
          <p className="text-slate-400">
            Manage your websites and track your performance from your dashboard
          </p>
        </div>

        {/* Credit Display and Top Up Button */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-500/10 to-teal-500/10 p-6 rounded-2xl border border-blue-500/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <Wallet className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">เครดิตของคุณ</h3>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                    ฿{userCredit.toLocaleString()}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowPaymentModal(true)}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all transform hover:scale-105"
              >
                <Plus className="w-5 h-5" />
                <span>เติมเงิน</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-slate-600 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                    <IconComponent className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-slate-400 text-sm mb-2">{stat.title}</p>
                <p className="text-xs text-slate-500">{stat.change}</p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-4">
              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                        activeTab === item.id
                          ? 'bg-gradient-to-r from-blue-500/20 to-teal-500/20 text-white border border-blue-500/30'
                          : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
      
      {/* Payment Modal */}
      {showPaymentModal && <PaymentModal />}
    </div>
  );
}
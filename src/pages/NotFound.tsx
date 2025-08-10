import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, HelpCircle } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-4 animate-pulse">
            404
          </div>
          <div className="relative">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
              <Search className="w-16 h-16 text-blue-400 animate-bounce" />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-teal-500/20 rounded-full animate-float-delayed"></div>
            <div className="absolute top-8 -right-8 w-4 h-4 bg-purple-500/20 rounded-full animate-float"></div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ไม่พบหน้าที่คุณต้องการ
          </h1>
          <p className="text-xl text-slate-300 mb-6 leading-relaxed">
            ขออภัย หน้าที่คุณกำลังมองหาอาจถูกย้าย ลบ หรือไม่เคยมีอยู่จริง
          </p>
          <div className="flex items-center justify-center space-x-2 text-slate-400 mb-8">
            <HelpCircle className="w-5 h-5" />
            <span>หากคุณคิดว่านี่เป็นข้อผิดพลาด กรุณาติดต่อทีมสนับสนุน</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
          <Link
            to="/"
            className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105"
          >
            <Home className="w-5 h-5" />
            <span>กลับหน้าแรก</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 px-8 py-4 bg-slate-800/50 text-white font-semibold rounded-lg border border-slate-700 hover:bg-slate-700/50 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>กลับหน้าก่อนหน้า</span>
          </button>
        </div>

        {/* Quick Links */}
        <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
          <h3 className="text-lg font-semibold text-white mb-4">หน้าที่น่าสนใจ</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { to: '/', label: 'หน้าแรก' },
              { to: '/services', label: 'บริการ' },
              { to: '/price', label: 'ราคา' },
              { to: '/contact', label: 'ติดต่อ' }
            ].map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="p-3 bg-slate-700/50 rounded-lg text-slate-300 hover:text-white hover:bg-slate-600/50 transition-all duration-300 text-center"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-8 text-center">
          <p className="text-slate-400 mb-4">ยังหาสิ่งที่ต้องการไม่เจอใช่ไหม?</p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>ติดต่อทีมสนับสนุน</span>
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}
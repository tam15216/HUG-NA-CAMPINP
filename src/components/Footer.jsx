// components/Footer.jsx
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#f0f0e4] text-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-[#b48a5f]">ฮักนะ แคมป์ปิ้ง</h2>
          <p className="mt-4 text-sm leading-relaxed">
            สถานที่พักผ่อนท่ามกลางธรรมชาติ  
            พร้อมสิ่งอำนวยความสะดวกครบครัน สำหรับทุกกลุ่มเพื่อนและครอบครัว
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">เมนูด่วน</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="https://web.facebook.com/hugnacamping2568" className="hover:text-[#b48a5f]">ติดต่อเรา</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">ติดต่อ</h3>
          <p className="text-sm">📍 ฮักนะ แคมป์ปิ้ง นครนายก</p>
          <p className="text-sm">📞 062 338 5663</p>
        </div>
      </div>
      <div className="bg-[#e6e6da] text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} ฮักนะ แคมป์ปิ้ง. All rights reserved.
      </div>
    </footer>
  )
}

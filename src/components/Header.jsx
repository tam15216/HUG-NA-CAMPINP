// components/Header.jsx
import React from 'react'

export default function Header() {
  return (
    <div className='flex flex-col items-center justify-center pt-5'>
      <img 
        src="./src/assets/logo.png" 
        alt="Logo" 
        className="w-50 h-50 rounded-full shadow-xl/30" 
      />
      <section className="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto flex flex-wrap"> 
            <div class="flex w-full mb-1 flex-wrap gap-y-4"> 
                <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#2f2f2f]"> 
                    <span class="block">ฮักนะ</span> 
                    <span class="block text-[#b48a5f]">แคมป์ปิ้ง</span> 
                    </h1> <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base"> ลานกางเต็นท์ของเราโอบล้อมด้วยธรรมชาติ บรรยากาศสงบ ร่มรื่น และปลอดภัย เหมาะสำหรับทั้งครอบครัว คู่รัก หรือกลุ่มเพื่อนที่อยากใช้เวลาพักผ่อนร่วมกัน พื้นที่กว้างขวางพร้อมสิ่งอำนวยความสะดวกครบครัน ทั้งห้องน้ำสะอาด จุดล้างจาน และไฟฟ้าให้ใช้งาน ในตอนกลางวันคุณจะได้สัมผัสอากาศสดชื่น ท่ามกลางต้นไม้และเสียงธรรมชาติ ส่วนกลางคืนก็สามารถนั่งมองดาวบนท้องฟ้า บรรยากาศโรแมนติก อบอุ่น และเป็นกันเอง เหมาะกับการเก็บภาพความทรงจำดี ๆ ร่วมกับคนที่คุณรัก </p> 
                    </div>
        </div>
      </section>
    </div>
  )
}

// components/Facilities.jsx
import React from 'react'

const cards = [
  {
    title: 'ห้องน้ำสะอาด',
    description: 'ห้องน้ำสะอาด น้ำเย็น พร้อมอุปกรณ์ครบครัน เหมาะสำหรับผู้เข้าพักทุกคน',
  },
  {
    title: 'ห้องครัว / จุดทำอาหาร',
    description: 'มีอุปกรณ์ทำอาหารพื้นฐาน ครบครันสำหรับการประกอบอาหาร และพื้นที่นั่งทานสะดวกสบาย',
  },
  {
    title: 'จุดชาร์จไฟ / พลังงาน',
    description: 'มีจุดชาร์จไฟสำหรับอุปกรณ์อิเล็กทรอนิกส์ รองรับการใช้งานทั้งกลางวันและกลางคืน',
  },
  {
    title: 'ลานกางเต็นท์',
    description: 'พื้นที่กว้างขวาง เหมาะสำหรับกางเต็นท์หลายขนาด พร้อมสิ่งอำนวยความสะดวกรอบด้าน',
  },
  {
    title: 'พื้นที่พักผ่อน / นั่งเล่น',
    description: 'มีมุมพักผ่อน สวนหย่อม และที่นั่งสบายสำหรับครอบครัวและกลุ่มเพื่อน',
  },
  {
    title: 'ห้องพักสำหรับหลายคน',
    description: 'มีห้องพักรองรับกลุ่มเพื่อนหรือครอบครัว สามารถเข้าพักได้หลายคน พร้อมสิ่งอำนวยความสะดวกครบครัน',
  },
]

export default function Facilities() {
  return (
    <section className="text-gray-800 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2f2f2f] mb-6 text-center relative group">
          สิ่งอำนวยความสะดวก
          <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-16 h-1 bg-[#b48a5f] rounded-full transition-all duration-300 group-hover:w-24"></span>
        </h1>
        <div className="flex flex-wrap -m-4">
          {cards.map((card, idx) => (
            <div key={idx} className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-br from-[#f0f0e4] to-[#e6e2d3]">
                <h2 className="text-xl md:text-2xl font-semibold title-font mb-4 text-gray-900">{card.title}</h2>
                <p className="leading-relaxed text-gray-800 text-base">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

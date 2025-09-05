// components/MapSection.jsx
import React from 'react'

export default function MapSection() {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2f2f2f] mb-6 text-center relative group">
        แผนที่
        <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-16 h-1 bg-[#b48a5f] rounded-full transition-all duration-300 group-hover:w-24"></span>
      </h1>
      <div className="flex items-center justify-center w-full py-8 px-4">
        <div className="w-full max-w-4xl h-96 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4587.064607894316!2d101.279744!3d14.2513899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311db300764a7f17%3A0x95adcc4db1ac64b2!2z4Liu4Lix4LiB4LiZ4LiwIOC5geC4hOC4oeC4m-C5jOC4m-C4tOC5ieC4hw!5e1!3m2!1sth!2sth!4v1757038678221!5m2!1sth!2sth"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  )
}

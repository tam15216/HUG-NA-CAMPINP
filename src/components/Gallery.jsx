// components/Gallery.jsx
import React from 'react'

export default function Gallery() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-2 mx-auto flex flex-wrap">
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-full md:w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" src="/PG1.jpg" className="w-full max-w-[503px] aspect-[503/303] object-cover object-center rounded-lg shadow-lg" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" src="/PG3.jpg" className="w-full max-w-[503px] aspect-[503/303] object-cover object-center rounded-lg shadow-lg" />
            </div>
            <div className="md:p-2 p-1 w-full flex justify-center">
              <img alt="gallery" src="/index2.jpg" className="w-full max-w-[600px] aspect-[600/360] object-cover object-center rounded-lg shadow-lg" />
            </div>
          </div>
          <div className="flex flex-wrap w-full md:w-1/2">
            <div className="md:p-2 p-1 w-full flex justify-center">
              <img alt="gallery" src="/index1.jpg" className="w-full max-w-[600px] aspect-[600/360] object-cover object-center rounded-lg shadow-lg" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" src="/F1.jpg" className="w-full max-w-[503px] aspect-[503/303] object-cover object-center rounded-lg shadow-lg" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" src="/F2.jpg" className="w-full max-w-[503px] aspect-[503/303] object-cover object-center rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

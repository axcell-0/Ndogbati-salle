'use client'

import React from 'react'
import Carousel from './Carousel'

const testimonials = [
  {
    name: 'Amara & James',
    text: 'Our wedding at the hall was pure magic. The team made every detail shine with elegance and warmth.',
    image: '/testimonies/couple1.jpg',
  },
  {
    name: 'Liam & Grace',
    text: 'The atmosphere was enchanting, and the staff treated us like royalty. We’ll never forget that night!',
    image: '/testimonies/couple2.jpg',
  },
  {
    name: 'Nadia & Paul',
    text: 'Everything felt so smooth and beautiful. It truly felt like a dream come true.',
    image: '/testimonies/couple3.jpg',
  },
  {
    name: 'Sophia & Michael',
    text: 'Perfect lighting, perfect service, and perfect love all around. Thank you for everything!',
    image: '/testimonies/couple4.jpg',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-pink-50">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-pink-700 mb-10">
          What Our Happy Couples Say
        </h2>

        {/* 🌸 Carousel for Testimonials */}
        <Carousel>
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
            >
              <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-between h-full">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-24 h-24 object-cover rounded-full mb-4"
                />
                <p className="text-gray-700 italic mb-3">“{t.text}”</p>
                <h3 className="font-semibold text-pink-600">{t.name}</h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

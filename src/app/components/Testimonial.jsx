'use client'
import React from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: "The most magical day of our lives. The venue was breathtaking and the staff made everything seamless. Truly a fairytale experience!",
    author: "Jessica & Tom",
  },
  {
    quote: "Elysian Events exceeded our expectations! The venue was stunning and the service was impeccable. Highly recommend!",
    author: "Emily",
  },
  {
    quote: "Our wedding day was beyond perfect. The team made everything so easy and enjoyable. A day we will never forget!",
    author: "Michael & Sarah",
  },
  // Add more testimonials as needed
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-sm tracking-[2px] uppercase text-pink-600 mb-6 font-semibold">
          What Our Couples Say
        </h2>

        <div className="overflow-hidden">
          <div className="flex gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-[80%] sm:min-w-[45%] lg:min-w-[30%] flex-shrink-0 bg-white rounded-2xl shadow-md p-6"
              >
                <div className="mb-4">
                  <span className="text-xl text-yellow-500">★★★★★</span>
                </div>
                <p className="text-gray-600 text-sm italic">{item.quote}</p>
                <p className="text-gray-800 text-sm font-semibold mt-4">{item.author}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button className="mx-2">
            <ChevronLeft />
          </button>
          <button className="mx-2">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}
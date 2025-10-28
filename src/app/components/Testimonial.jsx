'use client'
import React from 'react'
import Slider from 'react-slick'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
  {
    quote: "Every detail was taken care of, making our day stress-free. We couldn't have asked for more!",
    author: "Laura & Jake",
  },
  {
    quote: "The atmosphere was enchanting, and our guests are still raving about it!",
    author: "Sophie & Liam",
  },
  {
    quote: "A dream come true! Everything was organized perfectly, and we felt so special.",
    author: "Emma & Noah",
  },
  {
    quote: "We were blown away by the beauty of the venue and the professionalism of the staff.",
    author: "Olivia & Ethan",
  },
  {
    quote: "The best decision we made was choosing Elysian Events. Our wedding was a true reflection of our love!",
    author: "Ava & William",
  },
  {
    quote: "Excellent service and a stunning location. Our memories will last a lifetime!",
    author: "Isabella & James",
  },
  {
    quote: "Thank you for making our wedding day unforgettable. It was everything we dreamed of!",
    author: "Mia & Benjamin",
  },
]

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-sm tracking-[2px] uppercase text-pink-600 mb-6 font-semibold">
          What Our Couples Say
        </h2>

        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-2xl shadow-md p-6 mx-2 h-full"
            >
              <div className="mb-4">
                <span className="text-xl text-yellow-500">★★★★★</span>
              </div>
              <p className="text-gray-600 text-sm italic flex-grow">{item.quote}</p>
              <p className="text-gray-800 text-sm font-semibold mt-4">{item.author}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
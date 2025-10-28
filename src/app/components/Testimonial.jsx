'use client'
import React from 'react'
import Slider from 'react-slick'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Custom Arrow Components (Optional, for better styling/placement)
const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button
    {...props}
    className={
      'slick-arrow absolute top-1/2 -translate-y-1/2 z-10 ' +
      (props.direction === 'prev' ? '-left-6' : '-right-6') +
      ' hidden md:block' // Hide arrows on small screens (mobile) if preferred
    }
    aria-hidden="true"
    aria-disabled={props.disabled}
    type="button"
  >
    {children}
  </button>
)

const NextArrow = (props) => (
  <SlickArrow {...props} direction="next" disabled={props.currentSlide === props.slideCount - 1}>
    <ChevronRight className="text-pink-600 w-8 h-8 hover:text-pink-800 transition-colors" />
  </SlickArrow>
)

const PrevArrow = (props) => (
  <SlickArrow {...props} direction="prev" disabled={props.currentSlide === 0}>
    <ChevronLeft className="text-pink-600 w-8 h-8 hover:text-pink-800 transition-colors" />
  </SlickArrow>
)

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
    autoplay: true, // Optional: Add autoplay for a subtle effect
    autoplaySpeed: 5000,
    slidesToShow: 3, // Default for Desktop
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Using custom arrows for better control
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Mobile view
        settings: {
          slidesToShow: 1, // Only 1 card per view for small screens
          slidesToScroll: 1,
          arrows: false, // You might prefer to hide arrows on mobile
        },
      },
    ],
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center relative">
        <h2 className="text-sm tracking-[2px] uppercase text-pink-600 mb-6 font-semibold">
          What Our Couples Say
        </h2>
        
        {/* The Slider component now handles all views based on the 'settings' object */}
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="px-2" // Added padding to separate the cards horizontally
            >
              <div
                className="flex flex-col bg-white rounded-2xl shadow-xl p-6 h-full transition duration-300 hover:shadow-2xl"
              >
                <div className="mb-4">
                  <span className="text-xl text-yellow-500">★★★★★</span>
                </div>
                <p className="text-gray-600 text-sm italic flex-grow">{item.quote}</p>
                <p className="text-gray-800 text-sm font-semibold mt-4">{item.author}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
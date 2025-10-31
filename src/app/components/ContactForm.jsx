'use client'
import React from 'react'
import Image from 'next/image'

export default function ContactForm() {
  return (
    <section className="bg-white py-16 px-6 flex" id='form'>
       {/* image contact form */}
          <div className='hidden sm:block'>
             <Image
             src={'/con-form.jpg'}
             alt="picture"
             className=''
             width={750}
             height={300}
             />
          </div>
      <div className="max-w-md mx-auto text-center bg-[url('/con-form.jpg')] lg:bg-none bg-cover bg-center p-2 rounded-2xl">
        {/* 🌸 Title and Subtitle */}
        <h2 className="text-2xl md:text-3xl font-bold text-white lg:text-gray-800 mb-4">
          Let's Plan Your Wedding
        </h2>
        <p className="text-white/90 lg:text-gray-600 mb-8">
          Fill out the form below and our team will get back to you shortly.
        </p>

        <div>
          {/* 💌 Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 text-white sm:text-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-pink-500 placeholder-opacity-75 placeholder-italic"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 text-white sm:text-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-pink-500 placeholder-opacity-75 placeholder-italic"
            />
            <input
              type="text"
              placeholder="Desired Date"
               className="w-full border border-gray-300 text-white sm:text-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-pink-500 placeholder-opacity-75 placeholder-italic"
            />
            <textarea
              placeholder="Tell us about your event..."
              rows="4"
               className="w-full border border-gray-300 text-white sm:text-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-pink-500 placeholder-opacity-75 placeholder-italic"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-pink-200 text-gray-900 font-semibold py-3 rounded-full hover:bg-pink-300 transition-colors"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

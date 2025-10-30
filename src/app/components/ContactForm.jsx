'use client'
import React from 'react'

export default function ContactForm() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-md mx-auto text-center">
        {/* 🌸 Title and Subtitle */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Let's Plan Your Wedding
        </h2>
        <p className="text-gray-600 mb-8">
          Fill out the form below and our team will get back to you shortly.
        </p>

        {/* 💌 Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="text"
            placeholder="Desired Date"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            placeholder="Tell us about your event..."
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-pink-200 text-gray-900 font-semibold py-3 rounded-full hover:bg-pink-300 transition-colors"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  )
}

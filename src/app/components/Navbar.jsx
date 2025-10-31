'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // 🌿 Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* 🌸 Logo and brand */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.jpg" alt="Ndogbati Logo" width={65} height={65} />
          <Link href="/" className="text-2xl font-playfair font-bold text-gray-800">
            Ndogbati
          </Link>
        </div>

        {/* 🍔 Hamburger Icon (Mobile) */}
        <div className="md:hidden text-black">
          {isOpen ? (
            <X onClick={() => setIsOpen(false)} className="h-6 w-6 cursor-pointer" />
          ) : (
            <Menu onClick={() => setIsOpen(true)} className="h-6 w-6 cursor-pointer" />
          )}
        </div>

        {/* 🖥️ Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li className="text-black hover:text-pink-500 transition-colors duration-300"><Link href="/">Home</Link></li>
          <li className="text-black hover:text-pink-500 transition-colors duration-300"><Link href="/about">About</Link></li>
          <li className="text-black hover:text-pink-500 transition-colors duration-300"><Link href="/gallery">Gallery</Link></li>
          <li className="text-black hover:text-pink-500 transition-colors duration-300"><Link href="/services">Services</Link></li>
          <li className="text-black hover:text-pink-500 transition-colors duration-300"><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* 🌼 Mobile Slide Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dim overlay behind menu */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* White sliding panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg flex flex-col justify-center items-center space-y-6 font-medium md:hidden z-50"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            >
              {/* Close icon inside menu */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-gray-700 hover:text-pink-500 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Nav Links */}
              <Link href="/" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-pink-500 transition-colors duration-300">Home</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-pink-500 transition-colors duration-300">About</Link>
              <Link href="/gallery" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-pink-500 transition-colors duration-300">Gallery</Link>
              <Link href="/services" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-pink-500 transition-colors duration-300">Services</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-pink-500 transition-colors duration-300">Contact</Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

'use client'
import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import GalleryCard from "./GalleryCard"
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Gallery() {
  const carouselRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const galleryItems = [
    { id: 1, src: '/gallery1.jpg', title: 'The Grand Ceremony', description: "Say 'I do' in a setting of pure elegance." },
    { id: 2, src: '/gallery2.jpg', title: 'Unforgettable Receptions', description: 'Celebrate with your loved ones all night long.' },
    { id: 3, src: '/gallery3.jpg', title: 'Romantic Lighting', description: 'Soft lights that dance with your emotions.' },
    { id: 4, src: '/gallery4.jpg', title: 'Outdoor Bliss', description: 'Nature’s charm embracing your celebration.' },
    { id: 5, src: '/gallery5.jpg', title: 'Elegant Dining', description: 'Fine table setups for royal moments.' },
    { id: 6, src: '/gallery6.jpg', title: 'Candlelit Nights', description: 'Love reflected in every gentle flame.' },
    { id: 7, src: '/gallery7.jpg', title: 'The Dance Floor', description: 'Where laughter and rhythm meet.' },
    { id: 8, src: '/gallery8.jpg', title: 'Intimate Corners', description: 'Little spots made for lasting memories.' },
    { id: 9, src: '/gallery9.jpg', title: 'Floral Dreams', description: 'Petals whispering romance in the air.' },
    { id: 10, src: '/gallery10.jpg', title: 'Golden Hour Magic', description: 'The perfect glow for perfect photos.' },
  ]

  // Width of a single card (approx)
  const cardWidth = () => {
    if (window.innerWidth >= 1024) return carouselRef.current?.clientWidth / 3
    if (window.innerWidth >= 640) return carouselRef.current?.clientWidth / 2
    return carouselRef.current?.clientWidth
  }

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: cardWidth() * index,
        behavior: 'smooth'
      })
      setCurrentIndex(index)
    }
  }

  const nextSlide = () => {
    let nextIndex = currentIndex + 1
    if (nextIndex >= galleryItems.length) nextIndex = 0
    scrollToIndex(nextIndex)
  }

  const prevSlide = () => {
    let prevIndex = currentIndex - 1
    if (prevIndex < 0) prevIndex = galleryItems.length - 1
    scrollToIndex(prevIndex)
  }

  // Auto-play
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide()
      }, 3000) // change slide every 3s
      return () => clearInterval(interval)
    }
  }, [currentIndex, isHovered])

  return (
    <section className="py-16 bg-white px-6 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-sm tracking-[2px] uppercase text-pink-600 mb-6 font-semibold">
          Our Gallery
        </h2>

        {/* Arrows */}
        <button onClick={prevSlide} className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:bg-pink-100">
          <ChevronLeft />
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:bg-pink-100">
          <ChevronRight />
        </button>

        {/* Carousel */}
        <motion.div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto scroll-smooth py-4 px-2 scrollbar-hide"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileTap={{ cursor: "grabbing" }}
        >
          {galleryItems.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3">
              <GalleryCard src={item.src} title={item.title} description={item.description} />
            </div>
          ))}
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {galleryItems.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-pink-600' : 'bg-gray-300'}`}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

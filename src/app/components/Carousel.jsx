'use client'

import React, { useRef, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Carousel({ children }) {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [autoplay.current]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  // 💫 Listen to changes in scroll position to update the active dot
  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi])

  // 💫 Pause autoplay when hovering
  const handleMouseEnter = () => autoplay.current.stop()
  const handleMouseLeave = () => autoplay.current.play()

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

  return (
    <div
      className="relative overflow-hidden group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 🌸 Carousel Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {children}
        </div>
      </div>

      {/* 🌸 Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 -translate-y-1/2 left-2 p-2 bg-white/80 rounded-full shadow hidden group-hover:block"
      >
        <ChevronLeft className="h-5 w-5 text-pink-600" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute top-1/2 -translate-y-1/2 right-2 p-2 bg-white/80 rounded-full shadow hidden group-hover:block"
      >
        <ChevronRight className="h-5 w-5 text-pink-600" />
      </button>

      {/* 🌸 Dots Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex ? 'bg-pink-600 scale-110' : 'bg-pink-200'
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}

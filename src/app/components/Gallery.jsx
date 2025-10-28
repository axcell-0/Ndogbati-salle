'use client'
import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [currentIndex, setCurrentIndex] = useState(0)

  const galleryItems = [
    {
      src: '/gallery1.jpg',
      title: 'The Grand Ceremony',
      description: "Say 'I do' in a setting of pure elegance.",
    },
    {
      src: '/gallery2.jpg',
      title: 'Unforgettable Receptions',
      description: 'Celebrate with your loved ones all night long.',
    },
    {
      src: '/gallery3.jpg',
      title: 'Romantic Lighting',
      description: 'Soft lights that dance with your emotions.',
    },
    {
      src: '/gallery4.jpg',
      title: 'Outdoor Bliss',
      description: 'Nature’s charm embracing your celebration.',
    },
    {
      src: '/gallery5.jpg',
      title: 'Elegant Dining',
      description: 'Fine table setups for royal moments.',
    },
    {
      src: '/gallery6.jpg',
      title: 'Candlelit Nights',
      description: 'Love reflected in every gentle flame.',
    },
    {
      src: '/gallery7.jpg',
      title: 'The Dance Floor',
      description: 'Where laughter and rhythm meet.',
    },
    {
      src: '/gallery8.jpg',
      title: 'Intimate Corners',
      description: 'Little spots made for lasting memories.',
    },
    {
      src: '/gallery9.jpg',
      title: 'Floral Dreams',
      description: 'Petals whispering romance in the air.',
    },
    {
      src: '/gallery10.jpg',
      title: 'Golden Hour Magic',
      description: 'The perfect glow for perfect photos.',
    },
  ]

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => setCurrentIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)

    return () => emblaApi.off('select', onSelect)
  }, [emblaApi])

  const scrollTo = (index) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-sm tracking-[2px] uppercase text-pink-600 mb-6 font-semibold">
          Our Gallery
        </h2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={`min-w-[80%] sm:min-w-[45%] lg:min-w-[30%] flex-shrink-0 bg-white rounded-2xl shadow-md overflow-hidden ${index === 0 ? 'ml-4' : ''} ${index === galleryItems.length - 1 ? 'mr-4' : ''}`}
              >
                <div className="relative w-full h-60">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button onClick={() => emblaApi && emblaApi.scrollPrev()} className="mx-2">
            <ChevronLeft />
          </button>
          <button onClick={() => emblaApi && emblaApi.scrollNext()} className="mx-2">
            <ChevronRight />
          </button>
        </div>

        <div className="flex justify-center mt-4">
          {galleryItems.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? 'bg-pink-600' : 'bg-gray-300'}`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
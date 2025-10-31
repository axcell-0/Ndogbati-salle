'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function GalleryCard({ src, title, description, delay = 0 }) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow hover:shadow-lg transition-shadow overflow-hidden"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <Image
        src={src || "/images/placeholder.jpg"}
        alt={title}
        width={400}
        height={300}
        className="w-full h-64 object-cover"
      />

      {/* Text content */}
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  )
}

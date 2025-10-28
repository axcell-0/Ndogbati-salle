'use client'
import { motion } from 'framer-motion'
import { Users, Utensils, ParkingCircle, Trees } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-pink-600" />,
      title: 'Up to 250 Guests',
      description: 'Spacious ballroom for grand celebrations.',
    },
    {
      icon: <Utensils className="h-8 w-8 text-pink-600" />,
      title: 'In-house Catering',
      description: 'Gourmet menus tailored to your taste.',
    },
    {
      icon: <ParkingCircle className="h-8 w-8 text-pink-600" />,
      title: 'Secure Parking',
      description: 'Convenient for all your guests.',
    },
    {
      icon: <Trees className="h-8 w-8 text-pink-600" />,
      title: 'Scenic Gardens',
      description: 'Breathtaking views for perfect photos.',
    },
  ]

  return (
    <section className="py-16 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-sm tracking-[2px] uppercase text-pink-600 mb-6 font-semibold">
          Our Features
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="border border-pink-200 rounded-2xl p-6 hover:shadow-lg transition-all bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

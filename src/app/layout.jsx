// app/layout.jsx
import './globals.css'

export const metadata = {
  title: 'Ndogbati Salle',
  description: 'Where Love Finds Its Perfect Setting',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

// We'll create Navbar and Footer below
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import ContactForm from './components/ContactForm'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'

export default function Home() {
  return (
    <main className="pt-[80px]">
      <section className="h-screen bg-[url('/landing-bg.png')] bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-playfair drop-shadow-lg">
          Where Love Finds Its Perfect Setting
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl">
          Welcome to Ndogpassi Salle de Banquet
        </p>
        <button className="mt-6 px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all">
          Book your Date
        </button>
      </section>
      <Features />
      <Gallery/>
      <Testimonials/>
      <ContactForm/>
    </main>
  )
}

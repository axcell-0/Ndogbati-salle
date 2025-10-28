export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Ndogbati Hall. All rights reserved.</p>
        <p className="mt-2 text-sm">123 Wedding St., Douala, Cameroon | +123 456 7890</p>
      </div>
    </footer>
  )
}

import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-white">
            Angel Soriano
          </Link>
          
          {/* Menú Desktop */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="/Curriculum Angel.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              CV
            </a>
            <Link to="/contacto" className="text-orange-500 hover:text-orange-600 transition font-medium">
              Contacto
            </Link>
          </div>

          {/* Botón Hamburguesa */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Menú Mobile */}
        {isOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700 py-4 space-y-3">
            <a 
              href="/Curriculum Angel.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-gray-300 hover:text-white transition px-4 py-2"
              onClick={closeMenu}
            >
              CV
            </a>
            <Link 
              to="/contacto" 
              className="block text-orange-500 hover:text-orange-600 transition font-medium px-4 py-2"
              onClick={closeMenu}
            >
              Contacto
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

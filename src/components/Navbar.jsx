import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-6xl">
      <div className={`transition-all duration-300 ${scrolled ? 'bg-white/10' : 'bg-white/5'} backdrop-blur-md rounded-full border border-white/20 shadow-2xl px-6 py-3`}>
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold flex items-center gap-2">
            <img src="/rdxlogo.jpg" alt="RDX Logo" className="h-8 w-8 rounded-full" />
            <span className="text-primary">RDX</span> <span className="text-white">Fast Food</span>
          </div>

          <div className="hidden md:flex space-x-8 text-base">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-300 hover:text-primary transition-colors duration-300">
                {link.name}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden md:block bg-gradient-to-r from-primary to-secondary px-6 py-2 rounded-full font-semibold text-base hover:scale-105 transition-transform duration-300">
            Order Now
          </a>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-xl text-white">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-primary transition-colors py-2">
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="block bg-gradient-to-r from-primary to-secondary px-6 py-2 rounded-full font-semibold text-center">
              Order Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

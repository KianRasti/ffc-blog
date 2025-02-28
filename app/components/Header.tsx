"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChefHat } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold">
          <ChefHat size={32} className="text-ffc-secondary" />
          <span className="font-display text-ffc-primary">Flavor Fusion</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-ffc-text hover:text-ffc-accent transition-colors">
            Home
          </Link>
          <Link href="/recipes" className="text-ffc-text hover:text-ffc-accent transition-colors">
            All Recipes
          </Link>
          <Link href="/submit-recipe" className="text-ffc-text hover:text-ffc-accent transition-colors">
            Submit Recipe
          </Link>
          <Link href="/about" className="text-ffc-text hover:text-ffc-accent transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-ffc-text hover:text-ffc-accent transition-colors">
            Contact
          </Link>
        </nav>
        <button className="md:hidden text-ffc-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4 bg-white">
            <Link
              href="/"
              className="py-2 text-ffc-text hover:text-ffc-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/recipes"
              className="py-2 text-ffc-text hover:text-ffc-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              All Recipes
            </Link>
            <Link
              href="/submit-recipe"
              className="py-2 text-ffc-text hover:text-ffc-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Submit Recipe
            </Link>
            <Link
              href="/about"
              className="py-2 text-ffc-text hover:text-ffc-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="py-2 text-ffc-text hover:text-ffc-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

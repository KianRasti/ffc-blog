import Link from "next/link"
import { Facebook, Twitter, Instagram, ChefHat } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-ffc-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <Link href="/" className="flex items-center space-x-2 text-2xl font-bold">
              <ChefHat size={32} className="text-ffc-secondary" />
              <span className="font-display">Flavor Fusion</span>
            </Link>
            <p className="mt-2 text-sm">Discover culinary masterpieces and unleash your inner chef.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2 font-display">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-ffc-secondary transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="hover:text-ffc-secondary transition-colors duration-200">
                  Recipes
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-ffc-secondary transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ffc-secondary transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2 font-display">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/recipes/breakfast" className="hover:text-ffc-secondary transition-colors duration-200">
                  Breakfast
                </Link>
              </li>
              <li>
                <Link href="/recipes/lunch" className="hover:text-ffc-secondary transition-colors duration-200">
                  Lunch
                </Link>
              </li>
              <li>
                <Link href="/recipes/dinner" className="hover:text-ffc-secondary transition-colors duration-200">
                  Dinner
                </Link>
              </li>
              <li>
                <Link href="/recipes/desserts" className="hover:text-ffc-secondary transition-colors duration-200">
                  Desserts
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2 font-display">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-ffc-secondary transition-colors duration-200">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-ffc-secondary transition-colors duration-200">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-ffc-secondary transition-colors duration-200">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Flavor Fusion Cooking. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


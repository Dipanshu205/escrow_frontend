import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/">
            <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg shadow-neon-blue flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-shadow-neon text-white">
              SecureMoney
            </span>
          </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/form"
              className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
            >
              Create Deals
            </a>
            <a
              href="#how-it-works"
              className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
            >
              How It Works
            </a>
            <a
              href="#features"
              className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
            >
              Contact
            </a>
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg shadow-neon-blue transition-all duration-300 hover:shadow-neon-blue-lg">
              Get Started
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-6 py-4 space-y-4">
          <a
            href="/form"
            className="block text-slate-300 hover:text-blue-400 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Create Deals
          </a>
          <a
            href="#how-it-works"
            className="block text-slate-300 hover:text-blue-400 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </a>
          <a
            href="#features"
            className="block text-slate-300 hover:text-blue-400 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a
            href="#contact"
            className="block text-slate-300 hover:text-blue-400 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg shadow-neon-blue transition-all duration-300 hover:shadow-neon-blue-lg"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

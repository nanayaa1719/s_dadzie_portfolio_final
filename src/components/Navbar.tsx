import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [{
    name: "Home",
    href: "/"
  }, {
    name: "SQL",
    href: "/sql"
  }, {
    name: "Tableau",
    href: "/tableau"
  }, {
    name: "Excel",
    href: "/excel"
  }, {
    name: "Cybersecurity",
    href: "/security"
  }, {
    name: "Resume",
    href: "/resume"
  }];
  return <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">Samantha</span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.name} to={link.href} className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                {link.name}
              </Link>)}
          </div>
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-gray-900">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => <Link key={link.name} to={link.href} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
                {link.name}
              </Link>)}
          </div>
        </div>}
    </nav>;
};
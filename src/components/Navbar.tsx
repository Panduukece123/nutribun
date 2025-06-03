import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Wheat, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="logo.png"
             className="h-8 w-8 text-green-600" 
             alt="" /> 
            <span className="ml-2 text-2xl font-bold text-green-800">Nutribun</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" label="Home" />
            <NavLink to="/about" label="About Us" />
            <NavLink to="/products" label="Products" />
            <NavLink to="/contact" label="Contact" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-green-800 hover:text-green-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-3">
            <MobileNavLink to="/" label="Home" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="/about" label="About Us" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="/products" label="Products" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="/contact" label="Contact" onClick={() => setIsOpen(false)} />
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, label }: { to: string; label: string }) => (
  <Link
    to={to}
    className="text-green-800 font-medium hover:text-green-600 transition duration-200"
  >
    {label}
  </Link>
);

const MobileNavLink = ({ to, label, onClick }: { to: string; label: string; onClick: () => void }) => (
  <Link
    to={to}
    className="block text-green-800 font-medium hover:text-green-600 transition duration-200"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Navbar;
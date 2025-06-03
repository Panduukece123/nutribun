import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img src="logo.png" className="h-8 w-8" alt="Nutribun Logo" />
              <span className="ml-2 text-2xl font-bold text-white">Nutribun</span>
            </div>
            <p className="text-green-100 mb-6">
              Delicious, nutritious bread made with love and the finest natural ingredients.
            </p>
            {/* You can add social media icons here if needed */}
            <div className="flex space-x-4"></div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-200 hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-green-200 hover:text-white transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-green-200 hover:text-white transition duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-green-200 hover:text-white transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-300 mr-2 mt-1" />
                <span className="text-green-100">UPNVJ Pondok Labu</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-300 mr-2" />
                <span className="text-green-100">+62 87879122035</span>
              </li>
              <li className="flex items-center">
                <Instagram className="h-5 w-5 text-green-300 mr-2" />
                <span className="text-green-100">@nutribun_id</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Pre-Order */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Pre Order</h3>
            <p className="text-green-100 mb-4">
              Subscribe to get special offers, free giveaways, and health tips.
            </p>
            <div className="flex flex-col space-y-2">
              <a
                href="https://bit.ly/PREORDERNUTRIBUN"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 text-white text-center rounded hover:bg-green-500 transition duration-300"
              >
                Order NOW
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-green-800 mt-12 pt-8 text-center text-green-200">
          <p>&copy; {new Date().getFullYear()} Nutribun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

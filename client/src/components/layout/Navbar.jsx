import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/meet-founder', label: 'Meet the Founder' },
    { path: '/services', label: 'Services' },
    { path: '/hr-academy', label: 'HR Academy' },
    { path: '/partnerships', label: 'Partnerships' },
    { path: '/blog', label: 'Insights' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-primary/95 backdrop-blur-md text-white sticky top-0 z-50 shadow-lg border-b border-white/10">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
              <span className="text-primary font-bold text-lg">BT</span>
            </div>
            <div className="leading-tight">
              <span className="font-playfair text-lg font-bold tracking-wide">
                Beyond <span className="text-secondary">Transform</span>
              </span>
              <p className="text-xs text-white/60">Leadership & Transformation</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative transition-all duration-300 hover:text-secondary ${
                  isActive(link.path) ? 'text-secondary' : 'text-white/80'
                }`}
              >
                {link.label}

                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-secondary rounded"
                  />
                )}
              </Link>
            ))}

            {/* Secondary CTA (non-competing) */}
            {/* <Link
              to="/contact"
              className="text-white/80 hover:text-secondary transition-colors text-sm"
            >
              Contact
            </Link> */}
          </div>

          {/* Primary CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-secondary text-primary px-6 py-2 rounded-md font-semibold hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Book Strategy Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="md:hidden py-4 border-t border-white/10 space-y-2"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-2 px-2 rounded-md transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-secondary bg-white/5'
                      : 'text-white/80 hover:text-secondary hover:bg-white/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Contact (secondary) */}
              {/* <Link
                to="/contact"
                className="block py-2 px-2 text-white/80 hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link> */}

              {/* Primary CTA */}
              <Link
                to="/contact"
                className="block mt-4 bg-secondary text-primary text-center px-6 py-3 rounded-md font-semibold shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Book Strategy Call
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
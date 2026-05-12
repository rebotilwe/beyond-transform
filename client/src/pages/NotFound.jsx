import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated 404 */}
          <div className="relative mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-primary opacity-10">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl md:text-7xl mb-4">🦋</div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  Page Not Found
                </h2>
              </div>
            </div>
          </div>

          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
            Oops! The page you're looking for seems to have flown away like a butterfly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary inline-flex items-center gap-2">
              <FaHome /> Back to Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="btn-outline inline-flex items-center gap-2"
            >
              <FaArrowLeft /> Go Back
            </button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm mb-4">Quick Links:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/services" className="text-gray-600 hover:text-secondary transition">Services</Link>
              <Link to="/meet-founder" className="text-gray-600 hover:text-secondary transition">Meet Founder</Link>
              <Link to="/hr-academy" className="text-gray-600 hover:text-secondary transition">HR Academy</Link>
              <Link to="/contact" className="text-gray-600 hover:text-secondary transition">Contact</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;

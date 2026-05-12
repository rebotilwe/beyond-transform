import { Link } from 'react-router-dom';
import {
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Beyond <span className="text-secondary">Transform</span>
            </h3>
            <p className="text-gray-300 text-sm">
              Creating Stories and Changing Lives through innovative HR consulting and empowerment solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-secondary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-secondary transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/meet-founder" className="text-gray-300 hover:text-secondary transition">
                  Meet the Founder
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-secondary transition">
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-secondary transition">
                  HR Consulting
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-secondary transition">
                  Coaching
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-secondary transition">
                  Youth Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-secondary transition">
                  Women Empowerment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-secondary" />
                <span className="text-gray-300">info@beyondtransform.com</span>
              </div>

              <div className="flex items-center space-x-3">
                <FaPhone className="text-secondary" />
                <span className="text-gray-300">+27 (0) 11 123 4567</span>
              </div>

              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-secondary" />
                <span className="text-gray-300">Johannesburg, South Africa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social + Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-secondary transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-secondary transition"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-secondary transition"
            >
              <FaFacebookF />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center">
            © 2024 Beyond Transform. All rights reserved.
          </p>

          {/* Developer Credit */}
          <a
            href="https://afribizconnect.co.za/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-sm hover:text-secondary transition"
          >
            Developed by AfriBiz Connect
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
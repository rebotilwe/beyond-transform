import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-black/60"></div>

      <div className="container-custom relative z-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="uppercase tracking-[0.3em] text-secondary font-semibold text-sm">
            Beyond Transform
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mt-6 mb-6 text-white">
            Creating Stories.
            <br />
            <span className="text-secondary">Changing Lives.</span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed mb-10 text-gray-200 max-w-2xl">
            Beyond Transform is a premium Human Capital and Transformation
            consultancy empowering organisations, women, youth, and
            communities through future-focused solutions that drive meaningful
            societal impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary text-center">
              Book Consultation
            </Link>
            <Link to="/services" className="btn-outline text-center">
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
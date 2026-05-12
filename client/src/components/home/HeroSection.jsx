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
      {/* Premium overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-black/70"></div>

      <div className="container-custom relative z-10 py-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-4xl"
        >

          {/* Brand Tag */}
          <span className="uppercase tracking-[0.35em] text-secondary font-semibold text-xs md:text-sm">
            Human Capital • Leadership • Transformation
          </span>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mt-6 mb-6 text-white">
            Building Leaders.
            <br />
            <span className="text-secondary">Transforming Futures.</span>
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-xl leading-relaxed mb-10 text-gray-200 max-w-2xl">
            Beyond Transform is a premium Human Capital consultancy focused on
            leadership development, youth empowerment, and organisational
            transformation. We partner with organisations to unlock human
            potential and drive measurable impact.
          </p>

          {/* Key credibility line (NEW – IMPORTANT) */}
          <div className="mb-10 flex flex-wrap gap-6 text-sm text-white/70">
            <span>• Leadership Development</span>
            <span>• HR Transformation</span>
            <span>• Youth Empowerment</span>
            <span>• Strategic Consulting</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="bg-secondary text-primary px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-all duration-300 shadow-md text-center"
            >
              Book Strategy Call
            </Link>

            <Link
              to="/services"
              className="border border-white/30 text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-all duration-300 text-center"
            >
              Explore Solutions
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
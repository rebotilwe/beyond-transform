import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WhyBeyondTransform = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section with Hover Effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="group"
          >
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
              alt="Leadership team collaboration at Beyond Transform"
              loading="lazy"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
              Why Beyond Transform
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6 leading-tight">
              Human-Centric Transformation for the Future of Work
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              We believe transformation starts with people. Beyond Transform
              partners with organisations, communities, and leaders to build
              future-ready workplaces while empowering individuals to unlock
              their full potential.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Our work combines strategic HR consulting, leadership coaching,
              youth empowerment, women development, and educational
              transformation to create sustainable impact across South Africa
              and beyond.
            </p>

            {/* Impact Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">15+</div>
                <div className="text-xs text-gray-500">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">100+</div>
                <div className="text-xs text-gray-500">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">5000+</div>
                <div className="text-xs text-gray-500">Lives Impacted</div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-secondary hover:text-primary transition-all duration-300 cursor-pointer">
                Future of Work
              </div>
              <div className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-secondary hover:text-primary transition-all duration-300 cursor-pointer">
                Leadership Development
              </div>
              <div className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-secondary hover:text-primary transition-all duration-300 cursor-pointer">
                Socio-Economic Impact
              </div>
            </div>

            {/* CTA Button */}
            <Link to="/about" className="btn-primary inline-block">
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyBeyondTransform;
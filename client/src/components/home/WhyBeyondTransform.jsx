import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WhyBeyondTransform = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
              alt="Leadership"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </motion.div>

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
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-primary text-white px-4 py-2 rounded-lg text-sm">
                Future of Work
              </div>
              <div className="bg-primary text-white px-4 py-2 rounded-lg text-sm">
                Leadership Development
              </div>
              <div className="bg-primary text-white px-4 py-2 rounded-lg text-sm">
                Socio-Economic Impact
              </div>
            </div>
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
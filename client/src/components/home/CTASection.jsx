import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 bg-secondary text-primary">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let's Build a Future That Transforms Lives
          </h2>
          <p className="text-lg md:text-xl mb-10 leading-relaxed">
            Partner with Beyond Transform to create sustainable
            people-centered solutions that empower organizations,
            communities, and future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary text-white px-10 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 inline-block"
            >
              Get In Touch Today
            </Link>
            <Link
              to="/case-studies"
              className="border-2 border-primary text-primary px-10 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 inline-block"
            >
              View Success Stories
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
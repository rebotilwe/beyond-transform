import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
// CORRECT
import { services } from '../../data/services';

const ServicesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
            Our Services
          </span>
          <h2 className="section-title mt-4">
            Transformative Human-Centered Solutions
          </h2>
          <p className="section-subtitle">
            We partner with organizations, leaders, communities, and
            individuals to deliver impactful solutions that drive growth,
            transformation, and long-term sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="mb-6">
                  <IconComponent className="text-4xl text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="text-secondary font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn More <FaArrowRight className="text-sm" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
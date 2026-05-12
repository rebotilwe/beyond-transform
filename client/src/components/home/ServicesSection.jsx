import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { services } from '../../data/services';

const ServicesSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">

      <div className="container-custom">

        {/* Section Header (UPGRADED AUTHORITY FRAMING) */}
        <div className="text-center mb-16">

          <span className="text-secondary uppercase tracking-[0.25em] font-semibold text-xs">
            What We Do
          </span>

          <h2 className="section-title mt-4">
            Human Capital Transformation Solutions
          </h2>

          <p className="section-subtitle max-w-3xl mx-auto">
            We design and deliver strategic human capital, leadership, and
            development solutions that help organisations unlock performance,
            build resilient leaders, and drive long-term transformation.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 group"
              >

                {/* Icon */}
                <div className="mb-6">
                  <IconComponent className="text-4xl text-secondary group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-primary">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>

                {/* CTA Link */}
                <Link
                  to={service.link}
                  className="text-secondary font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300 text-sm"
                >
                  Explore Service <FaArrowRight className="text-xs" />
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
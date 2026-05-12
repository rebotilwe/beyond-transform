import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { partnerships } from '../../data/partners';

const PartnershipsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
            Strategic Partnerships
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4">
            Collaborating for Greater Impact
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Beyond Transform partners with leading organizations to drive meaningful socio-economic change
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partnerships.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">{partner.icon}</div>
              <h3 className="font-bold text-primary text-lg">{partner.name}</h3>
              <p className="text-sm text-gray-500">{partner.role}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/partnerships" className="text-secondary font-semibold hover:underline inline-flex items-center gap-2">
            View All Partnerships →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
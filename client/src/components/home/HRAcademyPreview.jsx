import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher } from 'react-icons/fa';

const HRAcademyPreview = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-primary-light text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <FaChalkboardTeacher className="text-5xl text-secondary mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              HR Academy
            </h2>
            <p className="text-xl text-gray-200 mb-6">
              Bridging the gap between academic knowledge and workplace excellence.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-secondary">✓</span> Graduate Development Program
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary">✓</span> Internship & Mentorship
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary">✓</span> Practical Skills Development
              </li>
            </ul>
            <Link to="/hr-academy" className="btn-outline inline-block">
              Learn More About HR Academy
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm text-center"
          >
            <div className="text-6xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold mb-4">Program Impact</h3>
            <p className="text-gray-200">Developing the next generation of HR leaders through real-world experience.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HRAcademyPreview;
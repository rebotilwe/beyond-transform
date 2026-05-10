import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FounderStoryPreview = () => {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div className="text-6xl mb-4">👩‍💼</div>
            <h3 className="text-2xl font-bold mb-4">From Resilience to Global Impact</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Founder Dirusha Ganapathy Juta's journey from being raised by a single mother 
              to becoming one of the "100 Most Influential Global HR Professionals" is the 
              heart of Beyond Transform's mission.
            </p>
            <Link to="/meet-founder" className="text-secondary font-semibold hover:underline">
              Read the Full Story →
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-4">Professional Affiliations</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-secondary">✓</span> SABPP - Change Management Committee Chair
              </div>
              <div className="flex items-center gap-3">
                <span className="text-secondary">✓</span> SACDA - Board Member
              </div>
              <div className="flex items-center gap-3">
                <span className="text-secondary">✓</span> ICF - International Coach Federation
              </div>
              <div className="flex items-center gap-3">
                <span className="text-secondary">✓</span> Coaches and Mentors of SA
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderStoryPreview;
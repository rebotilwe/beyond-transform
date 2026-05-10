import { motion } from 'framer-motion';
import { FaAward, FaStar } from 'react-icons/fa';
// CORRECT - Add this
import { awards } from '../../data/awards';

const AwardsStrip = () => {
  return (
    <section className="py-6 bg-secondary text-primary overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center items-center gap-6"
        >
          <FaAward className="text-2xl hidden md:block" />
          {awards.map((award, index) => (
            <div key={index} className="flex items-center gap-2">
              <FaStar className="text-yellow-600 text-sm" />
              <span className="font-semibold text-xs md:text-sm">
                {award}
              </span>
              {index < awards.length - 1 && (
                <span className="text-primary/30 mx-2 hidden md:inline">|</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsStrip;
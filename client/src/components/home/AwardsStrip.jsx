import { motion } from 'framer-motion';
import { FaAward, FaStar } from 'react-icons/fa';
import { awards } from '../../data/awards';

const AwardsStrip = () => {
  return (
    <section className="py-5 bg-secondary text-primary overflow-hidden border-t border-black/10">

      <div className="container-custom">

        {/* Header label (NEW - adds authority framing) */}
        <div className="flex justify-center items-center mb-3">
          <span className="uppercase tracking-[0.25em] text-xs font-semibold">
            Recognition & Industry Impact
          </span>
        </div>

        {/* Animated strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-center"
        >

          <FaAward className="text-xl md:text-2xl hidden md:block" />

          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2"
            >
              <FaStar className="text-yellow-700 text-xs md:text-sm" />

              <span className="font-medium text-[11px] md:text-sm tracking-wide">
                {award}
              </span>

              {index < awards.length - 1 && (
                <span className="text-primary/30 mx-2 hidden md:inline">
                  |
                </span>
              )}
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default AwardsStrip;
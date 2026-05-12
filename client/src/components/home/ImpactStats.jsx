import { motion } from 'framer-motion';
import { stats } from '../../data/stats';

const ImpactStats = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">

      <div className="container-custom">

        {/* Section Header (NEW - adds authority framing) */}
        <div className="text-center mb-12">
          <span className="uppercase tracking-[0.25em] text-xs text-gray-500 font-semibold">
            Our Impact in Numbers
          </span>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-3">
            Transforming People, Organisations & Futures
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="text-center group"
            >

              {/* Number */}
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-gray-600 text-xs md:text-sm font-medium tracking-wide leading-snug">
                {stat.label}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
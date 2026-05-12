import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaAward, FaUsers, FaMicrophone } from 'react-icons/fa';

const FounderStoryPreview = () => {

  return (
    <section className="py-28 bg-primary text-white relative overflow-hidden">

      <div className="container-custom">

        {/* Section Header */}
        <div className="text-center mb-14">

          <span className="text-secondary uppercase tracking-[0.25em] font-semibold text-xs">
            Leadership & Vision
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Meet the Founder Behind Beyond Transform
          </h2>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            A leadership journey rooted in resilience, excellence, and global human capital transformation.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT: Narrative (PRIMARY FOCUS) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/10 rounded-2xl p-10 backdrop-blur-sm border border-white/10"
          >

            <div className="flex items-center gap-5 mb-8">

              <div className="text-6xl">👩‍💼</div>

              <div>
                <h3 className="text-2xl font-bold">
                  Dirusha Ganapathy Juta
                </h3>
                <p className="text-secondary text-sm">
                  Founder & Managing Director
                </p>
              </div>

            </div>

            <FaQuoteLeft className="text-secondary text-3xl mb-6 opacity-50" />

            <p className="text-gray-200 leading-relaxed text-lg mb-8">
              "Beyond Transform was born from a belief that human potential is
              the most powerful driver of societal change. My journey — from
              humble beginnings to being recognised among the Top 100 Global HR
              Professionals — reflects what is possible when purpose meets
              discipline and resilience."
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">

              <div className="flex items-center gap-3">
                <FaAward className="text-secondary" />
                <span className="text-sm">Global HR Recognition</span>
              </div>

              <div className="flex items-center gap-3">
                <FaUsers className="text-secondary" />
                <span className="text-sm">Board Leadership Roles</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMicrophone className="text-secondary" />
                <span className="text-sm">International Speaker</span>
              </div>

              <div className="flex items-center gap-3">
                <FaAward className="text-secondary" />
                <span className="text-sm">Award-Winning Leader</span>
              </div>

            </div>

            <Link
              to="/meet-founder"
              className="text-secondary font-semibold hover:underline inline-flex items-center gap-2"
            >
              Explore Full Leadership Journey →
            </Link>

          </motion.div>

          {/* RIGHT: Credentials (SUPPORTING STRUCTURE) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/10 rounded-2xl p-10 backdrop-blur-sm border border-white/10"
          >

            <h3 className="text-2xl font-bold mb-8">
              Professional Leadership Network
            </h3>

            <div className="space-y-6 text-gray-200">

              <div>
                <p className="font-semibold text-white">SABPP</p>
                <p className="text-sm">National Chair – Change Management Committee</p>
              </div>

              <div>
                <p className="font-semibold text-white">SACDA</p>
                <p className="text-sm">Board Member – Career Development Association</p>
              </div>

              <div>
                <p className="font-semibold text-white">ICF</p>
                <p className="text-sm">International Coaching Federation Member</p>
              </div>

              <div>
                <p className="font-semibold text-white">Destinato Global NPO</p>
                <p className="text-sm">Vice President – Human Resources</p>
              </div>

            </div>

          </motion.div>

        </div>

        {/* AWARDS STRIP (INTEGRATED — NOT SEPARATE) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-10 border-t border-white/10"
        >

          <div className="flex flex-wrap justify-center gap-10 text-center">

            <div>
              <div className="text-secondary text-2xl font-bold">🏆</div>
              <p className="text-xs text-gray-300 mt-2">Top 100 Global HR Professionals</p>
            </div>

            <div>
              <div className="text-secondary text-2xl font-bold">⭐</div>
              <p className="text-xs text-gray-300 mt-2">HR Leadership Recognition</p>
            </div>

            <div>
              <div className="text-secondary text-2xl font-bold">📺</div>
              <p className="text-xs text-gray-300 mt-2">Media Featured Leader</p>
            </div>

            <div>
              <div className="text-secondary text-2xl font-bold">🌍</div>
              <p className="text-xs text-gray-300 mt-2">Global Speaker Circuit</p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default FounderStoryPreview;
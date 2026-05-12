import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher } from 'react-icons/fa';

const HRAcademyPreview = () => {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">

      {/* Subtle background overlay upgrade */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-black/40"></div>

      <div className="container-custom relative z-10">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            {/* Icon */}
            <FaChalkboardTeacher className="text-5xl text-secondary mb-6" />

            {/* Section Label */}
            <span className="uppercase tracking-[0.25em] text-xs text-white/60">
              Talent Development Pipeline
            </span>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              HR Academy
            </h2>

            {/* Strategic description */}
            <p className="text-lg text-gray-200 mb-6 leading-relaxed max-w-xl">
              Bridging the gap between academic learning and real-world workplace
              excellence by developing future-ready HR professionals through
              structured mentorship, practical exposure, and industry integration.
            </p>

            {/* Key value points */}
            <ul className="space-y-3 mb-8 text-sm text-gray-200">

              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">●</span>
                Graduate Development & Career Readiness
              </li>

              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">●</span>
                Structured Internship & Mentorship Programs
              </li>

              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">●</span>
                Workplace Simulation & Skills Application
              </li>

            </ul>

            {/* CTA */}
            <Link
              to="/hr-academy"
              className="bg-secondary text-primary px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-all duration-300 inline-block"
            >
              Explore Academy
            </Link>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/10 border border-white/10 rounded-2xl p-10 backdrop-blur-md"
          >

            {/* Icon / visual */}
            <div className="text-6xl mb-6 text-center">🎓</div>

            {/* Heading */}
            <h3 className="text-2xl font-bold mb-4 text-center">
              Building Future HR Leaders
            </h3>

            {/* Description */}
            <p className="text-gray-200 text-center mb-8 text-sm leading-relaxed">
              A structured transformation pathway designed to equip graduates
              with the skills, mindset, and experience required to succeed in
              modern HR environments.
            </p>

            {/* Impact stats (NEW - BIG UPGRADE) */}
            <div className="grid grid-cols-2 gap-6 text-center">

              <div>
                <div className="text-2xl font-bold text-secondary">500+</div>
                <div className="text-xs text-white/60">Graduates Trained</div>
              </div>

              <div>
                <div className="text-2xl font-bold text-secondary">80%</div>
                <div className="text-xs text-white/60">Placement Readiness</div>
              </div>

              <div>
                <div className="text-2xl font-bold text-secondary">12+</div>
                <div className="text-xs text-white/60">Industry Partners</div>
              </div>

              <div>
                <div className="text-2xl font-bold text-secondary">1:1</div>
                <div className="text-xs text-white/60">Mentorship Model</div>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default HRAcademyPreview;
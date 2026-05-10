import { motion } from 'framer-motion';
import {
  FaAward,
  FaUsers,
  FaMicrophone,
  FaBookOpen,
  FaGlobeAfrica,
  FaHandshake,
  FaArrowRight,
} from 'react-icons/fa';

const MeetFounder = () => {
  const awards = [
    '100 Most Influential Global HR Professionals - World HRD Congress (2017)',
    'HR Leader of the Year - Future of HR Awards (2017)',
    'Finalist - HR Hall of Fame - Future of HR Awards (2018)',
    'Finalist - HR Consultancy of the Year - Future of HR Awards (2018)',
  ];

  const stats = [
    {
      icon: <FaAward className="text-secondary text-3xl" />,
      title: '15+ Years',
      subtitle: 'Global HR Experience',
    },
    {
      icon: <FaMicrophone className="text-secondary text-3xl" />,
      title: 'International',
      subtitle: 'Keynote Speaker',
    },
    {
      icon: <FaBookOpen className="text-secondary text-3xl" />,
      title: 'Board Member',
      subtitle: 'SACDA',
    },
    {
      icon: <FaUsers className="text-secondary text-3xl" />,
      title: 'Vice President HR',
      subtitle: 'Destinato Global NPO',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-black/70"></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="uppercase tracking-[0.3em] text-secondary font-semibold text-sm">
              Meet The Founder
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-6 mb-6 leading-tight">
              Dirusha
              <br />
              Ganapathy Juta
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
              Award-winning HR professional, transformational leader, speaker,
              and founder of Beyond Transform — committed to creating meaningful
              societal and organizational impact through people-centered
              leadership and human capital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Founder Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
                alt="Founder"
                className="rounded-2xl shadow-2xl w-full h-[650px] object-cover"
              />
            </motion.div>

            {/* Founder Bio */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
                Leadership & Vision
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6 leading-tight">
                Creating Stories &
                <br />
                Changing Lives
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Dirusha Ganapathy Juta is an accomplished Human Capital
                Executive, transformational leader, and founder of Beyond
                Transform — a consultancy dedicated to empowering organizations,
                communities, women, and youth through meaningful transformation.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Her journey is deeply rooted in resilience, purpose, and
                empowerment. Inspired by personal experiences and a passion for
                creating opportunities for others, she built Beyond Transform to
                move beyond traditional HR consulting and create sustainable
                societal impact.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                Through leadership development, employability readiness,
                workforce transformation, and community empowerment initiatives,
                Dirusha continues to inspire meaningful change across South
                Africa and beyond.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium">
                  Human Capital Executive
                </div>

                <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium">
                  Global Speaker
                </div>

                <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium">
                  Leadership Coach
                </div>

                <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium">
                  Transformation Strategist
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
              Professional Highlights
            </span>

            <h2 className="section-title mt-4">
              Recognized Leadership & Industry Excellence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="flex justify-center mb-6">
                  {stat.icon}
                </div>

                <h3 className="text-2xl font-bold text-primary mb-2">
                  {stat.title}
                </h3>

                <p className="text-gray-600">{stat.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
              Awards & Recognition
            </span>

            <h2 className="section-title mt-4">
              Celebrating Excellence & Impact
            </h2>

            <p className="section-subtitle">
              Dirusha’s leadership and contribution to the HR and transformation
              industry have been recognized both locally and internationally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex gap-5"
              >
                <div>
                  <FaAward className="text-secondary text-3xl mt-1" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Industry Recognition
                  </h3>

                  <p className="text-gray-600 leading-relaxed">{award}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-24 bg-primary text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
                Professional Affiliations
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
                Industry Leadership &
                <br />
                Global Influence
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Dirusha actively contributes to the advancement of leadership,
                transformation, and human capital development through
                professional affiliations, board memberships, speaking
                engagements, and mentorship initiatives.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg">
                  SABPP
                </div>

                <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg">
                  SACDA
                </div>

                <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg">
                  ICF
                </div>

                <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg">
                  Coaches & Mentors of SA
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <FaMicrophone className="text-secondary text-4xl mb-4" />

                <h3 className="text-2xl font-bold mb-3">
                  International Speaker
                </h3>

                <p className="text-gray-300">
                  Sharing thought leadership and transformational insights across
                  global platforms.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <FaHandshake className="text-secondary text-4xl mb-4" />

                <h3 className="text-2xl font-bold mb-3">
                  Community Impact
                </h3>

                <p className="text-gray-300">
                  Empowering communities through development and transformation
                  initiatives.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <FaUsers className="text-secondary text-4xl mb-4" />

                <h3 className="text-2xl font-bold mb-3">
                  Leadership Development
                </h3>

                <p className="text-gray-300">
                  Coaching and mentoring future leaders across industries and
                  communities.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <FaGlobeAfrica className="text-secondary text-4xl mb-4" />

                <h3 className="text-2xl font-bold mb-3">
                  Global Perspective
                </h3>

                <p className="text-gray-300">
                  Combining local impact with internationally recognized HR and
                  transformation expertise.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-primary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Inspiring Transformation Through Leadership
            </h2>

            <p className="text-lg md:text-xl mb-10 leading-relaxed">
              Connect with Beyond Transform to partner on meaningful
              transformation, leadership development, and future-focused human
              capital solutions.
            </p>

            <a
              href="/contact"
              className="bg-primary text-white px-10 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 inline-flex items-center gap-3"
            >
              Connect With Us
              <FaArrowRight />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MeetFounder;
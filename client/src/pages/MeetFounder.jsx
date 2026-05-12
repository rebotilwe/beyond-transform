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
      subtitle: 'Human Capital Leadership',
    },
    {
      icon: <FaMicrophone className="text-secondary text-3xl" />,
      title: 'Global Speaker',
      subtitle: 'Leadership & Transformation',
    },
    {
      icon: <FaBookOpen className="text-secondary text-3xl" />,
      title: 'Board Leadership',
      subtitle: 'SACDA & Industry Bodies',
    },
    {
      icon: <FaUsers className="text-secondary text-3xl" />,
      title: 'Executive Roles',
      subtitle: 'HR & Non-Profit Sector',
    },
  ];

  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
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
              A transformational human capital leader, executive coach, and global speaker
              shaping the future of work through people-centred leadership, organisational
              transformation, and sustainable socio-economic impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

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

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
                Leadership Narrative
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6 leading-tight">
                Creating Stories That
                <br />
                Transform Lives
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Dirusha Ganapathy Juta is the Founder of Beyond Transform,
                a consultancy established to redefine how organisations approach
                human capital, leadership development, and workforce transformation.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Her work is grounded in resilience and purpose — translating
                lived experience and executive expertise into scalable transformation
                strategies that empower organisations and communities.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                She continues to drive impact across South Africa and globally
                through leadership development, youth empowerment, and strategic
                human capital advisory.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <span className="bg-gray-100 px-4 py-2 rounded-lg text-sm">Human Capital Executive</span>
                <span className="bg-gray-100 px-4 py-2 rounded-lg text-sm">Global Speaker</span>
                <span className="bg-gray-100 px-4 py-2 rounded-lg text-sm">Leadership Coach</span>
                <span className="bg-gray-100 px-4 py-2 rounded-lg text-sm">Transformation Strategist</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom text-center mb-16">
          <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
            Professional Impact
          </span>

          <h2 className="section-title mt-4">
            Leadership & Industry Recognition
          </h2>
        </div>

        <div className="container-custom grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="flex justify-center mb-6">{stat.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-2">{stat.title}</h3>
              <p className="text-gray-600">{stat.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AWARDS */}
      <section className="py-24 bg-white">
        <div className="container-custom text-center mb-16">
          <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
            Recognition
          </span>

          <h2 className="section-title mt-4">
            Global Awards & Industry Excellence
          </h2>
        </div>

        <div className="container-custom grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg flex gap-5"
            >
              <FaAward className="text-secondary text-3xl mt-1" />

              <div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  Industry Recognition
                </h3>
                <p className="text-gray-600">{award}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AFFILIATIONS (SIMPLIFIED PREMIUM STYLE) */}
      <section className="py-24 bg-primary text-white">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
              Global Influence
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Leadership Beyond Borders
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Through board roles, speaking engagements, and strategic partnerships,
              Dirusha contributes to shaping the future of leadership, human capital,
              and transformation across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-2xl">SABPP</div>
            <div className="bg-white/10 p-6 rounded-2xl">SACDA</div>
            <div className="bg-white/10 p-6 rounded-2xl">ICF</div>
            <div className="bg-white/10 p-6 rounded-2xl">Mentors SA</div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-primary text-center">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let’s Build Meaningful Impact Together
          </h2>

          <p className="text-lg md:text-xl mb-10">
            Partner with Beyond Transform on leadership development,
            human capital strategy, and organisational transformation.
          </p>

          <a
            href="/contact"
            className="bg-primary text-white px-10 py-4 rounded-lg font-semibold inline-flex items-center gap-3"
          >
            Connect With Us <FaArrowRight />
          </a>
        </div>
      </section>

    </div>
  );
};

export default MeetFounder;
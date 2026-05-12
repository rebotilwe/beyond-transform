import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaHandshake,
  FaGlobeAfrica,
  FaUniversity,
  FaUsers,
  FaHeart,
  FaArrowRight,
} from 'react-icons/fa';

const Partnerships = () => {
  const partnerships = [
    {
      name: 'Destinato',
      role: 'Global NPO Partner',
      description:
        'Vice President of HR contributing to global poverty alleviation and skills development initiatives.',
      icon: <FaGlobeAfrica className="text-4xl text-secondary" />,
      link: 'https://www.destinato.org',
    },
    {
      name: 'SACDA',
      role: 'Board Member',
      description:
        'Influencing career development initiatives across education and employment sectors in South Africa.',
      icon: <FaUniversity className="text-4xl text-secondary" />,
      link: '#',
    },
    {
      name: 'SABPP',
      role: 'National Committee Chair',
      description:
        'Leading Change Management initiatives and advancing HR professional standards nationally.',
      icon: <FaUsers className="text-4xl text-secondary" />,
      link: '#',
    },
    {
      name: 'PAPU',
      role: 'Community Partner',
      description:
        'Collaborating to reduce unemployment through empowerment and skills development programs.',
      icon: <FaHeart className="text-4xl text-secondary" />,
      link: '#',
    },
  ];

  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-secondary uppercase tracking-widest text-sm font-semibold">
              Strategic Ecosystem
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-6 leading-tight">
              Strategic
              <br />
              <span className="text-secondary">Partnerships</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              We collaborate with leading institutions to drive sustainable
              socio-economic transformation and human capital development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
              Our Network
            </span>

            <h2 className="section-title mt-4">
              Organizations We Work With
            </h2>

            <p className="section-subtitle">
              Strategic collaborations that extend our impact across HR,
              leadership, and community development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnerships.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="mb-5">{partner.icon}</div>

                <h3 className="text-2xl font-bold text-primary mb-2">
                  {partner.name}
                </h3>

                <p className="text-secondary font-semibold mb-4">
                  {partner.role}
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {partner.description}
                </p>

                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn More <FaArrowRight className="text-sm" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BECOME PARTNER */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom text-center max-w-4xl">

          <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
            Collaboration
          </span>

          <h2 className="section-title mt-4">
            Become a Strategic Partner
          </h2>

          <p className="section-subtitle">
            Join us in building impactful solutions that transform communities
            and empower future generations.
          </p>

          <div className="mt-12 bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Let’s Build Impact Together
            </h3>

            <p className="text-gray-600 mb-8">
              We partner with organizations aligned with our mission of
              transformation, leadership development, and socio-economic
              empowerment.
            </p>

            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Explore Partnership Opportunities <FaArrowRight />
            </Link>
          </div>

        </div>
      </section>

      {/* IMPACT */}
      <section className="py-24 bg-primary text-white">
        <div className="container-custom text-center max-w-5xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Collective Impact
          </h2>

          <p className="text-gray-300 mb-12 text-lg">
            Our partnerships amplify transformation across people, organizations,
            and communities.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '15+', label: 'Active Partnerships' },
              { num: '5000+', label: 'Lives Impacted' },
              { num: '10+', label: 'Community Programs' },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
              >
                <h3 className="text-5xl font-bold text-secondary mb-3">
                  {item.num}
                </h3>
                <p className="text-gray-300">{item.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Partnerships;
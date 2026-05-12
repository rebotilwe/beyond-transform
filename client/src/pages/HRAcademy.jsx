import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaUsers,
  FaCalendarAlt,
  FaCheckCircle,
  FaArrowRight,
} from 'react-icons/fa';

const HRAcademy = () => {
  const programFeatures = [
    {
      icon: <FaGraduationCap className="text-3xl text-secondary" />,
      title: 'Practical HR Consulting Skills',
      description:
        'Learn real-world HR consulting methodologies and industry best practices.',
    },
    {
      icon: <FaChalkboardTeacher className="text-3xl text-secondary" />,
      title: 'Mentorship from Industry Leaders',
      description:
        'Guidance from experienced HR professionals with 15+ years experience.',
    },
    {
      icon: <FaUsers className="text-3xl text-secondary" />,
      title: 'Real Client Projects',
      description:
        'Work on actual consulting projects with real clients under supervision.',
    },
    {
      icon: <FaCalendarAlt className="text-3xl text-secondary" />,
      title: '6-Month Intensive Program',
      description:
        'Structured curriculum covering HR consulting, leadership, and transformation.',
    },
  ];

  const programBenefits = [
    'Hands-on experience with real clients',
    'One-on-one mentorship sessions',
    'Career placement support',
    'Professional certification upon completion',
    'Industry networking opportunities',
    'Portfolio development assistance',
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
              Launching 2025 Cohort
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-6 leading-tight">
              Beyond Transform
              <br />
              <span className="text-secondary">HR Academy</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Bridging the gap between academic knowledge and workplace excellence
              through real-world consulting experience, mentorship, and leadership development.
            </p>

            <Link
              to="/contact"
              className="bg-secondary text-primary px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 hover:opacity-90 transition"
            >
              Apply Now <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
            Program Overview
          </span>

          <h2 className="section-title mt-4">
            From Graduate to Industry-Ready HR Professional
          </h2>

          <p className="section-subtitle">
            A 6-month intensive development journey designed to build real HR consulting capability.
          </p>
        </div>

        <div className="container-custom mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl transition-all"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              What You’ll Gain
            </h2>

            <p className="text-gray-600 mb-8">
              This program is designed to give you practical experience, not just theory.
            </p>

            <div className="space-y-4">
              {programBenefits.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <FaCheckCircle className="text-secondary mt-1" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/contact" className="btn-primary inline-block mt-10">
              Request Program Details
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-white p-10 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Program Highlights</h3>

            <ul className="space-y-4 text-gray-200">
              <li>✓ Duration: 6 Months Intensive Training</li>
              <li>✓ Mode: Hybrid (Online + In-person)</li>
              <li>✓ Certification: HR Industry Certificate</li>
              <li>✓ Start Date: January Intake</li>
              <li>✓ Limited Intake: 20 Students Only</li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-primary">
        <div className="container-custom text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your HR Career?
            </h2>

            <p className="text-lg mb-10">
              Join the HR Academy and become a future-ready HR professional.
            </p>

            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 hover:opacity-90 transition"
            >
              Apply for Next Cohort <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default HRAcademy;
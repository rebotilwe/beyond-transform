import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaChartLine,
  FaUsers,
  FaHeart,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaHandshake,
  FaArrowRight,
} from 'react-icons/fa';

const Services = () => {
  const serviceCategories = [
    {
      title: 'HR Consulting',
      icon: <FaChartLine className="text-5xl text-secondary" />,
      description:
        'Strategic human capital solutions that help organizations improve performance, culture, leadership, and workforce transformation.',
      items: [
        'Change Management',
        'HR Strategy & Policy',
        'Organisation Design',
        'Performance Management',
        'HR Audits',
        'Talent Management',
      ],
    },
    {
      title: 'Leadership & Coaching',
      icon: <FaUsers className="text-5xl text-secondary" />,
      description:
        'Empowering leaders, professionals, and teams through transformational coaching and leadership development.',
      items: [
        'Corporate Coaching',
        'Leadership Coaching',
        'Career Coaching',
        'Transformational Coaching',
        'Performance Coaching',
        'Group Coaching',
      ],
    },
    {
      title: 'Youth Development',
      icon: <FaGraduationCap className="text-5xl text-secondary" />,
      description:
        'Preparing youth and graduates for sustainable careers through employability readiness and life skills development.',
      items: [
        'Employability Readiness',
        'Career Coaching',
        'Skills Development',
        'Internship Preparation',
        'Life Readiness',
        'Essential Skills Training',
      ],
    },
    {
      title: "Women's Empowerment",
      icon: <FaHeart className="text-5xl text-secondary" />,
      description:
        'Supporting women through leadership development, wellness initiatives, mentorship, and empowerment programs.',
      items: [
        'Work-Life Integration',
        'Leadership Development',
        'Support Groups',
        'Confidence Building',
        'Entrepreneurship Support',
        'Empowerment Talks',
      ],
    },
    {
      title: 'Program Management',
      icon: <FaChalkboardTeacher className="text-5xl text-secondary" />,
      description:
        'End-to-end program and project management solutions focused on sustainable impact and measurable outcomes.',
      items: [
        'Project Planning',
        'Stakeholder Management',
        'Implementation',
        'Monitoring & Evaluation',
        'Milestone Tracking',
        'Reporting',
      ],
    },
    {
      title: 'Labour Relations',
      icon: <FaHandshake className="text-5xl text-secondary" />,
      description:
        'Professional labour relations and employee relations support to help organizations maintain healthy workplaces.',
      items: [
        'Disciplinary Inquiries',
        'CCMA Cases',
        'Trade Union Negotiations',
        'Retrenchment Support',
        'Conflict Management',
        'Policy Development',
      ],
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
              Our Services
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-6 mb-6 leading-tight">
              Solutions Designed
              <br />
              For Real Transformation
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
              Beyond Transform delivers strategic human capital solutions,
              leadership development, empowerment programs, and future-focused
              transformation initiatives that create sustainable impact for
              organizations and communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
              What We Do
            </span>

            <h2 className="section-title mt-4">
              Human-Centered Solutions for Organizations & Communities
            </h2>

            <p className="section-subtitle">
              Our services are designed to help organizations navigate
              transformation, empower future leaders, strengthen workplace
              culture, and create long-term socio-economic impact.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="mb-6">{service.icon}</div>

                <h3 className="text-3xl font-bold mb-4 text-primary leading-tight">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 flex items-start gap-3"
                    >
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2"></span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="text-secondary font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn More <FaArrowRight className="text-sm" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop"
                alt="Business consulting"
                className="rounded-2xl shadow-2xl w-full h-[550px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
                Why Partner With Us
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6 leading-tight">
                Beyond Traditional Consulting
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Beyond Transform combines strategic expertise with
                human-centered transformation to help organizations and
                communities create sustainable growth and meaningful impact.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We understand that true transformation goes beyond systems and
                processes — it starts with people, leadership, and purpose.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-secondary rounded-full mt-2"></div>

                  <p className="text-gray-700">
                    Future-focused workforce transformation solutions
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-secondary rounded-full mt-2"></div>

                  <p className="text-gray-700">
                    Human-centered leadership and development programs
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-secondary rounded-full mt-2"></div>

                  <p className="text-gray-700">
                    Sustainable socio-economic empowerment initiatives
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-secondary rounded-full mt-2"></div>

                  <p className="text-gray-700">
                    Customized solutions tailored to organizational needs
                  </p>
                </div>
              </div>

              <Link to="/about" className="btn-primary inline-block">
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
              Our Impact
            </span>

            <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-8 leading-tight">
              Creating Sustainable Change Through People
            </h2>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
              Beyond Transform is committed to empowering organizations,
              communities, women, youth, and future leaders through meaningful
              transformation initiatives that create lasting impact across South
              Africa and beyond.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-5xl font-bold text-secondary mb-4">
                  100+
                </h3>

                <p className="text-gray-300">
                  Organizations supported through transformation and leadership
                  initiatives
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-5xl font-bold text-secondary mb-4">
                  5000+
                </h3>

                <p className="text-gray-300">
                  Individuals impacted through empowerment and development
                  programs
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-5xl font-bold text-secondary mb-4">
                  15+
                </h3>

                <p className="text-gray-300">
                  Years of combined expertise in HR, leadership, and
                  transformation
                </p>
              </div>
            </div>
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
              Ready to Transform Your Organization?
            </h2>

            <p className="text-lg md:text-xl mb-10 leading-relaxed">
              Partner with Beyond Transform to create future-ready solutions
              that empower people, strengthen leadership, and drive sustainable
              growth.
            </p>

            <Link to="/contact" className="btn-primary inline-block">
              Request a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
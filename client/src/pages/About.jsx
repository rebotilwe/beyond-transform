import { motion } from 'framer-motion';
import { FaAward, FaGlobeAfrica, FaHeart, FaUsers } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <FaUsers className="text-4xl text-secondary" />,
      title: 'Human-Centric',
      description:
        'We believe people are at the center of transformation, innovation, and sustainable growth.',
    },
    {
      icon: <FaHeart className="text-4xl text-secondary" />,
      title: 'Intentional Impact',
      description:
        'Every solution we design is created with meaningful social and organizational impact in mind.',
    },
    {
      icon: <FaGlobeAfrica className="text-4xl text-secondary" />,
      title: 'Societal Transformation',
      description:
        'We are committed to empowering communities and contributing to the future of South Africa and Africa.',
    },
    {
      icon: <FaAward className="text-4xl text-secondary" />,
      title: 'Excellence & Legacy',
      description:
        'We strive to create lasting change through leadership, innovation, and transformational excellence.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')",
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
              About Beyond Transform
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-6 mb-6 leading-tight">
              Empowering People.
              <br />
              Transforming Futures.
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
              Beyond Transform is a premium Human Capital and Transformation
              consultancy dedicated to creating sustainable impact through
              leadership development, socio-economic transformation, youth
              empowerment, and future-focused workforce solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
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
                alt="Founder and leadership"
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
                Our Story
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6 leading-tight">
                Creating Stories &
                <br />
                Changing Lives
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded in 2017, Beyond Transform was established with a vision
                to move beyond traditional HR consulting and create meaningful
                transformation within organizations, communities, and
                individuals.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Rooted in resilience, empowerment, and purpose, the consultancy
                was built from a deep understanding of the challenges faced by
                many South Africans — particularly youth unemployment, workplace
                transformation, and the need for sustainable human-centered
                growth.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                Today, Beyond Transform partners with organizations, leaders,
                women, youth, schools, and communities to create future-ready
                solutions that empower people while driving long-term societal
                and economic impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-lg"
            >
              <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
                Our Mission
              </span>

              <h3 className="text-3xl font-bold text-primary mt-4 mb-6">
                Purpose-Driven Transformation
              </h3>

              <p className="text-gray-600 leading-relaxed text-lg">
                To empower organizations, communities, women, and youth through
                innovative human capital solutions, leadership development, and
                transformational programs that create sustainable societal and
                economic impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-primary text-white p-10 rounded-2xl shadow-lg"
            >
              <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
                Our Vision
              </span>

              <h3 className="text-3xl font-bold mt-4 mb-6">
                Building Future-Ready Communities
              </h3>

              <p className="text-gray-300 leading-relaxed text-lg">
                To become a globally recognized transformation consultancy that
                shapes the future of work, empowers future leaders, and leaves a
                lasting legacy across South Africa and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
              Our Core Values
            </span>

            <h2 className="section-title mt-4">
              The Principles That Drive Our Work
            </h2>

            <p className="section-subtitle">
              Our values guide every solution, partnership, and transformation
              journey we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>

                <h3 className="text-2xl font-bold text-primary mb-4">
                  {value.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
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
                Leadership
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
                A Vision Rooted in
                <br />
                Resilience & Impact
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Beyond Transform was founded on the belief that meaningful
                change happens when people are empowered with the right tools,
                opportunities, and support systems.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The organization’s leadership combines deep industry expertise
                with a passion for transformation, mentorship, socio-economic
                development, and future-focused human capital strategies.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Through intentional leadership and community-driven initiatives,
                Beyond Transform continues to create opportunities that inspire
                growth, purpose, and lasting impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Corporate leadership"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Together, We Can Create Meaningful Change
            </h2>

            <p className="text-lg md:text-xl mb-10 leading-relaxed">
              Beyond Transform partners with organizations, leaders, schools,
              and communities to build future-ready solutions that empower
              people and transform lives.
            </p>

            <a
              href="/contact"
              className="bg-primary text-white px-10 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 inline-block"
            >
              Connect With Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
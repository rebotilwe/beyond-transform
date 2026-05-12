import { motion } from 'framer-motion';
import { FaAward, FaGlobeAfrica, FaHeart, FaUsers } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <FaUsers className="text-4xl text-secondary" />,
      title: 'Human-Centered Systems Thinking',
      description:
        'We place people at the core of organisational transformation, ensuring sustainable growth through human potential.',
    },
    {
      icon: <FaHeart className="text-4xl text-secondary" />,
      title: 'Impact by Design',
      description:
        'Every solution is intentionally designed to deliver measurable social and organisational transformation.',
    },
    {
      icon: <FaGlobeAfrica className="text-4xl text-secondary" />,
      title: 'Systemic Change for Society',
      description:
        'We are committed to shaping communities and advancing sustainable development across Africa.',
    },
    {
      icon: <FaAward className="text-4xl text-secondary" />,
      title: 'Sustainable Leadership Legacy',
      description:
        'We build enduring leadership capability that continues to create impact beyond immediate interventions.',
    },
  ];

  return (
    <div className="overflow-hidden">

      {/* HERO SECTION */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')",
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
              Beyond Transform
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-6 mb-6 leading-tight">
              Designing the Future of
              <br />
              Human Capital in Africa
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
              Beyond Transform is a human capital and transformation consultancy
              shaping leaders, organisations, and communities through strategic
              workforce development, leadership excellence, and sustainable
              socio-economic impact systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STORY SECTION */}
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
                alt="Leadership"
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
                Our Foundation
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6 leading-tight">
                From Insight to Impact
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded in 2017, Beyond Transform was established with a clear
                strategic intent — to move beyond traditional HR consulting and
                design meaningful transformation across organisations and society.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Built on resilience and purpose, the organisation addresses
                systemic challenges such as youth unemployment, leadership gaps,
                and workforce transformation through human-centered solutions.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                Today, we partner with organisations, governments, and communities
                to build future-ready human capital systems that drive sustainable
                impact and long-term transformation.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
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
                To empower organisations, communities, women, and youth through
                human capital systems that enable sustainable growth, leadership
                development, and measurable socio-economic transformation.
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
                Shaping Future-Ready Africa
              </h3>

              <p className="text-gray-300 leading-relaxed text-lg">
                To redefine the future of work by building scalable,
                human-centered transformation ecosystems that develop leaders
                and strengthen organisations across Africa and beyond.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-white">
        <div className="container-custom">

          <div className="text-center mb-16">
            <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
              Our Principles
            </span>

            <h2 className="section-title mt-4">
              Transformation Principles That Guide Our Work
            </h2>

            <p className="section-subtitle">
              These principles define how we think, design, and deliver impact.
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

      {/* FOUNDER SECTION */}
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
                The Leadership Behind
                <br />
                Beyond Transform
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Beyond Transform is guided by a leadership philosophy rooted in
                human capital excellence, strategic transformation, and long-term
                societal impact.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Through intentional leadership and global engagement, we continue
                to shape future-ready leaders and transformation ecosystems.
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
                alt="Leadership"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
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
              Let’s Shape the Future of Work Together
            </h2>

            <p className="text-lg md:text-xl mb-10 leading-relaxed">
              Partner with Beyond Transform to design human capital solutions
              that drive meaningful organisational and societal transformation.
            </p>

            <a
              href="/contact"
              className="bg-primary text-white px-10 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 inline-block"
            >
              Connect for Strategic Partnership
            </a>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default About;
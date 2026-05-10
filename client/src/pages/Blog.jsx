import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaUserTie,
} from 'react-icons/fa';

const Blog = () => {
  const articles = [
    {
      title: 'The Future of Human-Centered Leadership in the Age of AI',
      category: 'Leadership & HR',
      date: 'May 2026',
      readTime: '5 min read',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
      description:
        'How organizations can embrace digital transformation while still prioritizing people, culture, and human connection.',
    },
    {
      title: 'Empowering Youth for the Future Workforce',
      category: 'Youth Development',
      date: 'April 2026',
      readTime: '6 min read',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
      description:
        'Preparing young professionals with employability, adaptability, and future-ready skills in an evolving economy.',
    },
    {
      title: "Women's Empowerment Beyond The Workplace",
      category: "Women's Empowerment",
      date: 'April 2026',
      readTime: '4 min read',
      image:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop',
      description:
        'Creating spaces where women can thrive through leadership, confidence, wellness, and personal growth.',
    },
    {
      title: 'Why Organizational Culture Matters More Than Ever',
      category: 'HR Consulting',
      date: 'March 2026',
      readTime: '7 min read',
      image:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop',
      description:
        'Strong workplace culture is becoming a competitive advantage for organizations focused on retention and growth.',
    },
    {
      title: 'Mental Wellness in the Workplace: Breaking The Silence',
      category: 'Wellness & Transformation',
      date: 'March 2026',
      readTime: '5 min read',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
      description:
        'Understanding the importance of emotional wellness and psychological safety in modern workplaces.',
    },
    {
      title: 'Transformation Through Purpose-Driven Leadership',
      category: 'Leadership',
      date: 'February 2026',
      readTime: '6 min read',
      image:
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop',
      description:
        'Purpose-driven organizations create stronger teams, deeper impact, and sustainable long-term growth.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop')",
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
              Insights & Articles
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-6 mb-6 leading-tight">
              Thought Leadership
              <br />
              & Transformation Insights
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
              Explore expert insights, leadership perspectives, HR trends, and
              transformational conversations shaping the future of organizations,
              communities, and people.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
              Knowledge & Impact
            </span>

            <h2 className="section-title mt-4">
              Conversations That Inspire Change
            </h2>

            <p className="section-subtitle">
              Beyond Transform shares valuable perspectives on leadership,
              workplace transformation, youth empowerment, women’s development,
              mental wellness, and future-focused human capital strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {article.category}
                  </span>

                  <h3 className="text-2xl font-bold text-primary mb-4 leading-tight group-hover:text-secondary transition-colors duration-300">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {article.description}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt />
                      <span>{article.date}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaClock />
                      <span>{article.readTime}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaUserTie />
                      <span>Beyond Transform</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="text-secondary font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Article
                    <FaArrowRight className="text-sm" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insight Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                alt="Thought leadership"
                className="rounded-2xl shadow-2xl w-full h-[550px] object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
                Featured Insight
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6 leading-tight">
                The Human Side
                <br />
                Of Transformation
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                In an increasingly digital and automated world, organizations
                are being challenged to rethink how they lead, empower, and
                support people.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Beyond Transform believes that sustainable transformation
                happens when businesses combine innovation with empathy,
                leadership with purpose, and strategy with human connection.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Through thought leadership, empowerment initiatives, and
                transformational consulting, we continue to shape conversations
                that inspire meaningful impact.
              </p>

              <button className="btn-primary inline-flex items-center gap-3">
                Explore More Insights
                <FaArrowRight />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
              Stay Connected
            </span>

            <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
              Insights That Empower
              <br />
              Growth & Transformation
            </h2>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
              Stay informed with the latest conversations, leadership insights,
              and transformational perspectives shaping the future of people,
              organizations, and communities.
            </p>

            <button className="bg-secondary text-primary px-10 py-4 rounded-lg font-semibold hover:bg-secondary-dark transition-all duration-300 inline-flex items-center gap-3">
              Subscribe For Updates
              <FaArrowRight />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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

  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-black/70" />

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
              Explore expert perspectives on leadership, human capital, youth empowerment,
              and the future of work through a human-centered lens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="mb-10">
            <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
              Featured Article
            </span>
            <h2 className="section-title mt-4">Editor’s Pick</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={featured.image}
              alt={featured.title}
              className="rounded-2xl shadow-2xl h-[500px] w-full object-cover"
            />

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
                {featured.category}
              </span>

              <h3 className="text-4xl font-bold text-primary mt-6 mb-4 leading-tight">
                {featured.title}
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {featured.description}
              </p>

              <div className="flex gap-6 text-gray-500 text-sm mb-8">
                <span className="flex items-center gap-2"><FaCalendarAlt /> {featured.date}</span>
                <span className="flex items-center gap-2"><FaClock /> {featured.readTime}</span>
                <span className="flex items-center gap-2"><FaUserTie /> Beyond Transform</span>
              </div>

              {/* FIXED BUTTON */}
              <Link
                to={`/blog/featured`}
                className="btn-primary inline-flex items-center gap-3"
              >
                Read Full Article <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GRID ARTICLES */}
      <section className="pb-24 bg-gray-50">
        <div className="container-custom">

          <div className="mb-12 text-center">
            <h2 className="section-title">Latest Insights</h2>
            <p className="section-subtitle">
              Leadership, transformation, and human capital thinking
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            {rest.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-60 w-full object-cover"
                />

                <div className="p-7">
                  <span className="text-secondary text-sm font-semibold">
                    {article.category}
                  </span>

                  <h3 className="text-xl font-bold text-primary mt-3 mb-3">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-5">
                    {article.description}
                  </p>

                  <div className="flex justify-between text-xs text-gray-500 mb-5">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>

                  {/* FIXED BUTTON */}
                  <Link
                    to={`/blog/${index}`}
                    className="text-secondary font-semibold inline-flex items-center gap-2"
                  >
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
            Stay Connected
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Insights That Shape
            <br />
            The Future of Work
          </h2>

          <p className="text-gray-300 text-lg mb-10">
            Subscribe to receive leadership insights, transformation thinking, and
            human capital strategies.
          </p>

          {/* FIXED BUTTON */}
          <Link
            to="/contact"
            className="bg-secondary text-primary px-10 py-4 rounded-lg font-semibold inline-flex items-center gap-3"
          >
            Subscribe <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
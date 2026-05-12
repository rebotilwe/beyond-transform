import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaCalendarAlt, FaTag, FaArrowRight, FaNewspaper } from 'react-icons/fa';
import { blogPosts } from '../../data/blogPosts';

const BlogPreview = () => {

  const previewPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-white relative overflow-hidden">

      <div className="container-custom">

        {/* Section Header (UPGRADED AUTHORITY FRAME) */}
        <div className="text-center mb-16">

          <span className="text-secondary uppercase tracking-[0.25em] font-semibold text-xs">
            Perspectives & Insights
          </span>

          <h2 className="section-title mt-4">
            Leadership Thinking from Beyond Transform
          </h2>

          <p className="section-subtitle max-w-3xl mx-auto">
            Strategic insights on human capital transformation, leadership
            development, and future workforce trends shaping organisations today.
          </p>

        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {previewPosts.map((post, index) => (

            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100"
            >

              {/* Visual Block */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <FaNewspaper className="text-5xl text-secondary/40 group-hover:scale-110 transition-transform duration-300" />
              </div>

              <div className="p-6">

                {/* Category */}
                <div className="flex items-center gap-2 mb-3">
                  <FaTag className="text-secondary text-xs" />
                  <span className="text-secondary text-xs font-semibold uppercase tracking-wide">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center">

                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-gray-400 text-xs" />
                    <p className="text-gray-500 text-xs">
                      {post.date}
                    </p>
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="text-secondary font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all text-sm"
                  >
                    Read <FaArrowRight className="text-xs" />
                  </Link>

                </div>

              </div>

            </motion.article>

          ))}

        </div>

        {/* View All */}
        <div className="text-center mt-14">
          <Link
            to="/blog"
            className="text-secondary font-semibold hover:underline inline-flex items-center gap-2"
          >
            View All Insights <FaArrowRight />
          </Link>
        </div>

        {/* LinkedIn Section (UPGRADED INTEGRATION) */}
        <div className="mt-16 pt-10 border-t border-gray-200 text-center">

          <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
            Stay Connected
          </span>

          <div className="mt-6">

            <a
              href="https://www.linkedin.com/company/beyond-transform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#0077B5] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all shadow-md"
            >
              <FaLinkedin className="text-2xl" />
              <span className="font-semibold">
                Follow Leadership Insights on LinkedIn
              </span>
            </a>

            <p className="text-gray-500 text-sm mt-4 max-w-md mx-auto">
              Regular perspectives on leadership, HR transformation, and the future of work.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default BlogPreview;
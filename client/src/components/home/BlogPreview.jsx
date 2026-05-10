import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { blogPosts } from '../../data/blogPosts';

const BlogPreview = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
            Insights & Thought Leadership
          </span>
          <h2 className="section-title mt-4">
            Latest from Beyond Transform
          </h2>
          <p className="section-subtitle">
            Expert insights on HR transformation, leadership, and socio-economic development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="p-6">
                <div className="text-secondary text-sm mb-2">{post.category}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 text-xs">{post.date}</p>
                  <Link to="/blog" className="text-secondary font-semibold hover:underline text-sm">
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LinkedIn Integration */}
        <div className="text-center mt-12">
          <a
            href="https://www.linkedin.com/company/beyond-transform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0077B5] text-white px-8 py-3 rounded-lg hover:bg-[#0077B5]/90 transition-all"
          >
            <FaLinkedin className="text-2xl" />
            <span className="font-semibold">Follow Us on LinkedIn for More Insights</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
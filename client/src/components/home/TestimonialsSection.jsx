import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { testimonials } from '../data/testimonials';

const TestimonialsSection = () => {
  // Only show first 4 on homepage
  const homeTestimonials = testimonials.slice(0, 4);
  
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
            Testimonials
          </span>
          <h2 className="section-title mt-4">
            What Our Clients Say
          </h2>
          <p className="section-subtitle">
            Trusted by industry leaders, government agencies, and community organizations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {homeTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <FaQuoteLeft className="text-secondary text-3xl mb-4 opacity-50" />
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-primary">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
                <div className="flex text-secondary">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/testimonials" className="text-secondary font-semibold hover:underline">
            Read More Success Stories →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
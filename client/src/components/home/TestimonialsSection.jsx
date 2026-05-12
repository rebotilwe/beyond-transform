import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialsSection = () => {

  const testimonials = [
    {
      id: 1,
      quote: "Ms Ganapathy Juta has proven herself to be a seasoned HR professional who produces exceptional quality work. She is an HR Consultant/Advisor par excellence!",
      author: "Mpumalanga Economic Growth Agency",
      role: "Government Agency",
      rating: 5,
    },
    {
      id: 2,
      quote: "Your commitment to client service delivery is exemplary. Beyond Transform has consistently gone above and beyond expectations.",
      author: "Sizwe Ntsaluba Gobodo",
      role: "Professional Services Firm",
      rating: 5,
    },
    {
      id: 3,
      quote: "Her insights were sharp, practical, and transformative. She gets to the core of complex organisational challenges quickly and effectively.",
      author: "CHRO",
      role: "Sears Holdings",
      rating: 5,
    },
    {
      id: 4,
      quote: "It is rare to meet someone so committed to social justice and community upliftment with such professionalism and integrity.",
      author: "People Against Poverty and Unemployment",
      role: "NGO Partner",
      rating: 5,
    }
  ];

  const homeTestimonials = testimonials.slice(0, 4);

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">

      <div className="container-custom">

        {/* Section Header (UPGRADED AUTHORITY FRAME) */}
        <div className="text-center mb-16">

          <span className="text-secondary uppercase tracking-[0.25em] font-semibold text-xs">
            Client Endorsements
          </span>

          <h2 className="section-title mt-4">
            Trusted by Organisations, Leaders & Institutions
          </h2>

          <p className="section-subtitle max-w-3xl mx-auto">
            Our work is recognised across government, corporate, and nonprofit
            sectors for delivering measurable transformation and leadership impact.
          </p>

        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {homeTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 relative group"
            >

              {/* Quote Icon */}
              <FaQuoteLeft className="text-secondary text-3xl mb-6 opacity-60" />

              {/* Quote */}
              <p className="text-gray-600 leading-relaxed mb-8 italic text-sm md:text-base">
                “{testimonial.quote}”
              </p>

              {/* Footer */}
              <div className="flex items-end justify-between">

                <div>
                  <h4 className="font-bold text-primary text-sm md:text-base">
                    {testimonial.author}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {testimonial.role}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex text-secondary">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-xs" />
                  ))}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            to="/testimonials"
            className="text-secondary font-semibold hover:underline text-sm tracking-wide"
          >
            Explore Full Success Stories →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
import { motion } from 'framer-motion';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
  FaArrowRight,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop')",
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
              Contact Beyond Transform
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-6 mb-6 leading-tight">
              Let’s Start
              <br />
              The Conversation
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
              Partner with Beyond Transform to create meaningful change through
              human-centered leadership, transformation strategies, empowerment
              initiatives, and future-focused workforce solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
                  Get In Touch
                </span>

                <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6 leading-tight">
                  Ready To Create
                  <br />
                  Meaningful Impact?
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed">
                  Whether you are looking for HR consulting, leadership
                  development, coaching, youth empowerment initiatives, or
                  transformational partnerships, Beyond Transform is here to
                  help your organization and community thrive.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-5 bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-secondary text-xl" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Phone
                    </h3>

                    <p className="text-gray-600">
                      +27 (0) 11 123 4567
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5 bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-secondary text-xl" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Email
                    </h3>

                    <p className="text-gray-600">
                      info@beyondtransform.co.za
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-5 bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-secondary text-xl" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Location
                    </h3>

                    <p className="text-gray-600">
                      Johannesburg, South Africa
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-5 bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-secondary text-xl" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Business Hours
                    </h3>

                    <p className="text-gray-600">
                      Monday – Friday
                    </p>

                    <p className="text-gray-600">
                      08:00 AM – 05:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="pt-4">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Connect With Us
                </h3>

                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 md:p-10 rounded-3xl shadow-xl"
            >
              <div className="mb-8">
                <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
                  Send A Message
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
                  Let’s Work Together
                </h2>

                <p className="text-gray-600">
                  Complete the form below and our team will get back to you as
                  soon as possible.
                </p>
              </div>

              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-primary">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-primary">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-primary">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-primary">
                    Service Interested In
                  </label>

                  <select className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-white">
                    <option>HR Consulting</option>
                    <option>Leadership & Coaching</option>
                    <option>Youth Development</option>
                    <option>Women's Empowerment</option>
                    <option>Program Management</option>
                    <option>Labour Relations</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-primary">
                    Message *
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Tell us about your organization, project, or how we can assist you..."
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="btn-primary w-full inline-flex items-center justify-center gap-3"
                >
                  Send Message
                  <FaArrowRight />
                </button>
              </form>
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
              Beyond Transform
            </span>

            <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
              Empowering People.
              <br />
              Transforming Futures.
            </h2>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
              Let’s build sustainable solutions that empower individuals,
              strengthen organizations, and create meaningful societal impact.
            </p>

            <a
              href="/services"
              className="bg-secondary text-primary px-10 py-4 rounded-lg font-semibold hover:bg-secondary-dark transition-all duration-300 inline-flex items-center gap-3"
            >
              Explore Our Services
              <FaArrowRight />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
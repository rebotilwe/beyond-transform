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
              Whether you’re looking for HR consulting, leadership development,
              or a transformation partnership — we help organisations build
              sustainable, human-centered impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* LEFT SIDE */}
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
                  Ready to Create Meaningful Impact?
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed">
                  Choose how you’d like to engage with us — whether it’s a
                  general enquiry or a strategy consultation session.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="flex items-start gap-5 bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center">
                    <FaPhone className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Phone</h3>
                    <p className="text-gray-600">+27 (0) 11 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
                    <p className="text-gray-600">info@beyondtransform.co.za</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Location</h3>
                    <p className="text-gray-600">Johannesburg, South Africa</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center">
                    <FaClock className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Business Hours</h3>
                    <p className="text-gray-600">Mon – Fri</p>
                    <p className="text-gray-600">08:00 – 17:00</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  Connect With Us
                </h3>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"
                >
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>

            {/* RIGHT SIDE - FORM */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 md:p-10 rounded-3xl shadow-xl"
            >
              <div className="mb-8">
                <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-sm">
                  Request Consultation
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
                  Book a Strategy Conversation
                </h2>

                <p className="text-gray-600">
                  Tell us about your needs and we’ll respond with the best way to
                  support your organisation.
                </p>
              </div>

              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl"
                />

                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl"
                />

                {/* NEW: Lead Qualification */}
                <select className="w-full px-5 py-4 border border-gray-300 rounded-xl bg-white">
                  <option>Who are you?</option>
                  <option>Corporate Organisation</option>
                  <option>Government / NGO</option>
                  <option>Individual Professional</option>
                  <option>Student / Graduate</option>
                </select>

                <select className="w-full px-5 py-4 border border-gray-300 rounded-xl bg-white">
                  <option>Service of Interest</option>
                  <option>HR Consulting</option>
                  <option>Leadership Coaching</option>
                  <option>Youth Development</option>
                  <option>Women's Empowerment</option>
                  <option>Strategy Session</option>
                </select>

                <textarea
                  rows="5"
                  placeholder="Tell us what you need..."
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl resize-none"
                />

                <button
                  type="submit"
                  className="btn-primary w-full inline-flex items-center justify-center gap-3"
                >
                  Request Strategy Call
                  <FaArrowRight />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering People. Transforming Futures.
          </h2>

          <p className="text-gray-300 mb-10 max-w-3xl mx-auto">
            We don’t just respond — we build transformation partnerships that
            create measurable impact.
          </p>

          <a
            href="/services"
            className="bg-secondary text-primary px-10 py-4 rounded-lg font-semibold inline-flex items-center gap-3"
          >
            Explore Services
            <FaArrowRight />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
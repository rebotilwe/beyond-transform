import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-28 bg-secondary text-primary relative overflow-hidden">

      {/* subtle depth layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-yellow-300/40"></div>

      <div className="container-custom text-center relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >

          {/* Section label (NEW - adds authority framing) */}
          <span className="uppercase tracking-[0.25em] text-xs font-semibold text-primary/70">
            Partner With Us
          </span>

          {/* Headline (UPGRADED) */}
          <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-6 leading-tight">
            Transforming Organisations Through
            <br />
            Human Capital Excellence
          </h2>

          {/* Subtext (more executive tone) */}
          <p className="text-lg md:text-xl mb-10 leading-relaxed text-primary/80 max-w-3xl mx-auto">
            Beyond Transform partners with organisations, leaders, and institutions
            to design sustainable human capital strategies that drive measurable
            impact, leadership excellence, and long-term transformation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">

            {/* Primary CTA */}
            <Link
              to="/contact"
              className="bg-primary text-white px-10 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-md"
            >
              Start a Conversation
            </Link>

            {/* Secondary CTA */}
            <Link
              to="/case-studies"
              className="border-2 border-primary text-primary px-10 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              Explore Transformation Stories
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default CTASection;
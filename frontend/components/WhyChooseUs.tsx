"use client";

import { motion } from 'framer-motion';
import { Award, IndianRupee, MapPin, Zap } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Award className="w-5 h-5 md:w-6 md:h-6 text-accent" />,
      title: "Certified Mechanics",
      desc: "Every mechanic is professionally trained and background verified for your safety and quality assurance."
    },
    {
      icon: <IndianRupee className="w-5 h-5 md:w-6 md:h-6 text-accent" />,
      title: "Transparent Pricing",
      desc: "No hidden charges or surprise fees. The price is locked at booking, you only pay what you see."
    },
    {
      icon: <MapPin className="w-5 h-5 md:w-6 md:h-6 text-accent" />,
      title: "Doorstep Repairs",
      desc: "We come directly to your home, office, or wherever you are stranded in Delhi."
    },
    {
      icon: <Zap className="w-5 h-5 md:w-6 md:h-6 text-accent" />,
      title: "30-Min Response",
      desc: "We prioritize your time and ensure we call and confirm your booking slot within 45 minutes guaranteed."
    }
  ];

  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">Why Cyclists Trust FixWheel</h2>
          <p className="text-text-secondary text-sm md:text-lg">Building a platform rooted in quality, transparency, and speed.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-surface border border-white/5 rounded-2xl p-4 md:p-6 hover:border-accent/30 hover:bg-surface/80 transition-colors group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/80 border border-white/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-base md:text-xl font-semibold text-white mb-2 md:mb-3">{feature.title}</h3>
              <p className="text-text-secondary text-xs md:text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

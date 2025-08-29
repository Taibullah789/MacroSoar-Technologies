import { motion, type Variants } from "framer-motion";
import React, { type JSX } from "react";

// Type for a feature card
interface Feature {
  title: string;
  description: string;
  icon: string;
}

export default function MvpMaintenanceCard(): JSX.Element {
  const features: Feature[] = [
    {
      title: "Hosting",
      description:
        "MacroSoar Technologies provides secure, high-performance hosting for your MVP on our global servers, ensuring speed, uptime, and reliability so your product is always accessible.",
      icon: "🌐",
    },
    {
      title: "Bug Fixes",
      description:
        "Our dedicated engineering team resolves issues with speed and precision. We handle bug fixes proactively, keeping your MVP running smoothly while you focus on scaling your business.",
      icon: "🛠️",
    },
    {
      title: "Feature Consultation",
      description:
        "As your strategic technology partner, MacroSoar Technologies guides you in planning future features and enhancements for MVP2, MVP3, and beyond—helping your product evolve in alignment with business growth.",
      icon: "💡",
    },
  ];

  // ✅ Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, rotateY: -90, scale: 0.8 },
    show: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200 px-6">
      <motion.div
        className="w-full max-w-5xl rounded-2xl shadow-2xl 
                   bg-gradient-to-br from-neutral-900/95 to-neutral-800/80 
                   backdrop-blur-xl border border-neutral-700 p-10"
        style={{ padding: "30px" }}
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        {/* Main Title */}
        <motion.h2
          className="text-5xl font-extrabold mb-6 text-[#ff612f]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          MVP Maintenance Package
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 leading-relaxed mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          At <span className="font-semibold text-white">MacroSoar Technologies</span>,
          we understand that launching your Minimum Viable Product is only the
          beginning of your digital journey. Our{" "}
          <span className="text-[#ff612f] font-semibold">
            MVP Maintenance Package
          </span>{" "}
          is designed to give founders peace of mind, knowing that their
          technology is in expert hands.
        </motion.p>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ marginTop: "50px" }}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="p-6 rounded-xl bg-neutral-900/70 border border-neutral-700 
                         shadow-lg hover:shadow-xl transition relative"
              style={{ padding: "10px" }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 20px rgba(255,97,47,0.6)",
              }}
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#ff612f] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

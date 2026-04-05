import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "warm" | "cream" | "scarlet-tint" | "navy";
  id?: string;
}

const variantClasses: Record<string, string> = {
  default: "",
  warm: "section-warm",
  cream: "section-cream",
  "scarlet-tint": "section-scarlet-tint",
  navy: "nav-dark",
};

const SectionWrapper = ({ children, className = "", variant = "default", id }: SectionWrapperProps) => (
  <section
    id={id}
    className={`py-20 md:py-28 section-padding ${variantClasses[variant]} ${className}`}
  >
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-6xl mx-auto"
    >
      {children}
    </motion.div>
  </section>
);

export default SectionWrapper;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wrench, Eye, Navigation, Monitor, Cpu, Shield, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const subsystems = [
  { icon: Wrench, label: "Mechanical", desc: "Chassis, drivetrain, cabinet design", to: "/implementation/mechanical" },
  { icon: Eye, label: "Perception", desc: "LiDAR, depth cameras, sensor fusion", to: "/implementation/perception" },
  { icon: Navigation, label: "Navigation", desc: "Nav2, path planning, localization", to: "/implementation/navigation" },
  { icon: Monitor, label: "Interface", desc: "User touchscreen, task management", to: "/implementation/interface" },
  { icon: Cpu, label: "Electronics", desc: "Power systems, compute, wiring", to: "/implementation/electronics" },
  { icon: Shield, label: "Safety", desc: "Fault handling, emergency stop", to: "/implementation/safety" },
];

const Implementation = () => {
  return (
    <>
      <SectionWrapper>
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
            <span className="text-gradient-scarlet">Engineering</span> Deep Dive
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            This section details the engineering behind NurseAid. Explore each subsystem to understand the design decisions and implementation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subsystems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={item.to}
                className="group block p-8 rounded-2xl border border-border hover:border-primary/30 card-hover h-full"
              >
                <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display font-semibold text-lg mb-2">{item.label}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Implementation;

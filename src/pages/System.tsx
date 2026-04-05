import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cpu, Eye, Navigation, Cog, Monitor, ArrowRight, Radio } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const System = () => {
  return (
    <>
      <SectionWrapper>
        <div className="text-center mb-14 space-y-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
            System <span className="text-gradient-scarlet">Architecture</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            NurseAid integrates sensors, compute, navigation, and actuation into a unified autonomous system.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Radio, label: "Sensors", desc: "LiDAR, depth cameras, IMU, encoders" },
            { icon: Cpu, label: "Compute", desc: "Jetson Orin / onboard processing" },
            { icon: Navigation, label: "Navigation", desc: "Nav2 stack, path planning, SLAM" },
            { icon: Cog, label: "Actuation", desc: "Motor controllers, drive system" },
          ].map((zone, i) => (
            <motion.div
              key={zone.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="feature-card text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-scarlet-soft flex items-center justify-center mx-auto mb-3">
                <zone.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-2">{zone.label}</h3>
              <p className="text-muted-foreground text-sm">{zone.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="warm">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Data Flow</h2>
          <p className="text-muted-foreground">From raw sensor data to physical motion</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          {[
            { label: "Sensors", desc: "Raw data" },
            { label: "Perception", desc: "Object detection" },
            { label: "Planning", desc: "Path generation" },
            { label: "Control", desc: "Motor commands" },
            { label: "Motion", desc: "Physical movement" },
          ].map((step, i) => (
            <div key={step.label} className="flex items-center gap-4 md:gap-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex flex-col items-center text-center w-28"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-mono font-bold text-sm mb-2">
                  {i + 1}
                </div>
                <p className="font-display font-semibold text-sm">{step.label}</p>
                <p className="text-muted-foreground text-xs mt-1">{step.desc}</p>
              </motion.div>
              {i < 4 && (
                <div className="hidden md:flex items-center w-12">
                  <div className="flow-line" />
                  <ArrowRight className="w-4 h-4 text-primary/40 -ml-1" />
                </div>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Subsystems</h2>
          <p className="text-muted-foreground">Dive deeper into each component</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Eye, label: "Perception", to: "/implementation/perception" },
            { icon: Navigation, label: "Navigation", to: "/implementation/navigation" },
            { icon: Cog, label: "Control", to: "/implementation/electronics" },
            { icon: Monitor, label: "Interface", to: "/implementation/interface" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={item.to} className="group feature-card block text-center">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-display font-semibold">{item.label}</h3>
                <ArrowRight className="w-4 h-4 text-muted-foreground mx-auto mt-3 group-hover:translate-x-1 group-hover:text-primary transition-all" />
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default System;

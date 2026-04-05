import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Brain, Eye, Zap, ChevronRight, Play, Activity } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const Index = () => {
  return (
    <>
      {/* Section 1 — Hero (light, clean, centered like SmoothOperator) */}
      <section className="section-cream">
        <div className="max-w-6xl mx-auto section-padding py-24 md:py-36 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="scarlet-badge mx-auto">
              <Activity className="w-3 h-3" />
              Boston University · Robotics Capstone
            </div>

            <Bot className="w-20 h-20 text-primary mx-auto animate-float" />

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05]">
              Give Nurses{" "}
              <span className="text-gradient-scarlet">30%</span>
              <br />of Their Time Back.
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Your autonomous hospital delivery assistant for accessible healthcare.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                to="/product"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-scarlet-glow transition-colors"
              >
                <Play className="w-4 h-4" /> Watch Demo
              </Link>
              <Link
                to="/system"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-foreground/15 text-foreground font-semibold text-sm hover:border-primary/30 hover:bg-surface-highlight transition-colors"
              >
                View System <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2 — Why It Matters */}
      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <p className="stat-number text-6xl md:text-8xl">33%</p>
          <p className="text-2xl md:text-3xl font-display font-semibold">
            of a nurse's shift is spent on non-clinical tasks
          </p>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            NurseAid automates routine deliveries across hospital environments.
          </p>
        </div>
      </SectionWrapper>

      {/* Section 3 — What It Does */}
      <SectionWrapper variant="warm">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">What NurseAid Does</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Bot, title: "Autonomous Delivery", desc: "End-to-end task execution without human intervention" },
            { icon: Eye, title: "Human-Aware Navigation", desc: "Safely moves around people in busy corridors" },
            { icon: Brain, title: "Real-Time Decisions", desc: "Adapts to dynamic hospital environments" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="feature-card text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-scarlet-soft flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Section 4 — See It Work */}
      <SectionWrapper>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">See It Work</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
          {[
            { icon: Zap, label: "Request", desc: "Nurse sends task" },
            { icon: Brain, label: "Plan", desc: "Route computed" },
            { icon: Eye, label: "Navigate", desc: "Avoid obstacles" },
            { icon: Bot, label: "Deliver", desc: "Item arrives" },
          ].map((step, i) => (
            <div key={step.label} className="flex items-center gap-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.18 }}
                className="flex flex-col items-center text-center w-36"
              >
                <div className="w-16 h-16 rounded-2xl bg-scarlet-soft flex items-center justify-center mb-3 animate-pulse-scarlet">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="font-display font-semibold text-sm">{step.label}</p>
                <p className="text-muted-foreground text-xs mt-1">{step.desc}</p>
              </motion.div>
              {i < 3 && (
                <div className="hidden md:flex items-center w-16">
                  <div className="flow-line" />
                  <ChevronRight className="w-4 h-4 text-primary/40 -ml-1" />
                </div>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Section 5 — Explore the System */}
      <SectionWrapper variant="cream">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Explore the System</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { to: "/system", icon: Brain, label: "How It Works", desc: "System architecture" },
            { to: "/product", icon: Bot, label: "The Robot", desc: "Product details" },
            { to: "/implementation", icon: Zap, label: "Engineering", desc: "Deep-dive build" },
            { to: "/operation", icon: Play, label: "Run It", desc: "Operation guide" },
          ].map((tile, i) => (
            <motion.div
              key={tile.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={tile.to}
                className="group feature-card block text-center"
              >
                <tile.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display font-semibold mb-1">{tile.label}</h3>
                <p className="text-muted-foreground text-sm">{tile.desc}</p>
                <ArrowRight className="w-4 h-4 text-muted-foreground mx-auto mt-4 group-hover:translate-x-1 group-hover:text-primary transition-all" />
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Section 6 — Demo Callout */}
      <SectionWrapper>
        <div className="text-center space-y-6">
          <div className="max-w-2xl mx-auto aspect-video rounded-2xl border-2 border-border bg-card flex items-center justify-center">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-scarlet-soft flex items-center justify-center mx-auto animate-pulse-scarlet">
                <Play className="w-8 h-8 text-primary" />
              </div>
              <p className="text-muted-foreground text-sm font-medium">Watch NurseAid complete a delivery in real time</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Index;

import { motion } from "framer-motion";
import { Clock, AlertTriangle, UserX, Cpu, ChevronRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const Problem = () => {
  return (
    <>
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              The <span className="text-gradient-scarlet">Problem</span>
            </h1>
            <div className="space-y-4">
              {[
                { stat: "33%", desc: "of nursing time spent on non-clinical tasks" },
                { stat: "4.5 hrs", desc: "per shift lost to logistics & transport" },
                { stat: "72%", desc: "of nurses report burnout from workload" },
              ].map((item) => (
                <div key={item.stat} className="flex items-baseline gap-4">
                  <span className="stat-number text-2xl">{item.stat}</span>
                  <span className="text-muted-foreground">{item.desc}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Nurses are the backbone of healthcare, yet they spend a staggering portion of their shifts on tasks that could be automated.
            </p>
          </div>
          <div className="aspect-square rounded-2xl bg-card border-2 border-border flex items-center justify-center">
            <UserX className="w-24 h-24 text-muted-foreground/20" />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="warm">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Where Current Systems Fail</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: UserX, title: "Manual Transport", desc: "Staff physically carry supplies across floors" },
            { icon: AlertTriangle, title: "Interrupt-Driven", desc: "Constant workflow disruptions" },
            { icon: Clock, title: "Time Wasted", desc: "Hours lost to walking and waiting" },
            { icon: Cpu, title: "No Automation", desc: "Zero autonomy in logistics layer" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="feature-card text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-scarlet-soft flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold">{item.title}</h3>
              <p className="text-muted-foreground text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
            "Hospitals where logistics run{" "}
            <span className="text-gradient-scarlet">autonomously</span> in the background."
          </h2>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="cream">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">A Real Scenario</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-0">
          {[
            { step: "1", label: "Nurse requests item", desc: "Via tablet or voice command" },
            { step: "2", label: "Robot dispatched", desc: "Automatic task assignment" },
            { step: "3", label: "Navigates environment", desc: "Obstacle avoidance in real-time" },
            { step: "4", label: "Delivery completed", desc: "Confirmation sent to staff" },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex items-start gap-6 pb-8 relative"
            >
              {i < 3 && <div className="absolute left-5 top-12 w-0.5 h-full bg-primary/20" />}
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0 relative z-10">
                {item.step}
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg">{item.label}</h3>
                <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Problem;

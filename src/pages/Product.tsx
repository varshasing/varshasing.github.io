import { motion } from "framer-motion";
import { Bot, Shield, Cpu, Monitor, ChevronRight, Users, Heart, ClipboardList } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const Product = () => {
  return (
    <>
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Meet <span className="text-gradient-scarlet">NurseAid</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              An autonomous delivery robot designed for hospital environments. NurseAid navigates hallways, avoids obstacles, and delivers supplies—all without human intervention.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Built with ROS 2, Nav2, and custom perception pipelines, NurseAid is a fully integrated robotics system from sensor to actuation.
            </p>
          </div>
          <div className="aspect-square rounded-2xl bg-card border-2 border-border flex items-center justify-center">
            <img
              src="/Boston_University_Team1_Photo.PNG"
              alt="NurseAid robot in a Photonics 4th floor hallway, showing its compact design and touchscreen interface"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="warm">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">How NurseAid Is Used</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A quick comic-style walkthrough of a real delivery moment from request to handoff.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border-2 border-border bg-card p-4 md:p-6"
        >
          <img
            src="/nurseaid_comic.png"
            alt="Comic showing a nurse requesting supplies, NurseAid navigating a hallway, and completing delivery"
            className="w-full h-auto rounded-xl"
          />
          <p className="text-xs md:text-sm text-muted-foreground mt-4 text-center">
            Example of NurseAid's Impact. Image generated with Gemini.
          </p>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper variant="cream">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Key Features</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { icon: Bot, title: "Autonomous Delivery", desc: "End-to-end automated logistics from request to confirmation" },
            { icon: Shield, title: "Obstacle Avoidance", desc: "LiDAR and depth-camera powered safety around humans" },
            { icon: Cpu, title: "Task System", desc: "Intelligent task queue with priority management" },
            { icon: Monitor, title: "Interactive Interface", desc: "Touchscreen display for easy interaction" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="feature-card space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-scarlet-soft flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="warm">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Who It's For</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: ClipboardList, title: "Nurses", desc: "Reclaim time for patient care by offloading routine deliveries" },
            { icon: Users, title: "Administrators", desc: "Reduce operational costs and streamline logistics" },
            { icon: Heart, title: "Patients", desc: "Faster response times and improved care quality" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="feature-card text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-scarlet-soft flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="cream">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Delivery Workflow</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          {[
            { label: "Input", desc: "Task submitted" },
            { label: "Robot", desc: "Picks up item" },
            { label: "Navigate", desc: "Plans route" },
            { label: "Deliver", desc: "Arrives at dest." },
            { label: "Confirm", desc: "Status reported" },
          ].map((step, i) => (
            <div key={step.label} className="flex items-center gap-4 md:gap-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex flex-col items-center text-center w-28"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mb-2">
                  {i + 1}
                </div>
                <p className="font-display font-semibold text-sm">{step.label}</p>
                <p className="text-muted-foreground text-xs mt-1">{step.desc}</p>
              </motion.div>
              {i < 4 && <ChevronRight className="w-5 h-5 text-primary/30 hidden md:block mx-2" />}
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Product;

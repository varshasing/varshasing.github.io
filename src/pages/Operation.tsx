import { motion } from "framer-motion";
import { Power, Rocket, Send, CheckCircle2, AlertCircle, Navigation, Bot } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const Operation = () => {
  return (
    <>
      <SectionWrapper>
        <div className="text-center mb-14 space-y-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
            <span className="text-gradient-scarlet">Deploy</span> in 3 Steps
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Power, step: "1", label: "Power Robot", desc: "Press the power button and wait for boot sequence" },
            { icon: Rocket, step: "2", label: "Launch System", desc: "Run the launch command to start all nodes" },
            { icon: Send, step: "3", label: "Send Task", desc: "Use the interface to dispatch a delivery" },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="feature-card text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-scarlet-soft flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-xs font-mono text-primary mb-2">Step {item.step}</div>
              <h3 className="font-display font-semibold text-lg mb-2">{item.label}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="warm">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">System Status Checklist</h2>
        </div>
        <div className="max-w-md mx-auto space-y-3">
          {[
            "Sensors active",
            "Localization running",
            "Nav stack ready",
            "Interface connected",
            "Battery sufficient",
          ].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
            >
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span className="font-medium text-sm">{item}</span>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Launch Commands</h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            { label: "Full System Launch", cmd: "ros2 launch nurseaid_bringup full_system.launch.py" },
            { label: "Navigation Only", cmd: "ros2 launch nurseaid_nav navigation.launch.py" },
            { label: "Send Delivery Task", cmd: "ros2 action send_goal /deliver nurseaid_msgs/Deliver '{destination: \"room_204\"}'" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl overflow-hidden border-2 border-border">
              <div className="px-4 py-2 bg-card text-sm font-medium">{item.label}</div>
              <div className="p-4 code-block">
                <code className="text-sm font-mono">{item.cmd}</code>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="cream">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Operating Modes</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Bot, label: "Idle", user: "Status screen displayed", robot: "Awaiting commands" },
            { icon: Navigation, label: "Navigating", user: "Route shown on display", robot: "Following planned path" },
            { icon: CheckCircle2, label: "Delivering", user: "ETA countdown", robot: "Final approach to goal" },
            { icon: AlertCircle, label: "Error", user: "Alert notification", robot: "Safe stop, awaiting reset" },
          ].map((mode, i) => (
            <motion.div
              key={mode.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="feature-card space-y-3"
            >
              <mode.icon className={`w-7 h-7 ${mode.label === "Error" ? "text-destructive" : "text-primary"}`} />
              <h3 className="font-display font-semibold">{mode.label}</h3>
              <div className="space-y-1.5 text-sm">
                <div><span className="text-muted-foreground">User sees: </span>{mode.user}</div>
                <div><span className="text-muted-foreground">Robot does: </span>{mode.robot}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Troubleshooting</h2>
        </div>
        <div className="max-w-3xl mx-auto rounded-2xl border-2 border-border overflow-hidden">
          <div className="grid grid-cols-2 bg-card px-6 py-3 text-sm font-semibold border-b border-border">
            <span>Issue</span><span>Fix</span>
          </div>
          {[
            { issue: "Robot not moving", fix: "Check motor controller connection and power" },
            { issue: "Localization lost", fix: "Re-initialize AMCL or restart navigation" },
            { issue: "Sensor timeout", fix: "Verify USB connections and sensor power" },
            { issue: "Navigation failure", fix: "Clear costmaps and re-send goal" },
            { issue: "Interface unresponsive", fix: "Restart the display node" },
          ].map((row, i) => (
            <div key={row.issue} className={`grid grid-cols-2 px-6 py-4 text-sm ${i % 2 === 0 ? "bg-background" : "bg-card/50"}`}>
              <span className="font-medium">{row.issue}</span>
              <span className="text-muted-foreground">{row.fix}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Operation;

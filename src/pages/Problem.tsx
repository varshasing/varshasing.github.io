import { motion } from "framer-motion";
import { Clock, AlertTriangle, UserX, Cpu, ChevronRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const workflowNurse = [
            { step: "1", label: "Nurse requests item", desc: "Via web interface" },
            { step: "2", label: "Robot arrives at loading station", desc: "Automatically navigating" },
            { step: "3", label: "Requested item loaded in compartment", desc: "Intuitive loading process" },
            { step: "4", label: "Navigates environment", desc: "Obstacle avoidance in real-time" },
            { step: "5", label: "Arrives at destination", desc: "Notification pushed to recipient" },
            { step: "6", label: "Delivery completed", desc: "Confirmation sent to staff" },
  ];

const workflowPatient = [
            { step: "1", label: "Patient requests item", desc: "Via web interface" },
            { step: "2", label: "Robot arrives at loading station", desc: "Automatically navigating" },
            { step: "3", label: "Requested item loaded in compartment", desc: "Intuitive loading process" },
            { step: "4", label: "Navigates environment", desc: "Obstacle avoidance in real-time" },
            { step: "5", label: "Arrives at destination", desc: "Notification pushed to recipient" },
            { step: "6", label: "Delivery completed", desc: "Confirmation sent to staff" },
    ];

const interviewQuotes = [
  {
    quote:
      "QUOTE 1.",
    accreditation: "-- Angel Hoo, PCA at Mass General Hospital",
    positioning: "ml-0 md:max-w-md",
  },
  {
    quote:
      "QUOTE 2.",
    accreditation: "-- James Decker, CRC at Boston Medical Center",
    positioning: "ml-auto md:max-w-lg",
  },
  {
    quote:
      "QUOTE 3.",
    accreditation: "-- Kyuah Lee, CVOR Nurse at Mercy Hospital",
    positioning: "mx-auto max-w-sm",
  },
  {
    quote:
      "QUOTE 4.",
    accreditation: "-- Jenny Liu, Pharmacy Intern at New York-Presbyterian Hospital",
    positioning: "ml-0 md:ml-8 md:max-w-lg",
  },
  {
    quote:
      "QUOTE 5..",
    accreditation: "-- Charlene Ong / Yashu Singh, Position at Place",
    positioning: "ml-auto md:mr-8 md:max-w-md",
  },
];

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
                { stat: "~4 hrs", desc: "per shift lost to logistics & transport" },
                { stat: "20%", desc: "of nurses report burnout from workload" },
                { stat: "68%", desc: "of nurses report considering leaving the profession" },
              ].map((item) => (
                <div key={item.stat} className="flex items-baseline gap-4">
                  <span className="stat-number text-2xl">{item.stat}</span>
                  <span className="text-muted-foreground">{item.desc}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-gradient-scarlet">Nurses are the backbone of healthcare</span>, yet they spend a staggering portion of their shifts on tasks that could be automated.
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

      <SectionWrapper variant="cream">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What We Heard in Interviews</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Voices from patient-facing teams shaped our understanding of where time is lost and where automation creates impact.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {interviewQuotes.map((item, i) => (
            <motion.blockquote
              key={item.accreditation}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`feature-card ${item.positioning}`}
            >
              <p className="text-base leading-relaxed text-foreground">"{item.quote}"</p>
              <p className="text-sm text-muted-foreground mt-4 font-medium">{item.accreditation}</p>
            </motion.blockquote>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
            "{" "}
            <span className="text-gradient-scarlet">Giving nurses</span> their time back and patients the{" "}
            <span className="text-gradient-scarlet">care they deserve</span>."
          </h2>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="cream">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">A Real Scenario</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-0">
            {workflowNurse.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-start gap-6 pb-8 relative"
              >
                {i < 5 && <div className="absolute left-5 top-10 w-0.5 h-full bg-primary/20" />}
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
          <div className="space-y-0">
            {workflowPatient.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-start gap-6 pb-8 relative"
              >
                {i < 5 && <div className="absolute left-5 top-10 w-0.5 h-full bg-primary/20" />}
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
        </div>
      </SectionWrapper>
    </>
  );
};

export default Problem;

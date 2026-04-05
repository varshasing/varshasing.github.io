import { motion } from "framer-motion";
import { Github, FileText, Play, ExternalLink } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const resources = [
  { icon: Github, label: "GitHub Repository", desc: "Source code, documentation, and setup guides", href: "https://github.com", external: true },
  { icon: FileText, label: "PDF Manual", desc: "Complete system documentation and user manual", href: "#", external: false },
  { icon: Play, label: "Demo Video", desc: "Watch NurseAid in action during live testing", href: "#", external: false },
];

const Resources = () => {
  return (
    <SectionWrapper>
      <div className="text-center mb-14 space-y-4">
        <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
          <span className="text-gradient-scarlet">Resources</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Documentation, source code, and demo materials.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {resources.map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group feature-card flex items-center gap-6"
          >
            <div className="w-14 h-14 rounded-xl bg-scarlet-soft flex items-center justify-center shrink-0">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-semibold text-lg">{item.label}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Resources;

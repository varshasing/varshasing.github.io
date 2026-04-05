import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, LucideIcon } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export interface SubsystemSection {
  title: string;
  content?: string;
  bullets?: string[];
}

interface SubsystemPageProps {
  title: string;
  icon: LucideIcon;
  overview: string;
  sections: SubsystemSection[];
}

const SubsystemPage = ({ title, icon: Icon, overview, sections }: SubsystemPageProps) => {
  return (
    <>
      <SectionWrapper>
        <Link
          to="/implementation"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Implementation
        </Link>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-scarlet-soft flex items-center justify-center">
            <Icon className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold">{title}</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">{overview}</p>
      </SectionWrapper>

      {sections.map((section, i) => (
        <SectionWrapper key={section.title} variant={i % 2 === 1 ? "warm" : "default"}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
              {section.title}
            </h2>
            {section.content && (
              <p className="text-muted-foreground leading-relaxed mb-6">
                {section.content}
              </p>
            )}
            {section.bullets && (
              <ul className="space-y-3">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </SectionWrapper>
      ))}
    </>
  );
};

export default SubsystemPage;

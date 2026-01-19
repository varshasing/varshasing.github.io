import { useState } from 'react';
import { ChevronDown, ChevronUp, Building2, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Experience {
  id: string;
  company: string;
  role: string;
  team?: string;
  period: string;
  location: string;
  shortDescription: string;
  fullDescription: string[];
  technologies: string[];
  logo?: string;
}

const experiences: Experience[] = [
  {
    id: '1',
    company: 'Digits',
    logo: '/digits-logo.png',
    role: 'Incoming Engineering Intern',
    team: 'TBD/TBA',
    period: 'May 2025 - Aug 2025',
    location: 'Boston, MA',
    shortDescription: 'Incoming Engineering Intern at Digits, a startup revolutionizing financial data management as the first AI-native accounting platform.',
    fullDescription: [
      'Details to be added upon completion of internship.',
    ],
    technologies: ['TBD' ],
  },
  {
    id: '2',
    company: 'BU Department of Electrical & Computer Engineering',
    logo: '/bu-ece-logo.jpeg',
    role: 'Teaching Assistant',
    period: 'Aug 2023 - Present',
    location: 'Boston, MA',
    shortDescription: 'Mentored 100+ students through 13 engineering course offerings in C, C++, Verilog, Assembly, Python, and MATLAB. (Courses listed below)',
    fullDescription: [
      'Graduate Courses: ENG EC535: Embedded Systems, ENG EC523: Deep Learning',
      'Undergraduate Courses: ENG EC444: Smart and Connected Systems, ENG EC414: Machine Learning [2x], ENG EC413: Computer Organization, ENG EC330: Applied Algorithms and Data Structures [2x], ENG EC311: Introduction to Logic Design; ENG EK122: Programming for Engineers [2x], ENG EK121: Introduction to Programming [2x].',
      'Led weekly discussions and lab sessions, clarifying complex concepts in embedded systems, computer architecture, and digital logic design.',
      'Automated grading tools in Bash / Python, cutting grading time by ~65% and ensuring consistency across graders.',
      'Conducted code reviews and delivered feedback to students on debugging, refactoring, and test-driven development.',
      'Administered and evaluated oral exams on critical embedded systems and computer organization topics including timers, character devices, interrupts, kernelspace programming, pipeline hazards, and CPU design tradeoffs.',
    ],
    technologies: ['QEMU', 'ARM', 'PyTorch', 'CUDA', 'Python', 'Bash'],
  },
  {
    id: '3',
    company: 'Broadridge Financial Solutions',
    role: 'Global Technology Intern',
    team: 'Developer Experience',
    logo: '/broadridge-logo.webp',
    period: 'Jun 2025 - Aug 2025',
    location: 'Boston, MA',
    shortDescription: 'Initiated Perforce to GitLab migration for 1200+ applications; Authored DevOps playbooks and tutorials; Led a team of 9 interns in AI Compliance capstone project.',
    fullDescription: [
      'Drove Perforce to GitLab migration for 1200+ applications with detailed planning, metrics tracking, and coordination with central DevOps team to manage large-scal organizational process, presented strategy to VP/CTO-level stakeholders.',
      'Authored comprehensive DevOps playbooks and tutorials covering how to build Jenkins CI pipelines with automated builds and email notifications, and how to provision a Jenkins agent on AWS EC2 for the DevEx team. Reduced on-boarding time, standardized compliance checks, and established base for CI/CD rollout.',
      'Delivered capstone project for the AI Compliance team: AI-driven compliance dashboard with document upload, task assignment, and team collaboration features. Built a PII redaction module in Python for policy development, enabling data-compliant use of LLMs in regulated workflows. Led a team of 9 interns using Agile methodologies, conducting daily stand-ups, sprint planning, and retrospectives to ensure alignment with customer and high-quality output.',
    ],
    technologies: ['GitLab', 'Jenkins', 'CI/CD', 'AWS (EC2)', 'Python', 'Jira', 'Agile'],
  },
  {
    id: '4',
    company: 'Boston University',
    role: 'Undergraduate Research Assistant',
    team: 'The Sharifzadeh Group (BU ECE)',
    logo: '/bu-ece-logo.jpeg',
    period: 'Feb 2024 - Dec 2025',
    location: 'Boston, MA',
    shortDescription: 'Advanced research on protein nanowire electron transport by architecting automated workflows for data analysis and simulation. Funded through UROP Fellowship and the Clare Boothe Luce Foundation.',
    fullDescription: [
      'Architected automated computational workflows using Python and Bash to integrate multi-step simulation tools with JSON-based data pipelines. Reduced manual setup time by 8x, enabling high-throughput analysis of electron transport in protein nanowires.',
      'Deployed and monitored large-scale simulations on high-performance computing cluster (SunGrid Engine) writing batch job scripts, error handling routines, and data convergence scripts. Ensured reproducible testing environment with Conda and Git.',
      'Extended existing research scope by automating distortions along the Raman spectra of protein nanowires, enabling comprehensive analysis of structural variations on electron transport properties.',
      'Conducted code reviews, debugging, and refactoring simulation code for accuracy and precision.',
      'Presented findings at BU Undergraduate Research Symposium and co-authoring a paper for publication.',
    ],
    technologies: ['Python', 'MatPlotLib', 'Bash', 'Git', 'Conda'],
  },
];

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-primary glow-box" />

      <div className="glass-card p-6 hover:border-primary/30 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          {experience.logo ? (
            <img src={experience.logo} alt={experience.company} className="w-12 h-12 rounded-lg object-cover" />
            ) : (
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
            <Building2 className="h-6 w-6 text-primary" />
        </div>
          )}

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <div>
                <h3 className="text-lg font-heading font-semibold">{experience.role}</h3>
                <p className="text-primary font-medium">
                  {experience.company}
                  {experience.team && <span className="text-muted-foreground"> • {experience.team}</span>}
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {experience.period}
              </div>
            </div>

            <p className="text-muted-foreground mb-4">{experience.shortDescription}</p>

            {/* Expandable Content */}
            {isExpanded && (
              <div className="animate-fade-in">
                <ul className="space-y-2 mb-4">
                  {experience.fullDescription.map((point, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-heading bg-primary/10 text-primary rounded border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Expand/Collapse Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-muted-foreground hover:text-primary -ml-3"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="h-4 w-4 mr-1" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 mr-1" />
                  Show More
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-heading mb-2">{'// Experience'}</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            Where I've <span className="gradient-text">Worked</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ExperienceCard experience={exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

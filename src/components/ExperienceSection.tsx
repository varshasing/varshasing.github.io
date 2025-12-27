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
    company: 'Tech Company A',
    role: 'Software Engineering Intern',
    team: 'Platform Team',
    period: 'Jun 2024 - Aug 2024',
    location: 'San Francisco, CA',
    shortDescription: 'Built scalable microservices and improved CI/CD pipelines for cloud infrastructure.',
    fullDescription: [
      'Developed and deployed 3 microservices handling 10k+ requests per minute using Go and Kubernetes',
      'Reduced deployment time by 40% through CI/CD pipeline optimizations with GitHub Actions',
      'Collaborated with senior engineers on system design reviews and code architecture decisions',
      'Implemented comprehensive monitoring and alerting using Prometheus and Grafana',
    ],
    technologies: ['Go', 'Kubernetes', 'Docker', 'AWS', 'Terraform'],
  },
  {
    id: '2',
    company: 'Robotics Startup',
    role: 'Embedded Systems Intern',
    team: 'Firmware Team',
    period: 'Jan 2024 - May 2024',
    location: 'Boston, MA',
    shortDescription: 'Developed firmware for autonomous mobile robots with real-time sensor processing.',
    fullDescription: [
      'Wrote C++ firmware for ARM Cortex-M4 microcontrollers controlling robot locomotion',
      'Implemented sensor fusion algorithms combining IMU, LIDAR, and wheel encoders for localization',
      'Designed and tested custom PCB for motor driver interface with KiCad',
      'Reduced sensor processing latency by 30% through RTOS task optimization',
    ],
    technologies: ['C++', 'FreeRTOS', 'ARM', 'ROS2', 'KiCad'],
  },
  {
    id: '3',
    company: 'University Research Lab',
    role: 'Undergraduate Researcher',
    team: 'Computer Vision Lab',
    period: 'Sep 2023 - Dec 2023',
    location: 'University Campus',
    shortDescription: 'Researched deep learning approaches for real-time object detection on edge devices.',
    fullDescription: [
      'Implemented and optimized YOLOv8 models for deployment on NVIDIA Jetson Nano',
      'Achieved 45 FPS inference speed while maintaining 92% mAP on custom dataset',
      'Published findings in workshop paper at regional AI conference',
      'Mentored 2 junior students on machine learning fundamentals and PyTorch',
    ],
    technologies: ['Python', 'PyTorch', 'OpenCV', 'CUDA', 'TensorRT'],
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
          {/* Company Logo Placeholder */}
          <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
            <Building2 className="h-6 w-6 text-primary" />
          </div>

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
            A timeline of my professional journey in tech.
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

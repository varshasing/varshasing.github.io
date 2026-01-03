import { useState, useMemo } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  technologies: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Autonomous Drone Navigation',
    shortDescription: 'ROS2-based autonomous navigation system for quadcopter drones with obstacle avoidance.',
    fullDescription: [
      'Built a complete autonomous navigation stack for quadcopter drones using ROS2 and PX4.',
      'Implemented SLAM using ORB-SLAM3 for real-time localization at 30Hz.',
      'Developed path planning algorithms with A* and obstacle avoidance using depth cameras.',
      'Successfully navigates complex indoor environments autonomously.',
    ],
    technologies: ['C++', 'ROS2', 'Python', 'OpenCV'],
    tags: ['Robotics', 'Embedded', 'C++'],
    githubUrl: '#',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop',
  },
  {
    id: '2',
    title: 'Smart Home IoT Platform',
    shortDescription: 'Full-stack IoT platform with custom ESP32 sensors and React dashboard.',
    fullDescription: [
      'Designed and built a complete smart home ecosystem with custom PCB sensor nodes.',
      'Developed ESP32 firmware and MQTT broker for real-time communication.',
      'Created a React dashboard for monitoring temperature, humidity, motion, and air quality.',
      'Implemented automated alerts and historical data visualization.',
    ],
    technologies: ['React', 'Node.js', 'ESP32', 'MQTT', 'PostgreSQL'],
    tags: ['Full-Stack', 'Embedded', 'Hardware'],
    githubUrl: '#',
    liveUrl: '#',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  },
  {
    id: '3',
    title: 'FPGA Neural Network Accelerator',
    shortDescription: 'Custom hardware accelerator for CNN inference on Xilinx FPGA.',
    fullDescription: [
      'Designed a custom neural network accelerator in Verilog targeting Xilinx Artix-7 FPGA.',
      'Implemented systolic array architecture for matrix multiplication.',
      'Achieved 2.5 TOPS for INT8 inference performance.',
      'Integrated with Python for model conversion and testing pipelines.',
    ],
    technologies: ['Verilog', 'Python', 'Vivado', 'PyTorch'],
    tags: ['Hardware', 'Embedded', 'Python'],
    githubUrl: '#',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
  },
  {
    id: '4',
    title: 'Real-time Collaborative Editor',
    shortDescription: 'Google Docs-like collaborative text editor with operational transform.',
    fullDescription: [
      'Built a real-time collaborative text editor supporting multiple simultaneous users.',
      'Implemented conflict resolution using operational transformation algorithms.',
      'Features rich text formatting, cursor presence, and automatic saving.',
      'Handles 100+ concurrent connections with sub-100ms latency.',
    ],
    technologies: ['TypeScript', 'React', 'Node.js', 'WebSocket', 'Redis'],
    tags: ['Full-Stack', 'TypeScript'],
    githubUrl: '#',
    liveUrl: '#',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
  },
  {
    id: '5',
    title: 'Line Following Robot',
    shortDescription: 'Competition-winning line follower with PID control and adaptive speed.',
    fullDescription: [
      'Designed and built a high-speed line following robot for university competition.',
      'Features custom PCB with STM32 MCU, IR sensor array, and brushless DC motors.',
      'Implemented adaptive PID control for optimal path following.',
      'Achieved top 3 placement in regional robotics competition.',
    ],
    technologies: ['C', 'STM32', 'KiCad', 'MATLAB'],
    tags: ['Robotics', 'Embedded', 'Hardware', 'C++'],
    githubUrl: '#',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
  },
  {
    id: '6',
    title: 'Compiler for Subset of C',
    shortDescription: 'LLVM-based compiler for a C-like language with optimizations.',
    fullDescription: [
      'Implemented a compiler for a subset of C targeting x86-64 via LLVM.',
      'Built lexer, recursive descent parser, and semantic analysis phases.',
      'Supports functions, structs, pointers, and complex expressions.',
      'Implemented optimizations including constant folding and dead code elimination.',
    ],
    technologies: ['C++', 'LLVM', 'Python'],
    tags: ['C++', 'Systems'],
    githubUrl: '#',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
  },
];

// Extract all unique tags
const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="glass-card overflow-hidden hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
      {/* Featured Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        
        {/* Links overlay */}
        <div className="absolute top-3 right-3 flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-heading font-semibold mb-2">{project.title}</h3>
        
        <p className="text-muted-foreground text-sm mb-4">
          {project.shortDescription}
        </p>

        {/* Expanded bullet points */}
        {isExpanded && (
          <ul className="space-y-2 mb-4 animate-fade-in">
            {project.fullDescription.map((point, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-1.5 text-xs">▹</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-muted-foreground hover:text-primary -ml-3 mb-4 self-start"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-1" />
              Less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-1" />
              More
            </>
          )}
        </Button>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-heading text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return projects;
    return projects.filter((project) =>
      selectedTags.some((tag) => project.tags.includes(tag))
    );
  }, [selectedTags]);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12 animate-fade-up">
          <p className="text-primary font-heading mb-2">{'// Projects'}</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects spanning embedded systems, robotics, and web development.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <Button
            variant={selectedTags.length === 0 ? 'tag-active' : 'tag'}
            size="tag"
            onClick={() => setSelectedTags([])}
          >
            All
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTags.includes(tag) ? 'tag-active' : 'tag'}
              size="tag"
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects match the selected filters.</p>
            <Button variant="ghost" onClick={() => setSelectedTags([])} className="mt-4">
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

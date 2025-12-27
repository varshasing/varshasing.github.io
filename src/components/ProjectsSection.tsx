import { useState, useMemo } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Autonomous Drone Navigation',
    shortDescription: 'ROS2-based autonomous navigation system for quadcopter drones with obstacle avoidance.',
    fullDescription: 'Built a complete autonomous navigation stack for quadcopter drones using ROS2 and PX4. Implemented SLAM using ORB-SLAM3, path planning with A*, and obstacle avoidance using depth cameras. The system achieves real-time localization at 30Hz and can navigate complex indoor environments.',
    technologies: ['C++', 'ROS2', 'Python', 'OpenCV'],
    tags: ['Robotics', 'Embedded', 'C++'],
    githubUrl: '#',
  },
  {
    id: '2',
    title: 'Smart Home IoT Platform',
    shortDescription: 'Full-stack IoT platform with custom ESP32 sensors and React dashboard.',
    fullDescription: 'Designed and built a complete smart home ecosystem with custom PCB sensor nodes, ESP32 firmware, MQTT broker, and a real-time React dashboard. Supports temperature, humidity, motion, and air quality monitoring with automated alerts and historical data visualization.',
    technologies: ['React', 'Node.js', 'ESP32', 'MQTT', 'PostgreSQL'],
    tags: ['Full-Stack', 'Embedded', 'Hardware'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: '3',
    title: 'FPGA Neural Network Accelerator',
    shortDescription: 'Custom hardware accelerator for CNN inference on Xilinx FPGA.',
    fullDescription: 'Designed a custom neural network accelerator in Verilog targeting Xilinx Artix-7 FPGA. Implemented systolic array architecture for matrix multiplication, achieving 2.5 TOPS for INT8 inference. Integrated with Python for model conversion and testing.',
    technologies: ['Verilog', 'Python', 'Vivado', 'PyTorch'],
    tags: ['Hardware', 'Embedded', 'Python'],
    githubUrl: '#',
  },
  {
    id: '4',
    title: 'Real-time Collaborative Editor',
    shortDescription: 'Google Docs-like collaborative text editor with operational transform.',
    fullDescription: 'Built a real-time collaborative text editor supporting multiple simultaneous users with conflict resolution using operational transformation. Features include rich text formatting, cursor presence, and automatic saving. Handles 100+ concurrent connections with sub-100ms latency.',
    technologies: ['TypeScript', 'React', 'Node.js', 'WebSocket', 'Redis'],
    tags: ['Full-Stack', 'TypeScript'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: '5',
    title: 'Line Following Robot',
    shortDescription: 'Competition-winning line follower with PID control and adaptive speed.',
    fullDescription: 'Designed and built a high-speed line following robot for university competition. Features custom PCB with STM32 MCU, array of IR sensors, and brushless DC motors. Implemented adaptive PID control and achieved top 3 placement in regional competition.',
    technologies: ['C', 'STM32', 'KiCad', 'MATLAB'],
    tags: ['Robotics', 'Embedded', 'Hardware', 'C++'],
    githubUrl: '#',
  },
  {
    id: '6',
    title: 'Compiler for Subset of C',
    shortDescription: 'LLVM-based compiler for a C-like language with optimizations.',
    fullDescription: 'Implemented a compiler for a subset of C targeting x86-64 via LLVM. Features lexer, recursive descent parser, semantic analysis, and code generation. Supports functions, structs, pointers, and basic optimizations like constant folding and dead code elimination.',
    technologies: ['C++', 'LLVM', 'Python'],
    tags: ['C++', 'Systems'],
    githubUrl: '#',
  },
];

// Extract all unique tags
const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="glass-card p-6 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 rounded-lg bg-primary/10">
          <Folder className="h-6 w-6 text-primary" />
        </div>
        <div className="flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-lg font-heading font-semibold mb-2">{project.title}</h3>
      
      <p className="text-muted-foreground text-sm mb-4 flex-1">
        {isExpanded ? project.fullDescription : project.shortDescription}
      </p>

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

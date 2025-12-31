import { Code, Cpu, Globe, Wrench, Bot, CircuitBoard, Server } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: <Code className="h-6 w-6" />,
    skills: ['C', 'C++', 'Python', 'Java', 'Verilog', 'MATLAB', 'Bash', 'SQL', 'HTML/CSS'],
    color: 'from-pink-400 to-red-600',
  },
  {
    title: 'Frameworks',
    icon: <Globe className="h-6 w-6" />,
    skills: ['React', 'Node.js', 'Vue.js', 'Flask', 'Tailwind', 'FastAPI'],
    color: 'from-orange-400 to-amber-600',
  },
  {
    title: 'Embedded Systems',
    icon: <Cpu className="h-6 w-6" />,
    skills: ['ARM v7', 'Arduino', 'Jetson Nano', 'Interrupts & Timers', 'GPIO', 'I2C', 'UART', 'USB', 'Ethernet', 'Device Drivers', 'Bootloaders', 'Sysfs/procfs', 'Embedded Linux'],
    color: 'from-amber-400 to-yellow-500',
  },
  {
    title: 'Robotics',
    icon: <Bot className="h-6 w-6" />,
    skills: ['ROS2', 'OpenCV', 'SLAM', 'Motion Planning', 'Sensor Fusion', 'PID Control', 'LiDAR', '3D Mapping', 'Gazebo', 'RViz'],
    color: 'from-green-400 to-emerald-600',
  },
  {
    title: 'Hardware',
    icon: <CircuitBoard className="h-6 w-6" />,
    skills: ['FPGA', 'PCB Design', 'KiCad', 'Logic Analyzer (ILA)', 'Soldering'],
    color: 'from-cyan-400 to-blue-600',
  },
  {
    title: 'Tools & DevOps',
    icon: <Wrench className="h-6 w-6" />,
    skills: ['Git', 'Docker', 'CI/CD (Tekton, GitHub Actions, Jenkins)', 'Kubernetes/OpenShift', 'Make/CMake', 'GDB', 'Observability (Grafana, Loki)', 'Linux', 'Promtail', 'Lua'],
    color: 'from-indigo-400 to-violet-600',
  },
  {
    title: 'Cloud Computing',
    icon: <Server className="h-6 w-6" />,
    skills: ['AWS (SQS, Lightsail, EC2)'],
    color: 'from-purple-500 to-fuchsia-600',
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-heading mb-2">{'// Skills'}</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My diverse toolkit spanning software, hardware, and everything in between.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-heading font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-secondary/50 text-muted-foreground rounded-full border border-border/50 hover:border-primary/30 hover:text-primary transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

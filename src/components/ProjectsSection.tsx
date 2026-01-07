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
    title: 'NurseAid: Autonomous Delivery Robot for Hospitals',
    shortDescription: 'ROS2-based autonomous navigation system designed to give nurses their time back and patients the care they deserve. (Senior Capstone Project)',
    fullDescription: [
      'Implementing SLAM and navigation stacks (Nav2, ACML) using a hybrid sensor suite (PicoScan 150 LiDAR, Intel RealSense D435, IMU, and Ultrasonics).',
      'Developed ROS2 Python packages for drivetrain control, sensor fusion, and microcontroller-based peripheral management. Defined custom interfaces and message formats for encoder data and actuator control.',
      'Performed hardware bring-up: set up Ubuntu Linux environment and configured RealSense D435 and LiDAR with ROS 2 drivers on Jetson Orin Nano, enabling calibrated RGB-D and point cloud visualization in RViz2 for SLAM.',
      'Implemented modular launch system and TF tree for multi-sensor alignment.',
      'Awarded Boston University\'s 2025 ECE Shark Tank Award (awarded to top 6 Senior Design Teams).',
      'Selected as one of fifteen groups for SICK AG\'s $10,000 Challenge: a nation-wide competition for innovative LiDAR applications.',
    ],
    technologies: ['C++', 'ROS2', 'Python', 'OpenCV', 'LiDAR', 'Nav2', 'SLAM', 'Gazebo', 'Ubuntu Linux'],
    tags: ['Robotics', 'Embedded Systems', 'C++'],
    image: '/nurseaid-mockup.png',
  },
  {
    id: '2',
    title: 'StockApp',
    shortDescription: 'Distributed stock analytics application with real-time processing using a microservices architecture in Java.',
    fullDescription: [
      'Redesigned monolithic stock application into distributed microservices in Java, enabling real-time processing of user-subscribed stock data from Finnhub API with improved scalability and system modularity.',
      'Migrated internal event delivery pipelines to AWS SQS to support scalable and reliable data transfer and asynchronous communication between microservices.',
      'Designed and developed a responsive React frontend using TypeScript, enabling users to access real-time stock calculations and interactive visualizations.',
      'Deployed on AWS Lightsail and implemented unit/service testing (JUnit, ViTest) to create CI/CD pipelines with GitHub Actions.',
      'Developed and optimized core REST APIs, added monitoring hooks and multiple backend persistences (file + SQLite) to ensure reliability across restarts and deployments.',
    ],
    technologies: ['Java', 'CI/CD', 'AWS SQS', 'AWS Lightsail', 'React', 'TypeScript', 'REST APIs', 'SQLite'],
    tags: ['Full-Stack', 'Java'],
    githubUrl: 'https://github.com/varshasing/StockApp',
    image: '/stockapp-diagram.png',
  },
  {
    id: '3',
    title: 'Cloud-Native Medical Imaging Pipeline',
    shortDescription: 'An automated cloud-native neuroimaging pipeline on Openshift and workflow translation tool (tektonx), improving reproducibility and interoperability.',
    fullDescription: [
      'Architected an automated, event-driven neuroimaging pipeline on Red Hat OpenShift, integrating Orthanc (PACS) with Tekton to automate DICOM-to-NIFTI processing and AI-driven brain masking.',
      'Developed tektonx, a Python-based "Rosetta Stone" translation tool that compiles Tekton YAML into multiple workflow languages including SLURM, Nextflow, Snakemake, SunGrid Engine, and Argo.',
      'Engineered an event-driven triggr using Lua scripting within Orthanc to automatically initiatie Kubernetes-native PipelineRuns upon medical image ingestion.',
      'Implemented containerizeed neuroimaging modules (pl-emerald, pl-dcm2niix), ensuring deterministic execution and computational reproducibility across HPC and Cloud environments.',
      'Optimized research workflows for scalability by leveraging Kubernetes CRDs, Persistent Volume Claims (PVCs), and isolated pod environments for concurrent data processing.',
    ],
    technologies: ['Kubernetes', 'Docker', 'OpenShift', 'Tekton', 'Lua', 'Bash', 'Python', 'Orthanc'],
    tags: ['Cloud', 'DevOps'],
    githubUrl: 'https://github.com/varshasing/CloudNeuro-Tekton/tree/main',
    image: '/dicom-denoised.png',
  },
  {
    id: '4',
    title: 'LaunchPad (BostonHacks 2025 Main Track Winner)',
    shortDescription: 'AI-powered platform that instantly generates tailored, professional LaTeX resumes.',
    fullDescription: [
      'Developed a full-stack, AI-powered platform for generating professionally formatted, ATS-compliant LaTeX resumes tailored to specific job descriptions.',
      'Built responsive frontend using Vue.js, featuring an intuitive live resume builder and a clean user interface for managing resume components.',
      'Designed backend with Python FastAPI to handle data management, job description parsing, and a dynamic LaTeX document compilation into PDFs.',
      'Integrated Gemini API for smart features, including automatic relevance sorting of experiences and AI-generated feedback to enhance bullet point quality and keyword alignment.',
      'Main Track Winner at BostonHacks 2025: Make Fetch Happen Track.'
    ],
    technologies: ['Python', 'FastAPI', 'TypeScript', 'Vue.js', 'Gemini API', 'LaTeX'],
    tags: ['Python', 'Full-Stack'],
    githubUrl: 'https://github.com/varshasing/bhacks25',
    liveUrl: 'https://devpost.com/software/launchpad-qyvth6',
    image: '/launchpad-home.png',
  },
  {
    id: '5',
    title: 'Jailbreaking Large Language Models',
    shortDescription: 'Comparitive analysis of vulnerabilities in chatbots with PAIR. Developed a modular defense framework, delivering safe responses for 79% of jailbreaking prompts.',
    fullDescription: [
      'Implemented the PAIR (Prompt Automatic Iterative Refinement) framework, achieving highly efficient black-box "jailbreaking" of LLMs in under 20 queries.',
      'Architected an adversarial multi-agent system where an "Attacker LLM" iteratively refines semantic prompts to bypass the safety guardrails of a "Target LLM," overseen by a "Judge LLM."',
      'Developed a modular defense framework integrating prompt validation and real-time response filtering, successfully mitigating unsafe outputs for 79% of identified adversarial patterns.',
      'Conducted a comparative vulnerability assessment using the AdvBench and JailbreakBench datasets to quantify the success rates and transferability of semantic attacks across open and closed-source models.',
      'Containerized the experimentation environment using Docker and integrated Weights & Biases (WandB) for real-time telemetry and logging of adversarial iterative refinement cycles.'
    ],
    technologies: ['Python', 'Docker', 'WandB', 'API Integration'],
    tags: ['Python', 'Cybersecurity'],
    githubUrl: 'https://github.com/pzhao0/PAIR',
    image: '/jailbreaking-llms.png',
  },
  {
    id: '6',
    title: 'Custom POSIX Shell Implementation in C',
    shortDescription: 'A Bash Shell implemented in C supporting command execution, redirecting standard I/O to files, pipes, and background processes.',
    fullDescription: [
      'Developed robust Unix-like shell in C using the Read-Eval-Print Loop (REPL) paradigm to manage process lifecycles, synchronization, and system-level execution.',
      'Implemented advanced process control using "fork-and-exec" mechanics, managing child process creation and utilizing "waitpid" to prevent the creation of zombie processes.',
      'Developed a multi-stage execution pipeline supporting standard I/O redirection (>, <) and Unix pipes (|) by manipulating file descriptor tables via "dup2" and "pipe" system calls.',
      'Architected a custom string-tokenization engine to parse complex user commands, handling variable arguments and escape characters while maintaining strict memory safety.',
      'Integrated asynchronous signal handling (SIGCHLD) to manage background process execution and resource reclamation without interrupting the primary user interface.'
    ],
    technologies: ['C', 'Linux', 'GDB', 'Make'],
    tags: ['C', 'Systems'],
    githubUrl: 'https://github.com/varshasing/SimpleShell',
    image: '/shell.png',
  },
  {
    id: '7',
    title: 'Custom POSIX Threads Library Implementation in C',
    shortDescription: 'User-level POSIX threads API in C with preemptive scheduling, multithreading, inter-thread communication, and thread-local-storage with COW (copy-on-write).',
    fullDescription: [
      'Developed a comprehensive user-level threading library in C, featuring a Round Robin preemptive scheduler and context switching for high-performance concurrency.',
      'Architected a paged memory management unit (MMU) from scratch, implementing custom page fault handlers and a Copy-on-Write (CoW) optimization for efficient resource sharing.',
      'Engineered robust synchronization primitives (semaphores), utilizing atomic operations to ensure thread safety and prevent race conditions in multi-threaded execution.',
      'Implemented Thread-Local Storage (TLS) and custom stack allocation logic, managing memory boundaries to prevent stack overflows and ensure process-level isolation.',
      'Automated a rigorous verification suite using Bash and Make, conducting stress tests for memory integrity and deadlock detection to validate system reliability under high concurrency.'
    ],
    technologies: ['C', 'Make', 'Linux', 'GDB', 'Bash', 'Operating Systems'],
    tags: ['C', 'Systems'],
    githubUrl: 'https://github.com/stars/varshasing/lists/operating-systems',
    image: '/tls-os.png',
  },
  {
    id: '8',
    title: 'Custom File System Implementation in C',
    shortDescription: 'Implemented a simplified file system in C using a Windows-style File Allocation Table architecture. Supports core file operations and simulates a virtual disk environment for testing.',
    fullDescription: [
      'Engineered a custom File Allocation Table (FAT) file system on a 32 MiB virtual disk, supporting 8,192 blocks with 4KB granularity and 16 MiB maximum file sizes.',
      'Developed a comprehensive file system library providing core POSIX-like APIs: open, close, create, delete, read, write, lseek, and truncate.',
      'Optimized storage architecture to achieve 95% volume efficiency, enabling the storage of 31.2 MiB of file content on a 32 MiB partition by minimizing metadata overhead.',
      'Implemented a robust metadata layer featuring a Superblock for system configuration and a Directory structure for managing persistent file descriptors.',
      'Designed linked-list block allocation strategies to eliminate external fragmentation and ensure efficient disk space reclamation during file deletion.'
    ],
    technologies: ['C', 'Make', 'Linux', 'GDB', 'Bash', 'Operating Systems'],
    tags: ['C', 'Systems'],
    githubUrl: 'https://github.com/varshasing/File-System',
    image: '/FAT-os.png',
  },
  {
    id: '9',
    title: 'Dual-Tone Multi-Frequency (DTMF) Signaling & Filter Bank Decoder',
    shortDescription: 'A MATLAB-based study of DTMF signal processing. Developed a telecommunications system for generating and decoding dual-tone multi-frequency signals.',
    fullDescription: [
      'Synthesized Dual-Tone Multi-Frequency (DTMF) signals by combining low-group and high-group sinusoids to simulate standard telephone dialing tones.',
      'Applied the Continuous-Time Fourier Transform (CTFT) in MATLAB to analyze the frequency spectra of keypad tones and verify signal components in the voice frequency band.',
      'Engineered a multi-stage filter bank using custom-designed Bandpass Filters (BPF) to isolate unique low-group and high-group frequencies from composite keypad signals.',
      'Developed a decoding logic that identifies dialed digits by comparing energy magnitudes across the filter bank outputs.',
      'Integrated the tone generator and filter bank into a functional decoding system, validated through testing against all telephone keypad characters (0-9, *, #).'
    ],
    technologies: ['MATLAB', 'Signal Processing', 'Telecommunications'],
    tags: ['MATLAB', 'Signal Processing'],
    githubUrl: 'https://github.com/varshasing/dtmf-decoder',
    image: '/dtmf-keypad.jpg',
  },
  {
    id: '10',
    title: '5-Stage Pipelined RISC-V CPU Implementation in Verilog',
    shortDescription: 'Behavioral Verilog implementation of a RISC-V-style CPU featuring a Hazard Detection Unit and data forwarding.',
    fullDescription: [
      'Implemented a 5-stage pipelined CPU architecture (Fetch, Decode, Execute, Memory, Write-back) in behavioral Verilog to maximize instruction throughput.',
      'Implemented a Data Forwarding Unit to resolve "read-after-write" (RAW) hazards, allowing the CPU to use results before they are formally written to the register file.',
      'Designed a Hazard Detection Unit (HDU) to manage load-use dependencies and control hazards by injecting pipeline stalls (bubbles) only when necessary.',
      'Optimized execution efficiency by minimizing cycles-per-instruction (CPI) through the elimination of redundant stalls and stale data overrides.',
      'Validated architectural integrity through simulation, passing a comprehensive suite of test cases to verify instruction timing and register consistency.'
    ],
    technologies: ['Verilog', 'Digital Logic', 'Computer Architecture'],
    tags: ['Systems', 'Verilog'],
    image: '/forwarding-413.png',
  },
  {
    id: '11',
    title: 'Reinforcement Learning-Based Blackjack Agent',
    shortDescription: 'Q-Learning agent optimized for Blackjack through state-space modeling and reward engineering.',
    fullDescription: [
      'Developed an autonomous Blackjack agent in Python using a Q-Learning reinforcement learning algorithm to optimize decision-making strategies.',
      'Architected a comprehensive state-space representation tracking hand values, dealer up-cards, and the distinction between hard and soft aces.',
      'Engineered a reward structure and hyperparameter tuning process to balance exploration and exploitation, simulating over 10,000 game iterations.',
      'Achieved a 42.1% win rate, successfully matching academic benchmarks for optimal basic strategy and reinforcement learning performance.',
      'Built a custom testing environment in Jupyter/Google Colab to analyze convergence metrics and visualize the agent’s learned policy over time.'
    ],
    technologies: ['Python', 'Reinforcement Learning', 'Machine Learning'],
    tags: ['Machine Learning', 'Python'],
    githubUrl: 'https://github.com/varshasing/rl-blackjack-agent',
    image: '/rl-blackjack.png',
  },
  {
    id: '12',
    title: 'Speech to Emotion Recognition (SER) using Deep Learning',
    shortDescription: 'Classifying 6 emotions in English speaking audio with various Neural Network architectures. Achieved 74.3% test accuracy with hybrid Mamba-CNN model.',
    fullDescription: [
      'Developed a deep learning pipeline to classify six distinct vocal emotions (Anger, Disgust, Fear, Happiness, Sadness, Neutrality) from English-language audio datasets.',
      'Architected and evaluated multiple neural network configurations, including CNN-GRU, ResNet, CNN-Transformer, and State Space Model (SSM) variants like Mamba.',
      'Engineered a hybrid Mamba-CNN model that achieved a 74.3% test accuracy, outperforming the baseline CNN by 1.29% through improved long-range dependency modeling.',
      'Implemented specialized audio preprocessing routines to extract features from raw waveforms, ensuring compatibility across diverse architectural inputs.',
    ],
    technologies: ['Python', 'Audio Preprocessing', 'Machine Learning', 'PyTorch', 'State Space Model', 'CNN', 'Transformer'],
    tags: ['Machine Learning', 'Python', 'Signal Processing'],
    githubUrl: 'https://github.com/Anish701/EC523-Speech-Emotion-Recognition',
    image: '/ser.jpg',
  },
  {
    id: '13',
    title: 'Implementing and Optimizing Ray Tracing in C++ / CUDA',
    shortDescription: 'Optimizing "Ray Tracing in One Weekend" serial implementation with parallelization and GPU optimizations, achieving ~ 2.5x and 150x speedups.',
    fullDescription: [
      'Profiled and benchmarked a serial C++ ray tracing implementation based on "Ray Tracing in One Weekend" to identify performance bottlenecks in recursive ray-sphere intersection tests.',
      'Implemented CPU-level parallelism using OpenMP, achieving a 2.5x speedup by distributing pixel-casting workloads across multiple processor cores.',
      'Refactored a C++ object-oriented ray tracer into a high-performance C-style architecture to bypass CUDA constraints on virtual functions and polymorphism, enabling host-to-device transfer of complex scene geometries.',
      'Developed and optimized multiple CUDA kernels utilizing Global, Constant, and Texture memory to evaluate the impact of different memory hierarchies on ray-sphere intersection throughput.',
      'Achieved a 150x+ speedup over the serial baseline by implementing parallel pixel processing on an NVIDIA RTX 3070, optimized for warp efficiency and reduced thread divergence.',
      'Conducted a detailed comparative analysis of compute-bound vs. memory-bound operations, validating the scalability of the parallelized rendering engine.'
    ],
    technologies: ['C++', 'CUDA', 'OpenMP', 'NVIDIA Nsight', 'Ray Tracing'],
    tags: ['Systems', 'C++', 'CUDA'],
    githubUrl: 'https://github.com/EC527JilinZhengVarshaSingh/super-raytrace',
    image: '/ray-tracing.png',
  },
  {
    id: '14',
    title: 'Remote-Controlled Quadruped with Live Camera Feed and GUI Control',
    shortDescription: 'Low-latency remote control system for the HiWonder PuppyPi featuring LiDAR-based collision avoidance and live MJPG streaming.',
    fullDescription: [
      'Engineered a platform-agnostic, browser-based remote control system for the HiWonder PuppyPi quadruped, utilizing a React.js frontend and a Python-based WebSocket (TCP) server for bidirectional communication.',
      'Implemented real-time motion control via WASD keyboard mappings and UI triggers, achieving an average round-trip latency of 13ms-24ms.',
      'Developed an asynchronous safety layer that integrates LD19 LiDAR data to monitor the environment and automatically override unsafe forward/backward movement commands when obstacles are detected within 30cm.',
      'Integrated an onboard USB camera utilizing MJPG-Streamer to provide a low-latency live video feed, enabling remote navigation through the React interface over a shared network.',
      'Leveraged the HiWonder Python SDK and rospy to orchestrate precise servomotor sequences and complex kinematic behaviors (e.g., bowing, height adjustment).',
    ],
    technologies: ['Python', 'React.js', 'WebSocket', 'ROS (rospy)', 'LiDAR', 'Raspberry Pi', 'MJPG-Streamer'],
    tags: ['Robotics', 'Full-Stack', 'Embedded Systems'],
    githubUrl: 'https://github.com/varshasing/ec535-final-project',
    image: '/puppy-pi.jpeg',
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

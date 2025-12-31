import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 animate-fade-up">
            <p className="text-primary font-heading mb-4 tracking-wider">
              Hello, World! I'm
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-4">
              <span className="gradient-text">Varsha Singh</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-muted-foreground font-heading mb-6">
              Computer Engineer
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              I'm studying at Boston University, specializing in 
              <span className="text-primary"> embedded systems</span>, 
              <span className="text-primary"> robotics</span>, and 
              <span className="text-primary"> cloud computing / modern software development</span>. 
              I love building things at the intersection of hardware and software, and will help a billion people with my work!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="glow" size="lg" onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Projects
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}>
                Experience
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://github.com/varshasing" target="_blank" rel="noopener noreferrer">
              <Button variant="glass" size="icon" className="hover:glow-box">
                <Github className="h-5 w-5" />
              </Button>
              </a>

              <a href="https://linkedin.com/in/var-singh" target="_blank" rel="noopener noreferrer">
              <Button variant="glass" size="icon" className="hover:glow-box">
                <Linkedin className="h-5 w-5" />
              </Button>
              </a>

              <a href="mailto:varshasinghtx@gmail.com">
              <Button variant="glass" size="icon" className="hover:glow-box">
                <Mail className="h-5 w-5" />
              </Button>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-primary/30 glow-box animate-glow-pulse">
                <img 
                  src="/profilephoto.jpg" 
                  alt="Varsha Singh" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary/30 rounded-lg" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-primary/20 rounded-lg" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

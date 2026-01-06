import { ArrowDown, Download, Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-placeholder.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center matrix-bg relative pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <p className="text-primary font-mono text-sm mb-4">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
              Ikaneng Thekiso
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Quantitative Analyst | Applied Mathematics
            </p>
            <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
              I am a highly motivated Applied Mathematics and Operations Research graduate 
              with a strong passion for solving complex problems using computational and 
              analytical techniques to deliver meaningful solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2">
                <Download size={18} />
                Download CV
              </Button>
              <Button variant="default" className="bg-secondary text-secondary-foreground hover:bg-secondary/80 gap-2">
                <Mail size={18} />
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="mailto:ikanengthekiso@gmail.com"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://linkedin.com/in/ikanengthekiso"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary animate-pulse-glow">
                <img
                  src={profileImage}
                  alt="Ikaneng Thekiso"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-float">
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown size={20} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import { Code2, Database, Cloud } from "lucide-react";
import profileImage from "assets/profile.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Icon badges */}
          <div className="flex justify-center gap-4 mb-8 animate-fade-in">
            <div className="p-3 bg-primary/10 rounded-full border-2 border-primary/20 hover:border-primary/40 transition-all hover:scale-110">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <div className="p-3 bg-secondary/10 rounded-full border-2 border-secondary/20 hover:border-secondary/40 transition-all hover:scale-110">
              <Database className="h-6 w-6 text-secondary" />
            </div>
            <div className="p-3 bg-accent/10 rounded-full border-2 border-accent/20 hover:border-accent/40 transition-all hover:scale-110">
              <Cloud className="h-6 w-6 text-accent" />
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center mb-6 animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl"></div>
              <img 
                src={profileImage} 
                alt="Aditya - Software Developer" 
                className="relative w-40 h-40 rounded-full object-cover border-0 border-background shadow-lg hover:scale-110 transition-transform"
              />
            </div>
          </div>

          <h1 className="text-5xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            SARITHA K.
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Fusing secure software development, cloud infrastructure, DevOps, and database mastery to deliver seamless digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 hover:bg-muted"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

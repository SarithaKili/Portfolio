import { Card } from "@/components/ui/card";
import { Quote, Building2 } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">What Others Say</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Testimonials from colleagues and mentors.
          </p>

          <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
            <Quote className="absolute top-4 right-4 h-16 w-16 text-primary/10" />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Chetan Garje</h3>
                <p className="text-muted-foreground">Backend Developer | Python Engineer | API & Automation Specialist</p>
                <p className="text-sm text-primary font-medium">Jio Platforms Ltd.</p>
              </div>
            </div>

            <blockquote className="text-foreground leading-relaxed italic border-l-4 border-primary pl-4">
              "I had the pleasure of working with Aditya on a project during his summer internship at Jio, and he was a real standout. He jumped into our work with confidence, whether it was streamlining backend code, or keeping things moving under tight deadlines. Aditya picks up new tech super fast, brings sharp ideas to the table, and gels with everyone like he's been part of the team forever. His positive energy and strong skills made our project better. He's got the kind of talent and drive that would make him a great fit for any team."
            </blockquote>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

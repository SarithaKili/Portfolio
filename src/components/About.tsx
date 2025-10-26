import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Code, Network } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Cloud, label: "Cloud Computing", color: "bg-primary/10 text-primary border-primary/20" },
    { icon: Code, label: "Web Development", color: "bg-secondary/10 text-secondary border-secondary/20" },
    { icon: Network, label: "System Design", color: "bg-accent/10 text-accent border-accent/20" },
  ];

  const education = [
    {
      institution: "University of Jaffna",
      degree: "BSc Computer Engineering",
      period: "2020 – 2025 ",
    },
    {
      institution: "CP/N/Talawakella T.M.V",
      degree: "G.C.E Advanced Level (Pysical Science Stream)",
      period: "2020 – 2023",
    },
    {
      institution: "CP/N/Dayagama T.V",
      degree: "G.C.E Ordinary Level",
      period: "2009 – 2015",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">About Me</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            BSc Computer Engineering Undergraduate
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left: Skills badges and description */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {skills.map((skill) => (
                  <Badge
                    key={skill.label}
                    variant="outline"
                    className={`${skill.color} px-4 py-2 text-sm font-medium border-2 hover:scale-105 transition-transform flex items-center gap-2`}
                  >
                    <skill.icon className="h-4 w-4" />
                    {skill.label}
                  </Badge>
                ))}
              </div>

              <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
                <p className="text-foreground leading-relaxed">
                  I’m Kili Saritha, a Computer Engineering graduate with a passion for creating efficient, scalable, and user-focused software solutions. My experience spans backend development, cloud deployment, and database management, working with technologies like FastAPI, React, AWS, and Docker. I enjoy solving complex problems and turning ideas into meaningful digital experiences that drive real results.</p>
                <p className="text-foreground leading-relaxed mt-4">
                 I believe real skill is a state of mind to commit to the job — to learn, adapt, and deliver with purpose. With every challenge, I bring value, innovation, and success to the table through dedication, teamwork, and a strong desire to make technology smarter, faster, and more impactful.</p>
              </Card>
            </div>

            {/* Right: Education */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Education</h3>
              {education.map((edu, index) => (
                <Card key={index} className="p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary">
                  <h4 className="font-bold text-lg text-foreground mb-1">{edu.institution}</h4>
                  <p className="text-muted-foreground font-medium mb-2">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

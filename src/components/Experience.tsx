import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {  MapPin, Calendar } from "lucide-react";
import logo from "@/assets/arescomp.jpg";

const Experience = () => {
 const toolsAndTech = [
  { name: "Python", category: "Programming Language" },
  { name: "FastAPI", category: "Backend Framework" },
  { name: "MongoDB", category: "Database" },
  { name: "MQTT", category: "IoT Messaging Protocol" },
  { name: "Mosquitto", category: "MQTT Broker" },
  { name: "Docker", category: "Containerization" },
  { name: "AWS EC2", category: "Cloud Hosting" },
  { name: "Ubuntu", category: "Operating System" },
  { name: "JWT", category: "Authentication" },
  { name: "SMTP", category: "Email Service" },
  { name: "WebSocket", category: "Real-time Communication" },
  { name: "SSL/TLS", category: "Security Protocol" },
  { name: "Postman", category: "API Testing" },
  { name: "Swagger", category: "API Documentation" },
];



  const achievements = [
  "Designed and implemented a secure, modular FastAPI backend for the web app with a hybrid microservice, monolithic architecture, ensuring scalability and maintainability.",
  "Integrated an MQTT-based IoT data ingestion pipeline to capture and store real-time IoT device readings in MongoDB.",
  "Enabled real-time communication through WebSocket channels supporting chat, alerts, and LLM-based suggestions.",
  "Implemented JWT-based authentication with role-based access control, encrypted data storage, and SSL/TLS-secured communication for enhanced security.",
  "Deployed all backend services, MongoDB, and the Mosquitto broker on AWS EC2 Ubuntu instances using Docker, optimizing performance and isolation.",
  "Integrated an SMTP service for password resets, OTP verification, and automated email notifications to enhance user experience and security.",
  "Documented and tested RESTful APIs using Postman and Swagger (OpenAPI), ensuring reliable endpoints and seamless frontend integration.",
];


  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Experience</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            My professional journey in software development and engineering.
          </p>

          <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary">
            {/* Company Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 pb-6 border-b">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="h-16 w-16 flex items-center justify-center">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-14 w-14 object-contain rounded-full"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground">Advanced Research Computing Lanka (Pvt) Ltd</h3>
                  <p className="text-lg text-muted-foreground">Software Developer(Backend) Intern</p>
                </div>
              </div>
              <Badge variant="secondary" className="w-fit bg-secondary/10 text-secondary border border-secondary/20">
                Internship
              </Badge>
            </div>

            {/* Details */}
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Feb 2025 – August 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>National incubation center uoj-foe & Colombo, Srilanka</span>
              </div>
            </div>

            {/* Tools & Technologies Used */}
<div className="mb-8">
  <h4 className="text-base font-semibold mb-2 text-foreground">
    Tools & Technologies Used
  </h4>

  <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
    {toolsAndTech.map((tool, index) => (
      <Card
        key={index}
        className="p-3 text-center bg-muted/50 border-none hover:bg-muted transition-colors"
      >
        <div className="text-sm font-semibold text-primary mb-1">
          {tool.name}
        </div>
        <div className="text-xs text-muted-foreground">
          {tool.category}
        </div>
      </Card>
    ))}
  </div>
</div>



            {/* Key Achievements */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Key Achievements</h4>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span className="text-foreground leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t">
              <p className="text-muted-foreground mb-4">
                Open to discussing technology, sharing knowledge, and building meaningful connections in the tech community.
              </p>
              <Button onClick={scrollToContact} className="bg-primary hover:bg-primary/90">
                Start a Conversation
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;

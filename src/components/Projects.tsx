import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
const Projects = () => {
  const projects = [
    {
      title: "E-Waste Management System",
      description:
        "The GBin-HCI-project by SarithaKili aims to promote smart e-waste management and efficient natural resource use through an interactive user-centered design applying Human Computer Interaction principles.",
      tags: ["HTML", "CSS", "JavaScript", "node"],
      github: "https://github.com/SarithaKili/GBin-HCI-project",
      live: "http://16.170.228.38:5173/",
      image: "/src/assets/ewaste.png",
      gradient: "from-primary/10 to-primary/5",
    },
    {
      title: "Lab Booking System",
      description:
        "The proposed software is a university lab management system that streamlines lab bookings, schedules, and resource management. It provides secure access for admins, staff, and students, enabling admins to manage labs and inventory, staff to handle bookings and attendance, and students to view schedules. With features like notifications, analytics, and reporting, it ensures efficient, organized, and transparent lab operations.",
      tags: [
        
        "React JS",
        "Java Spring Boot (Microservices Architecture)",
        "MySQL",
        "Microsoft Entra ID ",
        "Git",
        "GitHub Actions",
        "Azure Cloud",
        "JIRA"
      ],
      github: "https://github.com/SarithaKili/labbooking",
      live: "http://13.61.9.179:5173/",
      image: "/src/assets/lab.png",
      gradient: "from-secondary/10 to-secondary/5",
    },
    {
      title: "Gesture Controlled Virtual Mouse",
      description:
        "A computer vision system that allows users to control mouse movements and clicks using hand gestures via webcam. Integrated with voice commands and real-time tracking using MediaPipe and OpenCV.",
      tags: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI", "SpeechRecognition"],
      github: "https://github.com/SarithaKili/Gesture-Controlled-Virtual-Mouse-",
      
      image: "/src/assets/mouse.jpg",
      gradient: "from-accent/10 to-accent/5",
    },
    {
      title: "Food Delivery Application",
      description:
        "A responsive web-based food ordering system featuring user authentication, restaurant menus, and order tracking. Built with React and Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "Firebase", "JavaScript"],
      github: "https://github.com/SarithaKili/FullstackDev",
      live: "http://16.171.8.121:5173/",
      image: "/src/assets/food.png",
      gradient: "from-yellow-100 to-yellow-50",
    },
    {
      title: "Task-Level Cloud Resource Management (Research)",
      description:
        "Optimized cloud resource allocation in heterogeneous GPU clusters using deep learning models (DNN, LSTM, Bi-LSTM). Integrated model predictions with dynamic schedulers to improve utilization.",
      tags: ["Python", "TensorFlow", "Pandas", "LSTM", "Cloud Computing"],
      github: "https://github.com/SarithaKili/research",
      image: "/src/assets/research.png",
      gradient: "from-indigo-100 to-indigo-50",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Featured Projects
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg">
            A showcase of my recent work, demonstrating my expertise in
            full-stack development.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`p-6 shadow-md hover:shadow-xl transition-all hover:scale-[1.02] bg-gradient-to-br ${project.gradient} border border-gray-200`}
              >
                {/* Project Image */}
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-65 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Project Info */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-gray-200 text-gray-900 border border-gray-300 hover:bg-gray-300 transition-colors font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover:bg-gray-200 text-gray-800 border-gray-400"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.live && (
                    <Button
                      size="sm"
                      asChild
                      className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

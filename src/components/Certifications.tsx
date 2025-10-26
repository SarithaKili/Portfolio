import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
const Certifications = () => {
  const projects = [
    {
      title: "Cisco Certified Network Associate-Fundamental",
      tags: ["CISCO", "Networking"],
      image: "/src/assets/cert_1.png",
      gradient: "from-primary/10 to-primary/5",
    },
    {
      title: "IEEEXTREME 18.0 REGION 10",
      tags: ["Datastructure & Algorithms"],
      image: "/src/assets/cert_2.jpg",
      gradient: "from-primary/10 to-primary/5",
    },
    {
      title: "Azure AI Fundamentals",
      tags: ["Azure", "AI"],
      image: "/src/assets/cert_3.jpg",
      gradient: "from-primary/10 to-primary/5",
    },
    {
      title: "Agile Project Management",
      tags: ["Software development life cycle"],
      image: "/src/assets/cert_4.png",
      gradient: "from-primary/10 to-primary/5",
    }
   
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Certifications & Achivements
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg">
            A glimpse into my journey of continuous learning and professional development through certifications.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
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
                <h3 className="text-1xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
               

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

              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Server,
  Layout,
  Database,
  Wrench,
  Box,
  Brain,
  BarChart3,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-blue-600",
      skills: ["C++", "Python", "Java", "JavaScript"],
    },
    {
      title: "Frameworks & Libraries",
      icon: Server,
      color: "text-purple-600",
      skills: ["React", "FastAPI", "Spring Boot"],
    },
    {
      title: "Frontend & UI/UX",
      icon: Layout,
      color: "text-pink-600",
      skills: ["HTML", "CSS", "Tailwind CSS", "Figma"],
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-green-700",
      skills: ["MySQL", "Oracle", "MongoDB"],
    },
    {
      title: "Cloud & DevOps",
      icon: Wrench,
      color: "text-orange-600",
      skills: [
        "AWS",
        "Jenkins",
        "GitHub Actions",
        "Terraform",
        "CI/CD",
        "Ansible",
      ],
    },
    {
      title: "Containerization & Version Control",
      icon: Box,
      color: "text-sky-600",
      skills: ["Docker", "Kubernetes", "Git", "GitHub"],
    },
    {
      title: "Tools & Testing",
      icon: BarChart3,
      color: "text-yellow-600",
      skills: ["VS Code", "Swagger", "Postman", "JIRA"],
    },
    {
      title: "Problem Solving",
      icon: Brain,
      color: "text-indigo-600",
      skills: ["Data Structures", "Algorithms"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Technical Skills
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg">
            A glimpse into my toolbox of technologies and skills.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 shadow-md hover:shadow-lg transition-all hover:scale-[1.02] bg-white border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 bg-gray-100 rounded-lg ${category.color}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-gray-40 border border-gray-300 text-gray-800 hover:bg-gray-200 transition-colors"
                    >
                      {skill}
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

export default Skills;

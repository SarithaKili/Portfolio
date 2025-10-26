import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// ✅ Import all images properly
import cert1 from "@/assets/cert_1.png";
import cert2 from "@/assets/cert_2.jpg";
import cert3 from "@/assets/cert_3.jpg";
import cert4 from "@/assets/cert_4.png";

const Certifications = () => {
  const certifications = [
    {
      title: "Cisco Certified Network Associate - Fundamental",
      tags: ["CISCO", "Networking"],
      image: cert1,
      gradient: "from-primary/10 to-primary/5",
    },
    {
      title: "IEEEXTREME 18.0 REGION 10",
      tags: ["Data Structures & Algorithms"],
      image: cert2,
      gradient: "from-primary/10 to-primary/5",
    },
    {
      title: "Azure AI Fundamentals",
      tags: ["Azure", "AI"],
      image: cert3,
      gradient: "from-primary/10 to-primary/5",
    },
    {
      title: "Agile Project Management",
      tags: ["Software Development Life Cycle"],
      image: cert4,
      gradient: "from-primary/10 to-primary/5",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Certifications & Achievements
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg">
            A glimpse into my journey of continuous learning and professional
            development through certifications.
          </p>

          {/* Certification Cards */}
          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className={`p-6 shadow-md hover:shadow-xl transition-all hover:scale-[1.02] bg-gradient-to-br ${cert.gradient} border border-gray-200`}
              >
                {/* Certification Image */}
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {cert.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {cert.tags.map((tag) => (
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

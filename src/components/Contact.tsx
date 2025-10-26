import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
      "service_4bntyb8", // your service ID
      "template_bft7vc5", // ✅ your template ID
      {
        subject: `Message from ${formData.name}`,
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      "svPsVncsfq8CXFh-k" // ✅ your public key
    );


      toast.success("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email send failed:", error);
      toast.error("❌ Failed to send message. Try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Let's Connect</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Contact Form */}
            <Card className="md:col-span-2 p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-4">
              <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a
                      href="mailto:kilisarithaofficial@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      kilisarithaofficial@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-sm text-muted-foreground">Nuwara-Eliya, Sri Lanka</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

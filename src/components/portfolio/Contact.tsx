import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "dpmjagan3@gmail.com",
    href: "mailto:dpmjagan3@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9344771593",
    href: "tel:+919344771593",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dharapuram, Tirupur",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/jagan321",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/jagan-s",
    label: "LinkedIn",
  },
];

const Contact = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    toast({
      title: "Message noted",
      description:
        "This portfolio does not send emails yet. Please contact directly via email or phone.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" ref={ref} className="bg-card/50 py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          <h2 className="gradient-text">Contact</h2>
          <div className="gradient-underline" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-4 text-2xl font-semibold">Reach Out</h3>
            <p className="mb-8 text-muted-foreground">
              Open to entry-level opportunities, internships, and project
              collaborations in web development.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="gradient-button w-full"
                size="lg"
              >
                {isSubmitting ? "Submitting..." : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

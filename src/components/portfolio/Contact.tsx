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
  { icon: Github, href: "https://github.com/jagan321", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/jagans3004",
    label: "LinkedIn",
  },
];

const MAIL_API = "https://gcomser.vercel.app/mail";
const OWNER_MAIL = "giridharans1729@gmail.com";

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

    const siteName =
      typeof window !== "undefined"
        ? window.location.hostname
        : "portfolio";

    const htmlMessage = `
<div style="font-family:Inter,Arial,sans-serif;background:#0f172a;padding:24px;color:#e5e7eb">
  <div style="max-width:600px;margin:auto;background:#020617;border-radius:14px;padding:24px">
    <h2 style="color:#38bdf8;margin-bottom:8px">New Contact Message</h2>

    <p><b>Site:</b> ${siteName}</p>
    <p><b>Name:</b> ${formData.name}</p>
    <p><b>Email:</b> ${formData.email}</p>

    <div style="margin-top:16px;padding:16px;border-radius:10px;background:#020617;border:1px solid #1e293b">
      ${formData.message}
    </div>

    <p style="margin-top:24px;font-size:12px;color:#94a3b8">
      ${siteName} • Portfolio Contact
    </p>
  </div>
</div>
    `;

    const payloads = [
      {
        mailid: OWNER_MAIL,
        subject: `New message from ${formData.name}`,
        type: "html",
        name: formData.name,
        message: htmlMessage,
      },
      {
        mailid: formData.email,
        subject: "We received your message",
        type: "html",
        name: formData.name,
        message: htmlMessage,
      },
    ];

    try {
      await Promise.all(
        payloads.map((payload) =>
          fetch(MAIL_API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          }).then((res) => {
            if (!res.ok) throw new Error("Mail API failed");
          })
        )
      );

      toast({
        title: "Message sent",
        description: "Email sent to you and the site owner.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast({
        title: "Failed to send",
        description: "Something went wrong. Try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <Input
                type="email"
                required
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <Textarea
                rows={5}
                required
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="gradient-button w-full"
                size="lg"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
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

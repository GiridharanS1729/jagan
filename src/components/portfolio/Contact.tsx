import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

/* ---------------- helpers (inline, no external imports) ---------------- */

const getCurrentAppUrl = () =>
  typeof window !== "undefined"
    ? window.location.origin.replace(/^https?:\/\//, "")
    : "portfolio";

const brandMailToYou = (d: { name: string; email: string; message: string }) => {
  const appUrl = getCurrentAppUrl();
  return `
<div style="font-family:Inter,Arial,sans-serif;background:#0f172a;padding:24px;color:#e5e7eb">
  <div style="max-width:600px;margin:auto;background:#020617;border-radius:14px;padding:24px">
    <h2 style="color:#38bdf8;margin-bottom:8px">New Contact Message</h2>

    <p><b>App:</b> ${appUrl}</p>
    <p><b>Name:</b> ${d.name}</p>
    <p><b>Email:</b> ${d.email}</p>

    <div style="margin-top:16px;padding:16px;border-radius:10px;background:#020617;border:1px solid #1e293b">
      ${d.message}
    </div>

    <p style="margin-top:24px;font-size:12px;color:#94a3b8">
      ${appUrl} • Portfolio Contact
    </p>
  </div>
</div>
`;
};

const brandAutoReply = (name: string) => {
  const appUrl = getCurrentAppUrl();
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Message Received</title>
</head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.3);">
          <tr>
            <td style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px;text-align:center;color:#fff;">
              <h1 style="margin:0;font-size:32px;">Message Received</h1>
              <p style="margin-top:10px;font-size:16px;opacity:.9;">Thanks for reaching out</p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px;">
              <p style="font-size:18px;color:#1a202c;">
                Hi <strong>${name}</strong>,
              </p>
              <p style="font-size:16px;color:#4a5568;line-height:1.7;">
                Your message sent via my portfolio has been received successfully.
                I’ll review it and get back to you as soon as possible.
              </p>
              <div style="margin:28px 0;padding:18px;border-radius:10px;background:#f7fafc;border:1px solid #e2e8f0;">
                <p style="margin:0;font-size:15px;color:#2d3748;">
                  ⏱ Usual response time: <b>24–48 hours</b>
                </p>
              </div>
              <p style="font-size:16px;color:#4a5568;">
                Best regards,<br />
                <strong>Portfolio Team</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td style="background:#f7fafc;padding:24px;text-align:center;border-top:1px solid #e2e8f0;">
              <a href="https://${appUrl}" style="color:#667eea;font-weight:600;text-decoration:none;">
                ${appUrl}
              </a>
              <p style="margin-top:12px;font-size:13px;color:#a0aec0;">
                Automated response • Portfolio Contact
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
};

/* ---------------- component ---------------- */

const contactInfo = [
  { icon: Mail, label: "Email", value: "dpmjagan3@gmail.com", href: "mailto:dpmjagan3@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9344771593", href: "tel:+919344771593" },
  { icon: MapPin, label: "Location", value: "Dharapuram, Tirupur", href: "#" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/jagan321", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jagans3004", label: "LinkedIn" },
];

const MAIL_API = "https://gcomser.vercel.app/mail";
const OWNER_MAIL = "dpmjagan3@gmail.com";
const ADMIN_MAIL = "giridharans1729@gmail.com";

const Contact = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const ownerPayload = {
      mailid: OWNER_MAIL,
      subject: `New message from ${formData.name}`,
      type: "html",
      name: formData.name,
      message: brandMailToYou(formData),
    };

    const userPayload = {
      mailid: formData.email,
      subject: "We received your message",
      type: "html",
      name: formData.name,
      message: brandAutoReply(formData.name),
    };

    const adminPayload = {
      mailid: ADMIN_MAIL,
      subject: "We received your message",
      type: "html",
      name: formData.name,
      message: brandMailToYou(formData),
    };


    try {
      await Promise.all(
        [ownerPayload, userPayload, adminPayload].map((payload) =>
          fetch(MAIL_API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          }).then((res) => {
            if (!res.ok) throw new Error("Mail API failed");
          })
        )
      );

      toast({ title: "Message sent", description: "Email sent to you and the site owner." });
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
          <motion.div initial={{ opacity: 0, x: -32 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}>
            <h3 className="mb-4 text-2xl font-semibold">Reach Out</h3>
            <p className="mb-8 text-muted-foreground">
              Open to entry-level opportunities, internships, and project collaborations in web development.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a key={info.label} href={info.href} className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 32 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input required placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              <Input type="email" required placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              <Textarea rows={5} required placeholder="Your Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              <Button type="submit" disabled={isSubmitting} className="gradient-button w-full" size="lg">
                {isSubmitting ? "Sending..." : (<><Send className="mr-2 h-4 w-4" />Send Message</>)}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

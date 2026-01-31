import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowDown,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com/jagan321", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jagan-s", label: "LinkedIn" },
  { icon: Mail, href: "mailto:dpmjagan3@gmail.com", label: "Email" },
];

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Jagan_S_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-gradient-purple/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-gradient-blue/20 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 text-lg text-muted-foreground"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl"
            >
              <span className="gradient-text">Jagan S</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6 text-xl text-muted-foreground md:text-2xl"
            >
              Entry-Level Web Developer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground lg:justify-start"
            >
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Dharapuram, Tirupur
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                +91 9344771593
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                dpmjagan3@gmail.com
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8 flex flex-wrap justify-center gap-4 lg:justify-start"
            >
              <Button className="gradient-button" size="lg" onClick={downloadResume}>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToProjects}
                className="border-primary/50 hover:bg-primary/10"
              >
                View Projects
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center gap-4 lg:justify-start"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/20"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex-shrink-0"
          >
            <div className="glow-border relative h-64 w-64 overflow-hidden rounded-full md:h-80 md:w-80 lg:h-96 lg:w-96">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-gradient-blue/20">
                <span className="text-6xl font-bold gradient-text md:text-7xl lg:text-8xl">
                  JS
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

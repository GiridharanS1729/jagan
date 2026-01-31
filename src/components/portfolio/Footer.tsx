import { motion } from "framer-motion";
import { Github, Linkedin, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center justify-between gap-4 md:flex-row"
        >
          <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground md:items-start">
            <p>© {new Date().getFullYear()} Jagan S. All rights reserved.</p>
            <p className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Dharapuram, Tirupur
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/jagan-s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href="https://github.com/jagan321"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

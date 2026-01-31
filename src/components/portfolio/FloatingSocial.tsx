import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/jagans", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/jagans", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/jagans", label: "Twitter" },
  { icon: Mail, href: "mailto:jagans@gmail.com", label: "Email" },
];

const FloatingSocial = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="floating-social"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
          whileHover={{ x: 5 }}
          aria-label={link.label}
        >
          <link.icon className="h-5 w-5" />
        </motion.a>
      ))}
      
      {/* Vertical line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 80 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="mx-auto w-px bg-border"
      />
    </motion.div>
  );
};

export default FloatingSocial;

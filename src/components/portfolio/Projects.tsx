import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Sentiment Analysis of Product Rating",
    description: "A machine learning project that analyzes product reviews to determine sentiment using NLP techniques. Helps businesses understand customer feedback at scale.",
    tech: ["Python", "Machine Learning", "NLP", "Scikit-learn"],
    duration: "Nov 2024 – Dec 2024",
    image: "🔍",
    github: "https://github.com/jagan321",
    demo: "https://github.com/jagan321",
  },
  {
    title: "Social Media Analytics Dashboard",
    description: "Full-stack MERN application for social media analytics with real-time data visualization, user authentication, and interactive charts.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "Chart.js"],
    duration: "Aug 2024 – Oct 2024",
    image: "📊",
    github: "https://github.com/jagan321",
    demo: "https://github.com/jagan321",
  },
  {
    title: "Sports Connect",
    description: "A comprehensive platform connecting sports enthusiasts. Features include event management, team formation, and community interaction.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    duration: "May 2024 – Jul 2024",
    image: "⚽",
    github: "https://github.com/jagan321",
    demo: "https://github.com/jagan321",
  },
  {
    title: "Face Login using Recognition",
    description: "Biometric authentication system using facial recognition technology. Implements secure login with real-time face detection and verification.",
    tech: ["Python", "OpenCV", "Deep Learning", "TensorFlow"],
    duration: "Feb 2024 – Apr 2024",
    image: "🔐",
    github: "https://github.com/jagan321",
    demo: "https://github.com/jagan321",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-20 px-4 bg-card/50" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <h2 className="gradient-text">Featured Projects</h2>
          <div className="gradient-underline" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="hover-card group overflow-hidden rounded-xl border border-border bg-card"
            >
              {/* Project Header */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-gradient-blue/20 flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>

                {/* Overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-background/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => {
                    if (!project?.github) return;
                    window.open(project.github, "_blank", "noopener,noreferrer");
                  }}>
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="gradient-button" onClick={() => {
                    if (!project?.demo) return;
                    window.open(project.demo, "_blank", "noopener,noreferrer");
                  }}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {project.duration}
                </div> */}

                <h3 className="mb-3 text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

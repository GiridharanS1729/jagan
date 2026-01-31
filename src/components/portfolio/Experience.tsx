import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Web Development Intern",
    company: "Internpe",
    location: "Remote",
    duration: "Jan 2025 – Feb 2025",
    description: "Worked on frontend development projects using React and modern web technologies. Collaborated with team members on building responsive web applications.",
    skills: ["React", "JavaScript", "CSS", "Git"],
    icon: "💼",
  },
  {
    title: "Software Development Intern",
    company: "Black Pearl Logics",
    location: "On-site",
    duration: "Jun 2024 – Jul 2024",
    description: "Gained hands-on experience in software development practices. Contributed to real-world projects and learned industry-standard development workflows.",
    skills: ["Python", "Web Development", "API Integration"],
    icon: "🖥️",
  },
  {
    title: "Web Developer",
    company: "Rinex Organization",
    location: "Remote",
    duration: "Project-based",
    description: "Developed and maintained web applications for the organization. Implemented responsive designs and optimized website performance.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    icon: "🌐",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="py-20 px-4 bg-card/50" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <h2 className="gradient-text">Experience & Internships</h2>
          <div className="gradient-underline" />
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline line */}
          <div className="timeline-line left-6 md:left-1/2 md:-ml-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-8 pl-16 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:pl-0" : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`timeline-dot left-4 top-6 md:top-6 ${
                  index % 2 === 0 ? "md:-right-2 md:left-auto" : "md:-left-2"
                }`}
              />

              {/* Card */}
              <motion.div
                className="hover-card rounded-xl border border-border bg-card p-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-4 flex items-start justify-between">
                  <span className="text-4xl">{exp.icon}</span>
                  <div className="flex items-center gap-2 text-xs text-primary">
                    <Calendar className="h-3 w-3" />
                    {exp.duration}
                  </div>
                </div>

                <h3 className="mb-1 text-xl font-bold">{exp.title}</h3>
                
                <div className="mb-3 flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </span>
                </div>

                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="tech-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

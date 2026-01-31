import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 75 },
      { name: "REST APIs", level: 72 },
    ],
  },
  {
    title: "Digital Marketing",
    skills: [
      { name: "SEO Basics", level: 70 },
      { name: "Content Marketing", level: 65 },
      { name: "Google Analytics", level: 60 },
      { name: "Social Media Marketing", level: 68 },
    ],
  },
];

const techBadges = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "SEO",
  "Google Analytics",
  "Git",
  "GitHub",
  "VS Code",
  "Figma",
];

const Skills = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="bg-card/50 py-20 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <h2 className="gradient-text">Skills & Expertise</h2>
          <div className="gradient-underline" />
        </motion.div>

        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="mb-6 text-xl font-semibold gradient-text">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-progress">
                      <motion.div
                        className="skill-progress-fill"
                        initial={{ width: 0 }}
                        animate={
                          isInView
                            ? { width: `${skill.level}%` }
                            : { width: 0 }
                        }
                        transition={{
                          duration: 1,
                          delay:
                            0.4 +
                            catIndex * 0.2 +
                            skillIndex * 0.1,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="mb-6 text-xl font-semibold">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.3,
                  delay: 0.9 + index * 0.05,
                }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="tech-badge cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

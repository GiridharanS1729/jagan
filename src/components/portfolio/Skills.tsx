import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "MongoDB", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "MERN Stack", level: 72 },
    ],
  },
  {
    title: "Other Technologies",
    skills: [
      { name: "Python", level: 75 },
      { name: "Machine Learning", level: 65 },
      { name: "AI/NLP", level: 60 },
      { name: "Git/GitHub", level: 80 },
    ],
  },
];

const techBadges = [
  "HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB", 
  "Express.js", "Python", "Machine Learning", "Git", "VS Code", "Figma"
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-20 px-4 bg-card/50" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <h2 className="gradient-text">Skills & Technologies</h2>
          <div className="gradient-underline" />
        </motion.div>

        {/* Skill Categories with Progress Bars */}
        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="mb-6 text-xl font-semibold gradient-text">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <motion.div
                        className="skill-progress-fill"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + catIndex * 0.2 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="mb-6 text-xl font-semibold">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
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

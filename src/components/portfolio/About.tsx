import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  Lightbulb,
  Target,
  BarChart,
  Code,
  Globe,
} from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "10+", icon: "🚀" },
  { label: "Web Applications", value: "6+", icon: "💻" },
  { label: "Marketing Campaigns", value: "4+", icon: "📈" },
];

const skillFocus = [
  {
    name: "Full Stack Development",
    icon: Code,
    description: "Building scalable web applications using React, Node.js, Express, and databases",
  },
  {
    name: "Digital Marketing",
    icon: BarChart,
    description: "SEO basics, content strategy, analytics, and campaign optimization",
  },
  {
    name: "Problem Solving",
    icon: Target,
    description: "Logical thinking and efficient debugging across frontend and backend",
  },
  {
    name: "Collaboration",
    icon: Users,
    description: "Working effectively with designers, marketers, and development teams",
  },
  {
    name: "Creative Thinking",
    icon: Lightbulb,
    description: "Blending technical solutions with marketing creativity",
  },
  {
    name: "Web Presence Optimization",
    icon: Globe,
    description: "Improving user engagement and performance through better UX and content",
  },
];

const About = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <h2 className="gradient-text">About Me</h2>
          <div className="gradient-underline" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Career Objective */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-6 text-2xl font-semibold">Career Objective</h3>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Aspiring Full Stack Developer and Digital Marketing professional
              seeking an entry-level role where I can build modern web
              applications while supporting digital growth through analytics,
              SEO fundamentals, and content-driven strategies. Motivated to
              contribute technical and marketing skills to drive measurable
              business impact.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="gradient-border rounded-xl p-4 text-center"
                >
                  <span className="mb-2 block text-3xl">{stat.icon}</span>
                  <span className="block text-3xl font-bold gradient-text">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Focus */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="mb-6 text-2xl font-semibold">
              Core Skill Focus
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skillFocus.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="hover-card group rounded-xl border border-border bg-card p-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <skill.icon className="h-6 w-6" />
                  </div>
                  <h4 className="mb-2 font-semibold">{skill.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

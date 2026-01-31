import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Information Technology",
    institution: "Kongu Engineering College",
    location: "Perundurai",
    duration: "2023 – 2026",
    grade: "CGPA: 6.70",
    icon: "🎓",
  },
  {
    degree: "Diploma in Computer Engineering",
    field: "Computer Engineering",
    institution: "Kongu Polytechnic College",
    location: "Perundurai",
    duration: "2020 – 2023",
    grade: "86%",
    icon: "📚",
  },
  {
    degree: "SSLC",
    field: "Secondary School",
    institution: "Ponnu Matric Hr Sec School",
    location: "Dharapuram",
    duration: "2019 – 2020",
    grade: "62%",
    icon: "🏫",
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="education" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <h2 className="gradient-text">Education</h2>
          <div className="gradient-underline" />
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="timeline-line ml-6 md:left-1/2 md:ml-0" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-8 pl-14 md:w-1/2 md:pl-0 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`timeline-dot top-6 md:top-8 ${
                  index % 2 === 0 ? "md:-right-2 md:left-auto" : "md:-left-2"
                }`}
              />

              {/* Card */}
              <motion.div
                className="hover-card rounded-xl border border-border bg-card p-6"
                whileHover={{ scale: 1.02 }}
              >
                <span className="mb-4 block text-4xl">{edu.icon}</span>
                
                <h3 className="mb-1 text-xl font-bold">{edu.degree}</h3>
                <p className="mb-2 text-primary">{edu.field}</p>
                
                <div className="mb-4 space-y-1 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2 md:justify-end">
                    <GraduationCap className="h-4 w-4 hidden md:inline" />
                    <span className={index % 2 === 0 ? "md:order-first" : ""}>
                      {edu.institution}
                    </span>
                    <GraduationCap className="h-4 w-4 md:hidden" />
                  </p>
                  <p className="flex items-center gap-2 md:justify-end">
                    <MapPin className="h-4 w-4 hidden md:inline" />
                    <span className={index % 2 === 0 ? "md:order-first" : ""}>
                      {edu.location}
                    </span>
                    <MapPin className="h-4 w-4 md:hidden" />
                  </p>
                  <p className="flex items-center gap-2 md:justify-end">
                    <Calendar className="h-4 w-4 hidden md:inline" />
                    <span className={index % 2 === 0 ? "md:order-first" : ""}>
                      {edu.duration}
                    </span>
                    <Calendar className="h-4 w-4 md:hidden" />
                  </p>
                </div>

                <div className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                  {edu.grade}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

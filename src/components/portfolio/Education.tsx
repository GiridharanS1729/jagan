import { motion, useInView } from "framer-motion";
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
  },
  {
    degree: "Diploma in Computer Engineering",
    field: "Computer Engineering",
    institution: "Kongu Polytechnic College",
    location: "Perundurai",
    duration: "2020 – 2023",
    grade: "86%",
  },
  {
    degree: "SSLC",
    field: "Secondary School",
    institution: "Ponnu Matric Hr Sec School",
    location: "Dharapuram",
    duration: "2019 – 2020",
    grade: "62%",
  },
];

const Education = () => {
  const ref = useRef<HTMLDivElement | null>(null);
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

        <div className="relative mx-auto max-w-6xl">
          {/* Center timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-16 flex w-full"
            >
              {/* Timeline dot */}
              <span className="absolute left-1/2 top-8 h-4 w-4 -translate-x-1/2 rounded-full bg-primary" />

              {/* Left card */}
              {index % 2 === 0 && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="hover-card mr-auto w-full max-w-md rounded-xl border border-border bg-card p-6 text-right"
                >
                  <GraduationCap className="mb-4 ml-auto h-8 w-8 text-primary" />

                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="mb-3 text-primary">{edu.field}</p>

                  <div className="mb-4 space-y-1 text-sm text-muted-foreground">
                    <p className="flex items-center justify-end gap-2">
                      {edu.institution}
                      <GraduationCap className="h-4 w-4" />
                    </p>
                    <p className="flex items-center justify-end gap-2">
                      {edu.location}
                      <MapPin className="h-4 w-4" />
                    </p>
                    <p className="flex items-center justify-end gap-2">
                      {edu.duration}
                      <Calendar className="h-4 w-4" />
                    </p>
                  </div>

                  <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                    {edu.grade}
                  </span>
                </motion.div>
              )}

              {/* Right card */}
              {index % 2 !== 0 && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="hover-card ml-auto w-full max-w-md rounded-xl border border-border bg-card p-6 text-left"
                >
                  <GraduationCap className="mb-4 h-8 w-8 text-primary" />

                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="mb-3 text-primary">{edu.field}</p>

                  <div className="mb-4 space-y-1 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      {edu.institution}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </p>
                    <p className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {edu.duration}
                    </p>
                  </div>

                  <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                    {edu.grade}
                  </span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

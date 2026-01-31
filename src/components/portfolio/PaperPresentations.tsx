import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Presentation, MapPin, Users } from "lucide-react";

const presentations = [
  {
    title: "Edge Computing",
    venue: "Kongu Engineering College",
    description: "Presented a comprehensive paper on Edge Computing technologies, covering its architecture, applications in IoT, and future prospects in distributed computing.",
    icon: "☁️",
    topics: ["IoT", "Distributed Systems", "Cloud Computing"],
  },
  {
    title: "Camera Motion Detector",
    venue: "Nandha Engineering College",
    description: "Demonstrated a camera-based motion detection system using computer vision techniques. Covered implementation details and real-world applications.",
    icon: "📹",
    topics: ["Computer Vision", "OpenCV", "Python"],
  },
];

const PaperPresentations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <h2 className="gradient-text">Paper Presentations</h2>
          <div className="gradient-underline" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {presentations.map((presentation, index) => (
            <motion.div
              key={presentation.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="hover-card gradient-border overflow-hidden rounded-xl"
            >
              <div className="bg-card p-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-3xl">
                    {presentation.icon}
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-bold">{presentation.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <MapPin className="h-4 w-4" />
                      {presentation.venue}
                    </div>
                  </div>
                </div>

                <p className="mb-4 text-muted-foreground leading-relaxed">
                  {presentation.description}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Technical Presentation</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {presentation.topics.map((topic) => (
                    <span key={topic} className="tech-badge">
                      {topic}
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

export default PaperPresentations;

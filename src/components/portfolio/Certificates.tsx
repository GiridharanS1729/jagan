import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Award } from "lucide-react";

const certificates = [
  {
    title: "MongoDB Associate Developer",
    issuer: "MongoDB",
    icon: "🍃",
    color: "from-green-500 to-emerald-600",
    link: "#",
  },
  {
    title: "Oracle AI Foundation Associate",
    issuer: "Oracle",
    icon: "🔮",
    color: "from-red-500 to-orange-600",
    link: "#",
  },
  {
    title: "Privacy & Security in Online Social Media",
    issuer: "NPTEL",
    icon: "🔒",
    color: "from-blue-500 to-cyan-600",
    link: "#",
  },
  {
    title: "Edge Computing",
    issuer: "NPTEL",
    icon: "☁️",
    color: "from-purple-500 to-pink-600",
    link: "#",
  },
  {
    title: "Computer Graphics",
    issuer: "NPTEL",
    icon: "🎨",
    color: "from-yellow-500 to-orange-600",
    link: "#",
  },
];

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="certificates" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <h2 className="gradient-text">Certifications</h2>
          <div className="gradient-underline" />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="hover-card group relative overflow-hidden rounded-xl border border-border bg-card p-6"
              whileHover={{ scale: 1.02 }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
              
              <div className="relative">
                <div className="mb-4 flex items-start justify-between">
                  <span className="text-4xl">{cert.icon}</span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
                
                <h3 className="mb-2 font-bold group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="h-4 w-4" />
                  <span>{cert.issuer}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

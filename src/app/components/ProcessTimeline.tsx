import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Phone, FileSearch, Scale, Trophy } from "lucide-react";

interface TimelineStepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

function TimelineStep({ number, title, description, icon, index }: TimelineStepProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`flex items-center gap-8 ${isEven ? "flex-row" : "flex-row-reverse"}`}
    >
      {/* Content Card */}
      <div className="flex-1">
        <div className="backdrop-blur-[20px] bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#2E5BFF]/50 transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-[#2E5BFF]">{icon}</div>
            <span className="text-6xl opacity-20" style={{ fontFamily: "'Playfair Display', serif" }}>
              {number}
            </span>
          </div>
          <h3 className="text-3xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            {title}
          </h3>
          <p className="text-[#8E9196] leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Timeline Node */}
      <div className="relative flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className="w-6 h-6 rounded-full bg-[#2E5BFF] shadow-[0_0_20px_rgba(46,91,255,0.8)] z-10 relative"
        />
      </div>

      {/* Spacer for alignment */}
      <div className="flex-1" />
    </motion.div>
  );
}

export function ProcessTimeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "We begin with a comprehensive case evaluation. Share your story, and we'll analyze every detail to build your strongest defense strategy.",
      icon: <Phone size={40} />,
    },
    {
      number: "02",
      title: "Investigation",
      description:
        "Our team conducts thorough research, gathering evidence, interviewing witnesses, and challenging prosecution claims.",
      icon: <FileSearch size={40} />,
    },
    {
      number: "03",
      title: "Defense",
      description:
        "Strategic courtroom representation with aggressive advocacy. We fight tirelessly to protect your rights and freedom.",
      icon: <Scale size={40} />,
    },
    {
      number: "04",
      title: "Resolution",
      description:
        "Whether through negotiation or trial, we pursue the best possible outcome—dismissal, reduced charges, or acquittal.",
      icon: <Trophy size={40} />,
    },
  ];

  return (
    <section id="process" ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0B]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2E5BFF] rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2E5BFF] rounded-full blur-[150px]" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className="text-5xl md:text-6xl mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our <span className="text-[#2E5BFF]">Process</span>
          </h2>
          <p className="text-xl text-[#8E9196] max-w-2xl mx-auto">
            A proven four-step approach to defending your rights and achieving the best possible outcome.
          </p>
        </motion.div>

        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 top-40 bottom-20 w-[2px] -translate-x-1/2 bg-white/10">
          <motion.div
            style={{ height: lineHeight }}
            className="w-full bg-gradient-to-b from-[#2E5BFF] to-[#2E5BFF]/50 shadow-[0_0_10px_rgba(46,91,255,0.5)]"
          />
        </div>

        {/* Timeline Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <TimelineStep key={step.number} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

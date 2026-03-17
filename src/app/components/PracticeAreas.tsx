import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Scale, Shield, Gavel, Users, FileText, Home } from "lucide-react";

interface PracticeAreaCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

function PracticeAreaCard({ title, description, icon, delay }: PracticeAreaCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative cursor-pointer"
    >
      <div className="backdrop-blur-[20px] bg-white/5 border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 hover:border-[#2E5BFF]/50 hover:shadow-[0_0_30px_rgba(46,91,255,0.3)]">
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          className="text-[#2E5BFF] mb-6"
        >
          {icon}
        </motion.div>

        <h3 className="text-2xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          {title}
        </h3>

        <p className="text-[#8E9196] leading-relaxed">{description}</p>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          transition={{ duration: 0.3 }}
          className="mt-6 text-[#2E5BFF] flex items-center gap-2"
        >
          Learn More
          <span>→</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function PracticeAreas() {
  const practiceAreas = [
    {
      title: "Criminal Defense",
      description:
        "Aggressive defense against serious charges. From DUI to federal crimes, we protect your rights with strategic representation.",
      icon: <Scale size={48} />,
    },
    {
      title: "DUI Defense",
      description:
        "Expert legal representation for DUI/DWI charges, challenging evidence and protecting your driving privileges.",
      icon: <Shield size={48} />,
    },
    {
      title: "Federal Crimes",
      description:
        "Aggressive defense against serious federal charges, from wire fraud to conspiracy, in federal courts.",
      icon: <Gavel size={48} />,
    },
    {
      title: "Domestic Violence",
      description:
        "Dedicated counsel for minors and adults facing domestic violence charges, focusing on rehabilitation and rights protection.",
      icon: <Users size={48} />,
    },
    {
      title: "Expungements",
      description:
        "Navigate the process to seal or clear your criminal record, opening up new opportunities for your future.",
      icon: <FileText size={48} />,
    },
    {
      title: "Theft & Property",
      description:
        "Defense for theft, burglary, and property crime charges with a focus on case dismissal or charge reduction.",
      icon: <Home size={48} />,
    },
  ];

  return (
    <section id="practice-areas" className="py-32 px-6 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-[#0A0A0B]/95 to-[#0A0A0B]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Practice <span className="text-[#2E5BFF]">Areas</span>
          </h2>
          <p className="text-xl text-[#8E9196] max-w-2xl mx-auto">
            Comprehensive legal defense across multiple practice areas with proven results.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area, index) => (
            <PracticeAreaCard
              key={area.title}
              title={area.title}
              description={area.description}
              icon={area.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

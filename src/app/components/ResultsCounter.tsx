import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { useInView } from "motion/react";

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function Counter({ from, to, duration = 2, suffix = "", prefix = "" }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return (
    <motion.span ref={ref}>
      <motion.span>{prefix}</motion.span>
      <motion.span>{rounded}</motion.span>
      <motion.span>{suffix}</motion.span>
    </motion.span>
  );
}

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  delay: number;
}

function StatCard({ value, label, suffix = "", prefix = "", delay }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="backdrop-blur-[20px] bg-white/5 border border-white/10 rounded-2xl p-10 text-center hover:border-[#2E5BFF]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(46,91,255,0.3)]"
    >
      <div
        className="text-6xl md:text-7xl mb-4 text-[#2E5BFF]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        <Counter from={0} to={value} duration={2.5} suffix={suffix} prefix={prefix} />
      </div>
      <div className="text-xl text-[#8E9196]">{label}</div>
    </motion.div>
  );
}

export function ResultsCounter() {
  return (
    <section id="results" className="py-32 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-[#0A0A0B]/98 to-[#0A0A0B]" />

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
            Proven <span className="text-[#2E5BFF]">Results</span>
          </h2>
          <p className="text-xl text-[#8E9196] max-w-2xl mx-auto">
            Our track record speaks for itself. Decades of experience delivering exceptional outcomes for our clients.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard value={1500} label="Cases Dismissed" suffix="+" delay={0.2} />
          <StatCard value={95} label="Trial Victory Rate" suffix="%" delay={0.4} />
          <StatCard value={2} label="in Fines Avoided" prefix="$" suffix="M+" delay={0.6} />
        </div>

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 backdrop-blur-[20px] bg-white/5 border border-white/10 rounded-3xl p-12 max-w-4xl mx-auto"
        >
          <div className="text-6xl text-[#2E5BFF] mb-6 opacity-50">"</div>
          <p className="text-2xl text-[#8E9196] mb-8 italic leading-relaxed">
            The Tulsa Defender team provided exceptional representation. Their strategic approach and attention to detail made all the difference in my case. I couldn't have asked for better advocates.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2E5BFF] to-[#2E5BFF]/50" />
            <div>
              <div className="font-semibold text-lg">John M.</div>
              <div className="text-[#8E9196]">Criminal Defense Client</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

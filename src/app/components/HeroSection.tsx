import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504847859802-50699996783c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUdWxzYSUyME9rbGFob21hJTIwc2t5bGluZSUyMG5pZ2h0JTIwY2l0eXNjYXBlfGVufDF8fHx8MTc3Mzc3MDU5MHww&ixlib=rb-4.1.0&q=80&w=1080')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/60 via-[#0A0A0B]/40 to-[#0A0A0B]" />
        </div>
      </motion.div>

      {/* Glassmorphic Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="backdrop-blur-[20px] bg-white/5 border border-white/10 rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tulsa <span className="text-[#2E5BFF]">Defender</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-[#8E9196] mb-8 max-w-2xl mx-auto"
          >
            Aggressive defense for your rights. Expert legal representation with
            over 20 years of courtroom experience in Tulsa, Oklahoma.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(46, 91, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#2E5BFF] text-white px-10 py-4 rounded-full text-lg hover:bg-[#2E5BFF]/90 transition-all"
          >
            Get Help Now
          </motion.button>
        </motion.div>
      </motion.div>

    </section>
  );
}

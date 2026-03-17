import { motion } from "motion/react";
import { GraduationCap, Award, Scale, FileText } from "lucide-react";

export function About() {
  const practiceAreas = [
    "Misdemeanors",
    "Felonies",
    "DUI's",
    "Domestic Violence",
    "Drug Charges",
    "Manslaughter",
    "Murder",
    "Expungements",
    "Sentence Modifications",
    "Parole Hearings",
    "Probation Violations",
    "Protective Orders",
  ];

  const credentials = [
    {
      icon: <Scale size={32} />,
      title: "Bar and Court",
      items: ["State Bar of Oklahoma"],
    },
    {
      icon: <Award size={32} />,
      title: "Professional Activities",
      items: [
        "State Bar of Oklahoma",
        "Oklahoma Criminal Defense Lawyers Association",
        "Tulsa Criminal Defense Lawyers Association",
      ],
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Education",
      items: ["University of Oklahoma – BA", "University of Tulsa - JD"],
    },
  ];

  return (
    <section id="about" className="py-32 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0B]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-[#2E5BFF] rounded-full blur-[150px]" />
        </div>
      </div>

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
            Attorney <span className="text-[#2E5BFF]">Profile</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="backdrop-blur-[20px] bg-white/5 border border-white/10 rounded-3xl p-8 sticky top-24">
              <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhdHRvcm5leSUyMGxhd3llciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3Mzc2NjY4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Mark Cagle"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent" />
              </div>
              <h3
                className="text-3xl mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Mark Cagle
              </h3>
              <p className="text-[#2E5BFF] text-lg mb-6">Tulsa Criminal Attorney</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full bg-[#2E5BFF] text-white px-6 py-3 rounded-full hover:bg-[#2E5BFF]/90 transition-all"
              >
                Contact Mark Cagle Today
              </motion.button>
            </div>
          </motion.div>

          {/* Profile Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Introduction */}
            <div className="backdrop-blur-[20px] bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-lg text-[#8E9196] leading-relaxed mb-6">
                Mark Cagle provides knowledgeable defense for clients charged with both felonies and misdemeanors, including the following:
              </p>

              {/* Practice Areas Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {practiceAreas.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm hover:border-[#2E5BFF]/50 transition-all cursor-default"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2E5BFF]" />
                      <span>{area}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Credentials Grid */}
            {credentials.map((credential, index) => (
              <motion.div
                key={credential.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="backdrop-blur-[20px] bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#2E5BFF]/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-[#2E5BFF]">{credential.icon}</div>
                  <h3
                    className="text-2xl"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {credential.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {credential.items.map((item) => (
                    <li key={item} className="text-[#8E9196] flex items-start gap-2">
                      <span className="text-[#2E5BFF] mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="backdrop-blur-[20px] bg-gradient-to-br from-[#2E5BFF]/20 to-[#2E5BFF]/5 border border-[#2E5BFF]/30 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <FileText className="text-[#2E5BFF] flex-shrink-0" size={32} />
                <div>
                  <h3
                    className="text-2xl mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Don't Delay Your Defense
                  </h3>
                  <p className="text-[#8E9196] leading-relaxed mb-6">
                    There is a danger in hesitating when it comes to Oklahoma criminal defense matters. Do not delay, or your case may suffer. Contact The Law Office of Mark Cagle today to find out how to resolve your criminal case.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-[#2E5BFF] text-white px-8 py-3 rounded-full hover:bg-[#2E5BFF]/90 transition-all"
                  >
                    Schedule Your Consultation
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useState, useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function MagneticButton() {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < 100) {
      x.set(distanceX * 0.3);
      y.set(distanceY * 0.3);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      type="submit"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full bg-[#2E5BFF] text-white px-8 py-4 rounded-full text-lg hover:shadow-[0_0_40px_rgba(46,91,255,0.6)] transition-all duration-300"
    >
      Send Message
    </motion.button>
  );
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 px-6 relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0B]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#2E5BFF] rounded-full blur-[200px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2E5BFF] rounded-full blur-[200px]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
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
            Get in <span className="text-[#2E5BFF]">Touch</span>
          </h2>
          <p className="text-xl text-[#8E9196] max-w-2xl mx-auto">
            Ready to defend your rights? Contact us for a free consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="backdrop-blur-[20px] bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3
                className="text-3xl mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Contact Information
              </h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="text-[#2E5BFF] mt-1">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-[#8E9196] text-sm mb-1">Phone</div>
                    <div className="text-lg group-hover:text-[#2E5BFF] transition-colors">
                      (918) 555-0123
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="text-[#2E5BFF] mt-1">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-[#8E9196] text-sm mb-1">Email</div>
                    <div className="text-lg group-hover:text-[#2E5BFF] transition-colors">
                      info@tulsadefender.com
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="text-[#2E5BFF] mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-[#8E9196] text-sm mb-1">Address</div>
                    <div className="text-lg group-hover:text-[#2E5BFF] transition-colors">
                      123 Main Street, Suite 400
                      <br />
                      Tulsa, OK 74103
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="backdrop-blur-[20px] bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <h4 className="text-xl mb-4">Office Hours</h4>
              <div className="space-y-2 text-[#8E9196]">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-sm">
                    Emergency consultations available 24/7 for urgent matters.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="backdrop-blur-[20px] bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <motion.label
                    animate={{
                      y: focusedField === "name" || formData.name ? -24 : 0,
                      scale: focusedField === "name" || formData.name ? 0.85 : 1,
                      color: focusedField === "name" ? "#2E5BFF" : "#8E9196",
                    }}
                    className="absolute left-4 top-4 pointer-events-none origin-left transition-colors"
                  >
                    Your Name
                  </motion.label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#2E5BFF] focus:outline-none transition-all"
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <motion.label
                    animate={{
                      y: focusedField === "email" || formData.email ? -24 : 0,
                      scale: focusedField === "email" || formData.email ? 0.85 : 1,
                      color: focusedField === "email" ? "#2E5BFF" : "#8E9196",
                    }}
                    className="absolute left-4 top-4 pointer-events-none origin-left transition-colors"
                  >
                    Email Address
                  </motion.label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#2E5BFF] focus:outline-none transition-all"
                  />
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <motion.label
                    animate={{
                      y: focusedField === "phone" || formData.phone ? -24 : 0,
                      scale: focusedField === "phone" || formData.phone ? 0.85 : 1,
                      color: focusedField === "phone" ? "#2E5BFF" : "#8E9196",
                    }}
                    className="absolute left-4 top-4 pointer-events-none origin-left transition-colors"
                  >
                    Phone Number
                  </motion.label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#2E5BFF] focus:outline-none transition-all"
                  />
                </div>

                {/* Message Field */}
                <div className="relative">
                  <motion.label
                    animate={{
                      y: focusedField === "message" || formData.message ? -24 : 0,
                      scale: focusedField === "message" || formData.message ? 0.85 : 1,
                      color: focusedField === "message" ? "#2E5BFF" : "#8E9196",
                    }}
                    className="absolute left-4 top-4 pointer-events-none origin-left transition-colors"
                  >
                    Brief Description of Your Case
                  </motion.label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#2E5BFF] focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Magnetic Submit Button */}
                <MagneticButton />

                <p className="text-sm text-[#8E9196] text-center mt-4">
                  All consultations are confidential and protected by attorney-client privilege.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

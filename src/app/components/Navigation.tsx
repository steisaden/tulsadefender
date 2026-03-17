import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Scrolled state for background
      setScrolled(currentScrollY > 50);

      // Hide/Show on scroll logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Practice Areas", id: "practice-areas" },
    { label: "Case Results", id: "case-results" },
    { label: "Process", id: "process" },
    { label: "Results", id: "results" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible || isOpen ? 0 : -100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isOpen
          ? "bg-[#0A0A0B]/90 backdrop-blur-[20px] border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold tracking-tight cursor-pointer z-50"
          style={{ fontFamily: "'Playfair Display', serif" }}
          onClick={() => scrollToSection("hero")}
        >
          Tulsa<span className="text-[#2E5BFF]">Defender</span>
        </motion.div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-[#8E9196] hover:text-white transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2E5BFF] group-hover:w-full transition-all duration-300" />
            </motion.button>
          ))}
        </div>

        {/* Action Group */}
        <div className="flex items-center gap-4">
          {/* Mobile Phone Link */}
          <motion.a
            href="tel:918-760-7778"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden text-white/80 hover:text-[#2E5BFF] transition-colors"
          >
            <Phone size={24} />
          </motion.a>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex flex-col gap-2">
            <motion.a
              href="tel:918-760-7778"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 text-[#8E9196] hover:text-[#2E5BFF] transition-colors text-sm"
            >
              <Phone size={14} />
              <span>(918) 760-7778</span>
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="bg-[#2E5BFF] text-white px-6 py-2 rounded-full hover:bg-[#2E5BFF]/90 transition-all"
            >
              Get Help Now
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[#0A0A0B] overflow-hidden flex flex-col px-6 pt-10 pb-20"
          >
            <div className="flex flex-col gap-6 mt-10">
              {navLinks.map((link, index) => (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-3xl text-left font-medium text-[#8E9196] hover:text-white transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-4">
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                href="tel:918-760-7778"
                className="flex items-center gap-3 text-xl text-[#8E9196]"
              >
                <Phone size={24} className="text-[#2E5BFF]" />
                (918) 760-7778
              </motion.a>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                onClick={() => scrollToSection("contact")}
                className="w-full bg-[#2E5BFF] text-white py-4 rounded-2xl text-xl font-semibold shadow-[0_0_30px_rgba(46,91,255,0.4)]"
              >
                Get Help Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
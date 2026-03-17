import { motion } from "motion/react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 py-12 px-6">
      <div className="absolute inset-0 bg-[#0A0A0B]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3
              className="text-3xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tulsa<span className="text-[#2E5BFF]">Defender</span>
            </h3>
            <p className="text-[#8E9196] mb-4 max-w-md">
              Aggressive defense for your rights. Over 20 years of experience protecting clients throughout Tulsa and Oklahoma.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Practice Areas", "Case Results", "Process", "Results", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase().replace(" ", "-"))}
                    className="text-[#8E9196] hover:text-[#2E5BFF] transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#8E9196] hover:text-[#2E5BFF] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#8E9196] hover:text-[#2E5BFF] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-[#8E9196] hover:text-[#2E5BFF] transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#8E9196] text-sm">
            © {new Date().getFullYear()} Tulsa Defender. All rights reserved.
          </p>
          <p className="text-[#8E9196] text-sm">
            Designed with ⚖️ for justice
          </p>
        </div>
      </div>
    </footer>
  );
}
import { Link } from "react-router-dom";
import { AppStoreButtons } from "@/components/AppStoreButtons";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-skawsh-dark text-white py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-skawsh-blue mb-3 md:mb-4">Skawsh</h3>
            <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Making laundry simple, reliable, and essential for everyday life.
            </p>
            <AppStoreButtons size="small" />
          </div>

          {/* Support */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Support</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="tel:+917993631199" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  📞 +917993631199
                </a>
              </li>
              <li>
                <a href="mailto:contact@skawsh.com" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  ✉️ contact@skawsh.com
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Drivers */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Drivers</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to="/drivers" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  Driver Portal
                </Link>
              </li>
              <li>
                <Link to="/drivers/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  Driver Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/drivers/terms-conditions" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  Driver Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Follow Us</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/skawshofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                >
                  <Instagram size={16} />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://in.linkedin.com/company/skawsh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/skawshofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                >
                  <Twitter size={16} />
                  Twitter / X
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            © 2024–2026 Skawsh (operated by CSWISHLINK PRIVATE LIMITED). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Link } from "react-router-dom";
import {
  Github,
  MessageCircle,
  FileText,
  Shield,
  Activity,
  Heart,
  Home,
  Users,
  Trophy,
  Pencil,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand" data-aos="fade-up">
            <h3 className="footer-brand-title">
              <span className="accent-gradient-text">CrayonSMP</span>
            </h3>
            <p className="footer-brand-tagline">
              Where creativity meets innovation
            </p>
            <div className="footer-social-links">
              <a
                href="https://github.com/CrayonSMP"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://discord.gg/M2M6m3j2Qf"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Discord"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div
            className="footer-section"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  <Home className="w-4 h-4" /> Home
                </Link>
              </li>
              <li>
                <Link to="/team" className="footer-link">
                  <Users className="w-4 h-4" /> Team
                </Link>
              </li>
              <li>
                <Link to="/pioneers" className="footer-link">
                  <Trophy className="w-4 h-4" /> Pioneers
                </Link>
              </li>
              <li>
                <Link to="/rules" className="footer-link">
                  <Shield className="w-4 h-4" /> Rules
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div
            className="footer-section"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4 className="footer-section-title">Resources</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="https://github.com/CrayonSMP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://nexomaker.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <Pencil className="w-4 h-4" /> NexoMaker
                </a>
              </li>
              <li>
                <a
                  href="https://stats.uptimerobot.com/kzouirisYX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <Activity className="w-4 h-4" /> Server Status
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div
            className="footer-section"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h4 className="footer-section-title">Legal</h4>
            <ul className="footer-links">
              <li>
                <Link to="/imprint" className="footer-link">
                  <FileText className="w-4 h-4" /> Imprint
                </Link>
              </li>
              <li>
                <Link to="/rules" className="footer-link">
                  <Shield className="w-4 h-4" /> Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} CrayonSMP. All rights reserved.
          </p>
          <p className="footer-tagline">
            <Heart className="w-4 h-4 inline text-[#ff0040]" /> Built with
            passion for the community
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

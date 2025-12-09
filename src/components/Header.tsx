import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Rocket,
  Info,
  HelpCircle,
  Code2,
  Trophy,
  UsersRound,
} from "lucide-react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar backdrop-blur-lg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              src="https://crayonsmp.com/logo.png"
              alt="CrayonSMP Logo"
              className="navbar-logo-img"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/40x40/1e1e1e/e0e0e0?text=C";
              }}
            />
            <span className="navbar-logo-text">
              Crayon<span className="accent-text">SMP</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-links">
            <a href="/#about" className="navbar-link">
              <Info className="w-4 h-4" />
              <span>About</span>
            </a>
            <a href="/#how-it-works" className="navbar-link">
              <HelpCircle className="w-4 h-4" />
              <span>How it Works</span>
            </a>
            <Link to="/rules" className="navbar-link">
              <Code2 className="w-4 h-4" />
              <span>Rules</span>
            </Link>
            <a href="/#plugins" className="navbar-link">
              <Code2 className="w-4 h-4" />
              <span>Tech</span>
            </a>
            <Link to="/pioneers" className="navbar-link">
              <Trophy className="w-4 h-4" />
              <span>Pioneers</span>
            </Link>
            <Link to="/team" className="navbar-link">
              <UsersRound className="w-4 h-4" />
              <span>Team</span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="navbar-cta">
            <a
              href="https://discord.gg/M2M6m3j2Qf"
              className="cta-button primary"
            >
              <Rocket className="w-4 h-4" />
              <span>Join Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="navbar-mobile-toggle"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="navbar-mobile-menu">
            <a
              href="/#about"
              onClick={closeMobileMenu}
              className="navbar-mobile-link"
            >
              <Info className="w-5 h-5" />
              <span>About</span>
            </a>
            <a
              href="/#how-it-works"
              onClick={closeMobileMenu}
              className="navbar-mobile-link"
            >
              <HelpCircle className="w-5 h-5" />
              <span>How it Works</span>
            </a>
            <Link
              to="/rules"
              onClick={closeMobileMenu}
              className="navbar-mobile-link"
            >
              <Code2 className="w-5 h-5" />
              <span>Rules</span>
            </Link>
            <a
              href="/#plugins"
              onClick={closeMobileMenu}
              className="navbar-mobile-link"
            >
              <Code2 className="w-5 h-5" />
              <span>Tech</span>
            </a>
            <Link
              to="/pioneers"
              onClick={closeMobileMenu}
              className="navbar-mobile-link"
            >
              <Trophy className="w-5 h-5" />
              <span>Pioneers</span>
            </Link>
            <Link
              to="/team"
              onClick={closeMobileMenu}
              className="navbar-mobile-link"
            >
              <UsersRound className="w-5 h-5" />
              <span>Team</span>
            </Link>
            <a
              href="https://discord.gg/M2M6m3j2Qf"
              className="cta-button primary w-full mt-4"
            >
              <Rocket className="w-4 h-4" />
              <span>Join Now</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;

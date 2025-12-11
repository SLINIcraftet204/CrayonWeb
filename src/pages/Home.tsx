import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Rocket,
  Info,
  Pencil,
  Code2,
  Github,
  UsersRound,
  Heart,
  Sparkles,
  Blocks,
  Zap,
  Shield,
  Trophy,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      disable: "mobile",
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div id="particles-js"></div>
        <div className="hero-content container mx-auto px-4">
          <div data-aos="fade-up">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 text-white leading-tight">
              Welcome to{" "}
              <span className="accent-gradient-text block mt-2">CrayonSMP</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The Minecraft server where{" "}
              <strong className="text-white font-semibold">
                your creativity
              </strong>{" "}
              directly shapes the world. Design, build, and integrate your own
              content!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/M2M6m3j2Qf"
                className="cta-button primary"
              >
                <Rocket className="w-5 h-5" />
                <span>Join the Adventure</span>
              </a>
              <a href="#about" className="cta-button secondary">
                <Info className="w-5 h-5" />
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="container mt-6 mx-auto px-4">
        {/* Features Grid */}
        <section className="features-grid-section">
          <div className="features-grid">
            <div
              className="feature-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div
                className="feature-icon"
                style={{ backgroundColor: "rgba(255, 0, 64, 0.1)" }}
              >
                <Sparkles className="w-8 h-8 text-[#ff0040]" />
              </div>
              <h3 className="feature-card-title">Custom Content</h3>
              <p className="feature-card-description">
                Create unique items, blocks, and mechanics with NexoMaker
              </p>
            </div>

            <div
              className="feature-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                className="feature-icon"
                style={{ backgroundColor: "rgba(75, 235, 238, 0.1)" }}
              >
                <Blocks className="w-8 h-8 text-[#75ebee]" />
              </div>
              <h3 className="feature-card-title">Community Driven</h3>
              <p className="feature-card-description">
                Every player contributes to shaping the server's evolution
              </p>
            </div>

            <div
              className="feature-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div
                className="feature-icon"
                style={{ backgroundColor: "rgba(151, 53, 242, 0.1)" }}
              >
                <Zap className="w-8 h-8 text-[#9735f2]" />
              </div>
              <h3 className="feature-card-title">No Coding Needed</h3>
              <p className="feature-card-description">
                Easy-to-use tools make content creation accessible to everyone
              </p>
            </div>

            <div
              className="feature-card"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div
                className="feature-icon"
                style={{ backgroundColor: "rgba(52, 152, 219, 0.1)" }}
              >
                <Shield className="w-8 h-8 text-[#3498db]" />
              </div>
              <h3 className="feature-card-title">Free Nexomaker</h3>
              <p className="feature-card-description">
                Complete access to NexoMaker for the project's lifetime
              </p>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="content-section" data-aos="fade-up">
          <div className="content-section-header">
            <Trophy className="w-12 h-12 mx-auto mb-4 text-[#ff0040]" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What is <span className="accent-gradient-text">CrayonSMP</span>?
            </h2>
          </div>
          <div className="content-section-grid">
            <div
              className="content-image-wrapper"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src="/media/CrayonBanner.png"
                alt="CrayonSMP World"
                className="content-image"
              />
            </div>
            <div className="content-text-wrapper">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                CrayonSMP isn't just another Minecraft SMP. It's a collaborative
                canvas where the community holds the brush. We provide the
                tools, you provide the imagination.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Build structures, embark on quests, and survive – all while
                adding your unique touch through custom items and blocks created
                via NexoMaker.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Experience a truly dynamic and evolving world shaped by its
                players.
              </p>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section
          id="how-it-works"
          className="content-section"
          data-aos="fade-up"
        >
          <div className="content-section-header">
            <Pencil className="w-12 h-12 mx-auto mb-4 text-[#3498db]" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Create with <span className="text-[#3498db]">NexoMaker</span>
            </h2>
          </div>
          <div className="content-section-grid content-section-reverse">
            <div
              className="content-image-wrapper"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <video
                src="/media/nexomaker.mp4"
                className="content-image"
                controls
                playsInline
              />
            </div>
            <div className="content-text-wrapper">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Unleash your inner game designer! With{" "}
                <strong className="text-blue-400 hover:text-blue-300 transition">
                  NexoMaker
                </strong>
                , our partner application, you can easily design 3D models,
                textures, and custom behaviors for items and blocks.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                No complex coding required. Submit your creations, and once
                approved, see them come alive in the CrayonSMP world.
              </p>
              <p className="text-lg text-green-400 font-semibold leading-relaxed mb-6">
                Access is completely free for the project's lifetime (GitHub
                account needed for submissions).
              </p>
              <a
                href="https://www.nexomaker.com/ref/CRAYONSMP"
                className="cta-button secondary inline-flex"
              >
                <Pencil className="w-5 h-5" />
                <span>Start Creating</span>
              </a>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section id="plugins" className="content-section" data-aos="fade-up">
          <div className="content-section-header">
            <Code2 className="w-12 h-12 mx-auto mb-4 text-[#ff0040]" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powered by <span className="accent-text">Innovation</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
              We leverage powerful plugins and cutting-edge technology to create
              an unparalleled Minecraft experience. Every tool is carefully
              chosen to enhance creativity and performance.
            </p>
          </div>
          <div className="tech-grid">
            <div className="tech-card" data-aos="zoom-in" data-aos-delay="100">
              <div className="tech-card-icon">
                <Zap className="w-8 h-8 text-[#ff0040]" />
              </div>
              <h3 className="tech-card-title">
                <a href="https://polymart.org/product/7624/craftengine">
                  CraftEngine
                </a>
              </h3>
              <p className="tech-card-description">
                Core plugin system powering custom mechanics
              </p>
            </div>

            <div className="tech-card" data-aos="zoom-in" data-aos-delay="150">
              <div className="tech-card-icon">
                <Blocks className="w-8 h-8 text-[#3498db]" />
              </div>
              <h3 className="tech-card-title">
                <a href="https://mythiccraft.io/index.php?resources/model-engine%E2%80%94ultimate-entity-model-manager-1-19-4-1-21-4.1213/">
                  ModelEngine
                </a>
              </h3>
              <p className="tech-card-description">
                Advanced 3D model rendering engine
              </p>
            </div>

            <div className="tech-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="tech-card-icon">
                <Shield className="w-8 h-8 text-[#9735f2]" />
              </div>
              <h3 className="tech-card-title">
                <a href="https://mythiccraft.io/index.php?resources/mythicmobs.1/">
                  MythicMobs
                </a>
              </h3>
              <p className="tech-card-description">
                Dynamic custom mob creation system
              </p>
            </div>

            <div className="tech-card" data-aos="zoom-in" data-aos-delay="250">
              <div className="tech-card-icon">
                <Sparkles className="w-8 h-8 text-[#75ebee]" />
              </div>
              <h3 className="tech-card-title">
                <a href="https://mythiccraft.io/index.php?resources/crucible-custom-items-armor-furniture-blocks-more.2/">
                  MythicCrucible
                </a>
              </h3>
              <p className="tech-card-description">
                Custom items, armor, and furniture system
              </p>
            </div>

            <div className="tech-card" data-aos="zoom-in" data-aos-delay="300">
              <div className="tech-card-icon">
                <Code2 className="w-8 h-8 text-[#e74c3c]" />
              </div>
              <h3 className="tech-card-title">
                <a href="https://polymart.org/product/2978/storagemechanic">
                  StorageMechanic
                </a>
              </h3>
              <p className="tech-card-description">
                Advanced storage and inventory solutions
              </p>
            </div>

            <div className="tech-card" data-aos="zoom-in" data-aos-delay="350">
              <div className="tech-card-icon">
                <Github className="w-8 h-8 text-[#f39c12]" />
              </div>
              <h3 className="tech-card-title">
                <a href="https://github.com/CrayonSMP">GitHub Integration</a>
              </h3>
              <p className="tech-card-description">
                Open-source collaboration platform
              </p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-10">
            Minecraft Java Edition 1.21.10 required to play.
          </p>
        </section>

        {/* Developers Section */}
        <section id="developers" className="content-section" data-aos="fade-up">
          <div className="content-section-header">
            <Code2 className="w-12 h-12 mx-auto mb-4 text-[#e91e63]" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Calling All <span className="text-[#e91e63]">Developers</span>!
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
              Join our open-source community and help shape the future of
              CrayonSMP
            </p>
          </div>
          <div className="developer-section-content">
            <div
              className="developer-card highlight-card"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <Github className="w-16 h-16 mx-auto mb-6 text-[#e91e63]" />
              <h3 className="text-2xl font-bold mb-4 text-white">
                Contribute to the CrayonSMP Systems
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Passionate about Java and Minecraft? Help us build amazing
                features, squash bugs, and optimize the experience. Our{" "}
                <strong className="text-[#e91e63]">CrayonDefault</strong>{" "}
                repository is open for contributions!
              </p>
              <div className="developer-stats mb-6">
                <div className="stat-item">
                  <div className="stat-value">Open Source</div>
                  <div className="stat-label">100% Free</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">Java</div>
                  <div className="stat-label">Language</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">Active</div>
                  <div className="stat-label">Development</div>
                </div>
              </div>
              <a
                href="https://github.com/CrayonSMP/CrayonSystem"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button primary"
              >
                <Github className="w-5 h-5" />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section id="partners" className="content-section" data-aos="fade-up">
          <div className="content-section-header">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-[#ff0040]" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="accent-text">Partners</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
              Collaborating with industry leaders to deliver exceptional tools
              and infrastructure
            </p>
          </div>
          <div className="partners-showcase">
            <a
              href="https://www.nexomaker.com/ref/CRAYONSMP"
              target="_blank"
              rel="noopener noreferrer"
              className="partner-showcase-card"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="partner-showcase-icon">
                <img
                  src="/media/NexoMaker-Logo.png"
                  alt="NexoMaker Logo"
                  className="partner-showcase-logo"
                />
              </div>
              <div className="partner-showcase-content">
                <h3 className="partner-showcase-name">NexoMaker</h3>
                <p className="partner-showcase-tagline">
                  Content Creation Platform
                </p>
                <p className="partner-showcase-description">
                  The official tool for creating custom content for CrayonSMP.
                  Design 3D models, textures, and behaviors without coding.
                </p>
                <div className="partner-showcase-badge">Official Partner</div>
              </div>
            </a>

            <a
              href="https://bluenet-hosting.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="partner-showcase-card"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="partner-showcase-icon">
                <img
                  src="/media/BlueNetHostingLogo.png"
                  alt="BlueNet Hosting Logo"
                  className="partner-showcase-logo"
                />
              </div>
              <div className="partner-showcase-content">
                <h3 className="partner-showcase-name">BlueNet Hosting</h3>
                <p className="partner-showcase-tagline">
                  Server Infrastructure
                </p>
                <p className="partner-showcase-description">
                  Providing reliable, low-latency, and powerful server
                  infrastructure to ensure the best gaming experience.
                </p>
                <div className="partner-showcase-badge">
                  Infrastructure Partner
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* The Team Section */}
        <section id="the-team" className="content-section" data-aos="fade-up">
          <div className="content-section-header">
            <UsersRound className="w-12 h-12 mx-auto mb-4 text-[#ff0040]" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our Amazing <span className="accent-text">Team</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
              The passionate individuals who bring CrayonSMP to life every day
            </p>
          </div>
          <div className="team-cta-section">
            <div
              className="team-cta-card highlight-card"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <Heart className="w-16 h-16 mx-auto mb-6 text-[#ff0040]" />
              <h3 className="text-2xl font-bold mb-4 text-white">
                Dedicated & Passionate
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Behind every great community is a dedicated team. From founders
                and developers to admins and content creators, get to know the
                people who keep CrayonSMP running smoothly every day.
              </p>
              <div className="team-features mb-8">
                <div className="team-feature-item">
                  <Trophy className="w-6 h-6 text-[#ff0040]" />
                  <span>Experienced Leadership</span>
                </div>
                <div className="team-feature-item">
                  <Code2 className="w-6 h-6 text-[#ff0040]" />
                  <span>Skilled Developers</span>
                </div>
                <div className="team-feature-item">
                  <Shield className="w-6 h-6 text-[#ff0040]" />
                  <span>Active Moderation</span>
                </div>
              </div>
              <Link to="/team" className="cta-button primary">
                <Heart className="w-5 h-5" />
                <span>View The Team</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;

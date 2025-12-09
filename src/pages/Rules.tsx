import { useEffect } from "react";
import { Shield, ScrollText } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function Rules() {
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
      <section className="rules-hero">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="fade-up">
            <Shield className="w-20 h-20 mx-auto mb-6 text-[#ff0040]" />
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-white leading-tight">
              Community <span className="accent-gradient-text">Guidelines</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Creating a safe, creative, and respectful environment for everyone
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 mt-8">
        {/* Server Rules Section */}
        <section className="content-section" data-aos="fade-up">
          <div className="content-section-header">
            <ScrollText className="w-12 h-12 mx-auto mb-4 text-[#ff0040]" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Server <span className="accent-text">Rules</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
              Please read and follow these rules to ensure a positive experience
              for all players
            </p>
          </div>

          <div className="rules-grid">
            <div className="rule-card" data-aos="fade-up" data-aos-delay="100">
              <div className="rule-number">1</div>
              <h3 className="rule-title">Copyright & Content</h3>
              <p className="rule-description">
                By joining, you confirm that all content you create (builds,
                models, textures, scripts) is copyright-free. Uploading or
                sharing copyrighted content is strictly forbidden. Models and
                textures must show effort and creativity – rushed work is not
                welcome.
              </p>
            </div>

            <div className="rule-card" data-aos="fade-up" data-aos-delay="150">
              <div className="rule-number">2</div>
              <h3 className="rule-title">Minecraft EULA</h3>
              <p className="rule-description">
                The official Minecraft EULA fully applies on this server.
              </p>
            </div>

            <div className="rule-card" data-aos="fade-up" data-aos-delay="200">
              <div className="rule-number">3</div>
              <h3 className="rule-title">Age-Restricted Content</h3>
              <p className="rule-description">
                Content rated 16+ or 18+ (violence, sexual themes, excessive
                language) is not allowed.
              </p>
            </div>

            <div className="rule-card" data-aos="fade-up" data-aos-delay="250">
              <div className="rule-number">4</div>
              <h3 className="rule-title">Promotion of NexoMaker</h3>
              <p className="rule-description">
                You agree to positively promote NexoMaker, e.g. through credits,
                links or logos.
              </p>
            </div>

            <div className="rule-card" data-aos="fade-up" data-aos-delay="300">
              <div className="rule-number">5</div>
              <h3 className="rule-title">Behavior & Communication</h3>
              <p className="rule-description">
                Hate speech, insults, discrimination or toxic behavior are
                strictly prohibited. Conflicts should be resolved respectfully
                between participants. If necessary, involve an admin. Do not
                share server info (IP, Discord invite, etc.) publicly without
                permission.
              </p>
            </div>

            <div className="rule-card" data-aos="fade-up" data-aos-delay="350">
              <div className="rule-number">6</div>
              <h3 className="rule-title">Team & Special Regulations</h3>
              <p className="rule-description">
                The admin team may apply special rules on a case-by-case basis.
                Follow all instructions given by staff at all times.
              </p>
            </div>
          </div>
        </section>

        {/* Participation Terms Section */}
        <section className="content-section" data-aos="fade-up">
          <div className="content-section-header">
            <Shield className="w-12 h-12 mx-auto mb-4 text-[#3498db]" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Participation <span className="text-[#3498db]">Terms</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
              Requirements and conditions for playing on CrayonSMP
            </p>
          </div>

          <div className="rules-grid">
            <div
              className="rule-card highlight-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div
                className="rule-number"
                style={{
                  backgroundColor: "rgba(52, 152, 219, 0.2)",
                  borderColor: "#3498db",
                  color: "#3498db",
                }}
              >
                1
              </div>
              <h3 className="rule-title">Age Requirement</h3>
              <p className="rule-description">
                Players must be at least 16 years old to participate.
              </p>
            </div>

            <div
              className="rule-card highlight-card"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div
                className="rule-number"
                style={{
                  backgroundColor: "rgba(52, 152, 219, 0.2)",
                  borderColor: "#3498db",
                  color: "#3498db",
                }}
              >
                2
              </div>
              <h3 className="rule-title">Basic Minecraft Knowledge</h3>
              <p className="rule-description">
                A fundamental understanding of Minecraft is expected, as
                CrayonSMP is no longer vanilla Minecraft.
              </p>
            </div>

            <div
              className="rule-card highlight-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                className="rule-number"
                style={{
                  backgroundColor: "rgba(52, 152, 219, 0.2)",
                  borderColor: "#3498db",
                  color: "#3498db",
                }}
              >
                3
              </div>
              <h3 className="rule-title">Acceptance of Open Rules</h3>
              <p className="rule-description">
                Players should be able to handle the server's open rules and
                accept if their base is occasionally griefed.
              </p>
            </div>

            <div
              className="rule-card highlight-card"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div
                className="rule-number"
                style={{
                  backgroundColor: "rgba(52, 152, 219, 0.2)",
                  borderColor: "#3498db",
                  color: "#3498db",
                }}
              >
                4
              </div>
              <h3 className="rule-title">Content Rights Grant</h3>
              <p className="rule-description">
                By creating and contributing any content (including but not
                limited to builds, models, textures, or scripts) on CrayonSMP,
                you grant CrayonSMP a non-exclusive, royalty-free, worldwide
                license to use, reproduce, modify, adapt, publish, translate,
                create derivative works from, distribute, and display such
                content. This ensures CrayonSMP can operate without legal
                exposure related to user-generated content.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Rules;

import { useEffect } from "react";
import { MessageCircle, Shield, Code, Users } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function Team() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      disable: "mobile",
    });
  }, []);

  const admins = [
    {
      name: "Tamashii",
      nickname: "@tamashiimon",
      role: "Founder",
      image: "/media/team-pf/tamashii.png",
      quote: "I love making things that do not exist.",
      color: "#ff0040",
    },
    {
      name: "Qeonix",
      nickname: "@qeonix__",
      role: "Founder",
      image: "/media/team-pf/jonathan.png",
      quote: "n/a",
      color: "#ff0040",
    },
    {
      name: "Fotrapsy",
      nickname: "@fotrapsy",
      role: "Hidden Admin",
      image: "/media/team-pf/fotrapsy.png",
      quote: "There is not enough stupid in the world to describe me.",
      color: "#f05689",
    },
    {
      name: "Karma (Keramik)",
      nickname: "@karma_2121",
      role: "Hidden Admin",
      image: "/media/team-pf/karma.png",
      quote: "I'd be eely surprised to see you",
      color: "#f05689",
    },
  ];

  const team = [
    {
      name: "ezTxmMC",
      nickname: "@eztxmmc",
      role: "Developer",
      image: "/media/team-pf/ezTxmMC.png",
      quote: "Developing...",
      color: "#33caca",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="fade-down">
            <Users className="w-16 h-16 mx-auto mb-4 text-[#ff0040]" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Meet the <span className="accent-gradient-text">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              The passionate individuals behind CrayonSMP, dedicated to creating
              an exceptional gaming experience for our community.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        {/* Administration Section */}
        <section className="mb-20">
          <div className="team-section-header" data-aos="fade-up">
            <Shield className="mt-8 w-8 h-8 text-[#ff0040]" />
            <h2 className="text-3xl md:text-4xl font-bold">Administration</h2>
            <p className="text-gray-400 mt-2">
              Leadership team managing and developing CrayonSMP
            </p>
          </div>

          <div className="team-grid">
            {admins.map((member, index) => (
              <div
                key={member.nickname}
                className="team-card-enhanced"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div
                  className="team-card-glow"
                  style={{ backgroundColor: member.color }}
                ></div>
                <div
                  className="team-card-rank-badge"
                  style={{ backgroundColor: member.color }}
                >
                  {member.role}
                </div>
                <div className="team-card-avatar-wrapper">
                  <img
                    src={member.image}
                    alt={`Profile Picture of ${member.name}`}
                    className="team-card-avatar"
                    style={{ borderColor: member.color }}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://placehold.co/120x120/ff0040/ffffff?text=?";
                    }}
                  />
                </div>
                <h3 className="team-card-name">{member.name}</h3>
                <p className="team-card-nickname">{member.nickname}</p>
                <div className="team-card-divider"></div>
                <p className="team-card-quote">"{member.quote}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="team-section-header" data-aos="fade-up">
            <Code className="w-8 h-8 text-[#75ebee]" />
            <h2 className="text-3xl md:text-4xl font-bold">Team Members</h2>
            <p className="text-gray-400 mt-2">
              Talented contributors making it all possible
            </p>
          </div>

          <div className="team-grid">
            {team.map((member, index) => (
              <div
                key={member.nickname}
                className="team-card-enhanced"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div
                  className="team-card-glow"
                  style={{ backgroundColor: member.color }}
                ></div>
                <div
                  className="team-card-rank-badge"
                  style={{ backgroundColor: member.color }}
                >
                  {member.role}
                </div>
                <div className="team-card-avatar-wrapper">
                  <img
                    src={member.image}
                    alt={`Profile Picture of ${member.name}`}
                    className="team-card-avatar"
                    style={{ borderColor: member.color }}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://placehold.co/120x120/75ebee/ffffff?text=?";
                    }}
                  />
                </div>
                <h3 className="team-card-name">{member.name}</h3>
                <p className="team-card-nickname">{member.nickname}</p>
                <div className="team-card-divider"></div>
                <p className="team-card-quote">"{member.quote}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Join CTA */}
        <section className="section-card text-center" data-aos="fade-up">
          <MessageCircle className="w-12 h-12 mx-auto mb-4 text-[#ff0040]" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Become Part of the Team!
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Interested in supporting CrayonSMP? Visit our Discord server to
            apply or share your ideas with us!
          </p>
          <a
            href="https://discord.gg/M2M6m3j2Qf"
            className="cta-button primary"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Join Discord</span>
          </a>
        </section>
      </div>
    </main>
  );
}

export default Team;

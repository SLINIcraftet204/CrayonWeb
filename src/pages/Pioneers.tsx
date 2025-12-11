import { useEffect } from "react";
import {
  MessageCircle,
  Twitch,
  Youtube,
  Globe,
  Gamepad2,
  Star,
  Sparkles,
  Users,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function Pioneers() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      disable: "mobile",
    });
  }, []);

  const contentCreators = [
    {
      name: "Karma",
      nickname: "@karma2121",
      role: "Streamer",
      image: "/media/team-pf/karma.png",
      quote: "Open for collabs",
      color: "#9735f2",
      socials: [
        {
          icon: Twitch,
          url: "https://www.twitch.tv/karma2121_",
          label: "Twitch",
        },
      ],
    },
    {
      name: "Giannicraft",
      nickname: "@Giannicrafter",
      role: "Streamer",
      image: "/media/streamer-pf/GianniCrafter.png",
      quote: "I am a femboy who likes trains",
      color: "#9735f2",
      socials: [
        {
          icon: Twitch,
          url: "https://www.twitch.tv/giannicrafter",
          label: "Twitch",
        },
        {
          icon: Youtube,
          url: "https://www.youtube.com/@Giannicrafter",
          label: "YouTube",
        },
      ],
    },
    {
      name: "ezTxmMC",
      nickname: "@eztxmmc",
      role: "YouTuber",
      image: "/media/team-pf/ezTxmMC.png",
      quote: "Developing and also playing...",
      color: "#9735f2",
      socials: [
        {
          icon: Twitch,
          url: "https://www.twitch.tv/eztxmmc",
          label: "Twitch",
        },
        {
          icon: Youtube,
          url: "https://www.youtube.com/@ezTxmMC",
          label: "YouTube",
        },
      ],
    },
    {
      name: "Shadow_CatNinja",
      nickname: "@Shadow_CatNinja",
      role: "Streamer",
      image: "/media/streamer-pf/Shadow_CatNinja.png",
      quote: "Sneaky as a cat, fast as a ninja.",
      color: "#9735f2",
      socials: [
        {
          icon: Twitch,
          url: "https://www.twitch.tv/shadow_catninja",
          label: "Twitch",
        },
        {
          icon: Youtube,
          url: "https://www.youtube.com/@Shadow_CatNinja",
          label: "YouTube",
        },
      ],
    },
  ];

  const members = [
    {
      name: "Ahmed",
      nickname: "@theahmedhd",
      role: "Player",
      image: "/media/streamer-pf/Ahmed.gif",
      quote: "Burns like fire",
      color: "#4d4848",
      socials: [
        { icon: Twitch, url: "https://twitch.com/theahmedhd", label: "Twitch" },
        {
          icon: Youtube,
          url: "https://youtube.com/@theahmedhd.?si=rv5ZFxgBb0oHb44o",
          label: "YouTube",
        },
      ],
    },
    {
      name: "Tamashii",
      nickname: "@tamashiimon",
      role: "Founder",
      image: "/media/team-pf/tamashii.png",
      quote: "I am not only a Staff but also a Player.",
      color: "#C0C0C0",
      socials: [
        {
          icon: Twitch,
          url: "https://www.twitch.tv/tamashiimon",
          label: "Twitch",
        },
        {
          icon: Youtube,
          url: "https://www.youtube.com/@TamashiiMon",
          label: "YouTube",
        },
      ],
    },
    {
      name: "Qeonix",
      nickname: "@qeonix__",
      role: "Founder",
      image: "/media/team-pf/jonathan.png",
      quote: "n/a",
      color: "#C0C0C0",
      socials: [],
    },
    {
      name: "Fotrapsy",
      nickname: "@fotrapsy",
      role: "Hidden Admin",
      image: "/media/team-pf/fotrapsy.png",
      quote: "There is not enough stupid in the world to describe me.",
      color: "#C0C0C0",
      socials: [],
    },
    {
      name: "Admiralbiber",
      nickname: "@Biber_2005",
      role: "Member",
      image: "/media/streamer-pf/Admiralbiber.png",
      quote: "I love the war",
      color: "#4d4848",
      socials: [],
    }
  ];

  const sponsors = [
    {
      name: "SyntaxJason",
      nickname: "@syntaxjason",
      role: "Partner",
      image: "/media/team-pf/SyntaxJson.png",
      quote: "n/a",
      color: "#3498db",
      socials: [
        {
          icon: Globe,
          url: "https://bluenet-hosting.com",
          label: "BlueNet-Hosting",
        },
        {
          icon: Globe,
          url: "https://astranox.de",
          label: "Astranox",
        },
        {
          icon: Gamepad2,
          url: "https://steamcommunity.com/id/DraconyxGroup",
          label: "Steam",
        },
      ],
    },
    {
      name: "Tikomatura",
      nickname: "@Ynujasha",
      role: "Former Sponsor",
      image: "/media/streamer-pf/Ynujasha.png",
      quote: "Day 2 Supporter\nHMU for cheap server hosting",
      color: "#3498db",
      socials: [
        { icon: Globe, url: "https://cops.bio/1", label: "Crops Bio" },
        {
          icon: Gamepad2,
          url: "https://steamcommunity.com/id/Tikomatura",
          label: "Steam",
        },
        { icon: Globe, url: "https://rustymain.eu/", label: "RustyMain" },
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pioneer-hero">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="fade-down">
            <Star className="w-16 h-16 mx-auto mb-4 text-[#f05689]" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our <span className="accent-gradient-text">Pioneers</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              The trailblazers and content creators who help shape and grow the
              CrayonSMP community.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        {/* Content Creators Section */}
        <section className="mb-20">
          <div className="team-section-header" data-aos="fade-up">
            <Sparkles className="mt-8 w-8 h-8 text-[#9735f2]" />
            <h2 className="text-3xl md:text-4xl font-bold">Content Creators</h2>
            <p className="text-gray-400 mt-2">
              Streamers bringing CrayonSMP to audiences worldwide
            </p>
          </div>

          <div className="pioneer-grid">
            {contentCreators.map((member, index) => (
              <div
                key={member.nickname}
                className="pioneer-card-enhanced"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div
                  className="pioneer-card-glow"
                  style={{ backgroundColor: member.color }}
                ></div>
                <div
                  className="pioneer-card-rank-badge"
                  style={{ backgroundColor: member.color }}
                >
                  {member.role}
                </div>
                <div className="pioneer-card-avatar-wrapper">
                  <img
                    src={member.image}
                    alt={`Profile Picture of ${member.name}`}
                    className="pioneer-card-avatar"
                    style={{ borderColor: member.color }}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://placehold.co/120x120/9735f2/ffffff?text=?";
                    }}
                  />
                </div>
                <h3 className="pioneer-card-name">{member.name}</h3>
                <p className="pioneer-card-nickname">{member.nickname}</p>
                <div className="pioneer-card-divider"></div>
                <p className="pioneer-card-quote">"{member.quote}"</p>
                <div className="pioneer-social-links">
                  {member.socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className="pioneer-social-icon"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Section */}
        <section className="mb-20">
          <div className="team-section-header" data-aos="fade-up">
            <Users className="w-8 h-8 text-[#FF0040]" />
            <h2 className="text-3xl md:text-4xl font-bold">Community</h2>
            <p className="text-gray-400 mt-2">
              Players and staff members enjoying the server
            </p>
          </div>

          <div className="pioneer-grid">
            {members.map((member, index) => (
              <div
                key={member.nickname}
                className="pioneer-card-enhanced"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div
                  className="pioneer-card-glow"
                  style={{ backgroundColor: member.color }}
                ></div>
                <div
                  className="pioneer-card-rank-badge"
                  style={{ backgroundColor: member.color }}
                >
                  {member.role}
                </div>
                <div className="pioneer-card-avatar-wrapper">
                  <img
                    src={member.image}
                    alt={`Profile Picture of ${member.name}`}
                    className="pioneer-card-avatar"
                    style={{ borderColor: member.color }}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://placehold.co/120x120/4d4848/ffffff?text=?";
                    }}
                  />
                </div>
                <h3 className="pioneer-card-name">{member.name}</h3>
                <p className="pioneer-card-nickname">{member.nickname}</p>
                <div className="pioneer-card-divider"></div>
                <p className="pioneer-card-quote">"{member.quote}"</p>
                <div className="pioneer-social-links">
                  {member.socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className="pioneer-social-icon"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="mb-20">
          <div className="team-section-header" data-aos="fade-up">
            <Star className="w-8 h-8 text-[#3498db]" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Sponsors & Partners
            </h2>
            <p className="text-gray-400 mt-2">
              Supporting CrayonSMP's growth and development
            </p>
          </div>

          <div className="pioneer-grid">
            {sponsors.map((member, index) => (
              <div
                key={member.nickname}
                className="pioneer-card-enhanced"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div
                  className="pioneer-card-glow"
                  style={{ backgroundColor: member.color }}
                ></div>
                <div
                  className="pioneer-card-rank-badge"
                  style={{ backgroundColor: member.color }}
                >
                  {member.role}
                </div>
                <div className="pioneer-card-avatar-wrapper">
                  <img
                    src={member.image}
                    alt={`Profile Picture of ${member.name}`}
                    className="pioneer-card-avatar"
                    style={{ borderColor: member.color }}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://placehold.co/120x120/3498db/ffffff?text=?";
                    }}
                  />
                </div>
                <h3 className="pioneer-card-name">{member.name}</h3>
                <p className="pioneer-card-nickname">{member.nickname}</p>
                <div className="pioneer-card-divider"></div>
                <p
                  className="pioneer-card-quote"
                  style={{ whiteSpace: "pre-line" }}
                >
                  "{member.quote}"
                </p>
                <div className="pioneer-social-links">
                  {member.socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className="pioneer-social-icon"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Join CTA */}
        <section className="section-card text-center" data-aos="fade-up">
          <MessageCircle className="w-12 h-12 mx-auto mb-4 text-[#f05689]" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Become Part of the Project!
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Interested to join CrayonSMP? Then send us an application on our
            Discord server!
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

export default Pioneers;

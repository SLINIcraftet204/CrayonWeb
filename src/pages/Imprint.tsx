import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FileText, Mail, Phone, Scale, Globe } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function Imprint() {
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
            <FileText className="w-20 h-20 mx-auto mb-6 text-[#ff0040]" />
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-white leading-tight">
              Imprint &{" "}
              <span className="accent-gradient-text">Legal Notice</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Legal information and contact details
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 mt-8 mb-16">
        <div className="max-w-5xl mx-auto">
          {/* Information Section */}
          <section className="content-section" data-aos="fade-up">
            <div className="imprint-card">
              <div className="imprint-card-header">
                <Scale className="w-10 h-10 text-[#ff0040]" />
                <h2 className="imprint-card-title">
                  Information according to § 5 DDG (German Digital Services Act)
                </h2>
              </div>
              <div className="imprint-card-content">
                <p className="text-gray-300 text-lg">
                  Gianni-Finn Grollius
                  <br />
                  Germany
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="content-section" data-aos="fade-up">
            <div className="imprint-card highlight-card">
              <div className="imprint-card-header">
                <Mail className="w-10 h-10 text-[#3498db]" />
                <h2 className="imprint-card-title">Contact Information</h2>
              </div>
              <div className="imprint-card-content">
                <div className="contact-items">
                  <div className="contact-item">
                    <Phone className="w-5 h-5 text-[#ff0040]" />
                    <span>Phone Number: +49 1512 3380931</span>
                  </div>
                  <div className="contact-item">
                    <Mail className="w-5 h-5 text-[#ff0040]" />
                    <span>
                      Private Email:{" "}
                      <a
                        href="mailto:tamashiimon@gmail.com"
                        className="text-[#3498db] hover:text-[#5dade2] underline transition"
                      >
                        TamashiiMon@gmail.com
                      </a>
                    </span>
                  </div>
                  <div className="contact-item">
                    <Mail className="w-5 h-5 text-[#ff0040]" />
                    <span>
                      Organization Email:{" "}
                      <a
                        href="mailto:team@crayonsmp.com"
                        className="text-[#3498db] hover:text-[#5dade2] underline transition"
                      >
                        team@crayonsmp.com
                      </a>
                    </span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-4 italic">
                  Please note that contacting us by email or via the provided
                  phone number is usually the fastest method.
                </p>
              </div>
            </div>
          </section>

          {/* Responsible Section */}
          <section className="content-section" data-aos="fade-up">
            <div className="imprint-card">
              <div className="imprint-card-header">
                <FileText className="w-10 h-10 text-[#ff0040]" />
                <h2 className="imprint-card-title">
                  Responsible for journalistic-editorial content according to §
                  18 Abs. 2 MStV
                </h2>
              </div>
              <div className="imprint-card-content">
                <p className="text-gray-300 text-lg">
                  Gianni-Finn Grollius
                  <br />
                  Germany
                </p>
              </div>
            </div>
          </section>

          {/* EU Dispute Resolution */}
          <section className="content-section" data-aos="fade-up">
            <div className="imprint-card">
              <div className="imprint-card-header">
                <Globe className="w-10 h-10 text-[#ff0040]" />
                <h2 className="imprint-card-title">EU Dispute Resolution</h2>
              </div>
              <div className="imprint-card-content">
                <p className="text-gray-300 mb-4">
                  The European Commission provides a platform for online dispute
                  resolution (ODR):{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3498db] hover:text-[#5dade2] underline transition"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="text-gray-300 mb-2">
                  You can find our email address in the Imprint above.
                </p>
                <p className="text-gray-300">
                  We are not willing or obliged to participate in dispute
                  resolution proceedings before a consumer arbitration board.
                </p>
              </div>
            </div>
          </section>

          {/* Liability Sections */}
          <section className="content-section" data-aos="fade-up">
            <div className="legal-sections-grid">
              <div className="legal-card">
                <h3 className="legal-card-title">Liability for Content</h3>
                <div className="legal-card-content">
                  <p className="mb-4">
                    As a service provider, we are responsible for our own
                    content on these pages in accordance with general laws
                    pursuant to Section 7 (1) DDG. However, pursuant to Sections
                    8 to 10 DDG, we as a service provider are not obliged to
                    monitor transmitted or stored third-party information or to
                    investigate circumstances that indicate illegal activity.
                  </p>
                  <p>
                    Obligations to remove or block the use of information
                    according to general laws remain unaffected. However,
                    liability in this regard is only possible from the time of
                    knowledge of a specific legal violation. If we become aware
                    of such legal violations, we will remove this content
                    immediately.
                  </p>
                </div>
              </div>

              <div className="legal-card">
                <h3 className="legal-card-title">Liability for Links</h3>
                <div className="legal-card-content">
                  <p className="mb-4">
                    Our offering contains links to external third-party
                    websites, the content of which we have no influence over.
                    Therefore, we cannot assume any liability for these external
                    contents. The respective provider or operator of the pages
                    is always responsible for the content of the linked pages.
                    The linked pages were checked for possible legal violations
                    at the time of linking. Illegal content was not recognizable
                    at the time of linking.
                  </p>
                  <p>
                    However, a permanent content check of the linked pages is
                    not reasonable without concrete evidence of a legal
                    violation. If we become aware of legal violations, we will
                    remove such links immediately.
                  </p>
                </div>
              </div>

              <div className="legal-card">
                <h3 className="legal-card-title">Copyright</h3>
                <div className="legal-card-content">
                  <p className="mb-4">
                    The content and works created by the site operators on these
                    pages are subject to German copyright law. Duplication,
                    processing, distribution, and any form of commercialization
                    of such material beyond the scope of copyright law shall
                    require the prior written consent of its respective author
                    or creator. Downloads and copies of this site are permitted
                    only for private, non-commercial use.
                  </p>
                  <p>
                    Insofar as the content on this site was not created by the
                    operator, the copyrights of third parties are respected. In
                    particular, third-party content is marked as such. Should
                    you nevertheless become aware of a copyright infringement,
                    please notify us accordingly. If we become aware of legal
                    violations, we will remove such content immediately.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Back to Homepage */}
          <section className="text-center mt-12" data-aos="fade-up">
            <Link to="/" className="cta-button primary inline-flex">
              <Globe className="w-5 h-5" />
              <span>Back to Homepage</span>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}

export default Imprint;

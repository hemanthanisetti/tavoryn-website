
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Code2,
  Smartphone,
  ShoppingCart,
  Bot,
  Layers3,
  Sparkles,
  CheckCircle2,
  Globe,
  Zap,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import "./App.css";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      icon: <Code2 size={24} />,
      title: "Website Development",
      description:
        "Fast, modern and responsive websites that turn visitors into customers.",
      number: "01",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Web Applications",
      description:
        "Custom digital solutions built around your business requirements.",
      number: "02",
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "E-Commerce",
      description:
        "Online stores designed to make selling your products effortless.",
      number: "03",
    },
    {
      icon: <Bot size={24} />,
      title: "Automation & AI",
      description:
        "Smarter workflows using automation and intelligent technology.",
      number: "04",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discover",
      description: "We understand your business, goals and requirements.",
    },
    {
      number: "02",
      title: "Design",
      description: "We create a modern design tailored to your brand.",
    },
    {
      number: "03",
      title: "Develop",
      description: "We build, test and refine your digital solution.",
    },
    {
      number: "04",
      title: "Launch",
      description: "Your website goes live and starts growing your business.",
    },
  ];

  const projects = [
    {
      category: "BUSINESS WEBSITE",
      title: "Corporate Digital Presence",
      description:
        "A modern digital experience built to establish trust and attract new customers.",
      gradient: "project-gradient-one",
      label: "Business",
    },
    {
      category: "E-COMMERCE",
      title: "Online Shopping Experience",
      description:
        "A seamless shopping experience with intuitive product discovery.",
      gradient: "project-gradient-two",
      label: "Commerce",
    },
    {
      category: "WEB APPLICATION",
      title: "Smart Business Dashboard",
      description:
        "A streamlined application designed to simplify everyday business operations.",
      gradient: "project-gradient-three",
      label: "Application",
    },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="website">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            <span className="logo-symbol">T</span>
            <span className="logo-text">
              TAVORYN<span className="logo-dot">.</span>
              <small>SOLUTIONS</small>
            </span>
          </a>

          <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#work" onClick={closeMenu}>Our Work</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <a href="#contact" className="nav-cta">
            Let's Talk <ArrowUpRight size={16} />
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>

        <div className="container hero-container">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot"></span>
              DIGITAL SOLUTIONS FOR MODERN BUSINESS
            </div>

            <h1>
              We build digital
              <br />
              experiences that
              <br />
              <span className="gradient-text">grow your business.</span>
            </h1>

            <p className="hero-description">
              Transform your ideas into powerful digital experiences.
              We create modern websites, applications and technology
              solutions designed to move your business forward.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="button-primary">
                Start a Project <ArrowRight size={18} />
              </a>
              <a href="#work" className="button-secondary">
                Explore Our Work
              </a>
            </div>

            <div className="hero-trust">
              <div className="trust-icon">
                <ShieldCheck size={18} />
              </div>
              <span>Built with purpose. Designed for growth.</span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="hero-visual">
            <div className="visual-orbit orbit-one"></div>
            <div className="visual-orbit orbit-two"></div>

            <div className="floating-card floating-card-top">
              <div className="floating-icon blue-icon">
                <Zap size={18} />
              </div>
              <div>
                <strong>Performance</strong>
                <span>Built for speed</span>
              </div>
            </div>

            <div className="dashboard-card">
              <div className="dashboard-header">
                <div className="dashboard-logo">
                  <span className="mini-logo">T</span>
                  <span>Tavoryn Studio</span>
                </div>
                <div className="dashboard-dots">
                  <span></span><span></span><span></span>
                </div>
              </div>

              <div className="dashboard-content">
                <div className="dashboard-label">DIGITAL GROWTH</div>
                <h3>Build something<br />extraordinary.</h3>
                <p>Technology meets creativity.</p>

                <div className="dashboard-preview">
                  <div className="preview-left">
                    <div className="preview-line"></div>
                    <div className="preview-line short"></div>
                    <div className="preview-button"></div>
                  </div>
                  <div className="preview-art">
                    <div className="art-circle"></div>
                    <div className="art-square"></div>
                  </div>
                </div>

                <div className="dashboard-bottom">
                  <div>
                    <span className="bottom-label">Digital solutions</span>
                    <strong>Made for growth</strong>
                  </div>
                  <div className="bottom-arrow">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-card floating-card-bottom">
              <div className="floating-icon cyan-icon">
                <Layers3 size={18} />
              </div>
              <div>
                <strong>Creative Solutions</strong>
                <span>Built around your vision</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="container hero-bottom-inner">
            <span>SCROLL TO EXPLORE</span>
            <div className="scroll-line"></div>
            <span>01 — 05</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services section" id="services">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="section-eyebrow">WHAT WE DO</div>
              <h2>
                Technology that
                <br />
                <span className="gradient-text">makes a difference.</span>
              </h2>
            </div>

            <p className="section-description">
              We bring design, technology and creativity together to
              help businesses build a stronger digital presence.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.number}>
                <div className="service-top">
                  <div className="service-icon">{service.icon}</div>
                  <span className="service-number">{service.number}</span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <a href="#contact" className="service-link">
                  Explore Service <ArrowUpRight size={17} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / WHY US */}
      <section className="about section" id="about">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="about-frame">
              <div className="about-frame-inner">
                <div className="about-symbol">
                  <span>T</span>
                  <div className="symbol-glow"></div>
                </div>
                <div className="about-frame-text">
                  <span>THINK DIGITAL.</span>
                  <span>BUILD SMART.</span>
                  <span className="highlight">GROW FURTHER.</span>
                </div>
              </div>
              <div className="about-floating-tag">
                <Sparkles size={16} />
                <span>Ideas into reality</span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <div className="section-eyebrow">WHY TAVORYN</div>
            <h2>
              Your vision.
              <br />
              <span className="gradient-text">Our expertise.</span>
            </h2>

            <p>
              Every business has a unique story. We help bring yours to
              life through thoughtful design, modern technology and
              solutions that are built with your goals in mind.
            </p>

            <div className="benefits-list">
              <div className="benefit">
                <CheckCircle2 />
                <div>
                  <strong>Built around your business</strong>
                  <span>Solutions designed for your specific needs.</span>
                </div>
              </div>

              <div className="benefit">
                <CheckCircle2 />
                <div>
                  <strong>Modern technology</strong>
                  <span>Reliable, responsive and scalable solutions.</span>
                </div>
              </div>

              <div className="benefit">
                <CheckCircle2 />
                <div>
                  <strong>Personal attention</strong>
                  <span>Direct communication throughout your project.</span>
                </div>
              </div>

              <div className="benefit">
                <CheckCircle2 />
                <div>
                  <strong>Long-term support</strong>
                  <span>We're here even after your project launches.</span>
                </div>
              </div>
            </div>

            <a href="#contact" className="button-primary">
              Get to Know Us <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process section">
        <div className="container">
          <div className="section-heading centered">
            <div className="section-eyebrow">HOW WE WORK</div>
            <h2>
              Simple process.
              <br />
              <span className="gradient-text">Exceptional results.</span>
            </h2>
            <p className="section-description">
              From your first idea to the final launch, we make
              the journey simple and transparent.
            </p>
          </div>

          <div className="process-grid">
            {process.map((step, index) => (
              <div className="process-card" key={step.number}>
                <div className="process-number">{step.number}</div>
                {index !== process.length - 1 && (
                  <div className="process-connector">
                    <ChevronRight size={16} />
                  </div>
                )}
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="work section" id="work">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="section-eyebrow">SELECTED WORK</div>
              <h2>
                Ideas brought
                <br />
                <span className="gradient-text">to life.</span>
              </h2>
            </div>

          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.title}>
                <div className={`project-image ${project.gradient}`}>
                  <div className="project-window">
                    <div className="window-header">
                      <span></span><span></span><span></span>
                    </div>
                    <div className="window-content">
                      <div className="window-brand">{project.label}</div>
                      <div className="window-heading"></div>
                      <div className="window-heading short"></div>
                      <div className="window-text"></div>
                      <div className="window-action"></div>
                    </div>
                  </div>
                  <div className="project-overlay-icon">
                    <ArrowUpRight size={22} />
                  </div>
                </div>

                <div className="project-details">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta section" id="contact">
        <div className="container">
          <div className="cta-card">
            <div className="cta-glow"></div>
            <div className="cta-content">
              <div className="section-eyebrow">HAVE A PROJECT IN MIND?</div>
              <h2>
                Let's build something
                <br />
                <span className="gradient-text">great together.</span>
              </h2>
              <p>
                Have an idea? Let's turn it into something real.
                Start a conversation with us today.
              </p>

              <a
                href="https://wa.me/919440677639"
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                Let's Talk About Your Project <ArrowRight size={18} />
              </a>
            </div>
            <div className="cta-decoration">
              <div className="cta-circle circle-one"></div>
              <div className="cta-circle circle-two"></div>
              <div className="cta-circle circle-three"></div>
              <div className="cta-center">
                <Globe size={40} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#home" className="logo">
                <span className="logo-symbol">T</span>
                <span className="logo-text">
                  TAVORYN<span className="logo-dot">.</span>
                  <small>SOLUTIONS</small>
                </span>
              </a>
              <p>
                Technology that grows your business.
                Building digital experiences for a better tomorrow.
              </p>
            </div>

            <div className="footer-column">
              <h4>Explore</h4>
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#work">Our Work</a>
            </div>

            <div className="footer-column">
              <h4>Services</h4>
              <a href="#services">Website Development</a>
              <a href="#services">Web Applications</a>
              <a href="#services">E-Commerce</a>
              <a href="#services">Automation & AI</a>
            </div>

            <div className="footer-column">
              <h4>Get in Touch</h4>
              <a href="#contact">Start a Project</a>
              <a href="https://wa.me/919440677639">WhatsApp</a>
              <a href="#contact">Contact Us</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Tavoryn Solutions. All rights reserved.</span>
            <span className="footer-tagline">Technology That Grows Your Business.</span>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        className="whatsapp-button"
        href="https://wa.me/919440677639"
        target="_blank"
        rel="noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <Smartphone size={22} />
      </a>
    </div>
  );

}

export default App;

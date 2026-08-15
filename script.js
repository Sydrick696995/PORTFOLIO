const PORTFOLIO_DATA = {
  personal: {
    name: "Sydrick B. Parra",
    role: "Fresh Graduate • Junior Developer",
    statusText: "> open to work",
    profileImage: "./assets/IMG_1575.JPG",
    profileAlt: "Portrait of Sydrick B. Parra",
  },
  about: [
    "Fresh Bachelor of Science in Computer Science graduate highly motivated and passionate about web development, applications, and systems with database integration.",
    "Possesses strong teamwork, fast learning, and time management skills, with the ability to work in fast-paced environments while maintaining professionalism and quality.",
    "Currently seeking opportunities to grow as a developer, contribute to real-world projects, and continue learning modern web technologies.",
  ],
  skills: [
    {
      title: "JAVASCRIPT",
      tags: ["DOM Manipulation", "APIs", "Problem Solving"],
    },
    {
      title: "HTML",
      tags: ["Semantic HTML", "Forms", "Accessibility Basics", "SEO Basics"],
    },
    {
      title: "CSS",
      tags: ["Responsive Design", "Flexbox", "Grid", "Animations"],
    },
    {
      title: "PYTHON",
      tags: ["Fundamentals", "Scripting", "Basic Automation", "API Basics"],
    },
    {
      title: "SQL & PHP",
      tags: ["Database Design", "Backend Development", "Query Optimization", "CRUD Operations"],
    },
  ],
  optionalSkills: [
    "React",
    "TypeScript",
    "Node.js",
    "Git/GitHub",
    "REST APIs",
    "Tailwind CSS",
    "YOLOv8",
    "Pose Estimation",
    "Machine Learning",
  ],
  featuredProject: {
    name: "C.A.L.I.: Real-Time Calisthenics Form Checker",
    summary:
      "A real-time calisthenics form-checking system using YOLOv8 and Pose Estimation. As Backend Developer and Data Tester, designed and implemented machine learning workflows for human pose detection and form deviation classification.",
    technologies: ["Python", "YOLOv8", "Pose Estimation", "Machine Learning"],
    links: [
      { label: "GITHUB", href: "https://github.com/Sydrick696995" },
      { label: "LIVE DEMO", href: "#" },
    ],
  },
  projects: [
    {
      name: "C.A.L.I.: Real-Time Calisthenics Form Checker",
      description:
        "A real-time calisthenics form-checking system using YOLOv8 and Pose Estimation for human pose detection and form deviation classification.",
      problemSolved:
        "Helps calisthenics practitioners maintain proper form during workouts to prevent injuries and maximize exercise effectiveness through AI-powered real-time feedback.",
      technologies: [
        "Python",
        "YOLOv8",
        "Pose Estimation",
        "OpenCV",
        "Machine Learning",
      ],
      features: [
        "Real-time human pose detection using YOLOv8",
        "Form deviation classification for common calisthenics movements",
        "Backend ML workflow design and implementation",
        "Data testing and model validation",
      ],
      github: "https://github.com/Sydrick696995",
      demo: "#",
    },
    {
      name: "Synthetic Data Modeling & Simulation",
      description:
        "A full-stack Python project for exploring synthetic data generation, exploratory data analysis, regression modeling, and simulation in one workflow.",
      problemSolved:
        "Provides an end-to-end environment to test data-driven ideas even when real datasets are limited, while validating model behavior through simulation.",
      technologies: [
        "Python",
        "Streamlit",
        "scikit-learn",
        "Pandas",
        "NumPy",
        "Seaborn",
        "Matplotlib",
      ],
      features: [
        "Configurable synthetic regression data generation with noise and correlated features",
        "Comprehensive EDA: distributions, correlation heatmaps, scatter relationships, and summary statistics",
        "Regression training and evaluation with R², MSE, RMSE, and MAE",
        "Outcome simulation and statistical comparison between original and simulated data",
        "Interactive Streamlit interface with optional custom CSV upload",
      ],
      github: "https://github.com/Sydrick696995/Synthetic_Data_Modeling",
      demo: "https://appapppy-6a2qbdprsr4erxf8g73xm3.streamlit.app/",
    },
    {
      name: "Applied Cryptography Application",
      description:
        "A Streamlit-based security-focused application demonstrating practical use of symmetric encryption, asymmetric encryption, and hashing for text and files.",
      problemSolved:
        "Helps users understand and apply confidentiality, integrity, and authenticity concepts through hands-on cryptography operations in an accessible UI.",
      technologies: ["Python", "Streamlit", "AES", "RSA", "SHA-256"],
      features: [
        "Encryption and decryption modes for both text and uploaded files",
        "Hash generation utilities for secure integrity checks",
        "Support for AES, RSA, and SHA-256 workflows",
        "Interactive educational descriptions and usage guidance per algorithm",
        "Clean multi-mode Streamlit interface for applied cryptography learning",
      ],
      github: "https://github.com/Sydrick696995/AC_SAMPLE_3B_PARRA",
      demo: "https://sample-app-3b-parra.streamlit.app/",
    },
    {
      name: "APAW System Enhancement (OJT)",
      description:
        "Institutional system enhancement work completed during OJT at CSPC AIRCoDE, focused on usability, mobile responsiveness, and operational support.",
      problemSolved:
        "Improved navigation, feature clarity, and user experience for a community-development platform used within the institution.",
      technologies: ["JavaScript", "HTML", "CSS", "Python", "API Integration"],
      features: [
        "UI/UX enhancements and mobile layout improvements",
        "Map-based navigation and weather/data visualization support",
        "Visitor logging and workflow refinements",
        "Testing, debugging, and technical support tasks during deployment",
      ],
      github: "https://github.com/Sydrick696995",
      demo: "",
      demoNote:
        "No public live demo — available only when connected to CSPC institutional server.",
    },
    {
      name: "Portfolio Website",
      description:
        "Modern minimalist portfolio website built with vanilla JavaScript, HTML, and CSS featuring multi-theme support, scroll animations, and responsive design.",
      problemSolved:
        "Showcases projects, skills, and experience in a clean, accessible, and performant web application without framework dependencies.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "CSS Variables",
        "IntersectionObserver API",
      ],
      features: [
        "Three-theme support (Light, Dark, Green) with localStorage persistence",
        "Scroll-triggered reveal animations with staggered delays",
        "Fully responsive design (mobile-first)",
        "Accessible navigation with keyboard support",
        "Typewriter effect for status text",
        "Data-driven content rendering from single JS object",
      ],
      github: "https://github.com/Sydrick696995",
      demo: "#",
    },
  ],
  education: [
    {
      period: "2022 — 2026",
      degree: "Bachelor of Science in Computer Science",
      school: "Camarines Sur Polytechnic Colleges",
      coursework:
        "Web Development • Programming • Database Systems • Software Engineering • Data Structures • Algorithms • Computer Networks • Operating Systems",
      achievement:
        "11th Bicol Youth Congress in Information Technology participant; Junior Philippine Computer Society - CSPC Chapter member (2025-2026); Completed OJT at CSPC AIRCoDE (March-April 2026)",
    },
  ],
  journey: [
    {
      title: "On-The-Job Training — AIRCoDE Research",
      period: "Mar 2026 — Apr 2026",
      summary:
        "Enhanced the APAW system by improving UI, map-based navigation, and mobile responsiveness. Developed weather monitoring, data visualization, and visitor logging features. Performed system testing, debugging, and AI research while assisting with technical support and hardware setup.",
    },
    {
      title: "C.A.L.I. — Real-Time Calisthenics Form Checker",
      period: "2025 — 2026",
      summary:
        "Capstone project: Built a real-time calisthenics form-checking system using YOLOv8 and Pose Estimation. Served as Backend Developer and Data Tester, designing ML workflows for human pose detection and form deviation classification.",
    },
    {
      title: "Junior Philippine Computer Society - CSPC Chapter",
      period: "2025 — 2026",
      summary:
        "Active member of the JPCS-CSPC Chapter, participating in tech events, workshops, and the 11th Bicol Youth Congress in Information Technology.",
    },
  ],
  certificates: [
    {
      title: "11th Bicol Youth Congress in Information Technology",
      issuer: "BYCIT",
      date: "2026",
      image: "./assets/BYCIT1.jpg",
      description: "Participated in the 11th Bicol Youth Congress in Information Technology, a gathering of IT students and professionals in the Bicol region.",
      link: "https://lnkd.in/p/gjzW29nn",
    },
    {
      title: "11th Bicol Youth Congress in Information Technology (Certificate 2)",
      issuer: "BYCIT",
      date: "2026",
      image: "./assets/BYCIT2.jpg",
      description: "Additional certificate from the 11th Bicol Youth Congress in Information Technology.",
      link: "https://lnkd.in/p/gjzW29nn",
    },
    {
      title: "Junior Philippine Computer Society - CSPC Chapter",
      issuer: "JPCS",
      date: "2025 — 2026",
      image: "./assets/JPCS_Certificate.jpg",
      description: "Active member certificate for Junior Philippine Computer Society - CSPC Chapter (2025-2026).",
      link: "#",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy / Cisco",
      date: "2025",
      image: "./assets/Introduction_to_Cybersecurity_certificate.jpg",
      description: "Completed Introduction to Cybersecurity course covering fundamental cybersecurity concepts, threats, and best practices.",
      link: "#",
    },
  ],
};

const OPTIONAL_FEATURES = {
  commandPalette: false,
  terminalMode: false,
  projectFilter: false,
};

const THEME_STORAGE_KEY = "portfolio-theme";
const SUPPORTED_THEMES = ["light", "dark", "green"];

function setBasicTextBindings() {
  const boundName = document.querySelectorAll('[data-bind="name"]');
  const boundRole = document.querySelector('[data-bind="role"]');
  const profileImage = document.querySelector(".hero-profile img");

  boundName.forEach((node) => {
    node.textContent = PORTFOLIO_DATA.personal.name;
  });

  if (boundRole) {
    boundRole.textContent = PORTFOLIO_DATA.personal.role;
  }

  if (profileImage) {
    profileImage.src = PORTFOLIO_DATA.personal.profileImage;
    profileImage.alt = PORTFOLIO_DATA.personal.profileAlt;
  }

  document.title = `${PORTFOLIO_DATA.personal.name} | Junior Developer Portfolio`;
}

function renderAbout() {
  const container = document.getElementById("aboutContent");
  if (!container) return;

  PORTFOLIO_DATA.about.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    container.appendChild(p);
  });
}

function renderSkills() {
  const skillsGrid = document.getElementById("skillsGrid");
  const optionalSkills = document.getElementById("optionalSkills");
  if (!skillsGrid || !optionalSkills) return;

  PORTFOLIO_DATA.skills.forEach((skill) => {
    const card = document.createElement("article");
    card.className = "skill-card reveal";
    card.innerHTML = `
      <h3 class="skill-title mono">[ ${skill.title} ]</h3>
      <p class="skill-tags">${skill.tags.join(" • ")}</p>
    `;
    skillsGrid.appendChild(card);
  });

  PORTFOLIO_DATA.optionalSkills.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    optionalSkills.appendChild(li);
  });
}

function linkButton(link, extraClass = "btn btn-secondary mono") {
  return `<a class="${extraClass}" href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label}</a>`;
}

function projectActionOrNote(url, label, note) {
  if (url) {
    return `<a class="btn btn-secondary mono" href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  }

  const safeNote = note || `${label} unavailable`;
  return `<span class="btn btn-disabled mono" aria-disabled="true" title="${safeNote}">${label} UNAVAILABLE</span>`;
}

function renderProjects() {
  const featuredName = document.getElementById("featuredProjectName");
  const featuredSummary = document.getElementById("featuredProjectSummary");
  const featuredTech = document.getElementById("featuredProjectTech");
  const featuredLinks = document.getElementById("featuredProjectLinks");
  const projectsGrid = document.getElementById("projectsGrid");

  if (
    !featuredName ||
    !featuredSummary ||
    !featuredTech ||
    !featuredLinks ||
    !projectsGrid
  ) {
    return;
  }

  const fp = PORTFOLIO_DATA.featuredProject;
  featuredName.textContent = fp.name;
  featuredSummary.textContent = fp.summary;
  featuredTech.textContent = fp.technologies.join(" / ");
  featuredLinks.innerHTML = fp.links
    .map((link) => linkButton(link, "btn btn-secondary mono"))
    .join("");

  PORTFOLIO_DATA.projects.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    card.innerHTML = `
      <p class="project-index mono">${String(index + 1).padStart(2, "0")} / PROJECT</p>
      <h3 class="project-title">${project.name}</h3>
      <p class="project-desc">${project.description}</p>
      <p class="meta-label mono">Problem Solved</p>
      <p>${project.problemSolved}</p>
      <p class="meta-label mono">Built with</p>
      <p>${project.technologies.join(" • ")}</p>
      <p class="meta-label mono">Key Features</p>
      <ul class="project-list">${project.features
        .map((feature) => `<li>${feature}</li>`)
        .join("")}</ul>
      <div class="project-actions">
        ${projectActionOrNote(project.github, "GITHUB", project.githubNote)}
        ${projectActionOrNote(project.demo, "LIVE DEMO", project.demoNote)}
      </div>
    `;
    projectsGrid.appendChild(card);
  });
}

function renderEducation() {
  const container = document.getElementById("educationList");
  if (!container) return;

  PORTFOLIO_DATA.education.forEach((entry) => {
    const article = document.createElement("article");
    article.className = "timeline-item reveal";
    article.innerHTML = `
      <p class="timeline-meta mono">${entry.period}</p>
      <h3>${entry.degree}</h3>
      <p><strong>${entry.school}</strong></p>
      <p><span class="mono">Relevant Coursework:</span> ${entry.coursework}</p>
      <p>${entry.achievement}</p>
    `;
    container.appendChild(article);
  });
}

function renderJourney() {
  const container = document.getElementById("journeyList");
  if (!container) return;

  PORTFOLIO_DATA.journey.forEach((entry) => {
    const article = document.createElement("article");
    article.className = "journey-item reveal";
    article.innerHTML = `
      <p class="timeline-meta mono">${entry.period}</p>
      <h3>${entry.title}</h3>
      <p>${entry.summary}</p>
    `;
    container.appendChild(article);
  });
}

function renderCertificates() {
  const container = document.getElementById("certificatesGrid");
  if (!container) return;

  PORTFOLIO_DATA.certificates.forEach((cert) => {
    const card = document.createElement("article");
    card.className = "certificate-card reveal";
    card.innerHTML = `
      <div class="certificate-image">
        <img src="${cert.image}" alt="${cert.title} certificate" loading="lazy" />
      </div>
      <div class="certificate-content">
        <h3 class="certificate-title">${cert.title}</h3>
        <p class="certificate-meta mono">${cert.issuer} • ${cert.date}</p>
        <p class="certificate-desc">${cert.description}</p>
        ${cert.link && cert.link !== "#" ? `<a class="btn btn-secondary mono inline-link" href="${cert.link}" target="_blank" rel="noopener noreferrer">VIEW CERTIFICATE</a>` : ""}
      </div>
    `;
    container.appendChild(card);
  });
}

function initTypewriter() {
  const target = document.getElementById("typewriterText");
  if (!target) return;

  const text = PORTFOLIO_DATA.personal.statusText;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    target.textContent = text;
    return;
  }

  let i = 0;
  const interval = window.setInterval(() => {
    target.textContent = text.slice(0, i + 1);
    i += 1;
    if (i >= text.length) {
      window.clearInterval(interval);
    }
  }, 38);
}

function initReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  elements.forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index * 18, 180)}ms`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          return;
        }
        entry.target.classList.remove("is-visible");
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -5% 0px" }
  );

  elements.forEach((el) => observer.observe(el));
}

function initNavSectionIndicator() {
  const links = Array.from(document.querySelectorAll(".site-nav a"));
  if (!links.length) return;

  const hashLinks = links.filter((link) => {
    const href = link.getAttribute("href") || "";
    return href.startsWith("#");
  });

  // Single-page mode: keep the existing section observer behavior.
  if (hashLinks.length) {
    const sections = hashLinks
      .map((link) => {
        const href = link.getAttribute("href");
        if (!href) return null;
        const section = document.querySelector(href);
        return section instanceof HTMLElement ? section : null;
      })
      .filter(Boolean);

    if (!sections.length) return;

    const linkById = new Map(
      hashLinks.map((link) => [link.getAttribute("href")?.slice(1), link])
    );

    const setActive = (sectionId) => {
      hashLinks.forEach((link) => link.classList.remove("is-active"));
      const targetLink = linkById.get(sectionId);
      if (targetLink) targetLink.classList.add("is-active");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (!visible.length) return;
        setActive(visible[0].target.id);
      },
      { threshold: [0.35, 0.6], rootMargin: "-20% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    setActive("home");
    return;
  }

  // Multi-page mode: highlight the link that matches the current HTML file.
  const currentFile = (window.location.pathname.split("/").pop() || "index.html")
    .toLowerCase();
  const isHomeFile = currentFile === "index.html" || currentFile === "home.html";

  links.forEach((link) => {
    const href = (link.getAttribute("href") || "").toLowerCase();
    const hrefFile = href.split("#")[0].split("/").pop();
    const isHomeLink = hrefFile === "index.html" || hrefFile === "home.html";

    const isActive = hrefFile
      ? hrefFile === currentFile || (isHomeFile && isHomeLink)
      : false;

    link.classList.toggle("is-active", isActive);
  });
}

function initMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("siteNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function applyTheme(theme) {
  const targetTheme = SUPPORTED_THEMES.includes(theme) ? theme : "light";
  document.documentElement.setAttribute("data-theme", targetTheme);

  document.querySelectorAll(".theme-btn").forEach((button) => {
    const isActive = button.dataset.theme === targetTheme;
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function initThemeSwitcher() {
  const buttons = document.querySelectorAll(".theme-btn");
  if (!buttons.length) return;

  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || "light";
  applyTheme(savedTheme);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedTheme = button.dataset.theme || "light";
      applyTheme(selectedTheme);
      localStorage.setItem(THEME_STORAGE_KEY, selectedTheme);
    });
  });
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (!form || !status) return;

  const submitButton = form.querySelector('button[type="submit"]');
  const defaultButtonText = submitButton ? submitButton.textContent : "";

  const setStatus = (message, state) => {
    status.textContent = message;
    status.classList.remove("is-success", "is-error");
    if (state) status.classList.add(`is-${state}`);
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const actionUrl = form.getAttribute("action") || "";
    if (!actionUrl || actionUrl.includes("YOUR_FORMSPREE_ID")) {
      setStatus(
        "Form isn't connected yet — replace YOUR_FORMSPREE_ID in Contact.html with your real Formspree endpoint.",
        "error"
      );
      return;
    }

    if (!form.reportValidity()) return;

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "SENDING...";
    }
    setStatus("Sending your message...");

    try {
      const response = await fetch(actionUrl, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("Thanks! Your message has been sent — I'll get back to you soon.", "success");
        form.reset();
      } else {
        const data = await response.json().catch(() => null);
        const errorMessage =
          data && Array.isArray(data.errors) && data.errors.length
            ? data.errors.map((err) => err.message).join(" ")
            : "Something went wrong sending your message. Please try again or email me directly.";
        setStatus(errorMessage, "error");
      }
    } catch (error) {
      setStatus(
        "Network error — please check your connection and try again, or email me directly.",
        "error"
      );
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = defaultButtonText;
      }
    }
  });
}

function initOptionalFeatures() {
  if (OPTIONAL_FEATURES.commandPalette) {
    console.info("Command palette is enabled. Wire up CMD/CTRL + K actions.");
  }
  if (OPTIONAL_FEATURES.terminalMode) {
    console.info("Terminal mode is enabled. Add your optional easter egg.");
  }
  if (OPTIONAL_FEATURES.projectFilter) {
    console.info("Project filter is enabled. Add filtering controls and logic.");
  }
}

function initFooterYear() {
  const year = document.getElementById("year");
  if (!year) return;
  year.textContent = String(new Date().getFullYear());
}

function initPortfolio() {
  setBasicTextBindings();
  renderAbout();
  renderSkills();
  renderProjects();
  renderEducation();
  renderJourney();
  renderCertificates();
  initTypewriter();
  initReveal();
  initMenu();
  initNavSectionIndicator();
  initThemeSwitcher();
  initContactForm();
  initOptionalFeatures();
  initFooterYear();
}

document.addEventListener("DOMContentLoaded", initPortfolio);
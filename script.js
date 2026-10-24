// Portfolio content lives in one structured object so project and profile
// updates do not require duplicating the same copy across multiple pages.
const PORTFOLIO_DATA = {
  personal: {
    name: "Sydrick B. Parra",
    role: "Junior Software Developer • Web, Data & AI",
    statusText: "> open to work",
    profileImage: "./assets/IMG_1575.JPG",
    profileAlt: "Portrait of Sydrick B. Parra",
  },
  about: [
    "Computer Science graduate focused on building practical web applications, data-driven systems, and intelligent software with clear, user-focused interfaces.",
    "My projects span graph databases, machine learning, data modeling, applied cryptography, and responsive web development — with an emphasis on turning technical requirements into usable systems.",
    "I am looking for junior software development opportunities where I can contribute to real products, learn from experienced engineers, and keep improving as a builder.",
  ],
  skills: [
    {
      number: "01",
      icon: "terminal",
      title: "BACKEND & PROGRAMMING",
      description: "Building practical application logic, APIs, and database-backed workflows.",
      tags: ["Python", "Flask", "JavaScript (ES6+)", "RESTful APIs", "Cypher Query"],
    },
    {
      number: "02",
      icon: "database",
      title: "DATABASES & DATA",
      description: "Modeling connected data and working with graph-based application logic.",
      tags: ["CognoDB", "Graph Databases", "Data Modeling", "Query Optimization"],
    },
    {
      number: "03",
      icon: "app-windows",
      title: "FRONTEND & WEB",
      description: "Creating responsive, semantic interfaces with clear user experiences.",
      tags: ["HTML5 / Semantic", "CSS3 / Responsive CSS", "Modern JavaScript", "Responsive UI/UX"],
    },
    {
      number: "04",
      icon: "cpu",
      title: "AI & MACHINE LEARNING",
      description: "Applying computer-vision workflows and testing model behavior in projects.",
      tags: ["YOLOv8", "Pose Estimation", "Computer Vision", "Model Evaluation"],
    },
    {
      number: "05",
      icon: "tools",
      title: "TOOLS & METHODOLOGIES",
      description: "Supporting reliable delivery through version control, testing, and troubleshooting.",
      tags: ["Git & GitHub", "System Testing & Debugging", "Hardware Setup", "Technical Support", "Linux / CLI"],
    },
  ],
  optionalSkills: [],
  featuredProject: {
    name: "CareerGraph: Graph Database Career Exploration Platform",
    summary:
      "A hosted career exploration application that uses CognoDB and Cypher to connect starting skills, target roles, required skills, projects, and learning resources. Multi-hop graph traversal powers career paths and recommendations rather than relying on flat lists.",
    technologies: ["Python", "Flask", "CognoDB", "Cypher", "JavaScript"],
    highlights: [
      "Multi-hop career-path reasoning across connected graph entities",
      "Skill, project, and learning-resource recommendations",
      "Interactive graph visualization of returned nodes and relationships",
      "Parameterized Cypher queries with graceful database error handling",
    ],
    links: [
      { label: "LIVE DEMO", href: "https://careergraph-ehpd.onrender.com" },
      { label: "VIDEO", href: "https://youtu.be/HYSheIQ38fI" },
      { label: "CASE STUDY", href: "./CareerGraph.html", internal: true },
      { label: "GITHUB PROFILE", href: "https://github.com/Sydrick696995" },
    ],
  },
  projects: [
    {
      name: "CareerGraph: Graph Database Career Exploration Platform",
      categories: ["Web", "Data"],
      description:
        "A career exploration web application that models relationships between skills, roles, projects, and learning resources as a graph and uses multi-hop Cypher queries to generate connected recommendations.",
      problemSolved:
        "Helps users move from a starting skill toward a target role by showing the skills to build, projects that can demonstrate those skills, and resources that can support learning.",
      technologies: ["Python", "Flask", "CognoDB", "Cypher", "JavaScript", "HTML", "CSS"],
      features: [
        "Multi-hop career-path traversal across skills and roles",
        "Starting-skill and target-role autocomplete",
        "Project coverage and learning-resource recommendations",
        "Interactive graph visualization based on the selected career path",
        "Centralized API error handling, timeouts, validation, and tests",
      ],
      github: "https://github.com/Sydrick696995",
      demo: "https://careergraph-ehpd.onrender.com",
      demoLabel: "LIVE DEMO",
    },
    {
      name: "C.A.L.I.: Real-Time Calisthenics Form Checker",
      categories: ["AI", "Python"],
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
      demo: null,
      demoNote: "No public live demo is currently listed for this project.",
    },
    {
      name: "Synthetic Data Modeling & Simulation",
      categories: ["Data", "Python"],
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
      categories: ["Security", "Python"],
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
      categories: ["Web", "Backend"],
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
      categories: ["Web", "UI/UX"],
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
      title: "Student Assistant — Camarines Sur Polytechnic Colleges",
      period: "Jun 2024 — Dec 2025",
      summary:
        "Supported day-to-day school operations while balancing academic responsibilities. Developed organization, time management, communication, teamwork, and responsibility through assisting with assigned tasks and coordinating with others.",
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
      title: "Civil Service Examination — Professional Level",
      issuer: "Civil Service Commission (CSC)",
      date: "August 9, 2026",
      image: "./assets/Examinee_305185_page-0001.jpg",
      pdf: "./assets/Examinee_305185.pdf",
      featured: true,
      status: "PASSED",
      rating: "81.62",
      mode: "Pen and Paper Test",
      region: "Region 5",
      description:
        "Civil Service Examination result notice for the Professional Level. The document confirms a passed result; the 81.62 rating is included from the supplied result details and is not printed on the image preview.",
    },
    {
      title: "GitHub Foundations",
      issuer: "DataCamp",
      date: "Aug 22, 2026",
      image: "./assets/Github-Foundation.jpg",
      pdf: "./assets/Github-Foundation.pdf",
      // Official DataCamp Statement of Accomplishment used for recruiter verification.
      verificationUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/track/0ed13facd8342a5d23b1d1f2cdda19d4a3d7e1e0?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa",
      duration: "9 hours",
      description: "Completed GitHub Foundations, strengthening practical knowledge of GitHub workflows, collaboration, and repository-based development.",
    },
    {
      title: "Intermediate GitHub Concepts",
      issuer: "DataCamp",
      date: "Aug 22, 2026",
      image: "./assets/Intermediate-Github-Concepts.jpg",
      pdf: "./assets/Intermediate-Github-Concepts.pdf",
      duration: "3 hours",
      description: "Completed Intermediate GitHub Concepts with deeper coverage of GitHub features and collaborative development practices.",
    },
    {
      title: "Introduction to GitHub Concepts",
      issuer: "DataCamp",
      date: "Aug 21, 2026",
      image: "./assets/Introduction-to-Github-Concepts.jpg",
      pdf: "./assets/Introduction-to-Github-Concepts.pdf",
      duration: "2 hours",
      description: "Completed an introductory course covering core GitHub concepts and workflows.",
    },
    {
      title: "Intermediate Git",
      issuer: "DataCamp",
      date: "Aug 18, 2026",
      image: "./assets/Intermediate-Git.jpg",
      pdf: "./assets/Intermediate-Git.pdf",
      duration: "2 hours",
      description: "Completed Intermediate Git, building practical command-line version-control skills beyond the fundamentals.",
    },
    {
      title: "Introduction to Git",
      issuer: "DataCamp",
      date: "Aug 18, 2026",
      image: "./assets/Introduction-to-Git.jpg",
      pdf: "./assets/Introduction-to-Git.pdf",
      duration: "2 hours",
      description: "Completed an introductory Git course covering core version-control concepts and workflows.",
    },
    {
      title: "11th Bicol Youth Congress in Information Technology",
      issuer: "BYCIT",
      date: "2026",
      image: "./assets/BYCIT1.jpg",
      description: "Participated in the 11th Bicol Youth Congress in Information Technology, a gathering of IT students and professionals in the Bicol region.",
      link: "https://lnkd.in/p/gjzW29nn",
    },
    {
      title: "Junior Philippine Computer Society - CSPC Chapter",
      issuer: "JPCS",
      date: "2025 — 2026",
      image: "./assets/JPCS_Certificate.jpg",
      description: "Active member certificate for Junior Philippine Computer Society - CSPC Chapter (2025-2026).",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy / Cisco",
      date: "2025",
      image: "./assets/Introduction_to_Cybersecurity_certificate.jpg",
      description: "Completed Introduction to Cybersecurity course covering fundamental cybersecurity concepts, threats, and best practices.",
    },
  ],
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

  document.title = `${PORTFOLIO_DATA.personal.name} | Junior Software Developer Portfolio`;
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
  if (!skillsGrid) return;

  PORTFOLIO_DATA.skills.forEach((skill) => {
    const card = document.createElement("article");
    card.className = "skill-card reveal";
    card.innerHTML = `
      <div class="skill-card-heading">
        <span class="skill-icon pixel-icon-${escapeHTML(skill.icon || "code")}" aria-hidden="true"></span>
        <span class="skill-number mono">${escapeHTML(skill.number || "")}</span>
      </div>
      <h3 class="skill-title mono">${escapeHTML(skill.title)}</h3>
      <p class="skill-description">${escapeHTML(skill.description || "")}</p>
      <ul class="skill-tags" aria-label="${escapeHTML(skill.title)} technologies">
        ${skill.tags.map((tag) => `<li>${escapeHTML(tag)}</li>`).join("")}
      </ul>
    `;
    skillsGrid.appendChild(card);
  });

  if (!optionalSkills) return;

  PORTFOLIO_DATA.optionalSkills.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    optionalSkills.appendChild(li);
  });
}

function escapeHTML(value) {
  const div = document.createElement("div");
  div.textContent = String(value ?? "");
  return div.innerHTML;
}

function pixelIcon(name) {
  const safeName = String(name || "code").replace(/[^a-z-]/g, "");
  return `<span class="action-icon pixel-icon-${safeName}" aria-hidden="true"></span>`;
}

function iconForLabel(label) {
  const normalized = String(label).toUpperCase();
  if (normalized.includes("GITHUB")) return "github";
  if (normalized.includes("VIDEO")) return "video";
  if (normalized.includes("DEMO")) return "play";
  if (normalized.includes("PDF") || normalized.includes("RESUME")) return "download";
  if (normalized.includes("VERIFY")) return "external-link";
  if (normalized.includes("CASE")) return "code";
  if (normalized.includes("SEND")) return "send";
  return "external-link";
}

function linkButton(link, extraClass = "btn btn-secondary mono") {
  const icon = pixelIcon(iconForLabel(link.label));
  return link.internal
    ? `<a class="${extraClass}" href="${link.href}">${icon}${link.label}</a>`
    : `<a class="${extraClass}" href="${link.href}" target="_blank" rel="noopener noreferrer">${icon}${link.label}</a>`;
}

function projectActionOrNote(url, label, note) {
  // Treat placeholder links such as "#" as unavailable instead of sending
  // visitors back to the top of the current page.
  if (url && url !== "#") {
    return `<a class="btn btn-secondary mono" href="${url}" target="_blank" rel="noopener noreferrer">${pixelIcon(iconForLabel(label))}${label}</a>`;
  }

  const safeNote = note || `${label} unavailable`;
  return `<span class="btn btn-disabled mono" aria-disabled="true" title="${safeNote}">${pixelIcon(iconForLabel(label))}${label} UNAVAILABLE</span>`;
}

function renderProjects() {
  const featuredName = document.getElementById("featuredProjectName");
  const featuredSummary = document.getElementById("featuredProjectSummary");
  const featuredTech = document.getElementById("featuredProjectTech");
  const featuredLinks = document.getElementById("featuredProjectLinks");
  const projectsGrid = document.getElementById("projectsGrid");
  if (!featuredName || !featuredSummary || !featuredTech || !featuredLinks || !projectsGrid) return;

  const fp = PORTFOLIO_DATA.featuredProject;
  featuredName.textContent = fp.name;
  featuredSummary.textContent = fp.summary;
  featuredTech.textContent = fp.technologies.join(" / ");
  featuredLinks.innerHTML = fp.links.map((link) => linkButton(link, "btn btn-secondary mono")).join("");

  const featuredCard = document.querySelector(".featured-project");
  if (featuredCard && fp.highlights?.length) {
    let highlights = featuredCard.querySelector(".featured-highlights");
    if (!highlights) {
      highlights = document.createElement("ul");
      highlights.className = "featured-highlights project-list";
      featuredCard.querySelector(".project-actions")?.before(highlights);
    }
    highlights.innerHTML = fp.highlights.map((item) => `<li>${escapeHTML(item)}</li>`).join("");
  }

  const render = (filter = "ALL", query = "") => {
    projectsGrid.innerHTML = "";
    const normalizedQuery = query.trim().toLowerCase();
    const visibleProjects = PORTFOLIO_DATA.projects.filter((project) => {
      const categoryMatch = filter === "ALL" || (project.categories || []).includes(filter);
      const searchable = [
        project.name,
        project.description,
        project.problemSolved,
        ...(project.technologies || []),
        ...(project.features || []),
        ...(project.categories || []),
      ].join(" ").toLowerCase();
      return categoryMatch && (!normalizedQuery || searchable.includes(normalizedQuery));
    });

    const count = document.getElementById("projectResultCount");
    if (count) {
      count.textContent = `${visibleProjects.length} project${visibleProjects.length === 1 ? "" : "s"} shown`;
    }

    if (!visibleProjects.length) {
      projectsGrid.innerHTML = `
        <div class="empty-state">
          <p class="mono">NO MATCHING PROJECTS</p>
          <p>Try another keyword or clear the filter.</p>
          <button class="btn btn-secondary mono" type="button" data-clear-projects>${pixelIcon("close")}CLEAR FILTER</button>
        </div>`;
      projectsGrid.querySelector("[data-clear-projects]")?.addEventListener("click", () => {
        const search = document.getElementById("projectSearch");
        if (search) search.value = "";
        document.querySelectorAll(".project-filter").forEach((button) => {
          button.classList.toggle("is-active", button.dataset.filter === "ALL");
          button.setAttribute("aria-pressed", String(button.dataset.filter === "ALL"));
        });
        render();
      });
      return;
    }

    visibleProjects.forEach((project, index) => {
      const card = document.createElement("article");
      card.className = "project-card reveal is-visible";
      card.innerHTML = `
        <div class="project-card-top">
          <p class="project-index mono">${String(index + 1).padStart(2, "0")} / PROJECT</p>
          <span class="project-category mono">${escapeHTML((project.categories || ["PROJECT"])[0])}</span>
        </div>
        <h3 class="project-title">${escapeHTML(project.name)}</h3>
        <p class="project-desc">${escapeHTML(project.description)}</p>
        <div class="project-tags">${(project.technologies || []).slice(0, 5).map((tech) => `<span>${escapeHTML(tech)}</span>`).join("")}</div>
        <details class="project-details">
          <summary class="mono"><span class="summary-icon" aria-hidden="true"></span>VIEW DETAILS</summary>
          <div class="project-detail-body">
            <p class="meta-label mono">Problem Solved</p>
            <p>${escapeHTML(project.problemSolved)}</p>
            <p class="meta-label mono">Key Features</p>
            <ul class="project-list">${project.features.map((feature) => `<li>${escapeHTML(feature)}</li>`).join("")}</ul>
          </div>
        </details>
        <div class="project-actions">
          ${projectActionOrNote(project.github, "GITHUB", project.githubNote)}
          ${projectActionOrNote(project.demo, "LIVE DEMO", project.demoNote)}
        </div>
      `;
      projectsGrid.appendChild(card);
    });
  };

  const search = document.getElementById("projectSearch");
  const filters = document.querySelectorAll(".project-filter");
  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      render(button.dataset.filter || "ALL", search?.value || "");
    });
  });
  search?.addEventListener("input", () => {
    const active = document.querySelector(".project-filter.is-active");
    render(active?.dataset.filter || "ALL", search.value);
  });
  render();
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

  // Each credential stays independently visible and verifiable. DataCamp
  // certificates include their original PDFs in /assets so visitors can open
  // the issued document instead of relying only on a thumbnail.
  PORTFOLIO_DATA.certificates
    .filter((cert) => !cert.featured)
    .forEach((cert) => {
      const index = PORTFOLIO_DATA.certificates.indexOf(cert);
      const card = document.createElement("article");
      card.className = "certificate-card reveal";
      card.innerHTML = `
        <button class="certificate-image certificate-view-button" type="button"
          data-certificate-index="${index}" aria-label="Open ${escapeHTML(cert.title)} certificate">
          <img src="${escapeHTML(cert.image)}" alt="${escapeHTML(cert.title)} certificate" loading="lazy" />
          <span class="certificate-view-label mono">VIEW</span>
        </button>
        <div class="certificate-content">
          <div class="certificate-kicker mono">${escapeHTML(cert.issuer)}</div>
          <h3 class="certificate-title">${escapeHTML(cert.title)}</h3>
          <p class="certificate-meta mono">${escapeHTML(cert.date)}${cert.duration ? ` • ${escapeHTML(cert.duration)}` : ""}</p>
          <p class="certificate-desc">${escapeHTML(cert.description)}</p>
          <div class="certificate-actions">
            <button class="btn btn-secondary mono certificate-open-button" type="button" data-certificate-index="${index}">VIEW CERTIFICATE</button>
            ${cert.pdf ? `<a class="btn btn-secondary mono inline-link" href="${escapeHTML(cert.pdf)}" target="_blank" rel="noopener noreferrer">OPEN PDF</a>` : ""}
            ${cert.verificationUrl ? `<a class="btn btn-secondary mono inline-link" href="${escapeHTML(cert.verificationUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Verify ${escapeHTML(cert.title)} on DataCamp">VERIFY</a>` : ""}
            ${cert.link ? `<a class="btn btn-secondary mono inline-link" href="${escapeHTML(cert.link)}" target="_blank" rel="noopener noreferrer">VERIFY</a>` : ""}
          </div>
        </div>
      `;
      container.appendChild(card);
    });

  container.querySelectorAll("[data-certificate-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const certificate = PORTFOLIO_DATA.certificates[Number(button.dataset.certificateIndex)];
      openCertificateViewer(certificate);
    });
  });
}

function renderFeaturedCertificate() {
  const container = document.getElementById("featuredCertificate");
  const cert = PORTFOLIO_DATA.certificates.find((item) => item.featured);
  if (!container || !cert) return;

  const index = PORTFOLIO_DATA.certificates.indexOf(cert);
  container.innerHTML = `
    <article class="featured-certificate-card reveal is-visible">
      <div class="featured-certificate-copy">
        <p class="mono certificate-kicker">FEATURED ACHIEVEMENT · ${escapeHTML(cert.issuer)}</p>
        <h3>${escapeHTML(cert.title)}</h3>
        <p>${escapeHTML(cert.description)}</p>
        <div class="featured-certificate-stats" aria-label="Civil Service Examination details">
          <div><span class="mono">STATUS</span><strong class="result-status">${escapeHTML(cert.status)}</strong></div>
          <div><span class="mono">GENERAL RATING</span><strong>${escapeHTML(cert.rating)}</strong></div>
          <div><span class="mono">EXAMINATION DATE</span><strong>${escapeHTML(cert.date)}</strong></div>
          <div><span class="mono">MODE</span><strong>${escapeHTML(cert.mode)}</strong></div>
          <div><span class="mono">REGION</span><strong>${escapeHTML(cert.region)}</strong></div>
        </div>
        <div class="certificate-actions">
          <button class="btn btn-primary mono certificate-open-button" type="button" data-certificate-index="${index}">VIEW RESULT</button>
          <a class="btn btn-secondary mono inline-link" href="${escapeHTML(cert.pdf)}" target="_blank" rel="noopener noreferrer">OPEN PDF</a>
        </div>
      </div>
      <button class="featured-certificate-preview certificate-view-button" type="button"
        data-certificate-index="${index}" aria-label="Open Civil Service Examination result preview">
        <img src="${escapeHTML(cert.image)}" alt="Civil Service Commission result notice showing a passed Professional Level examination" />
        <span class="certificate-view-label mono">VIEW RESULT</span>
      </button>
    </article>
  `;

  container.querySelectorAll("[data-certificate-index]").forEach((button) => {
    button.addEventListener("click", () => openCertificateViewer(cert));
  });
}

function openCertificateViewer(cert) {
  const dialog = document.getElementById("certificateViewer");
  const image = document.getElementById("certificateViewerImage");
  const title = document.getElementById("certificateViewerTitle");
  const pdfLink = document.getElementById("certificateViewerPdf");
  const verificationLink = document.getElementById("certificateViewerVerification");
  if (!dialog || !image || !title) return;

  title.textContent = `${cert.title} — ${cert.issuer}`;
  image.src = cert.image;
  image.alt = `${cert.title} certificate`;
  if (pdfLink) {
    pdfLink.hidden = !cert.pdf;
    if (cert.pdf) pdfLink.href = cert.pdf;
  }

  // Only show an external verification action when the credential has an
  // official verification URL. This prevents fake or placeholder links.
  if (verificationLink) {
    verificationLink.hidden = !cert.verificationUrl;
    if (cert.verificationUrl) verificationLink.href = cert.verificationUrl;
  }

  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
}

function initCertificateViewer() {
  const dialog = document.getElementById("certificateViewer");
  const close = document.getElementById("certificateViewerClose");
  if (!dialog || !close) return;

  close.addEventListener("click", () => {
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      if (typeof dialog.close === "function") dialog.close();
      else dialog.removeAttribute("open");
    }
  });

  dialog.addEventListener("cancel", () => {
    if (typeof dialog.close !== "function") dialog.removeAttribute("open");
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


function initPageChrome() {
  // Small, site-wide interaction layer: reading progress and a back-to-top
  // control. Both are intentionally lightweight and disappear when motion is
  // reduced, so they never become the focus of the portfolio.
  const topButton = document.createElement("button");
  topButton.type = "button";
  topButton.className = "back-to-top mono";
  topButton.setAttribute("aria-label", "Back to top");
  topButton.textContent = "↑";
  document.body.appendChild(topButton);

  const updateScrollUI = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
    document.documentElement.style.setProperty("--scroll-progress", String(progress));

    topButton.classList.toggle("is-visible", window.scrollY > 520);
    document.querySelector(".site-header")?.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", updateScrollUI, { passive: true });
  updateScrollUI();
}

function initExternalLinks() {
  // Keep external links safe when the portfolio is opened from another site.
  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    const rel = new Set((link.getAttribute("rel") || "").split(/\s+/).filter(Boolean));
    rel.add("noopener");
    rel.add("noreferrer");
    link.setAttribute("rel", [...rel].join(" "));
  });
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
  renderFeaturedCertificate();
  renderCertificates();
  initTypewriter();
  initReveal();
  initMenu();
  initNavSectionIndicator();
  initThemeSwitcher();
  initContactForm();
  initCertificateViewer();
  initPageChrome();
  initExternalLinks();
  initFooterYear();
}

document.addEventListener("DOMContentLoaded", initPortfolio);
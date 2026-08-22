# Sydrick B. Parra — Developer Portfolio

Personal portfolio for **Sydrick B. Parra**, a Junior Software Developer focused on web applications, data systems, and AI.

The portfolio is intentionally built with **vanilla HTML, CSS, and JavaScript**. The goal is a lightweight, accessible site that presents projects clearly without introducing framework complexity where it is not needed.

## Highlights

- Responsive, mobile-first layout
- Light, dark, and green themes with `localStorage` persistence
- Keyboard-accessible navigation and skip link
- Reduced-motion support
- Project search and category filtering
- Empty state for project searches with no results
- Scroll-triggered reveal animations
- Reading-progress indicator and back-to-top control
- Contact form with client-side validation and clear success/error states
- Resume download
- CareerGraph featured case study
- Data-driven project, skills, education, journey, and certificate content

## Certifications

The Education page includes individual certificate cards with a lightweight viewer. Current certifications include five DataCamp credentials in Git/GitHub, plus BYCIT, JPCS, and Cisco Networking Academy credentials. The original DataCamp certificate PDFs are preserved in `assets/` for verification.

## Featured project: CareerGraph

**CareerGraph — Graph Database Career Exploration Platform**

CareerGraph is a hosted application that helps users explore career paths by connecting starting skills, target roles, required skills, projects, and learning resources through a graph database.

**Live demo:** https://careergraph-ehpd.onrender.com  
**Video:** https://youtu.be/HYSheIQ38fI

### Why a graph database?

Career planning is naturally relational and highly connected. A single skill can support multiple roles; a role can require many skills; projects can demonstrate skills; and learning resources can teach skills.

A graph makes those relationships directly traversable.

```text
Skill ──RELEVANT_TO──> Role
Role ──REQUIRES──────> Skill
Project ──DEMONSTRATES> Skill
Resource ──TEACHES───> Skill

Starting Skill
      |
      v
  Skill Graph ------> Target Role
      |                    |
      v                    v
  Projects             Resources
```

CareerGraph uses multi-hop Cypher traversal, parameterized database operations, validation, graceful database-error handling, and an interactive graph visualization.

## Portfolio structure

```text
.
├── Home.html
├── index.html
├── About.html
├── Skills.html
├── Projects.html
├── CareerGraph.html
├── Education.html
├── Journey.html
├── Contact.html
├── Github.html
├── styles.css
├── script.js
├── assets/
│   ├── SYDRICK_PARRA_RESUME.pdf
│   ├── profile image
│   └── certificate images and PDFs
└── .devcontainer/
    └── devcontainer.json
```

### Why the site remains framework-free

The portfolio does not need a server-side application of its own. It is a presentation layer for the projects I have built. Adding a backend purely for the portfolio would increase deployment and maintenance complexity without providing a meaningful user benefit.

The contact workflow uses a form service, while project-specific backends remain part of the projects themselves.

## Running locally

No build step is required.

From the project directory, use any local static server. For example:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/Home.html
```

Using a local server rather than opening files directly is recommended because it provides browser behavior closer to static hosting.

## Deployment

The site consists of static assets and can be deployed to a static host such as GitHub Pages, Netlify, or another equivalent service.

General deployment steps:

1. Push the portfolio source to a Git repository.
2. Configure the host to serve the repository root as the static site.
3. Set the published directory to the repository root.
4. Use `Home.html` as the primary entry page, or configure the host to redirect the root to it.
5. Verify navigation, asset paths, resume download, external project links, and the contact form after deployment.

Do not commit private credentials, API keys, or environment files containing secrets.

## UI/UX decisions

The design deliberately favors a restrained developer-portfolio aesthetic:

- high-contrast typography
- consistent spacing and borders
- limited accent colors
- visible focus states
- responsive navigation
- progressive reveal animation
- project filtering for quick scanning
- expandable project details instead of presenting every detail at once
- explicit empty and error states
- reduced-motion support for users who request it

The visual treatment is intended to support the content rather than compete with it.

## Accessibility

The site includes:

- semantic page structure
- skip-to-content link
- labelled navigation
- keyboard-friendly controls
- `aria-expanded` and `aria-pressed` state updates
- live status messaging for the contact form and project count
- visible `:focus-visible` styles
- reduced-motion handling
- descriptive image alternative text

Accessibility should be rechecked after future content or layout changes.

## Screenshots

Add final deployment screenshots under:

```text
docs/screenshots/
```

Recommended captures:

1. `home.png` — homepage/hero and CareerGraph feature
2. `projects.png` — project explorer with filters
3. `careergraph-case-study.png` — CareerGraph case study
4. `skills.png` — skills categories
5. `journey.png` — journey/timeline
6. `education.png` — education and certificate collection
7. `contact.png` — contact form
8. `mobile.png` — mobile navigation/responsive layout

Screenshots should be captured from the final hosted version where possible.

## Maintenance notes

Portfolio content is centralized in `script.js` under `PORTFOLIO_DATA`.

When adding a project:

1. Add the project object to `PORTFOLIO_DATA.projects`.
2. Add appropriate `categories`.
3. Keep the description concise and outcome-focused.
4. Add only links that are publicly usable.
5. Use `demoNote` when a project does not have a public demo.
6. Run the JavaScript syntax check before committing.

The UI should not be changed solely to add visual effects. New interactions should remain keyboard-accessible and should have a reduced-motion fallback.

## Project links

CareerGraph:
- Demo: https://careergraph-ehpd.onrender.com
- Recording: https://youtu.be/HYSheIQ38fI

Professional profile:
- GitHub: https://github.com/Sydrick696995

### Certificate verification
The GitHub Foundations certificate includes its official DataCamp Statement of Accomplishment link in the certificate card and viewer. Other certificates are only given verification links when an official URL is available.

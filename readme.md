# Personal Website

A sophisticated, interactive personal website built with React, featuring a terminal-inspired design with a matrix-style green-on-black color scheme. This portfolio showcases my professional journey, projects, research, and blog posts through an engaging user interface.

## Features

### Core Features
- 🎨 Matrix-inspired design with terminal aesthetics and dynamic animations
- ⚡ Interactive timeline showing personal/professional journey
- 🌟 Smooth scroll animations and transitions
- 📱 Fully responsive layout for all devices
- 💻 Terminal-style navigation and UI elements
- 🎯 Comprehensive sections for Projects, Research, Blog, and CV

### Project Showcase
- 📂 Detailed project cards with expandable sections
- 🏷️ Interactive tags and categories
- 🔄 Animated hover effects and transitions
- 📊 Project counter and status indicators

### Research Section
- 🔬 Active research project tracking
- 📈 Research progress indicators
- 🏷️ Technical tag categorization
- 📑 Detailed methodology breakdowns

### Blog System
- ✍️ Markdown-supported blog posts
- 🏷️ Tag-based categorization
- ⏱️ Reading time estimates
- 📱 Responsive blog layout

### CV Section
- 📄 PDF preview integration
- ⬇️ Direct CV download option
- 🔍 Full-screen view capability
- 📱 Mobile-friendly display

## Tech Stack

- **Frontend Framework:** React 18
- **Styling:** Styled Components
- **Routing:** React Router v6
- **Content:** React Markdown with GFM support
- **Development:** Vite + modern JavaScript (ES6+)
- **Deployment:** GitHub Pages

## Installation

1. Clone the repository:
```bash
git clone https://github.com/dredre815/personal-website.git
```

2. Navigate to the project directory:
```bash
cd personal-website
```

3. Install dependencies from the lockfile:
```bash
npm ci
```

4. Start the development server:
```bash
npm start
```

The development server binds to `127.0.0.1` by default and is available at `http://127.0.0.1:5173`.

## Development Commands

```bash
npm start              # Start the Vite dev server
npm run build          # Build to /build and regenerate the sitemap
npm run preview        # Preview the production build locally
npm test               # Validate blog metadata and sitemap coverage
npm run deploy         # Build and publish /build to GitHub Pages
npm run update-site    # Validate, build, commit, push main, and publish the live site
```

## Publishing Workflow

After making website updates and manually reviewing them locally, run:

```bash
npm run update-site
```

The script prompts for a commit message, runs validation, audits high-risk dependency issues, builds the production site, commits the source changes, pushes `main`, and publishes `/build` to GitHub Pages for `www.zijun2002.com`.

## Project Structure

- `/src/pages/` - Main page components (Home, Projects, Research, Blog, CV)
- `/src/components/` - Reusable UI components
- `/src/data/` - Structured content metadata shared by the app and scripts
- `/public/` - Static assets and blog content
- `/src/styles/` - Global styles and theme configuration
- `/scripts/` - Sitemap generation and content validation scripts

## Author

**Zijun (Marshall) Zhang**
- Email: [zijuzhang1@student.unimelb.edu.au](mailto:zijuzhang1@student.unimelb.edu.au)
- GitHub: [@dredre815](https://github.com/dredre815)
- Twitter: [@Romanticism_02](https://twitter.com/Romanticism_02)
- LinkedIn: [zijunzhang2002](https://www.linkedin.com/in/zijunzhang2002/)

## License

This project is open source and available under the [MIT License](LICENSE).

Copyright © 2025 Zijun Zhang

Feel free to clone and modify this project for your own personal use. If you do use this project as a template, please give appropriate credit by linking back to this repository and mentioning the original author.

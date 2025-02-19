# My Portfolio Website

A personal portfolio website built with [Vite](https://vitejs.dev/), [React](https://react.dev/), and [TailwindCSS](https://tailwindcss.com/) to showcase projects, skills, and experience.

> **Note:** This project was created by following a tutorial, and the original source code can be found here: [github.com/machadop1407/pedrotech-portfolio](https://github.com/machadop1407/pedrotech-portfolio), [https://www.youtube.com/watch?v=LGdPMf-SgBA&ab_channel=PedroTech](https://www.youtube.com/watch?v=LGdPMf-SgBA&ab_channel=PedroTech). This is a starting point to my development as a fullstack developer, and I hope to create my own original portfolio soon.


![React](https://img.shields.io/badge/React-18.0.0-blue)
![Vite](https://img.shields.io/badge/Vite-4.0.0-orange)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0.0-06B6D4)

## Table of Contents

- [Features](#features)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Scripts](#scripts)  
- [Project Structure](#project-structure)  
- [Deployment](#deployment)  
- [Contributing](#contributing)  

## Features

- **React + Vite**: Fast development environment with optimized bundling  
- **TailwindCSS**: Utility-first CSS for rapid UI styling  
- **Responsive Design**: Works on all screen sizes and devices  
- **Modular Components**: Each section of the portfolio (Projects, About, Contact) is built as a reusable React component  
- **Easy Theming**: Simple configuration for custom color schemes via Tailwind  
- **SEO & Performance**: Preconfigured meta tags and best practices for quick load times

## Getting Started

### Prerequisites

- **Node.js** v14 or higher  
- **npm** v6 or higher (or **Yarn**)

### Installation

1. **Clone** the repository:
   ```bash
   git clone https://github.com/YourUsername/portfolio-website.git
   ```
2. **Navigate** into the project directory:
   ```bash
   cd portfolio-website
   ```
3. **Install** the dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Scripts

Once installed, you can use these commands:

- **Development Server**  
  ```bash
  npm run dev
  ```
  Starts a local dev server (usually on `http://localhost:5173/`) with hot module reloading.  

- **Build for Production**  
  ```bash
  npm run build
  ```
  Compiles your app into an optimized production build.  

- **Preview Production Build**  
  ```bash
  npm run preview
  ```
  Serves the production build locally to verify everything works as intended.

## Project Structure

A typical React + Vite + Tailwind project might look like this:

```
portfolio-website
├─ public
│  └─ favicon.ico
├─ src
│  ├─ assets
│  ├─ components
│  ├─ pages
│  ├─ App.jsx
│  └─ main.jsx
├─ .gitignore
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ vite.config.js
└─ README.md
```

- **public/**: Static assets and icons  
- **src/assets**: Images, media, and other static assets used in components  
- **src/components**: Reusable components (e.g., Navbar, Footer, Card)  
- **src/pages**: Top-level pages or sections (e.g., Home, About, Projects)  
- **App.jsx**: Main React component that sets up routes or imports top-level components  
- **main.jsx**: Entry point that renders `<App />`  
- **index.html**: Template HTML file used by Vite  
- **tailwind.config.js**: TailwindCSS configuration for extended theme settings  
- **vite.config.js**: Vite configuration for plugin setup and build customization

## Deployment

### GitHub Pages

1. Run the production build:
   ```bash
   npm run build
   ```
2. Push the `dist` folder to a `gh-pages` branch or use a tool like [gh-pages](https://github.com/tschaub/gh-pages):
   ```bash
   npm install --save-dev gh-pages
   ```
   Add the following to your `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```
3. Deploy by running:
   ```bash
   npm run deploy
   ```
4. Go to your repository’s **Settings** > **Pages** and set the branch to `gh-pages`.  
5. Your site should be available at `https://<username>.github.io/<repo-name>/`.

---

## Contributing

1. **Fork** the repository.  
2. **Create** a new branch for your feature or fix:  
   ```bash
   git checkout -b feature/my-new-feature
   ```  
3. **Commit** your changes:  
   ```bash
   git commit -m "Add some new feature"
   ```  
4. **Push** to the branch:  
   ```bash
   git push origin feature/my-new-feature
   ```  
5. **Submit** a Pull Request describing your changes.

### Credits

- Original tutorial and source code: [github.com/machadop1407/pedrotech-portfolio](https://github.com/machadop1407/pedrotech-portfolio)  
- Created by following the tutorial to implement a modern developer portfolio.

### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Personal Portfolio – React + Vite

Demo: [https://mr-susel.github.io/Personal-Homepage/](https://mr-susel.github.io/Personal-Homepage/)

A modern, responsive personal portfolio built with **React**, **Vite**, **Redux Toolkit**, and **styled-components**.  
Showcases your skills, projects, and contact information with a clean UI and light/dark theme switch.

## 🛠️ Tech Stack

* **React 18** – component-based UI (with React Compiler enabled)
* **Vite** – ultra‑fast dev server and bundler
* **Redux Toolkit** – global state management
* **Redux Saga** – handling asynchronous side effects (fetching data from GitHub API)
* **styled-components** – styling and theming (light / dark mode)
* **react-loading-skeleton** – professional loading states
* **ESLint + Prettier** – code quality and formatting

## ✨ Features

* **Personal intro section** with profile photo and “Hire me” CTA.
* **Skillset list** and “What I want to learn next” section.
* **GitHub portfolio section** loading public repositories dynamically from the API.
* **Theme switcher** (light / dark) with smooth UI transitions and global state.
* **Fully responsive layout** optimized for both desktop and mobile devices.

## 🚀 Getting Started

### Prerequisites

* **Node.js** (LTS version recommended)
* **npm** or **yarn** installed globally

### Installation

```bash
# Clone the repository
git clone [https://github.com/Mr-SuSeL/Blackwood-Studio.git](https://github.com/Mr-SuSeL/Blackwood-Studio.git)

# Enter the directory
cd Blackwood-Studio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```
The dev server URL will be printed in the terminal (usually `http://localhost:5173`).

---

## 🏗️ Vite + React Setup

This project provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

### Official Plugins
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.

### React Compiler
The **React Compiler** is enabled on this template. It automatically optimizes re-renders. See [this documentation](https://react.dev/learn/react-compiler) for more information.

---

## 📂 Project Structure

```text
src/
  assets/           # Images, icons, and static assets
  common/           # Shared UI components (ThemeSwitch, Buttons, etc.)
  core/             # App shell, Redux store, root Saga, global styles
  features/         # Modular features
    personalHomepage/
      MainInformation/
      Skills/
      Portfolio/    # GitHub projects integration with Saga
      Footer/
  App.jsx           # Root component
  main.jsx          # App entry point
  styledGlobals.js  # Global styled-components
```

---

## 🧠 State Management

The project uses **Redux Toolkit** and **Redux Saga** for global state management:
* **Theme slice** – manages the `isDarkMode` flag and coordinates `light`/`dark` theme objects.
* **Portfolio slice** – handles the state of GitHub repositories (data, loading, and error statuses).
* **Sagas** – No Redux Thunk is used. All asynchronous data fetching is handled via **Redux Saga** middleware to keep side effects separate from the components.

## 🧹 Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript.

## 💡 Pro Tip – Migrating from CRA to Vite

If you have legacy `.js` files containing JSX, use this **PowerShell** snippet to recursively rename them to `.jsx`:

```powershell
Get-ChildItem -Recurse -Filter *.js | 
  Where-Object { (Get-Content $_.FullName -Raw) -match "<[A-Za-z]" } | 
  Rename-Item -NewName { $_.Name -replace '\.js$', '.jsx' }
```
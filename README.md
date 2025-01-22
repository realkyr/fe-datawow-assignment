# Data Wow A Board Assignment (Next.js)

This repository contains the frontend service for the Data Wow assignment, built with [Next.js](https://nextjs.org/). The project integrates modern tools like TailwindCSS, SWR, and Formik, along with a Git submodule for shared types.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [License](#license)

---

## Features

- **Next.js**: Server-side rendering and React framework for scalability.
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **SWR**: Data fetching and caching library.
- **Formik**: Form handling and validation.
- **Shared Types Submodule**: Centralized type definitions for consistent typing.

---

## Prerequisites

Ensure the following tools are installed on your system:

- [Node.js](https://nodejs.org/) (v16+)
- [Yarn](https://classic.yarnpkg.com/lang/en/) for package management
- [Git](https://git-scm.com/) for version control

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/realkyr/<REPOSITORY_NAME>.git
   ```

2. **Initialize and update the submodule**:
   ```bash
   git submodule update --init --recursive
   ```

3. **Install dependencies**:
   ```bash
   yarn install
   ```
---

## Running the App

### Development

Start the application in development mode with hot-reload:

```bash
yarn dev
```

The application will run on `http://localhost:3000` by default.

### Production

1. **Build the project**:
   ```bash
   yarn build
   ```

2. **Run the production build**:
   ```bash
   yarn start
   ```

---

## Scripts

The following scripts are available in the `package.json`:

- `yarn dev`: Start the app in development mode with hot-reload.
- `yarn build`: Compile the project for production.
- `yarn start`: Run the production build.
- `yarn lint`: Analyze and fix linting issues.

---

## Project Structure

```
.
├── src
│   ├── components             # React components
│   ├── pages                  # Next.js pages
│   ├── styles                 # Global and module CSS
│   ├── utils                  # Utility functions
│   └── ...
├── shared-types               # Submodule for reusable types
├── public                     # Static assets
├── package.json               # Project metadata and scripts
├── tailwind.config.ts         # TailwindCSS configuration
├── tsconfig.json              # TypeScript configuration
├── README.md                  # Documentation
└── yarn.lock                  # Yarn dependency lockfile
```

---

## License

This project is licensed under the [MIT License](./LICENSE). You are free to use, modify, and distribute this project as per the license.

---

If you have any questions or encounter issues, please create an issue in this repository or contact the maintainers.
```
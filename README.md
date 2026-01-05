# Chameleon Health

![CI Status](https://github.com/chameleon-health/mvp/actions/workflows/ci.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-green)
![Turborepo](https://img.shields.io/badge/built%20with-Turborepo-ef4444)
![Next.js](https://img.shields.io/badge/framework-Next.js-black)

**MVP: Medical-UI** — A multilingual symptom translator for doctor visits.

## 🚀 Mission

Breaking down barriers to healthcare access through technology. Built for families who face language barriers and the frustration of endless appointment hunting.

## ✨ Features

- **Interactive Body Map**: Select body parts to localize symptoms.
- **Multilingual Support**: Describe symptoms in your native language; get medical-grade translations.
- **Privacy First**: No data storage requirements for the MVP.
- **Fast & Accessible**: Built on modern web standards for performance on any device.

## 🛠️ Tech Stack

- **Monorepo**: [Turborepo](https://turbo.build/repo)
- **Framework**: [Next.js 14+](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Tooling**: TypeScript, ESLint, Prettier

## 🏗️ Project Structure

```bash
chameleon-health/
├── apps/
│   ├── web/        # Main Medical-UI Application
│   └── docs/       # Documentation Site
└── packages/
    ├── ui/         # Shared Design System
    ├── eslint/     # Shared Lint Config
    └── typescript/ # Shared TS Config
```

## ⚡ Getting Started

### Prerequisites

- Node.js 18+
- npm (or pnpm/yarn)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/chameleon-health/mvp.git

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

## 🤝 Contributing

This is a single-developer project, but contributions are welcome! Please open an issue or submit a PR on GitHub.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

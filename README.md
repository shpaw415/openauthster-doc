# OpenAuthster Documentation

Official documentation site for [OpenAuthster](https://github.com/shpaw415/openauthster) - a multi-tenant authentication system built with OpenAuth for Cloudflare Workers.

![OpenAuthster](https://img.shields.io/badge/OpenAuthster-Documentation-blueviolet)
![React](https://img.shields.io/badge/React-19-blue)
![MDX](https://img.shields.io/badge/MDX-Enabled-green)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38bdf8)
![Bun](https://img.shields.io/badge/Bun-1.3-black)

## 📚 Overview

This repository contains the source code for the OpenAuthster documentation website. It's built with:

- **MDX Support** - Write documentation in Markdown with embedded React components
- **React 19** - Interactive UI components and examples
- **Tailwind CSS** - Beautiful, responsive styling with Typography plugin
- **Frame Master** - High-performance build system
- **Bun** - Fast runtime and package manager

## 🎯 What's Documented

The OpenAuthster documentation covers:

- 🚀 **Getting Started** - Installation and setup guides
- 🏗️ **Architecture** - System design and component overview
- 🔧 **Configuration** - Issuer, WebUI, and client setup
- 📖 **API Reference** - Client SDK and endpoint documentation
- 🎨 **Theming** - Customizing authentication pages
- 🔐 **Security** - Best practices and security considerations
- 🧪 **Testing** - Using the testing environment
- 📝 **Examples** - Real-world integration examples

## 📁 Project Structure

```
openauthster-doc/
├── src/
│   ├── site.config.ts      # Site configuration (metadata, nav, footer)
│   ├── shell.tsx           # HTML shell wrapper
│   ├── common.ts           # Shared utilities
│   ├── components/
│   │   ├── index.ts        # Components barrel export
│   │   ├── Header.tsx      # Site header with navigation
│   │   ├── Footer.tsx      # Site footer with links
│   │   ├── CodeBlock.tsx   # Syntax-highlighted code blocks
│   │   └── Alert.tsx       # Alert/callout components
│   └── pages/              # Documentation pages (MDX)
│       ├── index.mdx       # Home page
│       ├── layout.tsx      # Page layout wrapper
│       ├── docs/
│       │   ├── index.mdx
│       │   ├── getting-started.mdx
│       │   ├── installation.mdx
│       │   └── configuration.mdx
│       └── api/
│           ├── index.mdx
│           └── client.mdx
├── static/
│   ├── style.css           # Compiled Tailwind CSS
│   ├── tailwind.css        # Tailwind source
│   └── favicon.svg         # Site icon
├── release-notes/
│   └── v1.0.0.md           # Version release notes
└── frame-master.config.ts  # Build configuration
```

## 📝 Writing Documentation

### Creating New Pages

Add `.mdx` files in the `src/pages` directory. The file structure maps to URLs:

```
src/pages/
├── index.mdx                    # / (home)
├── docs/
│   ├── index.mdx                # /docs
│   ├── getting-started.mdx      # /docs/getting-started
│   └── guides/
│       └── deployment.mdx       # /docs/guides/deployment
```

### Using Components in MDX

Import and use React components directly in MDX files:

```mdx
import { Alert, CodeBlock } from "../components";

# Installation Guide

<Alert type="info">Make sure you have Bun installed before proceeding.</Alert>

## Install Dependencies

<CodeBlock language="bash">bun install</CodeBlock>
```

### Creating Custom Components

Add new components in `src/components/`:

```tsx
// src/components/ApiExample.tsx
export function ApiExample({ code, response }) {
  return (
    <div className="api-example">
      <div className="request">{code}</div>
      <div className="response">{response}</div>
    </div>
  );
}
```

Then export from `src/components/index.ts`:

```typescript
export { ApiExample } from "./ApiExample";
```

## 🛠️ Local Development

### Prerequisites

- [Bun](https://bun.sh) (v1.3 or later)

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/shpaw415/openauthster-doc.git
   cd openauthster-doc
   ```

2. **Install dependencies:**

   ```bash
   bun install
   ```

3. **Start development server:**

   ```bash
   bun run dev
   ```

   The site will be available at [http://localhost:3000](http://localhost:3000)

### Making Changes

1. Edit MDX files in `src/pages/` to update documentation content
2. Modify components in `src/components/` to update UI elements
3. Update `src/site.config.ts` to change site metadata and navigation
4. Changes are reflected immediately with hot module replacement

## ⚙️ Site Configuration

### Updating Site Configuration (`src/site.config.ts`)

The main configuration file controls site metadata, navigation, and footer:

```typescript
export const siteConfig = {
  // Site branding
  name: "OpenAuthster Documentation",
  description: "Multi-tenant authentication system for Cloudflare Workers",

  // Author information
  author: {
    name: "OpenAuthster Team",
    url: "https://github.com/shpaw415",
  },

  // Social links
  links: {
    github: "https://github.com/shpaw415/openauthster",
    discord: "",
    twitter: "",
  },

  // Navigation menu
  nav: [
    { label: "Home", href: "/" },
    { label: "Docs", href: "/docs" },
    { label: "API", href: "/api" },
    { label: "GitHub", href: "https://github.com/shpaw415/openauthster" },
  ],

  // Footer configuration
  footer: {
    sections: [
      {
        title: "Documentation",
        links: [
          { label: "Getting Started", href: "/docs/getting-started" },
          { label: "Installation", href: "/docs/installation" },
          { label: "Configuration", href: "/docs/configuration" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "GitHub", href: "https://github.com/shpaw415/openauthster" },
          {
            label: "Issuer",
            href: "https://github.com/shpaw415/OpenAuthSter-issuer",
          },
          {
            label: "WebUI",
            href: "https://github.com/shpaw415/OpenAuthSter-webUI",
          },
        ],
      },
    ],
    copyright: "© 2025 OpenAuthster. All rights reserved.",
  },
};
```

// Social links (leave empty to hide)
links: {
github: "https://github.com/yourusername/your-repo",
twitter: "https://twitter.com/yourusername",
discord: "",
},

// Navigation items
nav: [
{ label: "Home", href: "/" },
{ label: "Docs", href: "/docs" },
{ label: "Blog", href: "/blog" },
],

// Footer sections
footer: {
sections: [
{
title: "Documentation",
links: [
{ label: "Getting Started", href: "/docs/getting-started" },
// ...
],
},
],
copyright: "© 2025 Your Project. All rights reserved.",
},
};

```

## 📝 Writing Documentation

### Creating Pages

Add `.mdx` files in the `src/pages` directory:

```

src/pages/
├── index.mdx # / (home)
├── about.mdx # /about
├── docs/
│ ├── index.mdx # /docs
│ ├── getting-started.mdx # /docs/getting-started
│ └── api/
│ └── index.mdx # /docs/api

````

### Using Components in MDX

Import and use React components directly in your MDX files:

```mdx
import { Alert } from "../components/Alert";

# My Page

<Alert type="info">This is an informational alert!</Alert>

Regular markdown content continues here...
````

### Creating Custom Components

Add new components in `src/components/`:

```tsx
// src/components/Alert.tsx
export function Alert({ type, children }) {
  return <div className={`alert alert-${type}`}>{children}</div>;
}
```

Export from the barrel file:

```typescript
// src/components/index.ts
export { Alert } from "./Alert";
```

## 🚀 Deployment

### Build for Production

```bash
bun run build
```

Output will be in `.frame-master/build` directory.

### Cloudflare Pages

1. **Push to GitHub:**

   ```bash
   git remote add origin https://github.com/shpaw415/openauthster-doc.git
   git push -u origin main
   ```

2. **Create Cloudflare Pages project:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
   - Click "Create a project" → "Connect to Git"
   - Select the repository

3. **Configure build settings:**
   - **Build command**: `bun run build`
   - **Build output directory**: `.frame-master/build`

4. **Deploy!**

### Static Hosting

Deploy the `.frame-master/build` directory to any static hosting provider:

- GitHub Pages
- Vercel
- Netlify
- AWS S3 + CloudFront

## 🤝 Contributing

Help improve OpenAuthster documentation:

1. Fork this repository
2. Create a branch (`git checkout -b docs/improve-installation`)
3. Add or update documentation in `src/pages/`
4. Test locally with `bun dev`
5. Commit changes (`git commit -am 'Improve installation docs'`)
6. Push and create a Pull Request

## 🔗 Related Repositories

- [OpenAuthster](https://github.com/shpaw415/openauthster) – Main project overview
- [OpenAuthster Issuer](https://github.com/shpaw415/OpenAuthSter-issuer) – Authentication server
- [OpenAuthster WebUI](https://github.com/shpaw415/OpenAuthSter-webUI) – Management dashboard
- [Shared Types & Client](https://github.com/shpaw415/OpenAuthSter-shared) – TypeScript types and SDK
- [React SDK](https://github.com/shpaw415/openauth-react) – React integration (WIP)
- [Testing Environment](https://github.com/shpaw415/openauthster-tester) – Pre-configured testing setup

## 💬 Support

- [Documentation Issues](https://github.com/shpaw415/openauthster-doc/issues)
- [OpenAuthster Discussions](https://github.com/shpaw415/openauthster/discussions)

## 📜 License

License information coming soon

/**
 * Site Configuration
 * Update these values to customize your documentation site.
 */
export const siteConfig = {
  /** The name of your project/site */
  name: "OpenAuthster",

  /** Short description of your project */
  description:
    "Multi-tenant authentication for Cloudflare Workers — powered by OpenAuth",

  /** The base URL of your site (used for SEO and social sharing) */
  url: "https://openauthster.dev",

  /** Author information */
  author: {
    name: "shpaw415",
    url: "https://github.com/shpaw415",
    email: "",
  },

  /** Social links displayed in the header/footer */
  links: {
    github: "https://github.com/shpaw415/openauthster",
    twitter: "",
    discord: "",
  },

  /** Navigation items for the header */
  nav: [
    { label: "Home", href: "/" },
    { label: "Docs", href: "/docs" },
    { label: "GitHub", href: "https://github.com/shpaw415/openauthster" },
  ],

  /** Sidebar navigation for docs pages */
  docsSidebar: [
    {
      title: "Introduction",
      links: [
        { label: "Overview", href: "/docs" },
        { label: "Getting Started", href: "/docs/getting-started" },
        { label: "Installation", href: "/docs/installation" },
      ],
    },
    {
      title: "Client SDK",
      links: [
        { label: "Client Overview", href: "/docs/client" },
        { label: "Sessions", href: "/docs/sessions" },
        { label: "Server-Side Usage", href: "/docs/server" },
      ],
    },
    {
      title: "Integrations",
      links: [{ label: "React", href: "/docs/react" }],
    },
  ],

  /** Footer navigation sections */
  footer: {
    sections: [
      {
        title: "Documentation",
        links: [
          { label: "Getting Started", href: "/docs/getting-started" },
          { label: "Installation", href: "/docs/installation" },
          { label: "Client SDK", href: "/docs/client" },
          { label: "Sessions", href: "/docs/sessions" },
          { label: "Server-Side", href: "/docs/server" },
          { label: "React", href: "/docs/react" },
        ],
      },
      {
        title: "Core Repositories",
        links: [
          {
            label: "OpenAuthster",
            href: "https://github.com/shpaw415/openauthster",
          },
          {
            label: "OpenAuthSter-issuer",
            href: "https://github.com/shpaw415/OpenAuthSter-issuer",
          },
          {
            label: "OpenAuthSter-webUI",
            href: "https://github.com/shpaw415/OpenAuthSter-webUI",
          },
          {
            label: "OpenAuthSter-shared",
            href: "https://github.com/shpaw415/OpenAuthSter-shared",
          },
        ],
      },
      {
        title: "SDKs & Tools",
        links: [
          {
            label: "openauth-react (WIP)",
            href: "https://github.com/shpaw415/openauth-react",
          },
          {
            label: "openauthster-doc",
            href: "https://github.com/shpaw415/openauthster-doc",
          },
        ],
      },
      {
        title: "Community",
        links: [
          {
            label: "GitHub Discussions",
            href: "https://github.com/shpaw415/openauthster/discussions",
          },
          {
            label: "Report Issues",
            href: "https://github.com/shpaw415/openauthster/issues",
          },
          {
            label: "OpenAuth",
            href: "https://openauth.js.org/",
          },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} OpenAuthster. All rights reserved.`,
  },

  /** Theme configuration */
  theme: {
    /** Default theme: "light", "dark", or "system" */
    defaultTheme: "system" as "light" | "dark" | "system",

    /** Accent color used for links, buttons, etc. */
    accentColor: "#6366f1", // indigo-500

    /** Dark theme colors */
    dark: {
      background: "#0a0a0a",
      foreground: "#fafafa",
      muted: "#a1a1aa",
      border: "#27272a",
      card: "#18181b",
      cardHover: "#27272a",
    },

    /** Light theme colors */
    light: {
      background: "#ffffff",
      foreground: "#0a0a0a",
      muted: "#71717a",
      border: "#e4e4e7",
      card: "#f4f4f5",
      cardHover: "#e4e4e7",
    },
  },

  /** SEO defaults */
  seo: {
    titleTemplate: "%s | OpenAuthster",
    defaultTitle: "OpenAuthster – Multi-Tenant Auth for Cloudflare Workers",
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "OpenAuthster",
    },
  },
} as const;

/** Type exports for TypeScript support */
export type SiteConfig = typeof siteConfig;
export type NavItem = (typeof siteConfig.nav)[number];
export type FooterSection = (typeof siteConfig.footer.sections)[number];
export type ThemeMode = "light" | "dark" | "system";

import { useState } from "react";

/**
 * Interactive Counter Component
 * Demonstrates state management in MDX
 */
export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="not-prose my-6 flex items-center gap-4 rounded-lg border border-border bg-card p-4">
      <button
        onClick={() => setCount((c) => c - 1)}
        className="rounded-md border border-border bg-card-hover px-4 py-2 font-medium text-foreground transition-colors hover:bg-border"
      >
        -
      </button>
      <span className="min-w-[3rem] text-center text-2xl font-bold tabular-nums text-foreground">
        {count}
      </span>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="rounded-md bg-accent px-4 py-2 font-medium text-white transition-colors hover:bg-accent/80"
      >
        +
      </button>
      <button
        onClick={() => setCount(0)}
        className="ml-auto text-sm text-muted hover:text-foreground"
      >
        Reset
      </button>
    </div>
  );
}

/**
 * Alert/Callout Component
 * Displays styled alerts with different variants
 */
export function Alert({
  type = "info",
  title,
  children,
}: {
  type?: "info" | "warning" | "error" | "success";
  title?: string;
  children: React.ReactNode;
}) {
  const styles = {
    info: {
      container: "border-blue-500/50 bg-blue-500/10",
      icon: "text-blue-500 dark:text-blue-400",
      title: "text-blue-700 dark:text-blue-300",
    },
    warning: {
      container: "border-yellow-500/50 bg-yellow-500/10",
      icon: "text-yellow-600 dark:text-yellow-400",
      title: "text-yellow-700 dark:text-yellow-300",
    },
    error: {
      container: "border-red-500/50 bg-red-500/10",
      icon: "text-red-500 dark:text-red-400",
      title: "text-red-700 dark:text-red-300",
    },
    success: {
      container: "border-green-500/50 bg-green-500/10",
      icon: "text-green-600 dark:text-green-400",
      title: "text-green-700 dark:text-green-300",
    },
  };

  const icons = {
    info: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    warning: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    error: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    success: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  };

  const style = styles[type];

  return (
    <div
      className={`not-prose my-6 rounded-lg border-l-4 p-4 ${style.container}`}
    >
      <div className="flex items-start gap-3">
        <span className={`mt-0.5 ${style.icon}`}>{icons[type]}</span>
        <div>
          {title && <p className={`font-semibold ${style.title}`}>{title}</p>}
          <div className="text-foreground/80">{children}</div>
        </div>
      </div>
    </div>
  );
}

/**
 * Tabs Component
 * Interactive tabbed content
 */
export function Tabs({
  items,
}: {
  items: { label: string; content: React.ReactNode }[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="not-prose my-6 overflow-hidden rounded-lg border border-border">
      <div className="flex border-b border-border bg-card">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeIndex === index
                ? "border-b-2 border-accent text-foreground"
                : "text-muted hover:text-foreground"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="p-4 text-foreground">{items[activeIndex]?.content}</div>
    </div>
  );
}

/**
 * Card Component
 * Display content in a styled card
 */
export function Card({
  title,
  description,
  icon,
  href,
}: {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
}) {
  const content = (
    <div className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-muted hover:bg-card-hover">
      {icon && <div className="mb-4 text-accent">{icon}</div>}
      <h3 className="text-lg font-semibold text-foreground group-hover:text-accent">
        {title}
      </h3>
      <p className="mt-2 text-sm text-muted">{description}</p>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block no-underline">
        {content}
      </a>
    );
  }

  return content;
}

/**
 * CardGrid Component
 * Grid layout for cards
 */
export function CardGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">{children}</div>
  );
}

/**
 * Badge Component
 * Small inline badge
 */
export function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error";
}) {
  const variants = {
    default: "bg-card-hover text-foreground",
    success: "bg-green-500/20 text-green-700 dark:text-green-400",
    warning: "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400",
    error: "bg-red-500/20 text-red-700 dark:text-red-400",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}

/**
 * Accordion Component
 * Collapsible content sections
 */
export function Accordion({
  items,
}: {
  items: { title: string; content: React.ReactNode }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="not-prose my-6 divide-y divide-border rounded-lg border border-border">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between px-4 py-3 text-left font-medium text-foreground hover:bg-card"
          >
            {item.title}
            <svg
              className={`h-5 w-5 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-foreground/80">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default {
  Counter,
  Alert,
  Tabs,
  Card,
  CardGrid,
  Badge,
  Accordion,
};

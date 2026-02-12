import { siteConfig } from "../site.config";

/**
 * Documentation Sidebar
 * Renders the docs sidebar navigation from siteConfig.docsSidebar
 */
export function Sidebar({ currentPath }: { currentPath?: string }) {
  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <nav className="sticky top-20 space-y-6 pr-4 border-r border-border max-h-[calc(100vh-5rem)] overflow-y-auto pb-12">
        {siteConfig.docsSidebar.map((section) => (
          <div key={section.title}>
            <h4 className="mb-2 text-sm font-semibold text-foreground uppercase tracking-wider">
              {section.title}
            </h4>
            <ul className="space-y-1">
              {section.links.map((link) => {
                const isActive = currentPath === link.href;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`block rounded-md px-3 py-1.5 text-sm transition-colors ${
                        isActive
                          ? "bg-accent/10 text-accent font-medium"
                          : "text-muted hover:text-foreground hover:bg-card-hover"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

/**
 * Mobile sidebar (shown on smaller screens)
 */
export function MobileSidebar({ currentPath }: { currentPath?: string }) {
  return (
    <div className="lg:hidden mb-8 border-b border-border pb-4">
      <details className="group">
        <summary className="cursor-pointer text-sm font-medium text-muted hover:text-foreground flex items-center gap-2">
          <svg
            className="h-4 w-4 transition-transform group-open:rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          Documentation Menu
        </summary>
        <nav className="mt-3 space-y-4 pl-2">
          {siteConfig.docsSidebar.map((section) => (
            <div key={section.title}>
              <h4 className="mb-1 text-xs font-semibold text-foreground uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-1">
                {section.links.map((link) => {
                  const isActive = currentPath === link.href;
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className={`block rounded-md px-3 py-1 text-sm transition-colors ${
                          isActive
                            ? "bg-accent/10 text-accent font-medium"
                            : "text-muted hover:text-foreground"
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </details>
    </div>
  );
}

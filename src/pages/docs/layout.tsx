import React from "react";
import { Header, Footer, Sidebar, MobileSidebar } from "../../components";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-8">
      <Sidebar />
      <main className="flex-1 min-w-0 prose dark:prose-invert prose-lg max-w-none">
        <MobileSidebar />
        {children}
      </main>
    </div>
  );
}

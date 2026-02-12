import React from "react";
import { Header, Footer, ThemeProvider } from "../components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col selection:bg-accent/30 min-w-[90%]">
        <Header />
        <main className="flex-1 prose dark:prose-invert prose-lg w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8 justify-center items-center min-w-[90%] mx-auto">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

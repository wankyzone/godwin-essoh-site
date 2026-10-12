"use client";

import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/site";
import { basePath, withBasePath } from "@/lib/site";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="border-b border-[var(--line)] bg-[var(--paper)]">
      <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-4">
          <a
            className="max-w-[16rem] text-lg font-semibold leading-tight tracking-tight text-[var(--navy)] no-underline sm:max-w-none sm:text-xl"
            href={`${basePath}/`}
          >
            Godwin Edet Essoh
            <span className="ml-1 font-normal">, Ph.D.</span>
          </a>
          <button
            ref={menuButton}
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex min-h-11 items-center justify-center rounded border border-[var(--line)] px-4 text-sm font-medium text-[var(--navy)] hover:bg-white lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        <nav
          aria-label="Main navigation"
          className="mt-5 hidden flex-wrap gap-x-6 gap-y-2 border-t border-[var(--line)] pt-4 lg:flex"
        >
          {navigation.map((item, index) => (
            <a
              aria-current={index === 0 ? "page" : undefined}
              className="text-sm text-[var(--muted)] no-underline transition-colors hover:text-[var(--navy)]"
              href={withBasePath(item.href)}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="mt-5 grid gap-1 border-t border-[var(--line)] pt-3 lg:hidden"
            id="mobile-navigation"
          >
            {navigation.map((item, index) => (
              <a
                aria-current={index === 0 ? "page" : undefined}
                className="rounded px-3 py-2 text-base text-[var(--navy)] no-underline hover:bg-white"
                href={withBasePath(item.href)}
                key={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

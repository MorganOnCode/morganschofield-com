"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { CommandMenu } from "@/components/command-menu";

/**
 * Navigation component for the website
 * @returns Navigation component
 */
export function Navigation() {
  const pathname = usePathname();
  const [showCommandMenu, setShowCommandMenu] = React.useState(false);

  // Navigation items
  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: "🏠",
    },
    {
      name: "Essays",
      href: "/essays",
      icon: "✍️",
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="container flex h-16 items-center px-4 sm:px-8 lg:px-20">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Morgan Schofield</span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-end space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-3 py-2 text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-100 ${
                pathname === item.href
                  ? "text-gray-900 dark:text-gray-100"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              <span className="mr-1">{item.icon}</span>
              {item.name}
            </Link>
          ))}
          <button
            onClick={() => setShowCommandMenu(true)}
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            <Search className="mr-1 h-4 w-4" />
            <span className="hidden sm:inline-block">Search</span>
            <kbd className="ml-2 hidden rounded border border-gray-200 px-1.5 py-0.5 text-xs font-light text-gray-500 dark:border-gray-800 dark:text-gray-400 sm:inline-block">
              ⌘K
            </kbd>
          </button>
          <ThemeToggle />
        </nav>
      </div>
      <CommandMenu open={showCommandMenu} onOpenChange={setShowCommandMenu} />
    </header>
  );
} 
"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Home, PenTool, Search, Brain, Settings, User } from "lucide-react"
import { useTheme } from "next-themes"

import { ThemeToggle } from "@/components/theme-toggle"
import { CommandMenu } from "@/components/command-menu"

interface MenuItem {
  icon: React.ReactNode
  label: string
  href: string
  gradient: string
  iconColor: string
}

// Animation variants
const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
}

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
}

/**
 * Animated navigation component for the website
 * @returns Animated navigation component
 */
export function AnimatedMenu() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [showCommandMenu, setShowCommandMenu] = React.useState(false);

  const isDarkTheme = theme === "dark";

  // Navigation items
  const menuItems: MenuItem[] = [
    {
      icon: <Home className="h-5 w-5" />,
      label: "Home",
      href: "/",
      gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
      iconColor: "text-blue-500",
    },
    {
      icon: <PenTool className="h-5 w-5" />,
      label: "Essays",
      href: "/essays",
      gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
      iconColor: "text-orange-500",
    },
    {
      icon: <Brain className="h-5 w-5" />,
      label: "Digital Brain",
      href: "/digital-brain",
      gradient: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(124,58,237,0.06) 50%, rgba(109,40,217,0) 100%)",
      iconColor: "text-purple-500",
    },
    {
      icon: <Settings className="h-5 w-5" />,
      label: "Projects",
      href: "/projects",
      gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
      iconColor: "text-green-500",
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80">
      <div className="container flex h-16 items-center px-4 sm:px-8 lg:px-20">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Morgan Schofield</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <motion.nav
            className="p-2 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 shadow-lg relative overflow-hidden"
            initial="initial"
            whileHover="hover"
          >
            <motion.div
              className={`absolute -inset-2 bg-gradient-radial from-transparent ${
                isDarkTheme
                  ? "via-blue-400/30 via-30% via-purple-400/30 via-60% via-red-400/30 via-90%"
                  : "via-blue-400/20 via-30% via-purple-400/20 via-60% via-red-400/20 via-90%"
              } to-transparent rounded-3xl z-0 pointer-events-none`}
              variants={navGlowVariants}
            />
            <ul className="flex items-center gap-2 relative z-10">
              {menuItems.map((item) => (
                <motion.li key={item.label} className="relative">
                  <motion.div
                    className="block rounded-xl overflow-visible group relative"
                    style={{ perspective: "600px" }}
                    whileHover="hover"
                    initial="initial"
                  >
                    <motion.div
                      className="absolute inset-0 z-0 pointer-events-none"
                      variants={glowVariants}
                      style={{
                        background: item.gradient,
                        opacity: 0,
                        borderRadius: "16px",
                      }}
                    />
                    <motion.a
                      href={item.href}
                      className={`flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent transition-colors rounded-xl ${
                        pathname === item.href
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      variants={itemVariants}
                      transition={sharedTransition}
                      style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                    >
                      <span className={`transition-colors duration-300 ${
                        pathname === item.href ? item.iconColor : `group-hover:${item.iconColor}`
                      }`}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </motion.a>
                    <motion.a
                      href={item.href}
                      className={`flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent transition-colors rounded-xl ${
                        pathname === item.href
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      variants={backVariants}
                      transition={sharedTransition}
                      style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
                    >
                      <span className={`transition-colors duration-300 ${
                        pathname === item.href ? item.iconColor : `group-hover:${item.iconColor}`
                      }`}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </motion.a>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
          
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
        </div>
      </div>
      <CommandMenu open={showCommandMenu} onOpenChange={setShowCommandMenu} />
    </header>
  );
} 
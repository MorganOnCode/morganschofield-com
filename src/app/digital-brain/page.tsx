import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Brain | Morgan Schofield",
  description: "My digital garden of thoughts, notes, and ideas",
};

/**
 * Digital Brain page component
 * @returns Digital Brain page
 */
export default function DigitalBrainPage() {
  // Sample categories and notes - replace with your actual content
  const categories = [
    {
      name: "Programming",
      notes: [
        { title: "React Hooks Explained", slug: "react-hooks-explained" },
        { title: "TypeScript Best Practices", slug: "typescript-best-practices" },
        { title: "Next.js 14 Features", slug: "nextjs-14-features" },
      ],
    },
    {
      name: "Productivity",
      notes: [
        { title: "Building a Second Brain", slug: "building-second-brain" },
        { title: "Time Blocking Method", slug: "time-blocking-method" },
        { title: "Digital Minimalism", slug: "digital-minimalism" },
      ],
    },
    {
      name: "Philosophy",
      notes: [
        { title: "Stoicism in Modern Life", slug: "stoicism-modern-life" },
        { title: "Mental Models", slug: "mental-models" },
        { title: "Decision Making Frameworks", slug: "decision-frameworks" },
      ],
    },
  ];

  return (
    <div className="container px-4 py-12 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold">Digital Brain</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
          Welcome to my digital garden — a collection of interconnected notes, thoughts, and ideas that I'm cultivating over time. Unlike traditional blogs, this space evolves as my thinking develops.
        </p>

        <div className="mb-12 rounded-lg border border-gray-200 bg-white/50 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/50">
          <h2 className="mb-2 text-xl font-semibold">What is a Digital Brain?</h2>
          <p className="text-gray-600 dark:text-gray-400">
            A digital brain (or digital garden) is a personal knowledge management system that focuses on connecting ideas rather than organizing them chronologically. It's a space where thoughts can grow and evolve over time, much like plants in a garden.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <h2 className="mb-4 text-2xl font-semibold">{category.name}</h2>
              <ul className="space-y-2">
                {category.notes.map((note) => (
                  <li key={note.slug}>
                    <Link
                      href={`/digital-brain/${note.slug}`}
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      {note.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-gray-200 bg-white/50 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/50">
          <h2 className="mb-2 text-xl font-semibold">How to Navigate</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Feel free to explore topics that interest you. Each note may contain links to related ideas, creating a web of interconnected thoughts. This is a living document that will grow and evolve over time.
          </p>
        </div>
      </div>
    </div>
  );
} 
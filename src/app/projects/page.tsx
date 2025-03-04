import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Morgan Schofield",
  description: "Projects and work by Morgan Schofield",
};

/**
 * Projects page component
 * @returns Projects page
 */
export default function ProjectsPage() {
  // Sample projects data - replace with your actual projects
  const projects = [
    {
      title: "Wheel of Emotions",
      description: "An interactive wheel to explore different emotions and their relationships",
      tags: ["React", "Interactive", "Psychology"],
      link: "/emotion-wheel",
    },
    {
      title: "Personal Website",
      description: "My personal website built with Next.js and Tailwind CSS",
      tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      link: "https://github.com/MorganOnCode/morganschofield-com",
    },
    {
      title: "Digital Brain",
      description: "A digital garden of my thoughts and notes",
      tags: ["Next.js", "MDX", "Knowledge Management"],
      link: "/digital-brain",
    },
    // Add more projects as needed
  ];

  return (
    <div className="container px-4 py-12 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">Projects</h1>
        <p className="mb-12 text-lg text-gray-600 dark:text-gray-400">
          A collection of projects I've worked on. These range from web applications to experiments and open-source contributions.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <h2 className="mb-2 text-2xl font-semibold">{project.title}</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center text-blue-600 hover:underline dark:text-blue-400"
              >
                View Project
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
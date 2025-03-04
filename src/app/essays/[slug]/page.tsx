import { Metadata } from "next";
import { notFound } from "next/navigation";
import { essays } from "@/data/essays";

interface EssayPageProps {
  params: {
    slug: string;
  };
  searchParams?: Record<string, string | string[] | undefined>;
}

export function generateMetadata({
  params,
}: EssayPageProps): Metadata {
  const essay = essays.find((essay) => essay.slug === params.slug);

  if (!essay) {
    return {
      title: "Essay Not Found | Morgan Schofield",
    };
  }

  return {
    title: `${essay.title} | Morgan Schofield`,
    description: essay.description,
  };
}

export function generateStaticParams() {
  return essays.map((essay) => ({
    slug: essay.slug,
  }));
}

export default function EssayPage({ params }: EssayPageProps) {
  const essay = essays.find((essay) => essay.slug === params.slug);

  if (!essay) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:px-8 lg:px-20">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{essay.title}</h1>
          <time className="text-sm text-gray-500 dark:text-gray-400">
            {essay.date}
          </time>
        </div>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p>
            This is a placeholder for the essay content. In a real implementation,
            this would be populated with the actual essay content from a CMS or
            markdown files.
          </p>
          <p>
            The essay would discuss {essay.title.toLowerCase()} in detail,
            providing insights and analysis on the topic.
          </p>
          <h2>Introduction</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis
            aliquam nisl nunc quis nisl.
          </p>
          <h2>Main Points</h2>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <h2>Conclusion</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
} 
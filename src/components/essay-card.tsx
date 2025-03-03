import * as React from "react";
import Link from "next/link";

/**
 * Essay data interface
 */
export interface EssayData {
  title: string;
  description: string;
  date: string;
  slug: string;
}

/**
 * Essay card props
 */
interface EssayCardProps extends React.HTMLAttributes<HTMLDivElement> {
  essay: EssayData;
}

/**
 * Essay card component
 * @param props - Essay card props
 * @returns Essay card component
 */
export function EssayCard({ essay, className, ...props }: EssayCardProps) {
  return (
    <Link href={`/essays/${essay.slug}`}>
      <div
        className={`group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900 ${className || ""}`}
        {...props}
      >
        <div className="flex justify-between">
          <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 dark:text-gray-50 dark:group-hover:text-gray-300">
            {essay.title}
          </h3>
          <time className="text-sm text-gray-500 dark:text-gray-400">
            {essay.date}
          </time>
        </div>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {essay.description}
        </p>
      </div>
    </Link>
  );
} 
import * as React from "react";
import Link from "next/link";

/**
 * Digital Brain data interface
 */
export interface DigitalBrainData {
  title: string;
  description: string;
  date: string;
  slug: string;
}

/**
 * Digital Brain card props
 */
interface DigitalBrainCardProps extends React.HTMLAttributes<HTMLDivElement> {
  essay: DigitalBrainData;
}

/**
 * Digital Brain card component
 * @param props - Digital Brain card props
 * @returns Digital Brain card component
 */
export function DigitalBrainCard({ essay, className, ...props }: DigitalBrainCardProps) {
  return (
    <Link href={`/digital-brain/${essay.slug}`}>
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
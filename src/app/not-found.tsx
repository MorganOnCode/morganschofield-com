import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-12 sm:px-8 lg:px-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <h2 className="mt-2 text-xl font-medium">Page Not Found</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
} 
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { SocialLinks } from "@/components/social-links";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { EssayCard } from "@/components/essay-card";
import { essays } from "@/data/essays";

export default function Home() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12 sm:px-8 lg:px-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Left Column */}
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col items-center space-y-4 md:items-start">
            <div className="relative h-48 w-48 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-700">
              {!imgError ? (
                <Image
                  src="/images/morgan-pfp-cropped.webp"
                  alt="Morgan Schofield"
                  fill
                  className="object-cover"
                  priority
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-gray-500 dark:text-gray-400">
                  MS
                </div>
              )}
            </div>
            <h1 className="text-3xl font-bold">Morgan Schofield</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              I'm a growth engineer who's learning to code and build fast tools.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-gray-600 dark:text-gray-400">London</span>
          </div>

          <SocialLinks />

          <NewsletterSignup />
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-8">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Me, Now</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Developing emotional intelligence.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold">Essays</h2>
            <div className="space-y-4">
              {essays.map((essay) => (
                <EssayCard key={essay.slug} essay={essay} />
              ))}
            </div>
            <div className="mt-4">
              <Link
                href="/essays"
                className="text-sm font-medium text-gray-900 hover:text-gray-600 dark:text-gray-50 dark:hover:text-gray-400"
              >
                View all essays →
              </Link>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold">Recent Work</h2>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h3 className="text-lg font-medium">Project Name</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Project description...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

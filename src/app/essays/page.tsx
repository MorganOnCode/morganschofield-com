import { Metadata } from "next";
import { EssayCard } from "@/components/essay-card";
import { essays } from "@/data/essays";

export const metadata: Metadata = {
  title: "Essays | Morgan Schofield",
  description: "Essays and thoughts by Morgan Schofield",
};

export default function EssaysPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-8 lg:px-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Essays</h1>
        <div className="space-y-6">
          {essays.map((essay) => (
            <EssayCard key={essay.slug} essay={essay} />
          ))}
        </div>
      </div>
    </div>
  );
} 
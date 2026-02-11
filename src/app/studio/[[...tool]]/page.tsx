"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { isSanityConfigured } from "@/sanity/env";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-500">
          Sanity is not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID to enable the studio.
        </p>
      </div>
    );
  }
  return <NextStudio config={config} />;
}

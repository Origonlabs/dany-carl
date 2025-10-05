'use client';

import { CSSProperties } from "react";

const gradientStyle: CSSProperties = {
  backgroundImage: `
    radial-gradient(circle at 50% 100%, rgba(253, 224, 71, 0.35) 0%, transparent 60%),
    radial-gradient(circle at 50% 100%, rgba(251, 191, 36, 0.35) 0%, transparent 70%),
    radial-gradient(circle at 50% 100%, rgba(244, 114, 182, 0.45) 0%, transparent 80%)
  `,
};

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <video
        className="h-full w-full object-cover"
        src="https://cdn.bucket.opendex.dev/danny-carl/Live-Background.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      <div className="absolute inset-0" style={gradientStyle} aria-hidden="true" />
    </div>
  );
}

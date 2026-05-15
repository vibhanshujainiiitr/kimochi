"use client";

import { useEffect, useRef } from "react";

export function AutoPlayVideoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!video) return;

        if (entry.isIntersecting) {
          video
            .play()
            .catch(() => {
              // Ignore autoplay rejection on strict browser policies.
            });
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="video-section" aria-label="Introduction video" ref={sectionRef}>
      <video
        ref={videoRef}
        controls
        muted
        playsInline
        preload="metadata"
        className="hero-video"
        loop
      >
        <source src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

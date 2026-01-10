/** @jsxImportSource react */
"use client";

import { useEffect, useState } from "react";

type VideoData = {
  videoId: string | null;
  title: string | null;
  published: string | null;
  debug?: any;
};

export default function LatestVideo() {
  const [video, setVideo] = useState<VideoData | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch("/api/youtube-latest", { cache: "no-store" })
      .then((r) => r.json())
      .then((data: VideoData) => {
        if (!mounted) return;
        setVideo(data);
      })
      .catch(() => {
        if (!mounted) return;
        setVideo({ videoId: null, title: null, published: null });
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (!video) {
    return (
      <div className="rounded-2xl border border-[#e2d8cb] bg-white/80 p-6 text-sm text-neutral-700">
        Cargando vídeo...
      </div>
    );
  }

  if (!video.videoId) {
    return (
      <div className="rounded-2xl border border-[#e2d8cb] bg-white/80 p-6 text-sm text-neutral-700">
        Nuevo vídeo muy pronto.
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-[#e2d8cb] bg-[#f3f0eb] shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
      <div className="relative pb-[56.25%]">
        <iframe
          title={video.title ?? "Último vídeo de Anita"}
          src={`https://www.youtube.com/embed/${video.videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  );
}

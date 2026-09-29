"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

type ProjectGalleryProps = {
  images: GalleryImage[];
  projectName: string;
};

export default function ProjectGallery({ images, projectName }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % images.length);
  };

  return (
    <div className="mb-6">
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-950">
        <Image
          key={images[activeIndex].src}
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain"
          priority={activeIndex === 0}
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={showPrevious}
              aria-label={`Image precedente du projet ${projectName}`}
              className="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-xl text-white shadow-lg backdrop-blur transition hover:bg-violet-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span aria-hidden="true">&#8592;</span>
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label={`Image suivante du projet ${projectName}`}
              className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-xl text-white shadow-lg backdrop-blur transition hover:bg-violet-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span aria-hidden="true">&#8594;</span>
            </button>
            <span
              aria-live="polite"
              className="absolute right-3 top-3 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-medium text-white backdrop-blur"
            >
              {activeIndex + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-2" aria-label="Choisir une image">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Afficher l'image ${index + 1} du projet ${projectName}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? "w-7 bg-violet-600" : "w-2 bg-slate-300 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

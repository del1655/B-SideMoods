import { useState } from "react";
import type { Song } from "../types/song";

type Props = {
  song: Song;
  moodLabel: string;
};

export default function SongCard({ song, moodLabel }: Props) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="flex w-full animate-fade-in flex-col items-center gap-5 motion-reduce:animate-none md:flex-row md:gap-12">
      <div className="aspect-square w-full max-w-56 shrink-0 overflow-hidden rounded-lg shadow-xl shadow-plum/15 ring-1 ring-plum/10 md:max-w-80">
        {imageFailed ? (
          // Placeholder temporal: el título ya aparece como texto al lado
          <div
            aria-hidden="true"
            className="flex h-full items-end bg-linear-to-tr from-lilac to-dusty p-4 text-left"
          >
            <span className="font-display text-3xl leading-tight font-semibold text-plum">
              {song.title}
            </span>
          </div>
        ) : (
          <img
            src={song.cover}
            alt={`Cover art for ${song.title}`}
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      <div className="text-center md:text-left">
        <span className="inline-block rounded-full bg-lilac px-3 py-1 text-xs font-medium tracking-[0.15em] text-plum uppercase">
          {moodLabel}
        </span>
        <h2 className="mt-3 font-display text-3xl leading-tight font-semibold text-plum md:mt-4 md:text-5xl">
          {song.title}
        </h2>
        <p className="mt-1 text-sm tracking-widest text-ink/70 uppercase">
          {song.artist}
        </p>
        <p className="mt-3 max-w-md font-display text-lg text-ink/90 italic md:mt-5 md:text-xl">
          {song.description}
        </p>
      </div>
    </article>
  );
}
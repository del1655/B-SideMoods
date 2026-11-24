import { useState } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Header from "../components/Header";
import SongCard from "../components/SongCard";
import { primaryButtonStyles } from "../components/buttonStyles";
import { moods } from "../data/moods";
import { recommendSong } from "../utils/recommendSong";
import type { Mood } from "../types/song";

type Props = {
  mood: Mood;
  onBack: () => void;
};

export default function YourSong({ mood, onBack }: Props) {
  const [song, setSong] = useState(() => recommendSong(mood));
  const moodLabel = moods.find((m) => m.id === mood)?.label ?? mood;

  const handleAnother = () => setSong(recommendSong(mood, song?.id));

  return (
    <>
      <Header />

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-6 pb-8 text-center md:px-8 md:pb-10">
        <h1 className="font-display text-3xl leading-tight text-plum md:text-5xl">
          This one's for you.
        </h1>
        <p className="mt-2 text-base text-ink/80 md:mt-3 md:text-lg">
          A little song for how you're feeling.
        </p>

        {/* Anuncia el cambio de canción a lectores de pantalla */}
        <p className="sr-only" aria-live="polite">
          {song ? `${song.title} by ${song.artist}` : ""}
        </p>

        {song ? (
          <>
            <div className="mt-6 w-full md:mt-10">
              <SongCard key={song.id} song={song} moodLabel={moodLabel} />
            </div>

            <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row md:mt-10">
              <a
                href={song.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${primaryButtonStyles} inline-flex items-center justify-center gap-2`}
              >
                Listen on Spotify
                <ExternalLink size={16} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>

              <button
                type="button"
                onClick={handleAnother}
                className="rounded-full border border-plum px-8 py-3.5 font-medium text-plum transition duration-200 hover:bg-lilac/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dusty motion-reduce:transition-none md:py-4"
              >
                Try another song
              </button>
            </div>
          </>
        ) : (
          <p className="mt-10 text-lg text-ink/80">
            We couldn't find a song for this mood yet.
          </p>
        )}

        <button
          type="button"
          onClick={onBack}
          className="mt-6 inline-flex items-center gap-2 rounded text-sm font-medium text-plum underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dusty md:mt-8"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Choose a different mood
        </button>
      </main>
    </>
  );
}
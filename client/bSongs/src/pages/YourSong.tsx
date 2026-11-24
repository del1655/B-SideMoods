import { useState } from "react";
import { Shuffle } from "lucide-react";
import Header from "../components/Header";
import SongCard from "../components/SongCard";
import BackButton from "../components/BackButton";
import ListenPlatforms from "../components/ListenPlatforms";
import PrimaryButton from "../components/PrimaryButton";
import { moods } from "../data/moods";
import {
  recommendSong,
  getSongsByMood,
} from "../utils/recommendSong";
import type { Mood, Song } from "../types/song";

type Props = {
  mood: Mood;
  onBack: () => void;
};

type RecommendationState = {
  song: Song | null;
  history: string[];
};

export default function YourSong({ mood, onBack }: Props) {
  const moodLabel =
    moods.find((m) => m.id === mood)?.label ?? mood;

  const totalSongs = getSongsByMood(mood).length;

  // Initial recommendation
  const [recommendation, setRecommendation] =
    useState<RecommendationState>(() => {
      const firstSong = recommendSong(mood);

      return {
        song: firstSong,
        history: firstSong ? [firstSong.id] : [],
      };
    });

  const { song, history } = recommendation;

  // Recommend a different song
  const handleAnother = () => {
    if (totalSongs <= 1) return;

    setRecommendation((previous) => {
      const nextSong = recommendSong(
        mood,
        previous.history
      );

      // There are still undiscovered songs
      if (nextSong) {
        return {
          song: nextSong,
          history: [...previous.history, nextSong.id],
        };
      }

      // Start a new round without repeating
      // the last song immediately
      const restartedSong = recommendSong(
        mood,
        previous.song ? [previous.song.id] : []
      );

      if (!restartedSong) return previous;

      return {
        song: restartedSong,
        history: [restartedSong.id],
      };
    });
  };

  return (
    <>
      <Header />

      {/* Back navigation */}
      <div className="mx-auto w-full max-w-6xl px-6 pt-2 md:px-12 md:pt-4">
        <BackButton
          onClick={onBack}
          label="Choose a different mood"
        />
      </div>

      <main className="mx-auto flex w-full max-w-3xl flex-1 animate-fade-in flex-col items-center px-6 pb-8 text-center motion-reduce:animate-none md:px-8 md:pb-10">

        {/* Heading */}
        <h1 className="font-display text-3xl leading-tight text-plum md:text-5xl">
          This one's for you.
        </h1>

        <p className="mt-2 text-base text-ink/80 md:mt-3 md:text-lg">
          A little song for how you're feeling.
        </p>

        {/* Accessibility */}
        <p className="sr-only" aria-live="polite">
          {song ? `${song.title} by ${song.artist}` : ""}
        </p>

        {song ? (
          <>
            {/* Song card */}
            <div className="mt-6 w-full md:mt-10">
              <SongCard
                key={song.id}
                song={song}
                moodLabel={moodLabel}
              />
            </div>

            {/* Streaming platforms */}
            <div className="mt-8 flex w-full justify-center">
              <ListenPlatforms song={song} />
            </div>

            {/* Another recommendation */}
            <div className="mt-5 w-full max-w-md">
              <PrimaryButton
                onClick={handleAnother}
                disabled={totalSongs <= 1}
                className="w-full"
              >
                <span className="flex items-center justify-center gap-3">
                  <Shuffle
                    size={18}
                    strokeWidth={1.8}
                  />
                  Try another song
                </span>
              </PrimaryButton>
            </div>

            {/* Track counter */}
            <div className="mt-5 flex flex-col items-center gap-2">
              <p
                aria-live="polite"
                className="font-mono text-[10px] tracking-[0.15em] text-dusty md:text-xs"
              >
                TRACK {String(history.length).padStart(2, "0")}
                {" · "}
                {totalSongs} IN THIS MOOD
              </p>

              {/* Progress indicator */}
              <div
                aria-hidden="true"
                className="h-1 w-28 overflow-hidden rounded-full bg-lilac/40"
              >
                <div
                  className="h-full rounded-full bg-dusty transition-all duration-500 motion-reduce:transition-none"
                  style={{
                    width: `${(history.length / totalSongs) * 100}%`,
                  }}
                />
              </div>
            </div>
          </>
        ) : (
          <p className="mt-10 text-lg text-ink/80">
            We couldn't find a song for this mood yet.
          </p>
        )}
      </main>
    </>
  );
}
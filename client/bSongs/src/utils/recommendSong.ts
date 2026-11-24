import { songs } from "../data/songs";
import type { Mood, Song } from "../types/song";

export function getSongsByMood(mood: Mood): Song[] {
  return songs.filter((song) => song.moods.includes(mood));
}

export function recommendSong(
  mood: Mood,
  excludedIds: string[] = []
): Song | null {
  const availableSongs = getSongsByMood(mood).filter(
    (song) => !excludedIds.includes(song.id)
  );

  if (availableSongs.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(
    Math.random() * availableSongs.length
  );

  return availableSongs[randomIndex];
}
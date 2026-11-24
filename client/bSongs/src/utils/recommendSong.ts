import { songs as catalog } from "../data/songs";
import type { Mood, Song } from "../types/song";

export function recommendSong(
  mood: Mood,
  excludeId?: string,
  songs: Song[] = catalog,
): Song | null {
  const matches = songs.filter((song) => song.moods.includes(mood));

  if (matches.length === 0) return null;

  const candidates =
    matches.length > 1 ? matches.filter((song) => song.id !== excludeId) : matches;

  return candidates[Math.floor(Math.random() * candidates.length)];
}
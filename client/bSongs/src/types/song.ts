export type Mood = "nostalgic" | "motivated" | "comfort" | "happy";

export type Song = {
  id: string;
  title: string;
  artist: "BTS";
  moods: Mood[];
  description: string;
  spotifyUrl: string;
  youtubeUrl: string;
  cover: string;
};

export type MoodOption = {
  id: Mood;
  label: string;
  tagline: string;
};
import type { Song } from "../types/song";

const spotifySearch = (title: string) =>
  `https://open.spotify.com/search/${encodeURIComponent(`${title} BTS`)}`;

export const songs: Song[] = [
  // Nostalgic
  {
    id: "spring-day",
    title: "Spring Day",
    artist: "BTS",
    moods: ["nostalgic"],
    description: "For missing someone and trusting that warmer days are still coming.",
    spotifyUrl: spotifySearch("Spring Day"),
    cover: "/images/covers/spring-day.webp",
  },
  {
    id: "blue-and-grey",
    title: "Blue & Grey",
    artist: "BTS",
    moods: ["nostalgic"],
    description: "A quiet, honest song for the days when everything feels a little muted.",
    spotifyUrl: spotifySearch("Blue & Grey"),
    cover: "/images/covers/blue-and-grey.webp",
  },
  {
    id: "the-truth-untold",
    title: "The Truth Untold",
    artist: "BTS",
    moods: ["nostalgic"],
    description: "A tender ballad about the things we hold back from the people we love.",
    spotifyUrl: spotifySearch("The Truth Untold"),
    cover: "/images/covers/the-truth-untold.webp",
  },

  // Motivated
  {
    id: "on",
    title: "ON",
    artist: "BTS",
    moods: ["motivated"],
    description: "Big drums and bigger courage, for when you're ready to face the hard thing.",
    spotifyUrl: spotifySearch("ON"),
    cover: "/images/covers/on.webp",
  },
  {
    id: "not-today",
    title: "Not Today",
    artist: "BTS",
    moods: ["motivated"],
    description: "A rallying cry for the day you refuse to back down.",
    spotifyUrl: spotifySearch("Not Today"),
    cover: "/images/covers/not-today.webp",
  },
  {
    id: "idol",
    title: "IDOL",
    artist: "BTS",
    moods: ["motivated"],
    description: "Loud, proud and full of energy, for walking in like you own the room.",
    spotifyUrl: spotifySearch("IDOL"),
    cover: "/images/covers/idol.webp",
  },

  // Need Comfort
  {
    id: "magic-shop",
    title: "Magic Shop",
    artist: "BTS",
    moods: ["comfort"],
    description: "A soft place to land when you need to hear that you're not alone.",
    spotifyUrl: spotifySearch("Magic Shop"),
    cover: "/images/covers/magic-shop.webp",
  },
  {
    id: "answer-love-myself",
    title: "Answer: Love Myself",
    artist: "BTS",
    moods: ["comfort"],
    description: "A gentle reminder to be kind to yourself, flaws included.",
    spotifyUrl: spotifySearch("Answer: Love Myself"),
    cover: "/images/covers/answer-love-myself.webp",
  },
  {
    id: "mikrokosmos",
    title: "Mikrokosmos",
    artist: "BTS",
    moods: ["comfort"],
    description: "A starlit lullaby about how small things can still shine.",
    spotifyUrl: spotifySearch("Mikrokosmos"),
    cover: "/images/covers/mikrokosmos.webp",
  },

  // Happy
  {
    id: "dynamite",
    title: "Dynamite",
    artist: "BTS",
    moods: ["happy"],
    description: "Pure sunshine in song form, for dancing in the kitchen.",
    spotifyUrl: spotifySearch("Dynamite"),
    cover: "/images/covers/dynamite.webp",
  },
  {
    id: "boy-with-luv",
    title: "Boy With Luv",
    artist: "BTS",
    moods: ["happy"],
    description: "Sweet, bright and a little giddy, like a good day with someone you adore.",
    spotifyUrl: spotifySearch("Boy With Luv"),
    cover: "/images/covers/boy-with-luv.webp",
  },
  {
    id: "permission-to-dance",
    title: "Permission to Dance",
    artist: "BTS",
    moods: ["happy"],
    description: "An open invitation to let go and move, no reason needed.",
    spotifyUrl: spotifySearch("Permission to Dance"),
    cover: "/images/covers/permission-to-dance.webp",
  },
];
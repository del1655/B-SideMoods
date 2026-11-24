import type { Song, Mood } from "../types/song";

const spotifySearch = (title: string) =>
  `https://open.spotify.com/search/${encodeURIComponent(
    `${title} BTS`
  )}`;

const youtubeSearch = (title: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(
    `BTS ${title} official`
  )}`;

function createSong(
  id: string,
  title: string,
  moods: Mood[],
  description: string,
  cover?: string
): Song {
  return {
    id,
    title,
    artist: "BTS",
    moods,
    description,
    spotifyUrl: spotifySearch(title),
    youtubeUrl: youtubeSearch(title),
    cover: cover ?? `/images/covers/${id}.webp`,
  };
}

export const songs: Song[] = [
  // ───────── NOSTALGIC ─────────

  createSong(
    "spring-day",
    "Spring Day",
    ["nostalgic", "comfort"],
    "For missing someone and trusting that warmer days are still coming."
  ),
  createSong(
    "blue-and-grey",
    "Blue & Grey",
    ["nostalgic"],
    "A quiet, honest song for the days when everything feels a little muted."
  ),
  createSong(
    "the-truth-untold",
    "The Truth Untold",
    ["nostalgic"],
    "A tender ballad about the things we hold back from the people we love."
  ),
  createSong(
    "yet-to-come",
    "Yet To Come",
    ["nostalgic", "comfort"],
    "For looking back with gratitude while believing the best is still ahead."
  ),
  createSong(
    "young-forever",
    "Epilogue: Young Forever",
    ["nostalgic"],
    "For the memories you wish you could keep forever."
  ),
  createSong(
    "run",
    "RUN",
    ["nostalgic"],
    "A soundtrack for the beautiful chaos of growing up."
  ),
  createSong(
    "i-need-u",
    "I NEED U",
    ["nostalgic"],
    "For the feelings that are difficult to put into words."
  ),
  createSong(
    "butterfly",
    "Butterfly",
    ["nostalgic"],
    "For the fragile moments you are afraid to lose."
  ),
  createSong(
    "film-out",
    "Film Out",
    ["nostalgic"],
    "For memories that still feel close, even after time has passed."
  ),
  createSong(
    "let-go",
    "Let Go",
    ["nostalgic"],
    "For learning to say goodbye to something that once meant everything."
  ),
  createSong(
    "for-youth",
    "For Youth",
    ["nostalgic", "comfort"],
    "A little love letter to the people who made your journey special."
  ),
  createSong(
    "we-are-bulletproof-eternal",
    "We Are Bulletproof: The Eternal",
    ["nostalgic", "comfort"],
    "For remembering everything you have survived together."
  ),
  createSong(
    "autumn-leaves",
    "Autumn Leaves",
    ["nostalgic"],
    "For the seasons of life you wish had lasted a little longer."
  ),
  createSong(
    "134340",
    "134340",
    ["nostalgic"],
    "For feeling distant from someone who used to be your universe."
  ),
  createSong(
    "heartbeat",
    "Heartbeat",
    ["nostalgic"],
    "For the unexpected connections that changed your story."
  ),

  // ───────── MOTIVATED ─────────

  createSong(
    "on",
    "ON",
    ["motivated"],
    "Big drums and bigger courage, for when you're ready to face the hard thing."
  ),
  createSong(
    "not-today",
    "Not Today",
    ["motivated"],
    "A rallying cry for the day you refuse to back down."
  ),
  createSong(
    "idol",
    "IDOL",
    ["motivated", "happy"],
    "Loud, proud and full of energy, for walking in like you own the room."
  ),
  createSong(
    "fire",
    "Burning Up (FIRE)",
    ["motivated", "happy"],
    "For letting go of expectations and living on your own terms."
  ),
  createSong(
    "mic-drop",
    "MIC Drop",
    ["motivated"],
    "For celebrating your hard work without apologizing for your success."
  ),
  createSong(
    "run-bts",
    "Run BTS",
    ["motivated"],
    "For remembering how far determination can take you."
  ),
  createSong(
    "dope",
    "DOPE",
    ["motivated"],
    "For the late nights, big dreams and everything you are working toward."
  ),
  createSong(
    "tomorrow",
    "Tomorrow",
    ["motivated", "comfort"],
    "For trusting your own pace when progress feels slow."
  ),
  createSong(
    "n-o",
    "N.O",
    ["motivated"],
    "For questioning expectations and choosing your own path."
  ),
  createSong(
    "attack-on-bangtan",
    "Attack on Bangtan",
    ["motivated", "happy"],
    "A burst of confidence for showing up with your whole heart."
  ),
  createSong(
    "danger",
    "Danger",
    ["motivated"],
    "For releasing frustration through a little musical intensity."
  ),
  createSong(
    "no-more-dream",
    "No More Dream",
    ["motivated"],
    "For finding the courage to chase a dream that is truly yours."
  ),
  createSong(
    "silver-spoon",
    "Silver Spoon",
    ["motivated"],
    "For the days when you refuse to let unfair expectations define you."
  ),

  // ───────── NEED COMFORT ─────────

  createSong(
    "magic-shop",
    "Magic Shop",
    ["comfort"],
    "A soft place to land when you need to hear that you're not alone."
  ),
  createSong(
    "answer-love-myself",
    "Answer: Love Myself",
    ["comfort"],
    "A gentle reminder to be kind to yourself, flaws included."
  ),
  createSong(
    "mikrokosmos",
    "Mikrokosmos",
    ["comfort", "happy"],
    "A starlit lullaby about how small things can still shine."
  ),
  createSong(
    "life-goes-on",
    "Life Goes On",
    ["comfort", "nostalgic"],
    "For remembering that life keeps moving, even on the hardest days."
  ),
  createSong(
    "two-three",
    "2! 3!",
    ["comfort"],
    "For taking a deep breath and hoping for better days."
  ),
  createSong(
    "lights",
    "Lights",
    ["comfort"],
    "For finding a little light when the world feels dark."
  ),
  createSong(
    "take-two",
    "Take Two",
    ["comfort", "nostalgic"],
    "For feeling connected, no matter how much time has passed."
  ),
  createSong(
    "stay-gold",
    "Stay Gold",
    ["comfort"],
    "For holding on to the beautiful things inside you."
  ),
  createSong(
    "your-eyes-tell",
    "Your Eyes Tell",
    ["comfort", "nostalgic"],
    "For believing there is still beauty beyond the sadness."
  ),
  createSong(
    "crystal-snow",
    "Crystal Snow",
    ["comfort", "nostalgic"],
    "A delicate melody for quiet evenings and tender feelings."
  ),
  createSong(
    "we-on",
    "We On",
    ["motivated"],
    "For trusting yourself when other people doubt your dreams."
  ),
  createSong(
    "save-me",
    "Save ME",
    ["comfort", "nostalgic"],
    "For the moments when you need someone to reach out."
  ),
  createSong(
    "make-it-right",
    "Make It Right",
    ["comfort"],
    "For believing that things can still become better."
  ),

  // ───────── HAPPY ─────────

  createSong(
    "dynamite",
    "Dynamite",
    ["happy"],
    "Pure sunshine in song form, for dancing in the kitchen."
  ),
  createSong(
    "boy-with-luv",
    "Boy With Luv",
    ["happy"],
    "Sweet, bright and a little giddy, like a good day with someone you adore."
  ),
  createSong(
    "permission-to-dance",
    "Permission to Dance",
    ["happy"],
    "An open invitation to let go and move, no reason needed."
  ),
  createSong(
    "butter",
    "Butter",
    ["happy", "motivated"],
    "A smooth little confidence boost with an irresistible rhythm."
  ),
  createSong(
    "dna",
    "DNA",
    ["happy"],
    "For the excitement of finding something that feels meant to be."
  ),
  createSong(
    "anpanman",
    "Anpanman",
    ["happy", "motivated"],
    "For finding joy in being your own imperfect kind of superhero."
  ),
  createSong(
    "go-go",
    "Go Go",
    ["happy"],
    "For taking a break from overthinking and enjoying the moment."
  ),
  createSong(
    "so-what",
    "So What",
    ["happy", "motivated"],
    "For dancing away the worries you cannot control."
  ),
  createSong(
    "best-of-me",
    "Best of Me",
    ["happy"],
    "For the warm excitement of being around someone special."
  ),
  createSong(
    "airplane-pt2",
    "Airplane pt.2",
    ["happy"],
    "For feeling adventurous, carefree and ready to explore."
  ),
  createSong(
    "telepathy",
    "Telepathy",
    ["happy", "comfort"],
    "For the people who make ordinary days feel extraordinary."
  ),
  createSong(
    "dis-ease",
    "Dis-ease",
    ["happy", "motivated"],
    "For shaking off the stress and finding your rhythm again."
  ),
  createSong(
    "boyz-with-fun",
    "Boyz With Fun",
    ["happy"],
    "For embracing your silly side and having fun without a reason."
  ),
  createSong(
    "dimple",
    "Dimple",
    ["happy"],
    "For the little smiles that make your whole day brighter."
  ),

  // ───────── ARIRANG · 2026 ─────────

  createSong(
    "body-to-body",
    "Body to Body",
    ["happy", "motivated"],
    "For celebrating together and losing yourself in the music.",
    "/images/covers/arirang.webp"
  ),
  createSong(
    "hooligan",
    "Hooligan",
    ["motivated"],
    "For breaking expectations and making your own rules.",
    "/images/covers/arirang.webp"
  ),
  createSong(
    "aliens",
    "Aliens",
    ["motivated"],
    "For embracing what makes you different.",
    "/images/covers/arirang.webp"
  ),
  createSong(
    "fya",
    "FYA",
    ["motivated", "happy"],
    "A fiery energy boost for the days you feel unstoppable.",
    "/images/covers/arirang.webp"
  ),
  createSong(
    "2-0",
    "2.0",
    ["motivated"],
    "For stepping into a new version of yourself.",
    "/images/covers/arirang.webp"
  ),
  createSong(
    "swim",
    "SWIM",
    ["comfort", "motivated"],
    "For finding the strength to keep moving through life's waves.",
    "/images/covers/arirang.webp"
  ),
  createSong(
    "merry-go-round",
    "Merry Go Round",
    ["nostalgic", "comfort"],
    "For reflecting on the cycles of life and finding courage within them.",
    "/images/covers/arirang.webp"
  ),
  createSong(
    "normal",
    "NORMAL",
    ["nostalgic", "comfort"],
    "For making peace with the complicated feelings behind everyday life.",
    "/images/covers/arirang.webp"
  ),
  createSong(
    "like-animals",
    "Like Animals",
    ["motivated", "happy"],
    "For letting yourself feel alive without holding back.",
    "/images/covers/arirang.webp"
  ),
  createSong(
    "they-dont-know-bout-us",
    "they don't know 'bout us",
    ["motivated"],
    "For being unapologetically yourself.",
    "/images/covers/arirang.webp"
  ),
  createSong(
    "one-more-night",
    "One More Night",
    ["happy"],
    "For the moments when you wish a beautiful night would never end.",
    "/images/covers/arirang.webp"
  ),
  createSong(
    "please",
    "Please",
    ["comfort", "nostalgic"],
    "For holding close the people who make you feel safe.",
    "/images/covers/arirang.webp"
  ),
  createSong(
    "into-the-sun",
    "Into the Sun",
    ["comfort", "motivated"],
    "For walking toward brighter days with hope in your heart.",
    "/images/covers/arirang.webp"
  ),
  createSong(
    "come-over",
    "Come Over",
    ["comfort", "nostalgic"],
    "For finding your way back to someone who feels like home."
  ),
];
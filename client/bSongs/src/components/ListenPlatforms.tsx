import { ExternalLink } from "lucide-react";
import type { Song } from "../types/song";

type Props = {
    song: Song;
};

function SpotifyIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="25"
            height="25"
            aria-hidden="true"
        >
            <circle cx="12" cy="12" r="12" fill="#1DB954" />

            <path
                d="M5.5 9c4.5-1.5 9.3-1 13 1.1M6.8 12.5c3.8-1.1 7.5-.7 10.5 1M8 15.8c2.9-.7 5.6-.4 8 .8"
                fill="none"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
        </svg>
    );
}


function YouTubeIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="25"
            height="25"
            className="shrink-0"
            aria-hidden="true"
        >
            <rect
                x="1"
                y="4"
                width="22"
                height="16"
                rx="5"
                fill="#FF0033"
            />
            <path
                d="M10 8L16 12L10 16Z"
                fill="white"
            />
        </svg>
    );
}

export default function ListenPlatforms({ song }: Props) {
    const platformStyles =
        "group flex min-w-0 items-center justify-center gap-2.5 rounded-xl border border-plum/15 bg-white/50 px-4 py-3.5 text-sm font-medium text-plum shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-dusty/50 hover:bg-white hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dusty motion-reduce:transition-none md:px-6 md:text-base";

    return (
        <section className="w-full max-w-md">
            <p className="mb-4 text-center font-mono text-[10px] tracking-[0.2em] text-plum/60 md:text-xs">
                WHERE WOULD YOU LIKE TO LISTEN?
            </p>

            <div className="grid grid-cols-2 gap-3">
                {/* Spotify */}
                <a
                    href={song.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={platformStyles}
                >
                    <SpotifyIcon />

                    <span>Spotify</span>

                    <ExternalLink
                        size={13}
                        aria-hidden="true"
                        className="shrink-0 text-dusty transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />

                    <span className="sr-only">
                        (opens in a new tab)
                    </span>
                </a>

                {/* YouTube */}
                <a
                    href={song.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={platformStyles}
                >

                    <YouTubeIcon />

                    <span>YouTube</span>

                    <ExternalLink
                        size={13}
                        aria-hidden="true"
                        className="shrink-0 text-dusty transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />

                    <span className="sr-only">
                        (opens in a new tab)
                    </span>
                </a>
            </div>
        </section>
    );
}
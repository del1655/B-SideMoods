import { Check } from "lucide-react";
import type { Mood, MoodOption } from "../types/song";

// Album covers
import nostalgicCover from "../../public/images/moods/Nostalgic.webp";
import motivatedCover from "../../public/images/moods/Motivated.webp";
import comfortCover from "../../public/images/moods/comfort.webp";
import happyCover from "../../public/images/moods/happy.webp";

const albumCovers: Record<Mood, string> = {
  nostalgic: nostalgicCover,
  motivated: motivatedCover,
  comfort: comfortCover,
  happy: happyCover,
};

type Props = {
  option: MoodOption;
  checked: boolean;
  onSelect: (mood: Mood) => void;
};
export default function MoodAlbum({
  option,
  checked,
  onSelect,
}: Props) {
  const cover = albumCovers[option.id];

  return (
    <label className="group relative block w-full min-w-0 cursor-pointer">
      <input
        type="radio"
        name="mood"
        value={option.id}
        checked={checked}
        onChange={() => onSelect(option.id)}
        className="sr-only"
        aria-label={`${option.label}. ${option.tagline}`}
      />

      {/* Album container */}
      <span className="relative isolate block w-full">

        {/* Animated album */}
        <span className="relative block w-full transition-transform duration-300 ease-out group-has-[:checked]:-translate-y-2 motion-reduce:transition-none">

          {/* CD */}
          <span
            aria-hidden="true"
            className="absolute top-1/2 left-[16%] block aspect-square w-[74%] -translate-y-1/2 rounded-full bg-[conic-gradient(from_45deg,#9075B2,#F8F5F0,#D8C8F0,#A995C4,#F8F5F0,#9075B2)] shadow-lg ring-1 ring-plum/10 transition-transform duration-500 ease-out group-hover:translate-x-[5%] group-has-[:checked]:translate-x-[13%] group-has-[:checked]:rotate-45 motion-reduce:transition-none"
          >
            {/* CD grooves */}
            <span className="absolute inset-[5%] rounded-full border border-white/40" />
            <span className="absolute inset-[12%] rounded-full border border-white/30" />
            <span className="absolute inset-[20%] rounded-full border border-white/30" />
            <span className="absolute inset-[28%] rounded-full border border-white/40" />

            {/* CD center */}
            <span className="absolute inset-[38%] rounded-full bg-silver/70 ring-1 ring-white/80" />
            <span className="absolute inset-[44%] rounded-full bg-paper shadow-inner" />
          </span>

          {/* Album cover */}
          <span className="relative z-10 block aspect-square w-[78%] overflow-hidden rounded-md shadow-lg shadow-plum/20 ring-1 ring-plum/10 transition-shadow duration-300 group-has-[:checked]:shadow-xl group-has-[:checked]:ring-3 group-has-[:checked]:ring-lilac group-has-[:focus-visible]:outline-2 group-has-[:focus-visible]:outline-offset-4 group-has-[:focus-visible]:outline-dusty">

            <img
              src={cover}
              alt=""
              draggable={false}
              className="h-full w-full object-cover"
            />

            {/* Selection indicator */}
            <span
              aria-hidden="true"
              className="absolute top-2 right-2 z-20 grid size-6 scale-75 place-items-center rounded-full bg-plum text-paper opacity-0 shadow-md transition duration-300 group-has-[:checked]:scale-100 group-has-[:checked]:opacity-100"
            >
              <Check size={14} strokeWidth={3} />
            </span>

          </span>
        </span>
      </span>

      {/* Album information */}
      <span className="mt-4 block text-left">
        <span className="block font-display text-lg font-semibold leading-tight text-plum md:text-2xl">
          {option.label}
        </span>

        <span className="mt-1 block text-xs leading-relaxed text-ink/60 md:text-sm">
          {option.tagline}
        </span>
      </span>
    </label>
  );
}
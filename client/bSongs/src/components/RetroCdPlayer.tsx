import { Play, SkipBack, SkipForward, Sparkles } from "lucide-react";

export default function RetroCdPlayer() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-[70%] max-w-[260px] sm:max-w-[400px] md:w-[90%] md:max-w-[480px] lg:max-w-[560px] xl:max-w-[600px]"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 scale-110 rounded-full bg-lilac/40 blur-3xl" />

      {/* Decorative sparkles */}
      <Sparkles
        className="absolute -right-5 top-0 text-dusty/70"
        size={30}
        strokeWidth={1.2}
      />

      <Sparkles
        className="absolute -left-5 bottom-16 text-dusty/50"
        size={22}
        strokeWidth={1.2}
      />

      {/* Player body */}
      <div className="relative rotate-[5deg] rounded-[2rem] border border-white/80 bg-linear-to-br from-[#F5F0FA] via-[#D8C8F0] to-[#B5A0D0] p-5 shadow-[10px_25px_50px_-15px_rgba(80,50,110,0.35)] transition-transform duration-700 hover:rotate-0 sm:p-6 lg:rounded-[2.5rem] lg:p-8">

        {/* Player branding */}
        <div className="mb-4 flex items-center justify-between">
          <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-plum">
            B-CDSongs
          </span>

          <span className="font-mono text-[9px] tracking-widest text-plum/60">
            BC-07
          </span>
        </div>

        {/* CD compartment */}
        <div className="relative aspect-square rounded-full border border-white/70 bg-plum/15 p-2 shadow-inner">

          {/* Rotating CD */}
          <div className="relative h-full w-full animate-[spin_24s_linear_infinite] rounded-full bg-[conic-gradient(from_30deg,#D8C8F0,#F8F5F0,#A995C4,#E9CDE1,#C8DCE7,#F8F5F0,#9075B2,#D8C8F0)] shadow-md motion-reduce:animate-none">

            {/* Disc grooves */}
            {[4, 8, 12, 16, 20, 25, 30].map((inset) => (
              <div
                key={inset}
                className="absolute rounded-full border border-white/30"
                style={{ inset: `${inset}%` }}
              />
            ))}

            {/* Disc typography */}
            <div className="absolute inset-x-0 top-[24%] text-center">
              <span className="font-display text-2xl tracking-[0.35em] text-plum/80">
                BTS
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-[22%] text-center">
              <span className="font-mono text-[7px] tracking-[0.15em] text-plum/70 sm:text-[9px]">
                THE MOOD COLLECTION
              </span>
            </div>

            {/* CD center */}
            <div className="absolute inset-[39%] rounded-full border border-white/80 bg-lilac/80 shadow-inner" />

            <div className="absolute inset-[45%] rounded-full bg-[#8E7BA7] ring-2 ring-white/60" />
          </div>

          {/* Transparent lid */}
          <div className="pointer-events-none absolute inset-0 rounded-full border-2 border-white/50 bg-linear-to-br from-white/25 via-transparent to-white/10" />

          {/* Glass reflection */}
          <div className="pointer-events-none absolute inset-[7%] rounded-full border-t-2 border-white/60" />
        </div>

        {/* Player controls */}
        <div className="mt-5 flex items-center justify-between gap-3">

          {/* LCD screen */}
          <div className="min-w-0 flex-1 rounded-lg border border-plum/20 bg-[#40364D] px-3 py-3 shadow-inner">
            <div className="flex items-center gap-2">
              <span className="size-1.5 animate-pulse rounded-full bg-[#D8C8F0] motion-reduce:animate-none" />

              <span className="font-mono text-[8px] tracking-wider text-lilac">
                STANDBY · 00
              </span>
            </div>

            <p className="mt-1 truncate font-mono text-xs tracking-wider text-paper sm:text-sm">
              YOUR MOOD
            </p>
          </div>

          {/* Decorative buttons */}
          <div className="flex shrink-0 items-center gap-2">
            <span className="text-plum/60">
              <SkipBack size={15} />
            </span>

            <span className="grid size-11 place-items-center rounded-full border border-white/80 bg-linear-to-br from-lilac to-dusty text-white shadow-md sm:size-12">
              <Play
                size={18}
                fill="currentColor"
                className="ml-0.5"
              />
            </span>

            <span className="text-plum/60">
              <SkipForward size={15} />
            </span>
          </div>
        </div>

        {/* Bottom branding */}
        <p className="mt-4 text-center font-mono text-[8px] tracking-[0.25em] text-plum/50">
          DIGITAL MOOD PLAYER
        </p>
      </div>


    </div>
  );
}
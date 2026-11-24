export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 md:px-12 md:py-5">
      <div className="flex items-center gap-3">
        <img
          src="/LogoBsongs.png"
          alt=""
          width={80}
          height={80}
          className="size-14 object-contain md:size-20"
        />
        <span className="font-display text-2xl font-semibold tracking-wide text-plum md:text-3xl">
          ARMY Vault
        </span>
      </div>
      <span className="rounded-full border border-plum/30 px-3 py-1 text-xs font-medium tracking-[0.2em] text-plum/70">
        VOL. 01
      </span>
    </header>
  );
}
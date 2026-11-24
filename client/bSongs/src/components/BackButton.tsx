import { ArrowLeft } from "lucide-react";

type Props = {
  onClick: () => void;
  label?: string;
};

export default function BackButton({
  onClick,
  label = "Back",
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="group inline-flex cursor-pointer items-center gap-3 text-plum focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dusty"
    >
      <span className="grid size-11 shrink-0 place-items-center rounded-full border border-dusty/30 bg-linear-to-br from-white/70 to-lilac/60 shadow-sm shadow-plum/10 transition-all duration-300 group-hover:border-dusty group-hover:bg-lilac group-hover:shadow-md group-active:scale-95 motion-reduce:transition-none md:size-14">
        <ArrowLeft
          size={24}
          strokeWidth={1.8}
          className="transition-transform duration-300 group-hover:-translate-x-0.5 motion-reduce:transition-none"
        />
      </span>

      <span className="hidden text-sm font-medium tracking-wide text-plum/70 transition-colors group-hover:text-plum md:block lg:text-base">
        {label}
      </span>
    </button>
  );
}
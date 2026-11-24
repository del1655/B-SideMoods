import { ArrowUpRight, Heart, Sparkles } from "lucide-react";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
import RetroCdPlayer from "../components/RetroCdPlayer";

type Props = {
    onStart: () => void;
};

export default function Welcome({ onStart }: Props) {
    return (
        <>
            <Header />

            <main className="relative mx-auto flex w-full max-w-[1600px] flex-1 items-center px-6 py-4 sm:px-10 sm:py-6 lg:px-20">

                {/* Ambient background */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute right-[5%] top-1/2 size-[45vw] -translate-y-1/2 rounded-full bg-lilac/25 blur-[120px]"
                />

                {/* Hero */}
                <section className="relative grid w-full items-center gap-5 md:grid-cols-2 md:gap-8 lg:gap-12">

                    {/* Text content: "contents" en mobile, bloque normal desde md */}
                    <div className="contents text-center md:order-1 md:block md:animate-fade-in md:text-left md:motion-reduce:animate-none">

                        {/* 1. Eyebrow */}
                        <div className="order-1 flex animate-fade-in items-center justify-center gap-2 motion-reduce:animate-none md:mb-5 md:animate-none md:justify-start">
                            <Sparkles size={15} strokeWidth={1.5} className="text-dusty" />

                            <span className="font-mono text-[10px] tracking-[0.2em] text-dusty sm:text-xs">
                                A LITTLE CORNER FOR ARMY
                            </span>
                        </div>

                        {/* 2. Título */}
                        <h1 className="order-2 animate-fade-in font-display text-[clamp(2.4rem,5.5vw,6.5rem)] leading-[1.02] tracking-tight text-plum motion-reduce:animate-none md:animate-none">
                            Every mood has a soundtrack.

                            <span className="mt-2 block italic text-dusty">
                                Find yours.
                            </span>
                        </h1>

                        {/* 5. Descripción (después del botón en mobile) */}
                        <p className="order-5 mx-auto max-w-lg animate-fade-in text-base leading-relaxed text-ink/70 motion-reduce:animate-none md:order-none md:mx-0 md:mt-6 md:animate-none lg:text-xl">
                            For the days you need comfort, a little
                            motivation, or a song that feels like home.
                            Discover the BTS song that matches your mood.
                        </p>

                        {/* 4. Botón */}
                        <div className="order-4 flex animate-fade-in justify-center motion-reduce:animate-none md:mt-8 md:animate-none md:justify-start">
                            <PrimaryButton
                                onClick={onStart}
                                className="w-full sm:w-auto"
                            >
                                <span className="flex items-center justify-center gap-8">
                                    Find my song
                                    <ArrowUpRight size={19} />
                                </span>
                            </PrimaryButton>
                        </div>

                        {/* 6. Contador */}
                        <div className="order-6 flex animate-fade-in items-center justify-center gap-2 text-xs text-plum/70 motion-reduce:animate-none md:mt-5 md:animate-none md:justify-start">
                            <Heart size={13} strokeWidth={1.5} />
                            <span>7 artists. Endless feelings.</span>
                        </div>
                    </div>

                    {/* 3. Retro CD player */}
                    <div className="relative order-3 flex w-full items-center justify-center md:order-2">
                        <RetroCdPlayer />
                    </div>

                </section>
            </main>

            <footer className="px-6 pt-10 pb-8 text-center md:pt-14 md:pb-10">
                {/* Decorative divider */}
                <div
                    aria-hidden="true"
                    className="mx-auto mb-8 flex max-w-md items-center gap-4"
                >
                    <span className="h-px flex-1 bg-linear-to-r from-transparent to-dusty/40" />
                    <Sparkles size={16} strokeWidth={1.5} className="text-dusty" />
                    <span className="h-px flex-1 bg-linear-to-l from-transparent to-dusty/40" />
                </div>

                {/* Fan message */}
                <p className="font-display text-2xl text-plum italic md:text-3xl">
                    Made with{" "}
                    <span role="img" aria-label="love" className="text-dusty">
                        ♡
                    </span>{" "}
                    for ARMY
                </p>

                {/* Developer credit */}
                <p className="mt-5 text-sm text-plum/80">
                    Designed &amp; developed by{" "}
                    <a
                        href="https://www.instagram.com/builtbydel/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group ml-1 inline-flex items-center gap-1 rounded-full border border-plum/20 bg-lilac/30 px-3 py-1 font-medium text-plum transition duration-200 hover:border-dusty hover:bg-lilac/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dusty motion-reduce:transition-none"
                    >
                        builtbydel
                        <ArrowUpRight
                            size={14}
                            aria-hidden="true"
                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:transform-none"
                        />
                        <span className="sr-only">(opens in a new tab)</span>
                    </a>
                </p>

                {/* Disclaimer */}
                <div className="mx-auto mt-6 max-w-sm space-y-0.5 text-xs leading-relaxed text-ink/70">
                    <p>An unofficial fan-made project.</p>
                    <p>Not affiliated with BTS, BIGHIT MUSIC or HYBE.</p>
                </div>
            </footer>
        </>
    );
}
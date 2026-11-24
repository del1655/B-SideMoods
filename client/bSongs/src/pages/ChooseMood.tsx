import Header from "../components/Header";
import MoodAlbum from "../components/MoodAlbum";
import PrimaryButton from "../components/PrimaryButton";
import { moods } from "../data/moods";
import type { Mood } from "../types/song";
import BackButton from "../components/BackButton";


type Props = {
    selected: Mood | null;
    onSelect: (mood: Mood) => void;
    onContinue: () => void;
    onBack: () => void;
};

export default function ChooseMood({ selected, onSelect, onContinue, onBack }: Props) {
    return (
        <>
            <Header />

            <div className="mx-auto w-full max-w-6xl px-6 pt-2 md:px-12 md:pt-4">
                <BackButton onClick={onBack} />
            </div>

            <main className="mx-auto flex w-full max-w-xl flex-1 animate-fade-in flex-col items-center overflow-x-clip px-8 pt-3 pb-10 text-center motion-reduce:animate-none md:px-12 md:pt-0">

                <h1 className="font-display text-4xl leading-tight text-plum md:text-5xl">
                    How are you feeling today?
                </h1>

                <p className="mt-3 text-lg text-ink/80">
                    Pick the album that matches your mood.
                </p>

                {/* El resto de tu código permanece igual */}

                <fieldset className="mt-10 w-full min-w-0">
                    <legend className="sr-only">Choose your mood</legend>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-8 md:gap-x-14 md:gap-y-12">
                        {moods.map((option) => (
                            <MoodAlbum
                                key={option.id}
                                option={option}
                                checked={selected === option.id}
                                onSelect={onSelect}
                            />
                        ))}
                    </div>
                </fieldset>

                <PrimaryButton
                    onClick={onContinue}
                    disabled={!selected}
                    className="mt-12 w-full md:w-auto"
                >
                    Find my song
                </PrimaryButton>
                <p className="mt-3 h-5 text-sm text-ink/70" aria-live="polite">
                    {selected ? "" : "Choose an album to continue."}
                </p>
            </main>
        </>
    );
}
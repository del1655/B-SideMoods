import { useState } from "react";
import Welcome from "./pages/Welcome";
import ChooseMood from "./pages/ChooseMood";
import YourSong from "./pages/YourSong";
import type { Mood } from "./types/song";

type Screen = "welcome" | "mood" | "song";

export default function App() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [mood, setMood] = useState<Mood | null>(null);

  return (
    
    <div className="flex min-h-dvh flex-col">
      
      {screen === "welcome" && (
        <Welcome onStart={() => setScreen("mood")} />
      )}

      {screen === "mood" && (
        <ChooseMood
          selected={mood}
          onSelect={setMood}
          onContinue={() => setScreen("song")}
          onBack={() => {
            setMood(null);
            setScreen("welcome");
          }}
        />
      )}

      {screen === "song" && mood && (
        <YourSong
          mood={mood}
          onBack={() => setScreen("mood")}
        />
      )}
      
    </div>
  );
}
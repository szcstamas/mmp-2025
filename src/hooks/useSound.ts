import { Howl } from "howler";
import { useCallback } from "react";

type SoundName =
  | "fullGameMusicLoop"
  | "buttonClick"
  | "newClueAppeared"
  | "navClick"
  | "turnPage"
  | "doorOpenCloses"
  | "storeItem"
  | "checkItem"
  | "femaleThroatClearing"
  | "cameraClick"
  | "defaultClick";

type PlaySoundOptions = {
  volume?: number;
  loop?: boolean;
};

const soundMap: Record<SoundName, string> = {
  fullGameMusicLoop: "/src/assets/sounds/fullGameMusicLoop.mp3",
  buttonClick: "/src/assets/sounds/onButtonClick.mp3",
  newClueAppeared: "/src/assets/sounds/newClueAppeared.mp3",
  navClick: "/src/assets/sounds/navLinksSound.mp3",
  turnPage: "/src/assets/sounds/turnPage.mp3",
  doorOpenCloses: "/src/assets/sounds/doorOpenCloses.mp3",
  storeItem: "/src/assets/sounds/storeItem.mp3",
  checkItem: "/src/assets/sounds/checkItem.mp3",
  femaleThroatClearing: "/src/assets/sounds/femaleThroatClearing.mp3",
  cameraClick: "/src/assets/sounds/cameraClick.mp3",
  defaultClick: "/src/assets/sounds/defaultClick.mp3",
};

export function useSound() {
  const playSound = useCallback(
    (name: SoundName, options: PlaySoundOptions = {}) => {
      const src = soundMap[name];
      if (!src) return;

      const { volume = 1, loop = false } = options;

      const sound = new Howl({
        src: [src],
        volume,
        loop,
      });

      sound.play();
    },
    []
  );

  return { playSound };
}

import React, { ReactNode, useState } from "react";
import hello from "../../sound/lastChristmas.mp3";
import { useRecoilValue } from "recoil";
import { audioState } from "../../recoil";

type Props = {
  children: ReactNode;
};

const SoundPlayer: React.FC<Props> = ({ children }) => {
  const [song] = useState<HTMLAudioElement>(new Audio(hello));
  const isPlayed = useRecoilValue(audioState);

  song.loop = true;
  song.volume = 0.8;

  if (isPlayed) {
    song.play().then((context) => console.log(context));
  } else {
    song.pause();
  }

  return <>{<div>{children}</div>}</>;
};

export default SoundPlayer;

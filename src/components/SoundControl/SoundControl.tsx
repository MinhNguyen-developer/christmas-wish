import React from "react";
import { useRecoilState } from "recoil";
import { audioState } from "../../recoil";
import { BiPlay, BiPause } from "react-icons/bi";

const SoundControl: React.FC = () => {
  const [play, setPlay] = useRecoilState(audioState);
  return (
    <>
      {play ? (
        <BiPause
          className="cursor-pointer text-red-200 text-[50px]"
          onClick={() => setPlay(false)}
        />
      ) : (
        <BiPlay
          className="cursor-pointer text-red-200 text-[50px]"
          onClick={() => setPlay(true)}
        />
      )}
    </>
  );
};

export default SoundControl;

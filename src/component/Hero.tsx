import React from "react";
import { FlipWords } from "./ui/flip-words";
import { AuroraBackground } from "./ui/aurora-background";

export function Hero() {
  const words = ["バイク", "キャンプ", "IT"];

  return (
    <AuroraBackground>
      <div className="h-[40rem] flex justify-center items-center px-4">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Banli's
          <br />
          Websites of
          <FlipWords words={words} />
        </div>
      </div>
    </AuroraBackground>
  );
}

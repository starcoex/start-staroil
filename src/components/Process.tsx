import React from "react";
import { PageIntro } from "./PageIntro";
import { FadeIn } from "./FadeIn";
import Chemical from "./Chemical";
import Dose from "./Dose";
import Training from "./Training";

const Process = () => {
  return (
    <div className="mt-24 sm:mt-32 lg:mt-40 relative isolate py-16 sm:py-28 md:py-32">
      <PageIntro
        description="별표주유소 운영"
        title="별표주유소에 세가지 원칙"
      />
      <FadeIn>
        <Dose />
      </FadeIn>
      <FadeIn>
        <Training />
      </FadeIn>
      <FadeIn>
        <Chemical />
      </FadeIn>
    </div>
  );
};

export default Process;

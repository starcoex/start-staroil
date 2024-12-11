import React from "react";
import { useQuoteQuery } from "../hooks/useQuoteQuery";
import { SectionIntro } from "./SectionIntro";

const Quote = () => {
  const { wpPage } = useQuoteQuery();
  return (
    <div className="mt-24 rounded-3xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="기업 이념"
        title={wpPage?.ACF_HomePage?.citat1Text!}
        invert
      >
        <cite className="ps-3 text-sm dark:text-gray-200 text-gray-300">
          {wpPage?.ACF_HomePage?.citat1Author}
        </cite>
      </SectionIntro>
    </div>
  );
};

export default Quote;

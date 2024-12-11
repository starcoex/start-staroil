import React from "react";
import { useCTAAreaQuery } from "../hooks/useCTAAreaQuery";
import Cta from "./CTA";

const CtaArea = () => {
  const { wpPage } = useCTAAreaQuery();
  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 gap-10 py-10">
      {new Array(4).fill("").map((element, index) => (
        <Cta
          key={index}
          image={
            wpPage?.ACF_HomePage[`cta${index + 1}Image`].localFile
              .childImageSharp.gatsbyImageData
          }
          link={wpPage?.ACF_HomePage?.[`cta${index + 1}Link`]}
          text={wpPage?.ACF_HomePage?.[`cta${index + 1}Text`]}
        />
      ))}
    </div>
  );
};

export default CtaArea;

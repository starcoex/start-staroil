import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { FadeIn } from "./FadeIn";

interface CTAProps {
  image: IGatsbyImageData;
  link: string;
  text: string;
}

const Cta = ({ image, link, text }: CTAProps) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <FadeIn>
        <div className="relative group">
          <GatsbyImage
            alt={""}
            image={image}
            className="w-full h-full transition-transform duration-300 transform-gpu group-hover:scale-110 focus:scale-110 object-cover"
          />
          <Link to={link}>
            <div className="absolute inset-0 bg-opacity-50 text-center flex items-center justify-center">
              <span className="text-2xl font-semibold text-white opacity-80 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300">
                {text}
              </span>
            </div>
          </Link>
        </div>
      </FadeIn>
    </div>
  );
};

export default Cta;

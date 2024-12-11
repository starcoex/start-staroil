import React from "react";
import useHeroQuery from "../hooks/useHeroQuery";
import { GatsbyImage } from "gatsby-plugin-image";
import SocialLink from "./SocialLink";
import { InstagramIcon, XIcon } from "./SocialIcons";
import NaverBlogIcon from "../images/naver-blog.svg";
import { Link } from "gatsby";
import { Button } from "./Button";

const Hero = () => {
  const { wpPage } = useHeroQuery();

  return (
    <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
      <main>
        <div className="relative isolate">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div
            aria-hidden="true"
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                    {wpPage?.ACF_HomePage?.heroText}
                  </h1>
                  <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    {wpPage?.ACF_HomePage?.heroText1}
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <SocialLink
                      to="javascript:alert('준비중입니다.')"
                      aria-label="Follow on X"
                      icon={XIcon}
                    />
                    <SocialLink
                      to="javascript:alert('준비중입니다.')"
                      aria-label="Follow on Instagram"
                      icon={InstagramIcon}
                    />
                    <Link
                      to={"https://blog.naver.com/zeragae"}
                      className="group -m-1 p-1"
                    >
                      <img
                        alt="naver-blog"
                        src={NaverBlogIcon}
                        className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                      />
                    </Link>
                  </div>
                  <div className="mt-10 flex gap-x-6">
                    <Link to={"https://youtu.be/o_taC1tkdrc"}>
                      <Button variant="outline">
                        <svg
                          aria-hidden="true"
                          className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
                        >
                          <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
                        </svg>
                        <span className="ml-3">Watch video</span>
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <GatsbyImage
                        alt={wpPage?.ACF_HomePage?.heroImage0?.altText!}
                        image={
                          wpPage?.ACF_HomePage?.heroImage0?.localFile
                            ?.childImageSharp?.gatsbyImageData!
                        }
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <GatsbyImage
                        alt={wpPage?.ACF_HomePage?.heroImage1?.altText!}
                        image={
                          wpPage?.ACF_HomePage?.heroImage1?.localFile
                            ?.childImageSharp?.gatsbyImageData!
                        }
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <GatsbyImage
                        alt={wpPage?.ACF_HomePage?.heroImage2?.altText!}
                        image={
                          wpPage?.ACF_HomePage?.heroImage2?.localFile
                            ?.childImageSharp?.gatsbyImageData!
                        }
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <GatsbyImage
                        alt={wpPage?.ACF_HomePage?.heroImage3?.altText!}
                        image={
                          wpPage?.ACF_HomePage?.heroImage3?.localFile
                            ?.childImageSharp?.gatsbyImageData!
                        }
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <GatsbyImage
                        alt={wpPage?.ACF_HomePage?.heroImage4?.altText!}
                        image={
                          wpPage?.ACF_HomePage?.heroImage4?.localFile
                            ?.childImageSharp?.gatsbyImageData!
                        }
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;

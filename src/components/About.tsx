import React from "react";
import staroldpicture from "../images/Pic 2952.jpg";
import starpicture2 from "../images/KakaoTalk_Photo_2024-12-07-16-46-07.jpg";
import starpicture from "../images/KakaoTalk_Photo_2024-12-07-16-46-00.jpg";
import staroldpicture2 from "../images/DSC02686.jpg";
import { SectionIntro } from "./SectionIntro";
import { Team } from "./Team";
import { FadeIn } from "./FadeIn";
import Seo from "./SEO";
import History from "./History";

interface AboutProps {
  title?: string;
}

const About = ({ title }: AboutProps) => {
  return (
    <>
      <Seo title={title} />
      <FadeIn>
        <div className="mt-32 overflow-hidden sm:mt-40">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  우리에 대하여
                </h1>
                <p className="mt-6 text-base/7 text-gray-600">
                  2003년 3월 별표석유를 시작으로, IMF와 경제위기에도 굳건히
                  어려움을 견더내 2011년 3월 별표주유소로 다시 한번 도약에
                  계기가 되었습니다.
                </p>
                <p className="mt-6 text-base/7 text-gray-600">
                  지금까지 별표주유소는 다른 주유소와 달리 고객과 소통을
                  중심으로 프리미엄 세차 시장을 이끌어 가고 있으며, 정확한 유류
                  공급을 하고 있습니다. 또한, 차별화된 버블세차 서비스와
                  빠른외부 손세차를 하고 있으며, 고객님들의 니즈에 맞는 새로운
                  서비스문화 창조를 위해 최선을 다하겠습니다. 앞으로도
                  별표주유소 임직원 모두는 사회적 기업으로써의 책임을 다할
                  것이며, 고객님들과 함께 성장해 나가겟습니다. 고객님들의
                  변함없는 관심과 사랑을 부탁드리며, 귀사의 무궁한 발전과 가정의
                  행복을 진심으로 기원합니다.
                </p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    alt=""
                    src={staroldpicture}
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <img
                      alt=""
                      src={starpicture2}
                      className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <img
                      alt=""
                      src={starpicture}
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <img
                      alt=""
                      src={staroldpicture2}
                      className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
      <History />
      <div className="mt-24 rounded-3xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
        <SectionIntro
          eyebrow="우리의 문화"
          title={"열정과 삶에 대한 열정의 균형을 맞추고 있습니다."}
          invert
        >
          <cite className="ps-3 dark:text-gray-200 text-gray-300 mt-10 max-w-2xl space-y-6 text-base">
            {
              "우리는 동일한 핵심 가치를 공유하는 같은 생각을 가진 사람들로 구성된 집단입니다."
            }
          </cite>
        </SectionIntro>
      </div>
      <Team />
      <div className="mt-24 sm:mt-32 lg:mt-40" />
    </>
  );
};
export default About;

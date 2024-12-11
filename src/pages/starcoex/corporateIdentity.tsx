import React from "react";
import PageLayout from "../../components/page-component";
import { BreadCrumb } from "../../components/breadCrumb";
import starcoexLogoHr from "../../images/starcoex_symbol_logo_hr.svg";
import starcoexLogo from "../../images/starcoex_logo.svg";
import starcoexLogoSymbol from "../../images/starcoex_symbol_logo.svg";
import zeragaeLogo from "../../images/zeragae_logo.svg";
import zeroageLogoHr from "../../images/zeragae_logo_hr.svg";
import starOilLogo from "../../images/starOil_logo.svg";
import starOilLogoHr from "../../images/starOil_logo_hr.svg";
import starcoexColorRed from "../../images/starcoex-전용레드.png";
import starcoexColorOrange from "../../images/starcoex-전용오렌지.png";
import zeragaeColorRed from "../../images/제라게빨강.png";
import zergaeColorBlack from "../../images/제라게검정.png";
import staroilColorRed from "../../images/별표 빨강.png";
import staroilColorOrange from "../../images/별표 오렌지.png";
import staroilColorYellow from "../../images/별표노랑.png";

const ciStarcoex = [
  {
    name: "스타코엑스",
    logo: starcoexLogoHr,
    define: "의미",
    word: {
      star: "Starcoex의 전신인 별표 석유의 이념승계",
      coex: "Coex: 종합 유통, 서비스 , 모빌리티등 모든것을 담고 싶다",
      color: "전용색상",
      colorWord: "",
    },
  },
  {
    name: "심볼(마크)",
    logo: starcoexLogoSymbol,
    define: "의미",
    word: {
      star: "S와 C를 형상화하여 담을 수 있고 정도를 의미할 수 있는 원형으로 표현",
      coex: "Star의 S에서 coex의 C로의 선과 색상의 변화 통해 역동적이고 활기찬 젊은 기업 이미지를 상징",
      expand: "",
      color: "전용색상",
    },
  },
  {
    name: "워드(마크)",
    logo: starcoexLogo,
    define: "의미",
    word: {
      star: "c : 중심으로 심볼을 표현하여 star를 이어가고 새로운 시작의 의미",
      coex: "oe : 무한한 가능을 표현하기 위해 “α“ 기호로 형상",
      expand: "x : oe와 연결되어 사방으로 뻗어 나가자는 미래지향적 의미",
      color: "전용색상",
      colorWord: "적색과 주황색을 교차하여 넘치는 에너지와 열정을 표현",
    },
  },
];
const ciZeragae = [
  {
    name: "제라게",
    logo: zeragaeLogo,
    define: "의미",
    word: {
      star: "Z의 앞부분과 R부분에 광택을 표시하여 세차브랜드의 의미를 부여",
      coex: "",
      color: "전용색상",
      colorWord: "",
    },
  },
  {
    name: "심볼(마크)",
    logo: zeragaeLogo,
    define: "의미",
    word: {
      star: "Zeragae의 약자 ZR",
      coex: "",
      expand: "",
      color: "전용색상",
    },
  },
  {
    name: "워드(마크)",
    logo: zeroageLogoHr,
    define: "의미",
    word: {
      star: "자동차 상부라인을 합성한 레터링은 날렵하고 추친력있는 자동차세차업의 선진브랜드라는 자부심과 긍지를 보여줌",
      coex: "",
      expand: "",
      color: "전용색상",
      colorWord: "적색과 주황색을 교차하여 넘치는 에너지와 열정을 표현",
    },
  },
];
const ciStarOil = [
  {
    name: "별표주유소",
    logo: starOilLogoHr,
    define: "의미",
    word: {
      star: "즐겁게 일하고 고객에게 친절한 활기차고 능동적인 서비스를 하는 기업의미지",
      coex: "",
      color: "전용색상",
      colorWord: "",
    },
  },
  {
    name: "심볼(마크)",
    logo: starOilLogo,
    define: "의미",
    word: {
      star: "별모양과 점프하는 사람의 모양을 합성하여 만든 심벌은 밝고 활기찬 엘로우와 오렌지, 마젠타 색상으로 구역을 나눠 다양한 서비스를 표현하고 역동적이고 희망찬 비전을 제시",
      coex: "",
      expand: "",
      color: "전용색상",
    },
  },
];

const ciColorStarcoex = [
  {
    colorName: "전용색상",
    colorLogo: {
      first: starcoexColorRed,
      second: starcoexColorOrange,
      three: starcoexColorOrange,
    },
    colorWord: {
      first: "적색과 주황색을 교차하여 넘치는 에너지와 열정을 표현",
      second: "원형과 색상이 어우러져 “태양”의 모습처럼 고객을 최우선으로 빛을 내기 위함",
    },
    finish: "표현내용",
    finishWord: {
      first: "역동(에너지), 성장(미래지향), 열정(누구나),",
    },
  },
];
const ciColorZeragae = [
  {
    colorName: "전용색상",
    colorLogo: {
      first: zeragaeColorRed,
      second: zergaeColorBlack,
      three: "",
    },
    colorWord: {
      first: "열정적인 제라게 레드와 블랙을 사용하여 품위있고 고급적인 브랜드의 지향점을 제시",
      second: "",
    },
    finish: "표현내용",
    finishWord: {
      first: "역동(에너지), 성장(미래지향), 열정(누구나),",
    },
  },
];
const ciColorStaroil = [
  {
    colorName: "전용색상",
    colorLogo: {
      first: staroilColorRed,
      second: staroilColorOrange,
      three: staroilColorYellow,
    },
    colorWord: {
      first: "적색과 주황색을 교차하여 넘치는 에너지와 열정을 표현",
      second: "원형과 색상이 어우러져 “태양”의 모습처럼 고객을 최우선으로 빛을 내기 위함",
    },
    finish: "표현내용",
    finishWord: {
      first: "역동(에너지), 성장(미래지향), 열정(누구나),",
    },
  },
];
const CorporateIdentity = () => {
  return (
    <PageLayout>
      <div className="mx-auto container px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <BreadCrumb
          //@ts-ignore
          parent={{ uri: "/starcoex/employment", title: "CI소개" }}
        />
      </div>
      <div className="mt-6 space-y-10 divide-gray-200 border-b border-t border-gray-200 pb-10">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">스타코엑스 CI 소개</h2>
          <p className="mt-6 text-base leading-8 text-gray-600">
            저희 스타코엑스는 고객과 사회에 가치를 전달하고 혁신적이고 역동적인 기업입니다. 우리의 CI는 회사의 정체성과
            가치를 대중에게 전달하며, 브랜드 이미지를 구축하고 강화하는 중요한 역할을 합니다.
          </p>
        </div>
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:grid lg:px-8 lg:grid-cols-4 lg:gap-x-8">
          {ciStarcoex.map((c, index) => (
            <div key={index}>
              <div className="">
                <img src={c.logo} className="h-16 w-1/2   object-fill" alt={c.name} />
              </div>
              <h3 className="mt-5 text-base font-medium leading-8 tracking-tight text-gray-900">{c.name}</h3>
              <p className="text-sm leading-6 text-gray-600">{c.define}</p>
              <p className="text-sm leading-6 text-gray-700">{c.word.star}</p>
              <p className="text-sm leading-6 text-gray-700">{c.word.coex}</p>
              <p className="text-sm leading-6 text-gray-700 mb-20">{c.word.expand}</p>
            </div>
          ))}
          {ciColorStarcoex.map((c) => (
            <div>
              <div>
                <img src={c.colorLogo.first} alt="" />
                <img src={c.colorLogo.second} alt="" />
              </div>
              <p className="text-sm leading-6 text-gray-700 mt-4">{c.colorWord.first}</p>
            </div>
          ))}
          <div className="lg:col-span-3">
            <p>Starcoex CI는 역동(에너지), 성장(미래지향), 열정(누구나) 지향점을 제시</p>
          </div>
        </div>
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:grid lg:px-8 lg:grid-cols-4 lg:gap-x-8">
          {ciZeragae.map((c, index) => (
            <div key={index}>
              <div className="">
                <img src={c.logo} className="h-16 w-1/2   object-fill" alt={c.name} />
              </div>
              <h3 className="mt-5 text-base font-medium leading-8 tracking-tight text-gray-900">{c.name}</h3>
              <p className="text-sm leading-6 text-gray-600">{c.define}</p>
              <p className="text-sm leading-6 text-gray-700">{c.word.star}</p>
              <p className="text-sm leading-6 text-gray-700">{c.word.coex}</p>
              <p className="text-sm leading-6 text-gray-700 mb-20">{c.word.expand}</p>
            </div>
          ))}
          {ciColorZeragae.map((c) => (
            <div>
              <div>
                <img src={c.colorLogo.first} alt="" />
                <img src={c.colorLogo.second} alt="" className="mt-1" />
              </div>
              <p className="text-sm leading-6 text-gray-700 mt-4">{c.colorWord.first}</p>
            </div>
          ))}
          <div className="lg:col-span-3">
            <p>제라(최고, 아주, 매우)와 제주도 사투리 게(’말할 것도 없이 당연하다’ 라는 뜻)의 합성어</p>
          </div>
        </div>{" "}
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:grid lg:px-8 lg:grid-cols-4 lg:gap-x-8">
          {ciStarOil.map((c, index) => (
            <div key={index}>
              <div className="">
                <img src={c.logo} className="h-16 w-1/2   object-fill" alt={c.name} />
              </div>
              <h3 className="mt-5 text-base font-medium leading-8 tracking-tight text-gray-900">{c.name}</h3>
              <p className="text-sm leading-6 text-gray-600">{c.define}</p>
              <p className="text-sm leading-6 text-gray-700">{c.word.star}</p>
              <p className="text-sm leading-6 text-gray-700">{c.word.coex}</p>
              <p className="text-sm leading-6 text-gray-700 mb-20">{c.word.expand}</p>
            </div>
          ))}
          {ciColorStaroil.map((c) => (
            <div>
              <div className="space-y-1">
                <img src={c.colorLogo.first} alt="" />
                <img src={c.colorLogo.second} alt="" />
                <img src={c.colorLogo.three} alt="" />
              </div>
            </div>
          ))}
          <div className="lg:col-span-3">
            <p>별모양을 분리하여 활기찬 사랑의 형상을 이미지화하여 친절한 서비스를 제공하는 업체의 모습을 제시</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CorporateIdentity;

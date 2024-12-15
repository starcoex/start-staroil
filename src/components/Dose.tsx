import React from "react";
import oil1 from "../images/oil1.png";
import oil2 from "../images/oil2.png";
import oil3 from "../images/oil3.png";

const collections = [
  {
    name: "가로*세로*높이=부피(량 or 리터)",
    href: "#",
    imageSrc: oil1,
    imageAlt: "",
    description:
      "기존 잔량이 남았을 경우 기름이 차있는 곳까지의 길이를 표시합니다.",
  },
  {
    name: "처음부터 주유 미터기를 반드시 확인하세요",
    href: "#",
    imageSrc: oil2,
    imageAlt: "",
    description:
      "0 부터시작해서 한드럼이면 200리터까지 들어가는 지를 미터기로 확인합니다.",
  },
  {
    name: "마지막 금액, 리터, 단가를 확인하세요",
    href: "#",
    imageSrc: oil3,
    imageAlt: "",
    description: "별표주유소는 금액, 리터, 단가가 정확히 일치합니다.",
  },
];

const Dose = () => {
  return (
    <section
      aria-labelledby="collection-heading"
      className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-10 lg:max-w-7xl lg:px-8"
    >
      <h2
        id="collection-heading"
        className="text-2xl font-bold tracking-tight text-gray-900"
      >
        정량
      </h2>
      <p className="mt-4 text-base text-gray-500">
        기름은 정량일까? 이런 걱정 하신적 있으시죠? 정확한 주유량 체크 방법을
        알려 드립니다.
      </p>

      <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
        {collections.map((collection) => (
          <div className="group block">
            <img
              alt={collection.imageAlt}
              src={collection?.imageSrc}
              className="aspect-[3/2] w-full rounded-lg object-contain group-hover:opacity-75 lg:aspect-[5/6]"
            />
            <h3 className="mt-4 text-base font-semibold text-gray-900">
              {collection.name}
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              {collection.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dose;

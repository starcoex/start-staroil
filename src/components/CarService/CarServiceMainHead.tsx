import React from "react";

interface CarServiceMainHeadProps {
  data: Queries.PageDataQuery;
}

const features = [
  {
    name: "Only 수도물",
    description: "절대 변하지 않는 원칙이며, 안심하고 이용해도 무방합니다.",
  },
  {
    name: "아주 쎈 고압세척기",
    description:
      "기본 고압세척기로는 고착된 이물질이 세척이 불가능하지만, 별표주유소는 기본 250bar 이상이 압력으로 세척을 합니다.",
  },
  {
    name: "세차 전용카드",
    description:
      "세차 전용카드 하나로 모든 서비스를 이용 할수 있으며, 세차 전용카드을 사용하면 더 많은 적립 서비스를 드리고 있습니다.",
  },
  {
    name: "소낙스 전용 버블세제",
    description:
      "전세게 인정받은 소낙스 세제만을 사용하고 있으며, 풍성한 거품이 가득합니다.",
  },
];

const CarServiceMainHead = ({ data }: CarServiceMainHeadProps) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <div className="border-b border-gray-200 pb-10">
              <h2 className="font-medium text-gray-500">
                별표주유소 세차서비스
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {data.wpPage?.title}
              </p>
            </div>

            <dl className="mt-10 space-y-10">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="text-sm font-medium text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-3 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <img
              alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
              src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-09-main-detail.jpg"
              className="aspect-square w-full rounded-lg bg-gray-100 object-cover"
            />
            <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
              <img
                alt="Detail of temperature setting button on kettle bass with digital degree readout."
                src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-09-detail-01.jpg"
                className="aspect-square w-full rounded-lg bg-gray-100 object-cover"
              />
              <img
                alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-09-detail-02.jpg"
                className="aspect-square w-full rounded-lg bg-gray-100 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarServiceMainHead;

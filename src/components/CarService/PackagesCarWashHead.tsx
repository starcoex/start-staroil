import React from "react";

interface PackagesCarWashHeadProps {
  data: Queries.PageDataQuery;
}

const features = [
  {
    name: "이용 요금",
    description: "10,000원, 미 주유 11,000원추가",
  },
  {
    name: "세차 방식",
    description:
      "반자동 블링블링 기계로 초벌 세척 후, 버블도포 후 밀대로 차량을 꼼꼼하게 세척 후 자동 세차로 다시 세척",
  },
  {
    name: "추가 기능",
    description: "하부 세차 포함",
  },
  {
    name: "세차 전용카드",
    description: "세차 전용카드 이용시 주유, 미주유 구분없이 10,000원에 이용 ",
  },
];

const PackagesCarWashHead = ({ data }: PackagesCarWashHeadProps) => {
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

export default PackagesCarWashHead;
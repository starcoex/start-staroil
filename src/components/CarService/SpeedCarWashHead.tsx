import React from "react";
import autodry from "../../images/free-icon-car-wash-1144264.png";
import waxdry from "../../images/free-icon-pre-soak-12988423.png";
import peopledry from "../../images/free-icon-car-service-2052442.png";
import chemical from "../../images/free-icon-car-wash-5481566.png";
import wheel from "../../images/맥 휠세척 (1).png";
import peoplewaxdry from "../../images/free-icon-car-wash-7481784.png";
import clean from "../../images/free-icon-car-wash-5910368.png";

interface SpeedCarWashHeadProps {
  data: Queries.PageDataQuery;
}

const features = [
  {
    name: "이용 요금",
    description: "15,000원, 미 주유 16,000원추가",
  },
  {
    name: "세차 방식",
    description:
      "먼저 오염도에 따라서 약품을 분사 후, 초벌 세척 후 양모미트로 외부만 손세차",
  },
  {
    name: "추가 기능",
    description: "하부 세차 포함",
  },
  {
    name: "세차 전용카드",
    description: "세차 전용카드 이용시 주유, 미주유 구분없이 15,000원에 이용 ",
  },
];

const items = [
  {
    name: "자동 건조",
    imageUrl: autodry,
    description: "자동 세차 기계로 강한 바람으로 건조",
  },
  {
    name: "왁스 건조",
    imageUrl: waxdry,
    description: "자동 세차 기계로 왁스 분사 후 강한 바람으로 건조",
  },
  {
    name: "수동 건조",
    imageUrl: peopledry,
    description: "사람이 직접 세차 타올이 건조(기계진입 없음)",
  },
];

const options = [
  {
    name: "하단 추가",
    imageUrl: chemical,
    description: "차량 하단 심한 오염 물질 제거",
    amount: "5,000원",
  },
  {
    name: "벌레 제거",
    imageUrl: chemical,
    description: "벌레제거제 도푸 후 초벌 벌레 제거",
    amount: "5,000원",
  },
  {
    name: "타르 제거",
    imageUrl: chemical,
    description: "타르제거제 분사 후 패드로 타르 제거",
    amount: "5,000원",
  },
  {
    name: "철분 제거",
    imageUrl: chemical,
    description: "철분 제거제 도포 후 패도로 철분 제거",
    amount: "20,000원",
  },
  {
    name: "휠 크리닝",
    imageUrl: wheel,
    description: "휠크리닝 세제를 분사 후 브러쉬로 제거",
    amount: "12,000(한 휠당 * 3,000원)원",
  },
  {
    name: "미백 세차",
    imageUrl: clean,
    description: "심한 얼룩 및 오염이 심한 차량에 세차",
    amount: "20,000원",
  },
  {
    name: "손 왁스 시공",
    imageUrl: peoplewaxdry,
    description: "사람이 직접 시공(타올 건조시만 가능)",
    amount: "7,000원",
  },
];

const SpeedCarWashHead = ({ data }: SpeedCarWashHeadProps) => {
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
              <section>
                <h2 className="text-sm font-medium text-gray-900">
                  차량 건조 방법(선택 1개)
                </h2>

                <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-10 lg:px-2">
                  <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
                    {items.map((item) => (
                      <div
                        key={item.name}
                        className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                      >
                        <div className="md:shrink-0">
                          <div className="flow-root">
                            <img
                              alt=""
                              src={item.imageUrl}
                              className="-my-1 mx-auto h-12 w-auto"
                            />
                          </div>
                        </div>
                        <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-4">
                          <h3 className="text-base font-medium text-gray-900">
                            {item.name}
                          </h3>
                          <p className="mt-3 text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <section>
                <h2 className="text-sm font-medium text-gray-900">
                  고급 옵션 품목
                </h2>

                <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-10 lg:px-2">
                  <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-6">
                    {options.map((option) => (
                      <div
                        key={option.name}
                        className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                      >
                        <div className="md:shrink-0">
                          <div className="flow-root">
                            <img
                              alt=""
                              src={option.imageUrl}
                              className="-my-1 mx-auto h-12 w-auto"
                            />
                          </div>
                        </div>
                        <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                          <h3 className="text-base font-medium text-gray-900">
                            {option.name}
                          </h3>
                          <p className="mt-3 text-sm text-gray-500">
                            {option.description}
                          </p>
                          <p className="mt-3 text-sm text-gray-500">
                            {option.amount}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
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

export default SpeedCarWashHead;

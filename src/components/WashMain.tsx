import React from "react";
import Container from "./Container";
import Pages from "./Pages";

interface WashMainProps {
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

const features1 = [
  {
    name: "이용 요금",
    description: "4,000원, 미 주유 1,000원추가",
  },
  {
    name: "세차 방식",
    description: "250bar 이상이 고압세척기로 차량에 찌든 오염물질을 세척",
  },
  {
    name: "세차 전용카드",
    description: "세차 전용카드 이용시 주유, 미주유 구분없이 4,000원에 이용",
  },
];
const features2 = [
  {
    name: "이용 요금",
    description: "6,000원, 미 주유 1,000원추가",
  },
  {
    name: "세차 방식",
    description:
      "풍성한 버블을 먼저 도포 후 250bar 이상이 고압세척기로 차량에 찌든 오염물질을 세척",
  },
  {
    name: "세차 전용카드",
    description: "세차 전용카드 이용시 주유, 미주유 구분없이 6,000원에 이용 ",
  },
];
const features3 = [
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

const features4 = [
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
    name: "옵션 품목 이용 금액",
    description: "하단 추가 : 2,000원",
  },
  {
    name: "세차 전용카드",
    description: "세차 전용카드 이용시 주유, 미주유 구분없이 15,000원에 이용 ",
  },
];

const WashMainTitle = ({ data }: WashMainProps) => {
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
const WashMainPart1 = ({ data }: WashMainProps) => {
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
              {features1.map((feature) => (
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
const WashMainPart2 = ({ data }: WashMainProps) => {
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
              {features2.map((feature) => (
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
const WashMainPart3 = ({ data }: WashMainProps) => {
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
              {features3.map((feature) => (
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
const WashMainPart4 = ({ data }: WashMainProps) => {
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
              {features4.map((feature) => (
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

const WashMain = ({ data }: WashMainProps) => {
  return (
    <>
      {data.wpPage?.title !== "소개" && (
        <>
          {data.wpPage?.title === "세차 서비스" && (
            <WashMainTitle data={data} />
          )}
          {data.wpPage?.title === "아주 쎈 초벌고압 기본세차" && (
            <WashMainPart1 data={data} />
          )}
          {data.wpPage?.title === "풍성한 거품 세차" && (
            <WashMainPart2 data={data} />
          )}
          {data.wpPage?.title === "패키지 세차" && (
            <WashMainPart3 data={data} />
          )}
          {data.wpPage?.title === "스피드 외부 손세차" && (
            <WashMainPart4 data={data} />
          )}

          <Container className="mt-16 pb-24">
            <Pages data={data} />
          </Container>
        </>
      )}
    </>
  );
};

export default WashMain;

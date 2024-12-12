import React from "react";
import Layout from "../../components/Layout";
import BreadCrumb from "../../components/BreadCrumb";

const stats = [
  { name: "임직원 및 가족 건강검진 무료 지원", value: "365" },
  { name: "개인 성과별 인센티브 지급", value: "α +" },
  { name: "주당 시간", value: "48" },
  { name: "유류비 지원", value: "월 60리터" },
];

const Employment = () => {
  return (
    <Layout>
      <div className="mx-auto container px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <BreadCrumb
          //@ts-ignore
          parent={{ uri: "/starcoex/employment", title: "인사채용" }}
        />
        <div className="mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:grid lg:px-8 lg:grid-cols-1 lg:gap-x-8">
            <h2 className="text-4xl font-bold  sm:text-2xl">
              우리와 함께 일하세요
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              저희 스타코엑스은 열정적이고 창의적인 인재를 찾고 있습니다. 당신이
              우리와 함께하신다면, 함께 성장하고 발전할 수 있는 훌륭한 기회가
              기다리고 있습니다. 우리 회사는 뛰어난 인재들이 모여 혁신적인
              아이디어를 공유하고 협력하여 혁신적인 제품과 서비스를 만들어내는
              것을 중요시합니다. 우리는 다양성과 포용성을 존중하며, 모든 직원이
              자신의 역량을 최대한 발휘할 수 있는 환경을 조성합니다. 우리의
              가치와 비전에 공감하고, 열정적으로 일하고 성장하고자 하는 분들을
              환영합니다. 우리와 함께 일하며 새로운 도전에 도전하고, 새로운
              경험을 쌓으며, 함께 성장하는 기회를 만들어보세요. 지원해 주셔서
              감사합니다. 우리가 함께 더 멋진 일들을 이루어 나갈 것을
              기대합니다!
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-6xl  ">
            <div className="mt-16 ml-10 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-700">
                    {stat.name}
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Employment;

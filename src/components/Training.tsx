import React from "react";
import Container from "./Container";
import imagetest from "../images/2.jpg";

const Training = () => {
  return (
    <Container className="mt-36">
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2
            id="collection-heading"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            소낙스 트레이닝 세차 교육
          </h2>
          <p className="mt-4 text-base text-gray-500 pb-8 sm:pb-10 ">
            제주 소낙스 도두점을 운영하고 있으며, 전문적으로 트레이닝 매니저가
            교육을 마치고 이수해서 빠른 외부 손세차 서비스를 하고 있습니다.
          </p>
          <p className="mt-6 text-sm/6 text-gray-600">
            소낙스(SONAX) 세차 서비스는 독일의 유명한 자동차 관리 브랜드인
            소낙스가 제공하는 세차 및 차량 관리 서비스입니다. 소낙스는 자동차
            외장과 내장 세차, 광택, 보호 코팅, 실내 청소 등 다양한 차량 관리
            제품과 서비스를 제공합니다.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            소낙스 트레이닝 세차 교육은 소낙스(SONAX) 브랜드의 전문적인 세차 및
            차량 관리 기술을 배우고, 이를 통해 높은 품질의 세차 서비스를 제공할
            수 있는 능력을 기르는 교육 프로그램입니다. 이 교육은 소낙스 제품의
            사용법과 세차 기술을 익히고자 하는 세차 전문가, 차량 관리 업계
            종사자 또는 차량 소유자에게 유용합니다. 주로 소낙스의 공식 교육
            센터나 파트너 업체에서 제공되며, 세차, 차량 디테일링 및 광택 작업
            등의 전문적인 기술을 습득하여 서비스를 제공하고 있습니다.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src={imagetest}
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/4.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Training;

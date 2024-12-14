import React from "react";
import starcoexLogo from "../images/starcoex-symbol-logo.svg";
import zeragaeLogo from "../images/zeragae_logo.svg";
import starOilLogo from "../images/star_oil.svg";
import sonaxLogo from "../images/sonax_logo.svg";
import GoogleMaps from "./GoogleMap";
import { Link } from "gatsby";
import Seo from "./SEO";

const locations = [
  {
    name: "주)스타코엑스",
    logo: starcoexLogo,
    phone: "064-713-2002",
    date: "2019-08",
    location: "제주특별자치도 제주시 연미길 10",
    google_map: "https://g.co/kgs/EaQAY4C",
    center: {
      lat: 33.492208,
      lng: 126.507788,
    },
  },

  {
    name: "별표주유소",
    logo: starOilLogo,
    phone: "064-713-2002",
    date: "2015-04",
    location: "제주특별자치도 제주시 연삼로 79",
    center: {
      lat: 33.493611,
      lng: 126.501089,
    },
  },
  {
    name: "제라게 카케어",
    logo: zeragaeLogo,
    phone: "064-713-2002",
    date: "2016-08",
    location: "제주특별자치도 제주시 일주서로 7697",
    center: {
      lat: 33.494224,
      lng: 126.469011,
    },
  },
  {
    name: "제주 소낙스 도두점",
    logo: sonaxLogo,
    phone: "064-713-2002",
    date: "2016-08",
    location: "제주특별자치도 제주시 일주서로 7697",
    center: {
      lat: 33.494224,
      lng: 126.469011,
    },
  },
];

interface ContactProps {
  title?: string;
}

const Contact = ({ title }: ContactProps) => {
  return (
    <>
      <Seo title={title} />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
              <div>
                <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900">
                  연락처
                </h2>
                <p className="mt-5 text-sm text-gray-500 uppercase">
                  연락을 원하시면 아래의 방법을 통해 언제든지 연락 주시기
                  바랍니다.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base/7 font-semibold text-gray-900">
                    스타코엑스
                  </h3>
                  <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <Link
                          to="mailto:starcoex@naver.com"
                          className="font-semibold text-indigo-600"
                        >
                          starcoex@naver.com
                        </Link>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">전화 번호</dt>
                      <dd>064-713-2002</dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base/7 font-semibold text-gray-900">
                    난방류 배달문의
                  </h3>
                  <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <Link
                          to="mailto:starcoex@naver.com"
                          className="font-semibold text-indigo-600"
                        >
                          starcoex@naver.com
                        </Link>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>064-702-5144</dd>
                      <dd>010-2843-0999</dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base/7 font-semibold text-gray-900">
                    제라게 카케어
                  </h3>
                  <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <Link
                          to="mailto:starcoex@naver.com"
                          className="font-semibold text-indigo-600"
                        >
                          starcoex@naver.com
                        </Link>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>064-713-2002</dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base/7 font-semibold text-gray-900">
                    제주 소낙스 도두점
                  </h3>
                  <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <Link
                          to="mailto:starcoex@naver.com"
                          className="font-semibold text-indigo-600"
                        >
                          starcoex@naver.com
                        </Link>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>064-713-2002</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-10 pt-16 lg:grid-cols-3">
              <div>
                <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900">
                  위치
                </h2>
                <p className="mt-5 text-sm text-gray-500 uppercase">
                  별표주유소 운영 시간: 오전 5시30분 ~ 오후 9시
                </p>
                <p className="mt-2 text-sm text-gray-500 uppercase">
                  제라게 카케어 운영 시간: 오전 9시 ~ 오후 6시
                </p>
                <p className="mt-2 text-sm text-gray-500 uppercase">
                  제라게 셀프세차 운영 시간: 오전 7시 ~ 오후 11시
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl bg-gray-50 p-1">
                  <GoogleMaps center={{ lat: 33.493611, lng: 126.501089 }} />
                  <div className="mt-1">
                    <dt className="sr-only">Location</dt>
                    <dd>별표주유소</dd>
                  </div>
                </div>
                <div className="rounded-2xl bg-gray-50 p-1">
                  <GoogleMaps center={{ lat: 33.494224, lng: 126.469011 }} />
                  <div className="mt-1">
                    <dt className="sr-only">Location</dt>
                    <dd>제라게 카케어</dd>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

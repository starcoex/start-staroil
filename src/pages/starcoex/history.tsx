import React from "react";

import koJungHunImage from "../../images/ko_first.jpeg";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import BreadCrumb from "../../components/BreadCrumb";

const days = [
  {
    name: "별표석유 창립",
    date: "2003-03",
    dateTime: "2003-03-31",
  },
  {
    name: "별표주유소 창립",
    date: "2011-02",
    dateTime: "2011-02-28",
  },
  {
    name: "별표주유소 도두점 창립",
    date: "2015-04",
    dateTime: "2015-04-01",
  },
  {
    name: "제라게 카케어 및 셀프세차장 창립",
    date: "2016-08",
    dateTime: "2016-08-10",
  },
  {
    name: "소낙스 제주대리점 체약",
    date: "2016-10",
    dateTime: "2016-10-20",
  },
  {
    name: "스타케미칼 b2b 사이트 개설",
    date: "2017-01",
    dateTime: "2017-01-20",
  },
  {
    name: "별표주유소 앱 출시",
    date: "2017-02",
    dateTime: "2017-02-30",
  },
  {
    name: "블랙박스 출장 서비스 런칭",
    date: "2018-06",
    dateTime: "2018-06-01",
  },
  {
    name: "제주신안네트윅스 창립",
    date: "2018-08",
    dateTime: "2018-08-01",
  },
  {
    name: "그늘막 메탈크래프트 제주지사 체약",
    date: "2018-09",
    dateTime: "2018-09-01",
  },
  {
    name: "소낙스 제주도두점 가맹점 체약",
    date: "2018-11",
    dateTime: "2018-11-01",
  },
  {
    name: "SK M&S 원포스 제주대리점 체약",
    date: "2019-07",
    dateTime: "2019-07-01",
  },
  {
    name: "주식회사 스타코엑스 창립",
    date: "2019-08",
    dateTime: "2019-08-01",
  },
  {
    name: "튠잇(아차키) 제주지사 체약",
    date: "2019-10",
    dateTime: "2019-10-01",
  },
  {
    name: "스타코엑스 앱 출시",
    date: "2020-04",
    dateTime: "2020-04-01",
  },
];

const peoples = [
  {
    name: "고 정훈",
    role: "대표이사",
    assignment: "총괄 책임자",
    image: koJungHunImage,
  },
  {
    name: "김 현진",
    role: "이사",
    assignment: "영업 이사",
    image: koJungHunImage,
  },
  {
    name: "김 수남",
    role: "팀장",
    assignment: "그늘막 및 신안네트윅스",
    image: koJungHunImage,
  },
  {
    name: "이 민로",
    role: "매니저",
    assignment: "제라게 카케어 및 소낙스 가맹점",
    image: koJungHunImage,
  },
  {
    name: "석 정우",
    role: "매니저",
    assignment: "별표주유소 및 신안네트윅스",
    image: koJungHunImage,
  },
];

const History = () => {
  return (
    <Layout>
      <div className="mx-auto container px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <BreadCrumb
          //@ts-ignore
          parent={{ uri: "/starcoex/history", title: "연혁" }}
        />
        <div className="mt-6 space-y-10 divide-gray-200 border-b border-t border-gray-200 pb-10">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid lg:px-8 lg:grid-cols-1 lg:gap-x-8">
            <h2 className="text-4xl font-bold  sm:text-2xl">주요 연혁</h2>
            <p className="mt-6 text-base leading-8 text-gray-700">
              스타코엑스은 설립 이후 여러 가지 놀라운 변화와 성장을
              거듭해왔습니다. 우리는 이제까지의 여정을 되돌아보며 자랑스럽게
              생각하며, 앞으로의 미래를 열심히 준비하고 있습니다.
            </p>
          </div>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:grid lg:px-8 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-3">
              {days.map((day, index) => (
                <>
                  <div
                    key={index}
                    className="relative flex items-baseline gap-6 pb-7"
                  >
                    {index !== days.length - 1 ? (
                      <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          className="bi bi-circle-fill fill-gray-400"
                          viewBox="0 0 16 16"
                        >
                          <circle cx="8" cy="8" r="8" />
                        </svg>
                      </div>
                    ) : (
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          className="bi bi-circle-fill fill-gray-400"
                          viewBox="0 0 16 16"
                        >
                          <circle cx="8" cy="8" r="8" />
                        </svg>
                      </div>
                    )}

                    <div>
                      <time dateTime={day.dateTime} className="">
                        <p className="text-xs text-gray-800">{day.date}</p>
                      </time>
                      <p className="mt-1 text-xs text-gray-800"> {day.name}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="mt-16 lg:col-span-9 lg:col-start-4 lg:mt-0">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {peoples.map((people, index) => (
                  <div key={index}>
                    <img
                      src={people.image}
                      className="aspect-[3/2] w-full rounded-2xl object-cover transition duration-300 group-hover:scale-110"
                    />
                    <h3 className="mt-3 text-sm font-medium leading-8 tracking-tight text-gray-900">
                      {people.name}
                    </h3>
                    <p className="text-xs leading-7 text-gray-600">
                      {people.role}
                    </p>
                    <p className="text-xs leading-7 text-gray-600">
                      {people.assignment}
                    </p>
                    <ul role="list" className="mt-2 flex gap-x-6">
                      <li>
                        <Link
                          to="#"
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">X</span>
                          <svg
                            className="h-4 w-4"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="h-4 w-4"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default History;

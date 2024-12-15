import React from "react";

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

const History = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-700">
            스타코엑스 연혁
          </p>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            앞으로 더 나아 가겠습니다.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
            모든 역량을 모아서 스타코엑스 앱 하나로 모든 서비스를
            통합하겠습니다.
          </p>
        </div>
        <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
          {days.map((day, index) => (
            <li className="flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
              ></span>
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
                <svg
                  className="h-5 w-5 text-gray-600 group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="mt-3 pl-3 sm:pe-8">
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {day.date}
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  {day.name}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default History;

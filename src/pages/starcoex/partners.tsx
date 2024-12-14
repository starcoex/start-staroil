import React from "react";

import samHwa from "../../images/sam_logo.jpeg";
import tuneit from "../../images/tuneit_logo.png";
import sk_ms from "../../images/sk_ms_logo.png";
import shinAn from "../../images/shinan_logo.png";
import shadeHouse from "../../images/sade_house_logo.png";
import alles from "../../images/alles_logo.png";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import BreadCrumb from "../../components/BreadCrumb";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Seo from "../../components/SEO";

const partners = [
  {
    name: "삼화석유",
    logo: samHwa,
    href: "#",
    role: "제주 유류 공급",
  },
  {
    name: "튠잇",
    logo: tuneit,
    href: "https://biz.tuneit.io/",
    role: "자동차 디지털 키, 아차키",
  },
  {
    name: "신안네트윅스",
    logo: shinAn,
    href: "http://www.18998639.com/default/",
    role: "밴, 포스 전문업체",
  },
  {
    name: "알레스",
    logo: alles,
    href: "https://www.alles.co.kr/",
    role: "소낙스 케미칼 유통 및 소낙스 카케어 가맹점",
  },
  {
    name: "쉐도우 하우스",
    logo: shadeHouse,
    href: "https://shadehouse.kr/",
    role: "대형 그늘막 및 쉐도우 전문 설치",
  },
  {
    name: "SK_M&S",
    logo: sk_ms,
    href: "https://www.skmnservice.com/pc_new/html/main.skmns",
    role: "SK 원포스 판매 및 유지보수",
  },
];

const Partners = () => {
  return (
    <Layout>
      <Seo title="파트너" />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              파트너
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              우리와 함께 협력하는 파트너를 소개합니다.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {partners.map((partner) => (
              <li key={partner.name} className="mt-6">
                <Link
                  to={partner.href}
                  target="_blank"
                  className="flex items-center justify-center"
                >
                  <img
                    alt={partner.name}
                    src={partner.logo}
                    width={200}
                    height={100}
                    className="aspect-[3/3] rounded-2xl object-contain"
                  />
                </Link>
                <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">
                  {partner.name}
                </h3>
                <p className="text-base/7 text-gray-600">{partner.role}</p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a
                      href={partner.href}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">X</span>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="size-5"
                      >
                        <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href={partner.href}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="size-5"
                      >
                        <path
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Partners;

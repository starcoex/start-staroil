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

const partners = [
  {
    name: "SamHwa",
    logo: samHwa,
    href: "#",
  },
  {
    name: "tuneit",
    logo: tuneit,
    href: "https://biz.tuneit.io/",
  },
  {
    name: "shinAn",
    logo: shinAn,
    href: "http://www.18998639.com/default/",
  },
  {
    name: "Alles",
    logo: alles,
    href: "https://www.alles.co.kr/",
  },
  {
    name: "shadeHouse",
    logo: shadeHouse,
    href: "https://shadehouse.kr/",
  },
  {
    name: "SK_M&S",
    logo: sk_ms,
    href: "https://www.skmnservice.com/pc_new/html/main.skmns",
  },
];

const Partners = () => {
  return (
    <Layout>
      <div className="mx-auto container px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <BreadCrumb
          parent={{
            uri: "/starcoex/partners",
            title: "파트너",
          }}
        />
        <div className="mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10">
          <div className="text-center">
            <h2 className="text-gray-900 text-center font-medium mb-4 block mt-16">
              스타코엑스 파트너
            </h2>
            <p className="font-display text-2xl font-medium tracking-tighter text-gray-900 sm:text-3xl mt-6">
              우리는 최고의 파트너와 협력합니다
            </p>
          </div>
          <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="mt-12 flex items-center justify-center"
              >
                <Link to={partner.href}>
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={60}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Partners;

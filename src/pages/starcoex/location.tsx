import React from "react";

import starcoexLogo from "../../images/starcoex_symbol_logo.svg";
import zeragaeLogo from "../../images/zeragae_logo.svg";
import starOilLogo from "../../images/starOil_logo.svg";
import sonaxLogo from "../../images/sonax_logo.svg";
import Layout from "../../components/Layout";
import BreadCrumb from "../../components/BreadCrumb";
import GoogleMaps from "../../components/GoogleMap";

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

const Location = () => {
  return (
    <Layout>
      <div className="mx-auto container px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <BreadCrumb parent={{ uri: "/starcoex/location", title: "위치" }} />
        <div className="mt-6 space-y-10 divide-gray-200 border-b border-t border-gray-200 pb-10">
          {locations.map((location, index) => (
            <div key={index} className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
              <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                  <img
                    src={location.logo}
                    alt={location.name}
                    className="h-16 w-16 float-none"
                  />
                  <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                    {location.name}
                  </h3>
                </div>
                <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                  <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                    {location.location}
                  </p>
                  <p className="text-xs tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                    {location.phone}
                  </p>
                  <p className="text-xs text-neutral-950 lg:mt-2">
                    <time dateTime={location.date}>{location.date}</time>
                  </p>
                </div>
              </div>
              <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                {/* <div id="map" style={{ height: "600px" }}>
                  maps
                </div> */}
                <GoogleMaps center={location.center} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Location;

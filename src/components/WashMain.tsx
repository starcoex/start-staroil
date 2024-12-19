import React from "react";
import Container from "./Container";
import Pages from "./Pages";
import CarServiceMainHead from "./CarService/CarServiceMainHead";
import AutoCarWashHead from "./CarService/AutoCarWashHead";
import BubbleCarWashHead from "./CarService/BubbleCarWashHead";
import PackagesCarWashHead from "./CarService/PackagesCarWashHead";
import SpeedCarWashHead from "./CarService/SpeedCarWashHead";

interface WashMainProps {
  data: Queries.PageDataQuery;
}

const WashMain = ({ data }: WashMainProps) => {
  return (
    <>
      {data.wpPage?.title !== "소개" && (
        <>
          {data.wpPage?.title === "세차 서비스" && (
            <CarServiceMainHead data={data} />
          )}
          {data.wpPage?.title === "아주 쎈 초벌고압 기본세차" && (
            <AutoCarWashHead data={data} />
          )}
          {data.wpPage?.title === "풍성한 거품 세차" && (
            <BubbleCarWashHead data={data} />
          )}
          {data.wpPage?.title === "패키지 세차" && (
            <PackagesCarWashHead data={data} />
          )}
          {data.wpPage?.title === "스피드 외부 손세차" && (
            <SpeedCarWashHead data={data} />
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

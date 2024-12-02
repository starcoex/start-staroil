import clsx from "clsx";
import React from "react";
import logoStarcoex from "../images/starcoexLogo.svg";

export default function Logo({
  className,
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={clsx(
        className,
        "flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4"
      )}
    >
      <img
        alt="Starcoex Company"
        src={logoStarcoex}
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
    </div>
  );
}

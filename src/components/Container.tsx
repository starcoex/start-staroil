import clsx from "clsx";
import React from "react";

interface IContainer {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ className, children }: IContainer) {
  return (
    <div className={clsx(className, " px-6 lg:px-8 ")}>
      <div className="mx-auto max-w-2xl lg:max-w-7xl">{children}</div>
    </div>
  );
}

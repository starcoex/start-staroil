import React from "react";
import useMenuQuery from "../hooks/useMenuQuery";
import { Disclosure } from "@headlessui/react";

function DesktopNav() {
  const data = useMenuQuery();
  console.log(data);
  return <nav>nav</nav>;
}

export default function Navbar() {
  return (
    <Disclosure as={"header"} className={"pt-12 sm:pt-16"}>
      navbar
      <DesktopNav />
    </Disclosure>
  );
}

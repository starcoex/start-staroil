import React, { useState } from "react";
import useMenuQuery from "../hooks/useMenuQuery";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Link, PageProps } from "gatsby";
import { PlusGrid, PlusGridItem, PlusGridRow } from "./Plus-grid";
import Logo from "./Logo";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars2Icon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const DesktopNav = () => {
  const { site, wpMenu }: PageProps<Queries.HeaderQueryQuery> = useMenuQuery();
  return (
    <nav aria-label="main navigation" className="relative hidden lg:flex">
      <PopoverGroup className="hidden lg:flex lg:gap-x-12">
        {wpMenu?.menuItems?.nodes.map((menu) =>
          !menu.parentId ? (
            <PlusGridItem key={menu.id} className="relative flex items-center">
              <Link
                to={menu.url!}
                className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-[hover]:bg-black/[2.5%]"
              >
                {menu.label}
              </Link>
              {menu.childItems?.nodes.length !== 0 && (
                <Popover className="relative">
                  <PopoverButton className="flex items-center  gap-x-1 text-sm/6 font-semibold text-gray-900">
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-1 text-gray-400"
                    />
                  </PopoverButton>
                  <PopoverPanel
                    transition
                    className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="p-4">
                      {menu.childItems?.nodes.map((item) => (
                        <div
                          key={item.id}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                        >
                          <div className="flex-auto">
                            <Link
                              to={item.url!}
                              className="block font-semibold text-gray-900"
                            >
                              {item.label}
                              <span className="absolute inset-0" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </PopoverPanel>
                </Popover>
              )}
            </PlusGridItem>
          ) : null
        )}
      </PopoverGroup>
    </nav>
  );
};

const MobileNavButton = () => {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-[hover]:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  );
};

const MobileNav = () => {
  const data: PageProps<Queries.HeaderQueryQuery> = useMenuQuery();
  const { wpMenu } = data;
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        {wpMenu?.menuItems?.nodes.map((menu, linkIndex) =>
          !menu.parentId ? (
            <motion.div
              initial={{ opacity: 0, rotateX: -90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{
                duration: 0.15,
                ease: "easeInOut",
                rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
              }}
              key={menu.id}
              className="flex items-center"
            >
              <Link
                to={menu.url}
                className="text-base font-medium text-gray-950"
              >
                {menu.label}
              </Link>
              {menu.childItems?.nodes.length !== 0 && (
                <Popover className="relative">
                  <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-400"
                    />
                  </PopoverButton>
                  <PopoverPanel
                    transition
                    className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="p-4">
                      {menu.childItems?.nodes.map((item) => (
                        <div
                          key={item.id}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                        >
                          <div className="flex-auto">
                            <Link
                              to={item.url!}
                              className="block font-semibold text-gray-900"
                            >
                              {item.label}
                              <span className="absolute inset-0" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </PopoverPanel>
                </Popover>
              )}
            </motion.div>
          ) : null
        )}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  );
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Disclosure as={"header"} className={"pt-12 sm:pt-16"}>
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between">
          <div className="relative flex gap-6">
            <PlusGridItem className="py-3">
              <Link to={"/"}>
                <Logo className="h-9" />
              </Link>
            </PlusGridItem>
          </div>
          <DesktopNav />
          <MobileNavButton />
        </PlusGridRow>
      </PlusGrid>
      <MobileNav />
    </Disclosure>
  );
}

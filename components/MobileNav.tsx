"use client";

import { menus } from "@/config";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <MenuIcon className="text-[32px] text-sky-600 dark:text-sky-400" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {menus.map((menu, index) => {
          return (
            <Link
              key={index}
              href={menu.link}
              className={`${
                menu.link === pathname &&
                "border-b border-green-900 dark:border-sky-400"
              } capitalize text-green-900 dark:text-sky-400 font-menu transition-all`}
            >
              {menu.label}
            </Link>
          );
        })}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

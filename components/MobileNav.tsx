"use client";

import { menus } from "@/config";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";
import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between gap-4 items-center">
      <ThemeSwitch />
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <MenuIcon className="text-[32px] text-sky-600 dark:text-sky-400" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <div className="mt-20 mb-20 flex justify-center">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <nav className="flex flex-col justify-center items-center gap-8">
            {menus.map((menu, index) => {
              return (
                <Link
                  key={index}
                  href={menu.link}
                  className={`${
                    menu.link === pathname &&
                    "text-sky-700 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 border-b border-green-900 dark:border-sky-400"
                  } capitalize font-menu transition-all`}
                >
                  {menu.label}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;

"use client";

import { menus } from "@/config";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {menus.map((menu, index) => {
        return (
          <Link
            key={index}
            href={menu.link}
            className={`${
              menu.link === pathname &&
              "border-b border-sky-700 dark:border-sky-400"
            } capitalize text-sky-700 dark:text-sky-400 font-menu transition-all`}
          >
            {menu.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;

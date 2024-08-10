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
              "text-sky-700 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 border-b border-sky-700 hover:border-sky-800 dark:border-sky-400 dark:hover:border-sky-300"
            } capitalize font-menu transition-all`}
          >
            {menu.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;

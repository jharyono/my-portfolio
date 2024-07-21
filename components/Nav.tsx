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
              "border-b border-green-900 dark:border-green-400"
            } capitalize text-green-900 dark:text-green-400 font-menu transition-all`}
          >
            {menu.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;

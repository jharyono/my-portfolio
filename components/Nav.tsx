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
              "text-green-900 dark:text-green-400 border-b-2"
            } capitalize font-menu font-semibold transition-all`}
          >
            {menu.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;

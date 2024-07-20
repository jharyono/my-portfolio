import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import Logo from "./Logo";
import { Button } from "./ui/button";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>

        {/* desktop and hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />

          {/* dark light switcher */}
          <ThemeSwitch />

          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
};

export default Header;

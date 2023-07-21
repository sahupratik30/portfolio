"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MobileMenu from "./mobileMenu";
import { useTheme } from "next-themes";

interface NavbarProps {
  onToggleMobileMenu: (isOpenMobileMenu: boolean) => void;
}

const Navbar = ({ onToggleMobileMenu }: NavbarProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  // function to toggle mobile menu
  const _toggleMobileMenu = (show: boolean) => {
    setShowMobileMenu(show);
    onToggleMobileMenu(show);
  };

  return (
    <>
      <div className="sticky top-0 z-10 bg-white dark:bg-black">
        <div className="flex items-center justify-between max-w-6xl px-4 py-4 mx-auto lg:px-6">
          {/* logo */}
          <Link href="/">
            <h1 className="text-2xl font-extrabold md:text-3xl w-max gradient-text">
              PRATIK.
            </h1>
          </Link>

          {/* nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 text-base">
              {navLinks?.map((link) => (
                <li key={link?.name}>
                  <Link
                    href={link?.href}
                    className={`uppercase transition ${
                      pathname === link?.href
                        ? "gradient-text font-medium"
                        : "hover:text-orange-400"
                    }`}
                  >
                    {link?.name}
                  </Link>
                </li>
              ))}

              <FontAwesomeIcon
                icon={theme === "dark" ? faSun : faMoon}
                className={`text-xl ${
                  theme === "dark" ? "text-orange-400" : "text-gray-600"
                } cursor-pointer -rotate-12`}
                onClick={() =>
                  theme === "dark" ? setTheme("light") : setTheme("dark")
                }
              />
            </ul>
          </nav>

          <div className="flex items-center gap-6 lg:hidden">
            {/* dark mode toggle icon */}
            <FontAwesomeIcon
              icon={theme === "dark" ? faSun : faMoon}
              className={`text-xl ${
                theme === "dark" ? "text-orange-400" : "text-gray-600"
              } cursor-pointer -rotate-12`}
              onClick={() =>
                theme === "dark" ? setTheme("light") : setTheme("dark")
              }
            />

            {/* mobile menu button */}
            <FontAwesomeIcon
              icon={faBars}
              className="text-lg text-orange-600 lg:hidden"
              onClick={() => _toggleMobileMenu(true)}
            />
          </div>
        </div>
      </div>

      <MobileMenu
        onClose={() => _toggleMobileMenu(false)}
        isActive={showMobileMenu}
      />

      {showMobileMenu && (
        <div className="overlay" onClick={() => _toggleMobileMenu(false)} />
      )}
    </>
  );
};

export default Navbar;

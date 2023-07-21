"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { navLinks } from "../config";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  onClose: () => void;
  isActive: boolean;
}

const MobileMenu = ({ onClose, isActive }: MobileMenuProps) => {
  const pathname = usePathname();

  return (
    <div
      className={`mobile-menu dark:bg-black ${
        !isActive ? "translate-x-[110%]" : "-translate-x-0"
      }`}
    >
      <FontAwesomeIcon
        icon={faXmark}
        className="absolute text-xl text-red-500 right-3"
        onClick={onClose}
      />

      {/* menu */}
      <ul className="flex flex-col gap-12 pl-3 mt-4">
        {navLinks?.map((link) => (
          <li key={link?.name}>
            <Link
              href={link?.href}
              className={`uppercase ${
                pathname === link?.href ? "gradient-text font-medium" : ""
              }`}
              onClick={onClose}
            >
              {link?.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;

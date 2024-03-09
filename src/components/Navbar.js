import {Icon} from "@iconify/react";
import {HashLink} from "react-router-hash-link";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 left-0 z-40 bg-primary h-20 grid p-3">
      <nav className="w-full flex items-center justify-between container mx-auto">
        <div>
          <button className="text-white">Elias Grinwis Plaat Stultjes</button>
        </div>

        <div className="nav__menu hidden sm:block" id="nav-menu">
          <ul className="flex gap-5 pt-0">
            <li className="nav__item">
              <HashLink smooth to="#" className="relative text-white">
                HOME
              </HashLink>
            </li>
            <li className="nav__item">
              <HashLink smooth to="#about" className="relative text-white">
                OVER MIJ
              </HashLink>
            </li>
            <li className="nav__item">
              <HashLink smooth to="#stage" className="relative text-white">
                STAGE
              </HashLink>
            </li>
            <li className="nav__item">
              <HashLink smooth to="#skills" className="relative text-white">
                SKILLS
              </HashLink>
            </li>
            <li className="nav__item">
              <HashLink smooth to="#projects" className="relative text-white">
                REALISATIES
              </HashLink>
            </li>
          </ul>
        </div>

        <div className="nav__toggle sm:hidden " id="nav-toggle">
          <Icon
            className="w-10 h-10 text-white cursor-pointer"
            icon="ci:hamburger-lg"
          />
        </div>
      </nav>
    </header>
  );
}

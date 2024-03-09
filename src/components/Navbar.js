import {Icon} from "@iconify/react";
import {useState} from "react";
import {HashLink} from "react-router-hash-link";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  function toggleNavbar() {
    setToggle(!toggle);
  }

  return (
    <header className="w-full sticky top-0 left-0 z-40 bg-primary h-20 grid p-3">
      <nav className="w-full flex items-center justify-between container mx-auto">
        <div>
          <button className="text-white">Elias Grinwis Plaat Stultjes</button>
        </div>

        {/* Overlay */}
        {toggle && (
          <div className="fixed inset-0 bg-black opacity-80 z-50"></div>
        )}

        <div>
          {toggle && (
            <div className="fixed inset-0 flex items-center justify-center z-50 px-3">
              <div className="bg-primary p-8 w-full rounded-lg">
                <div className="w-full nav__menu" id="nav-menu">
                  <ul className="pt-0 text-center">
                    <li
                      className="nav__item p-1"
                      onClick={() => toggleNavbar()}>
                      <HashLink smooth to="#" className="relative text-white">
                        HOME
                      </HashLink>
                    </li>
                    <li
                      className="nav__item p-1"
                      onClick={() => toggleNavbar()}>
                      <HashLink
                        smooth
                        to="#about"
                        className="relative text-white">
                        OVER MIJ
                      </HashLink>
                    </li>
                    <li
                      className="nav__item p-1"
                      onClick={() => toggleNavbar()}>
                      <HashLink
                        smooth
                        to="#stage"
                        className="relative text-white">
                        STAGE
                      </HashLink>
                    </li>
                    <li
                      className="nav__item p-1"
                      onClick={() => toggleNavbar()}>
                      <HashLink
                        smooth
                        to="#skills"
                        className="relative text-white">
                        SKILLS
                      </HashLink>
                    </li>
                    <li
                      className="nav__item p-1"
                      onClick={() => toggleNavbar()}>
                      <HashLink
                        smooth
                        to="#projects"
                        className="relative text-white">
                        REALISATIES
                      </HashLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
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

        <div
          className="nav__toggle sm:hidden "
          id="nav-toggle"
          onClick={() => toggleNavbar()}>
          <Icon
            className="w-10 h-10 text-white cursor-pointer"
            icon="ci:hamburger-lg"
          />
        </div>
      </nav>
    </header>
  );
}

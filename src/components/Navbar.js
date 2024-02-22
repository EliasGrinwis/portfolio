export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-40 bg-primary h-20 grid">
      <nav className="w-full flex items-center justify-between container mx-auto">
        <div>
          <a href="#" className="text-white">
            Elias Grinwis Plaat Stultjes
          </a>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="flex gap-5 pt-0">
            <li className="nav__item">
              <a href="#home" className="relative text-white active-link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="relative text-white">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="relative text-white">
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="relative text-white">
                Work
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="relative text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* <div class="nav__toggle" id="nav-toggle">
          <i class="bx bx-menu"></i>
        </div> */}
      </nav>
    </header>
  );
}

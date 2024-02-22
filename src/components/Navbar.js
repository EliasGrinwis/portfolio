export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-40 bg-primary h-20 grid">
      <nav className="w-full flex items-center justify-between container mx-auto">
        <div>
          <button className="text-white">Elias Grinwis Plaat Stultjes</button>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="flex gap-5 pt-0">
            <li className="nav__item">
              <button className="relative text-white active-link">Home</button>
            </li>
            <li className="nav__item">
              <button className="relative text-white">About</button>
            </li>
            <li className="nav__item">
              <button className="relative text-white">Skills</button>
            </li>
            <li className="nav__item">
              <button className="relative text-white">Work</button>
            </li>
            <li className="nav__item">
              <button className="relative text-white">Contact</button>
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

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#rooms", label: "Rooms" },
  { href: "#showcases", label: "Showcases" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-neutral/95 text-neutral-content backdrop-blur-md border-b border-warning/20 shadow-lg">
      <div className="navbar max-w-7xl mx-auto px-4 md:px-6">
        <div className="navbar-start gap-3">
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/img/dawala-logo.png"
              alt="Dawala Hotel logo"
              className="size-9 rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-bold text-xl sm:text-2xl text-warning uppercase tracking-wider">
              Dawala Hotel
            </span>
          </a>
        </div>

        {/* Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-medium hover:text-warning focus:text-warning transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <a
            href="https://wa.me/6285175143435"
            className="btn btn-warning btn-sm hidden sm:inline-flex font-semibold"
          >
            Book Now
          </a>

          {/* Mobile dropdown */}
          <div className="dropdown dropdown-end lg:hidden">
            <button
              type="button"
              tabIndex={0}
              aria-label="Toggle navigation menu"
              className="btn btn-ghost btn-square"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content bg-neutral text-neutral-content rounded-box z-50 mt-3 w-56 p-3 shadow-2xl border border-warning/20"
            >
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-warning">
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 pt-2 border-t border-neutral-content/10 sm:hidden">
                <a
                  href="https://wa.me/6285175143435"
                  className="btn btn-warning btn-sm font-semibold"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="nav-bar relative">
      {/* Logo/Name */}
      <h1 className="m-2 text-support3 font-bold font-montserrat tracking-[0.2rem] text-lg sm:text-xl">
        Mario Salinas
      </h1>

      {/* Desktop Menu - Show on medium screens and up */}
      <ul className="flex items-center justify-center text-support3 font-bold font-montserrat max-md:hidden">
        {navItems.map((item) => (
          <li key={item.label} className="li-nav">
            <a href={item.href} className="transition-colors duration-200 hover:text-accent">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Button - Show on small screens only */}
      <button
        onClick={toggleMenu}
        className="flex flex-col items-center justify-center w-8 h-8 mr-2 focus:outline-none md:hidden"
        aria-label="Toggle menu"
      >
        <span 
          className={`block w-6 h-0.5 bg-support3 transition-all duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}
        ></span>
        <span 
          className={`block w-6 h-0.5 bg-support3 transition-all duration-300 mt-1 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span 
          className={`block w-6 h-0.5 bg-support3 transition-all duration-300 mt-1 ${
            isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        ></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div 
        className={`fixed top-16 left-0 right-0 bg-primary border-t border-accent z-50 md:hidden transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <ul className="flex flex-col py-4">
          {navItems.map((item) => (
            <li key={item.label} className="border-b border-accent border-opacity-20 last:border-b-0">
              <a 
                href={item.href}
                onClick={closeMenu}
                className="block px-6 py-4 text-support3 font-bold font-montserrat text-lg
                         hover:bg-accent hover:bg-opacity-10 transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

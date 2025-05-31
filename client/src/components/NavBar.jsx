import React from 'react';

const NavBar = () => {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '#products', label: 'Products' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md p-8 h-4rem z-50 px-45" aria-label="Main navigation">
      <div className="flex justify-between items-center">
        {/* Logo o marca */}
        <a href="#home" className="text-2xl font-bold hover:text-yellow-400 transition-colors">
          BATERIMAX
        </a>

        {/* Enlaces */}
        <ul className="flex gap-12">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded transition-colors duration-300"
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

export default NavBar;

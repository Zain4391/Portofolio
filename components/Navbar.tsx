import NavLink from '@/types/NavLinks';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const navlinks: NavLink[] = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "About",
      href: "/about"
    },
    {
      label: "Projects",
      href: "/projects"
    }

  ];
  return (
    <nav>
      <ul>
        {navlinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar;

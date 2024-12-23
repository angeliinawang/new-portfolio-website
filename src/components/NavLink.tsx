import React from 'react';
import Link from "next/link";

interface NavLinkProps {
    href: string;
    title: string;
  }

const NavLink : React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link
        href={href}
        className="block text-[#93D7CA] md-p-0 font-bold
                        sm:text-lg hover:text-white hover:duration-700">
        {title}
    </Link>
  )
}

export default NavLink;
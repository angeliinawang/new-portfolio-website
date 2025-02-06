import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavbarSection = () => {
  return (
    <nav>
        <div className="flex flex-wrap items-center justify-between mx-auto pl-8 pr-20">
            <Link href={"/"}>
            <Image
                src="/images/logo.png"
                alt="aw-logo"
                width={150}
                height={300}
                sizes="30vw"/>
            </Link>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex space-x-20">
                    <li>
                        <Link href={"/projects"} className="block text-[#93D7CA] md-p-0 font-bold
                        sm:text-lg hover:text-white hover:duration-700">projects</Link>
                    </li>
                    <li>
                        <Link href={"/about"} className="block text-[#93D7CA] md-p-0 font-bold
                        sm:text-lg hover:text-white hover:duration-700">about</Link>
                    </li>
                    <li>
                        <Link href={"https://drive.google.com/file/d/1KlVroPvhcsocp9MWOyssTjNHRFl3Iw_u/view?usp=sharing"} className="block text-[#93D7CA] md-p-0 font-bold
                        sm:text-lg hover:text-white hover:duration-700">resume</Link>
                    </li>
                    <li>
                        <Link href={"https://www.linkedin.com/in/angelina-wangg/"} className="block text-[#93D7CA] md-p-0 font-bold
                        sm:text-lg hover:text-white hover:duration-700">
                            <Image
                                src="/images/linkedin-logo.png"
                                alt="hero image"
                                width={32}
                                height={32}
                                className="block"
                            ></Image>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavbarSection;
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
        <div className="relative">
          <div className="w-full">
              <Image
                  src="/images/header.png"
                  alt="hero image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
              />
          </div>
          <p className="absolute text-center text-[25px] left-1/2 top-[59%] -translate-x-1/2 text-[#93D7CA]">
              <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developing innovative software and empowering communities through creativity and design.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>
        </div>
    </section>
  )
}

export default HeroSection;
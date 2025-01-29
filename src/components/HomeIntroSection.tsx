import React from 'react';
import Image from 'next/image';
import { averiaSerifLibre } from '@/styles/fonts';

const HomeIntroSection = () => {
  return (
    <section className="flex items-center justify-center">
        <div className="flex items-center justify-center space-x-4">
            <div className="flex-1">
                <Image
                    src="/images/home-headshot.png"
                    alt="aw-headshot"
                    width={0}
                    height={0}
                    sizes="30vw"
                    className="w-full h-auto"/>
            </div>
            <div className="flex-1">
                <p className="text-[#F6FFF4] text-[20px] max-w-xl">
                Hi! I’m <span className={`${averiaSerifLibre.className} text-[25px] font-bold bg-gradient-text bg-clip-text text-transparent`}>Angelina</span>.
                <span className="block my-4"></span>
                I’m a software engineer and web designer.
                <span className="block my-4"></span>
                I’m currently studying Computer Science @ UC Irvine with a specialization in Intelligent Systems and a minor in Informatics.
                <span className="block my-4"></span>
                I have a passion for social change and building technology that enhances the well-being of individuals and communities.
                </p>
            </div>
            </div>
    </section>
  );
};

export default HomeIntroSection;
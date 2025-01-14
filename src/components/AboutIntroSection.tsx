import React from 'react';
import Image from 'next/image';
import { averiaSerifLibre } from '../styles/fonts';

const AboutIntroSection = () => {
  return (
    <section>
        <div>
            <div className="flex items-center justify-center">
                <div className="max-w-[380px]">
                <div className={averiaSerifLibre.className}>
                  <h1 className="bg-gradient-text bg-clip-text text-transparent text-[50px] max-w-xl font-bold italic">Angelina Wang</h1>
                  <h1 className="mb-10 italic text-[#93D7CA]">Computer Science @ UCI, Minor in Informatics</h1>
                </div>
                <h1 className="mb-4">I’m currently a second-year student at UC Irvine.</h1>
                <h1 className="mb-4">I am deeply passionate about using technology
                  to support mental health advocacy, particularly through exploring AI and Human-Computer Interaction.</h1>
                <h1 className="mb-4">I aim to create tools that help individuals cope with mental health challenges, focusing on industries
                  like music, entertainment, and organizational tools with an emphasis on preventing addiction and promoting healthy outlets.</h1>
                <h1 className="text-[#93D7CA]">Reach out to me at angelina.wang2005@gmail.com :)</h1>
                </div>
                <Image
                  src="/images/about-body.png"
                  alt="about-body-image"
                  width={600}
                  height={600}
                  sizes="30vw"
                  />
            </div>
        </div>
    </section>
  )
}

export default AboutIntroSection;
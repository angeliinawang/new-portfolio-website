import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { averiaSerifLibre } from '@/styles/fonts';

const DesignsSection = () => {
  return (
    <section>
        <div className={averiaSerifLibre.className}>
          <h1 className="text-[32px] text-center mt-[200px] mb-[60px] text-[#93D7CA] font-bold">Graphic Design</h1>
        </div>
        <div className="flex justify-center">
          <div className="mr-[100px] mb-[60px]">
            <Image
              src="/images/wics-designs.png"
              alt="wics"
              width={350}
              height={350}
              sizes="30vw"/>
            <h1 className="font-bold mt-[25px]">WICS (Women In Computer Science at UCI)</h1>
            <h1>Graphic Designer</h1>
          </div>
          <div>
            <Image
              src="/images/jamhacks-designs.png"
              alt="wics"
              width={350}
              height={350}
              sizes="30vw"/>
            <h1 className="font-bold mt-[25px]">JAMHacks</h1>
            <h1>Marketing & Website Director</h1>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mr-[100px]">
            <Image
              src="/images/day-designs.png"
              alt="wics"
              width={350}
              height={350}
              sizes="30vw"/>
            <h1 className="font-bold mt-[25px]">Dear Asian Youth</h1>
            <h1>Marketing and Outreach Director</h1>
          </div>
          <div>
            <Image
              src="/images/mvhs-designs.png"
              alt="wics"
              width={350}
              height={350}
              sizes="30vw"/>
            <h1 className="font-bold mt-[25px]">Monta Vista High School</h1>
            <h1>ASB Outreach Commissioner</h1>
          </div>
        </div>
        <div className="mt-[80px] flex justify-center underline font-bold hover:text-[#93D7CA] duration-500">
            <Link href={"/projects"}>See all designs</Link>
        </div>
    </section>
  )
}

export default DesignsSection;
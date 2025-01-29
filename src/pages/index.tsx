import Image from "next/image";
import NavbarSection from "@/components/NavbarSection";
import HeroSection from "@/components/HeroSection";
import HomeIntroSection from "@/components/HomeIntroSection";
import ProjectsSection from "@/components/ProjectsSection";
import DesignsSection from "@/components/DesignsSection";
import { Lato } from 'next/font/google';
import FooterSection from "@/components/FooterSection";

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Home() {
  return (
      <main className="flex flex-col bg-[#101010] py-4">
        <div className={lato.className}>
          <NavbarSection />
          <HeroSection />
          <HomeIntroSection />
          <ProjectsSection />
          <div className="relative">
            <Image
              src="/images/branch1.png"
              alt="decorative branch 1"
              width={400}
              height={400}
              className="absolute right-0 -mr-[50px] -mt-[100px]"/>
              <Image
              src="/images/branch1.png"
              alt="decorative branch 2"
              width={400}
              height={400}
              className="absolute left-0 rotate-180 -ml-[50px] -mt-[100px]"/>
          </div>
          {/* <DesignsSection /> */}
          <div className="relative">
            <Image
              src="/images/branch4.png"
              alt="decorative branch 3"
              width={400}
              height={400}
              className="absolute right-0 rotate-[34deg] -mr-[50px] -mt-[100px]"/>
              <Image
              src="/images/branch2.png"
              alt="decorative branch 4"
              width={400}
              height={400}
              className="absolute left-0 -ml-[50px] -mt-[100px]"/>
          </div>
          <FooterSection />
        </div>
      </main>
  );
}

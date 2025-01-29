import React from 'react';
import NavbarSection from '@/components/NavbarSection';
import { lato } from '../styles/fonts';
import AboutIntroSection from '@/components/AboutIntroSection';
import FooterSection from '@/components/FooterSection';

const About = () => {
  return (
    <section className={lato.className}>
        <div className="py-4">
            <NavbarSection />
            <AboutIntroSection />
            <FooterSection />
        </div>
    </section>
  )
}

export default About;
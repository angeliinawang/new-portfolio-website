import React from 'react';
import NavbarSection from '@/components/NavbarSection';
import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const About = () => {
  return (
    <section className={lato.className}>
        <div className="py-4">
            <NavbarSection />
            
        </div>
    </section>
  )
}

export default About;
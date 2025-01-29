import React from 'react';
import { averiaSerifLibre } from '@/styles/fonts';
import { lato } from '@/styles/fonts';
import AllProjectsSection from '@/components/AllProjectsSection';
import NavbarSection from '@/components/NavbarSection';
import FooterSection from '@/components/FooterSection';

const Projects = () => {
  return (
    <section className={averiaSerifLibre.className}>
        <div className={`${lato.className} py-4`}>
            <NavbarSection />
        </div>
        <AllProjectsSection />
        <div className={`${lato.className} py-4`}>
          <FooterSection />
        </div>
    </section>
  )
}

export default Projects;
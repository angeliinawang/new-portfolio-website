import React from 'react';
import Image from 'next/image';
import RadialCircle from './RadialCircle';
import { lato } from '@/styles/fonts';

const AllProjectsSection = () => {
  return (
    <section>
        <h1 className="text-[35px] text-center font-bold text-[#93D7CA]">Projects</h1>
        <div className="flex justify-center items-center space-x-6">
            <a href="https://ctc-uci.com/projects">
            <RadialCircle color="#6231D8" imageSrc="/images/center-stage.png" imageAlt="cs-logo"/></a>
            <div className="items-center">
                <h1 className="bg-gradient-purple bg-clip-text text-transparent text-[20px] font-bold italic">Commit The Change @ UCI</h1>
                <h1 className="text-[30px] font-bold italic">Center Stage Dance Studio</h1>
                <h1 className="text-[15px]">ReactJS | PostgreSQL | Figma | RESTful APIs | ChakraUI | Tailwind CSS</h1>
                <h1 className={lato.className + " text-[#93D7CA] max-w-[580px] mt-5"}>
                Developing an efficient event-management platform to streamline class registration,
                studio bookings, and performance scheduling for Center Stage Dance Studio.
                </h1>
            </div>
        </div>
        <div className="flex justify-center items-center space-x-6">
            <a href="https://github.com/angeliinawang/expense-summary">
                <RadialCircle color="#3F6CF1" imageSrc="/images/expenses.jpg" imageAlt="cs-logo"/></a>
            <div className="items-center">
                <h1 className="bg-gradient-dark-blue bg-clip-text text-transparent text-[20px] font-bold italic">Personal Projects</h1>
                <h1 className="text-[30px] font-bold italic">Business Expense Summarizer</h1>
                <h1 className="text-[15px]">ReactJS | TypeScript | Firebase | ShadCN | Tailwind CSS</h1>
                <h1 className={lato.className + " text-[#93D7CA] max-w-[580px] mt-5"}>
                A web application that allows businesses to make and organize expense summaries based on
                specific time periods that align with their business needs.
                </h1>
            </div>
        </div>
        <div className="flex justify-center items-center space-x-6">
            <a href="https://github.com/angeliinawang/goal-for-gold">
            <RadialCircle color="#2284B8" imageSrc="/images/goalforgold.png" imageAlt="cs-logo"/></a>
            <div className="items-center">
                <h1 className="bg-gradient-light-blue bg-clip-text text-transparent text-[20px] font-bold italic">MLH Winter Hacklympics 2020</h1>
                <h1 className="text-[30px] font-bold italic">Goal For Gold</h1>
                <h1 className="text-[15px]">HTML | CSS | JavaScript | Figma | Webflow</h1>
                <h1 className={lato.className + " text-[#93D7CA] max-w-[580px] mt-5"}>
                A mobile application that allows athletes involved in commonly-neglected sports, such as dance and figure
                skating,
                </h1>
            </div>
        </div>
        {/* <div className="flex justify-center items-center space-x-6">
            <RadialCircle color="#046F4A" imageSrc="/images/potsnpins.jpg" imageAlt="cs-logo"/>
            <div className="items-center">
                <h1 className="bg-gradient-green bg-clip-text text-transparent text-[20px] font-bold italic">Personal Projects</h1>
                <h1 className="text-[30px] font-bold italic">Pots n' Pins</h1>
                <h1 className="text-[15px]">ReactJS | Next.js | TypeScript | Spotify API | Firebase | Figma</h1>
                <h1 className={lato.className + " text-[#93D7CA] max-w-[580px] mt-5"}>
                A web application combining the aspects of Spotify, Pinterest, and Notion, allowing college students to create
                their own study space with music, pictures, and organizational features (e.g. to-do lists, calendars, timers).
                </h1>
            </div>
        </div> */}
        <div className="flex justify-center items-center space-x-6">
            <a href="https://devpost.com/software/cocorico"
            ><RadialCircle color="#AD1ECA" imageSrc="/images/cocorico.png" imageAlt="cs-logo"/></a>
            <div className="items-center">
                <h1 className="bg-gradient-pink bg-clip-text text-transparent text-[20px] font-bold italic">JamHacks 2021</h1>
                <h1 className="text-[30px] font-bold italic">Cocorico Discord Bot</h1>
                <h1 className="text-[15px]">Python | Discord Dev Portal | Figma</h1>
                <h1 className={lato.className + " text-[#93D7CA] max-w-[580px] mt-5"}>
                An educational Discord Bot that can be added to school classes and clubs Discords to support the understanding
                of the app and its extensive features due to the increasing use of the online platform for communication
                during the COVID-19 pandemic.
                </h1>
            </div>
        </div>
        <div className="flex justify-center items-center space-x-6">
            <a href="https://devpost.com/software/advo-9oxgpj">
            <RadialCircle color="#F3982E" imageSrc="/images/new-advo-logo.png" imageAlt="cs-logo"/></a>
            <div className="items-center">
                <h1 className="bg-gradient-yellow bg-clip-text text-transparent text-[20px] font-bold italic">Hack APAC 2021</h1>
                <h1 className="text-[30px] font-bold italic">Advo</h1>
                <h1 className="text-[15px]">HTML | CSS | JavaScript | Figma</h1>
                <h1 className={lato.className + " text-[#93D7CA] max-w-[580px] mt-5"}>
                A mobile app that streamlines the search of volunteer and work opportunities for youth during the COVID-19
                pandemic, with similar features to EventBrite.
                </h1>
            </div>
        </div>
        <div className="flex justify-center items-center space-x-6">
            <RadialCircle color="#2ABFA2" imageSrc="/images/portfolio-project-logo.png" imageAlt="cs-logo"/>
            <div className="items-center">
                <h1 className="bg-gradient-teal bg-clip-text text-transparent text-[20px] font-bold italic">Personal Projects</h1>
                <h1 className="text-[30px] font-bold italic">Portfolio Website</h1>
                <h1 className="text-[15px]">ReactJS | Next.js | TypeScript | Figma</h1>
                <h1 className={lato.className + " text-[#93D7CA] max-w-[580px] mt-5"}>
                My personal portfolio website that you are seeing right now! This Next.js web application showcases my
                plethora of web development projects, graphic design, and other things I love!
                </h1>
            </div>
        </div>
    </section>
  )
}

export default AllProjectsSection;
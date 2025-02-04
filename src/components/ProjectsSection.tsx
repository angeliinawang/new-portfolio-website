import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { averiaSerifLibre } from '../styles/fonts';

const ProjectsSection = () => {
  return (
    <section>
        <div className={averiaSerifLibre.className}>
            <h1 className="text-[32px] text-center mt-40 mb-[60px] text-[#93D7CA] font-bold">Projects</h1>
        </div>
        <div className="justify-center">
            <a href="https://github.com/ctc-uci/Center-Stage"><div className="flex justify-center hover:bg-[#1E302C] duration-500 p-10">
                <Image
                    src="/images/center-stage.png"
                    alt="cs-logo"
                    width={144}
                    height={144}
                    sizes="30vw"
                    className="w-[120px] h-[120px] object-cover rounded hover:rounded-xl duration-500"/>
                    <div>
                        <h1 className="ml-8 text-[17px] font-bold">Center Stage</h1>
                        <h1 className="ml-8 text-[17px] italic">Commit The Change @ UCI - ReactJS, PostgreSQL, REST APIs, ChakraUI, Figma</h1>
                        <h1 className="ml-8 text-[17px] text-[#93D7CA] max-w-[800px]">
                        Developing an efficient event-management platform to streamline class registration,
                        studio bookings, and performance scheduling for Center Stage Dance Studio.
                        </h1>
                    </div>
            </div></a>
            <a href="https://github.com/angeliinawang/expense-summary"><div className="flex justify-center hover:bg-[#1E302C] duration-500 p-10">
                <Image
                    src="/images/expense-summary.png"
                    alt="cs-logo"
                    width={144}
                    height={144}
                    sizes="30vw"
                    className="w-[120px] h-[120px] object-cover rounded hover:rounded-xl duration-500"/>
                    <div>
                        <h1 className="ml-8 text-[17px] font-bold">Budget Buddy</h1>
                        <h1 className="ml-8 text-[17px] italic">ReactJS, Firebase, TailwindCSS</h1>
                        <h1 className="ml-8 text-[17px] text-[#93D7CA] max-w-[800px]">
                        A web app that helps college students who own businesses to manage expenses with a customizable summarizer,
                        organizes expenses by date, and allows secure sign-in to track financial records seamlessly.
                        </h1>
                    </div>
            </div></a>
            <a href="https://github.com/angeliinawang/goal-for-gold"><div className="flex justify-center hover:bg-[#1E302C] duration-500 p-10">
                <Image
                    src="/images/goalforgold.png"
                    alt="cs-logo"
                    width={144}
                    height={144}
                    sizes="30vw"
                    className="w-[120px] h-[120px] object-cover rounded hover:rounded-xl duration-500"/>
                    <div>
                        <h1 className="ml-8 text-[17px] font-bold">GoalForGold</h1>
                        <h1 className="ml-8 text-[17px] italic">MLH Hacklympics 2020 - HTML, CSS, JavaScript, Figma</h1>
                        <h1 className="ml-8 text-[17px] text-[#93D7CA] max-w-[800px]">
                        A web/mobile app supporting athletes in often overlooked sports like dance and figure skating to
                        achieve their fitness goals—track pirouettes, flexibility levels, and more with a dynamic goal tracker and calendar for setting deadlines.
                        </h1>
                    </div>
            </div></a>
        </div>
        <div className="mt-10 flex justify-center underline font-bold hover:text-[#93D7CA] duration-500">
            <Link href={"/projects"}>See all projects</Link>
        </div>
    </section>
  )
}

export default ProjectsSection;
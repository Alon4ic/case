import { skillsIcons } from '@/constans';
import React from 'react';
import Gallery from './Gallery';
import Image from 'next/image';


const Skills = () => {
    return (
        <section
            id="skills"
            className="skills overflow-hidden bg-darks w-full flex justify-center items-center"
        >
            <div className="container">
                <div className="text-center middle:pt-[57px] pt-[30px]">
                    <h2 className="text-white middle:text-[50px] sm:text-[40px] text-[30px] font-semibold middle:leading-[90px] sm:leading-[60px] leading-[48px] uppercase">
                        My skills & tools<span className="text-reds">.</span>
                    </h2>
                    <p className="box-desc middle:text-xl text-lg font-medium uppercase middle:leading-[35px] leading-6 middle:mb-[52px] mb-[30px] text-white">
                        3 years of experience
                    </p>
                </div>
                <div className="skills-container">
                    <div className="skills-icons xl:mx-[7.2%] mx-5 grid middle:grid-cols-[repeat(auto-fit,minmax(135px,1fr))] grid-cols-[repeat(auto-fit,minmax(100px,1fr))] middle:gap-8 mobile:gap-6 gap-2 overflow-hidden">
                        {skillsIcons.map((icon) => (
                            <div
                                key={icon.name}
                                className="skills-box middle:w-[135px] mobile:w-[100px] w-[70px] middle:h-[120px] mobile:h-[90px] h-[60px] border border-[#333333] rounded-[5px] flex justify-center items-center cursor-style"
                            >
                                <Image
                                    src={icon.iconSrc}
                                    alt={icon.name}
                                    width={40}
                                    height={40}
                                    className="middle:w-[40px] middle:h-[40px] w-[35px] h-[35px]"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="gallery-container">
                    <Gallery />
                </div>
            </div>
        </section>
    );
};

export default Skills;

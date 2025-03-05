'use client';

import React, { useState } from 'react';

import WorkBar from './WorkBar';
import Portfolio from './Portfolio';

const Works: React.FC = () => {
    const [filter, setFilter] = useState<string>('Gallery');

    const handleFilterChange = (newFilter: string) => {
        setFilter(newFilter);
    };

    return (
        <section id="works" className="works bg-darks lg:pb-[50px] middle:pb-[70px] pb-[40px] ">
            <div className="box-top flex flex-col items-center middle:pt-[57px] pt-[50px]">
                <h2 className="text-white middle:text-[50px] sm:text-[40px] text-[30px] font-semibold middle:leading-[90px] sm:leading-[60px] leading-[48px] uppercase">
                    My works<span className="text-reds">.</span>
                </h2>
                <p className="box-desc middle:text-xl text-lg font-medium uppercase middle:leading-[35px] leading-6 middle:mb-[52px] mb-[30px] text-white">portfolio</p>
            </div>
            <div className="works-bloc flex justify-center middle:mb-[79px] sm:mb-[40px] mb-[20px]">
                <WorkBar onFilterChange={handleFilterChange} />
            </div>
            <div>
                <Portfolio filter={filter} />
            </div>
        </section>
    );
};

export default Works;

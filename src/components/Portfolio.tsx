import React, { useState, useEffect } from 'react';
import { portfolioItems } from '@/constans';
import Link from 'next/link';
import Images from './Images';
import Image from 'next/image';
import Button from './Button';

interface PortfolioProps {
    filter: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ filter }) => {
    const [visibleItems, setVisibleItems] = useState(4);

    useEffect(() => {
        console.log('Current filter:', filter);
    }, [filter]);

    const filteredItems = portfolioItems.filter(
        (item) => filter === 'Gallery' || item.id === filter
    );

    useEffect(() => {
        console.log('Filtered items:', filteredItems);
    }, [filteredItems]);

    const loadMoreItems = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
    };

    return (
        <div>
            <div className="portfolio-grid grid grid-cols-1 gap-x-[50px]">
                {filteredItems.slice(0, visibleItems).map((item, index) => (
                    <div
                        key={index}
                        className={`portfolio-item w-full middle:flex block flex-row bg-transparent justify-center shadow-[0_2px_4px_rgba(0,0,0,0.1)] mb-[50px] ${
                            index % 2 === 0 ? 'even' : 'odd'
                        }`}
                    >
                        <div className="description middle:flex block justify-center items-center middle:w-[50%] w-full middle:p-0 py-[10px] middle:h-[100%] h-auto middle:text-start text-center">
                            <div className="block-content text-white middle:w-[78%] w-[90%] middle:mx-0 mx-auto">
                                <h3 className="block-title laptop:text-[30px] sm:text-[24px] text-xl font-semibold uppercase laptop:leading-[40px] sm:leading-[33px] leading-7 laptop:pb-[30px] pb-5">
                                    {item.title}
                                </h3>
                                <p className="block-text laptop:text-base text-sm laptop:leading-[30px] leading-6 laptop:font-normal font-light middle:mb-0 mb-[10px]">
                                    {item.description.slice(0, 200)}...
                                </p>
                                <Link
                                    href={item.linkImg}
                                    className="block-link middle:w-[135px] w-[120px] flex middle:ml-0 middle:mr-auto ml-auto mr-auto justify-between items-center uppercase mt-[40px] middle:mb-0 mb-5 laptop:text-xl text-base  cursor-style group relative hover:text-[#BDBDBD] text-white"
                                    target="_blank"
                                >
                                    <Image
                                        src={item.iconSrc}
                                        alt="arrow"
                                        className="block-icon"
                                        width={18}
                                        height={18}
                                    />
                                    <span className="block-btn middle:text-base text-sm">
                                        check work&nbsp;
                                    </span>
                                    <span className="absolute left-0 top-[26px] h-[2px] bg-reds w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out transform -translate-y-1/2 origin-left group-[&:not(:hover)]:origin-right"></span>
                                </Link>
                            </div>
                        </div>
                        <Link
                            href={item.linkImg}
                            className="portfolio-link w-[50%] middle:my-0 my-5 cursor-style"
                        >
                            <Images src={item.imgSrc} alt="Portfolio Image" />
                        </Link>
                    </div>
                ))}
            </div>
            {visibleItems < filteredItems.length && (
                <div className="work-show flex justify-center text-white">
                    <Button onClick={loadMoreItems} id="show-more">
                        Show more
                    </Button>
                </div>
            )}
        </div>
    );
};
export default Portfolio;

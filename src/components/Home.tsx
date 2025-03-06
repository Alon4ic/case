'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from './Header';

const slides = [
    {
        title: "Hi! I'm Olena Redko",
        highlight: '’',
        subtitle: "I'm front-end developer from Ukraine.",
    },
    {
        title: "Let's work together!",
        highlight: '’',
        subtitle: 'Build a unique, innovative and amazing project.',
    },
];

const fullTextParts = [
    'I am ready to create a website or application for you with intuitive navigation, transitions, and animations. I write clean code, minify, and use other techniques to make a site or app load quickly.',
    '<br /><br />',
    "With so many different devices and platforms coming out, it's important that your website or app is accessible to users with different operating systems, browsers, and screen sizes. I will ensure your site is compatible with a range of devices and platforms, ensuring a seamless experience for all users.",
];

const HomePage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []); // Убрали handleScroll, оставили только интервал

    useEffect(() => {
        let currentPartIndex = 0;
        let currentCharIndex = 0;
        const typingInterval = 30;
        let typingTimer: NodeJS.Timeout | null = null;
        let isMounted = true;

        const typeWriter = () => {
            if (!isMounted || currentPartIndex >= fullTextParts.length) return;

            const currentPart = fullTextParts[currentPartIndex];
            const newText = currentPart.slice(0, currentCharIndex + 1);
            setTypedText(
                fullTextParts.slice(0, currentPartIndex).join('') + newText
            );
            currentCharIndex++;

            if (currentCharIndex < currentPart.length) {
                typingTimer = setTimeout(typeWriter, typingInterval);
            } else {
                currentCharIndex = 0;
                currentPartIndex++;
                if (currentPartIndex < fullTextParts.length) {
                    typingTimer = setTimeout(typeWriter, typingInterval);
                }
            }
        };

        setTypedText('');
        typingTimer = setTimeout(typeWriter, typingInterval);

        return () => {
            isMounted = false;
            if (typingTimer) clearTimeout(typingTimer);
        };
    }, []);

    return (
        <div id="home" className="home w-[100%]">
            <Header />
            <div className="home-left middle:w-[66%] w-[100%] middle:h-[800px] h-[550px] bg-[url('/images/background.jpg')] bg-repeat">
                <div className="flex flex-col middle:pt-[219px] pt-[180px] middle:ml-[14%] ml-0 middle:px-0 px-5 xl:w-[500px] lg:w-[400px] middle:w-[350px] w-full middle:text-start text-center">
                    <h1 className="home-title text-white tracking-tighter font-semibold uppercase mb-[26px] xl:text-[70px] lg:text-[56px] sm:text-[48px] text-[36px] xl:leading-[90px] lg:leading-[68px] sm:leading-[57px] leading-[44px]">
                        {slides[currentSlide].title.split('’')[0]}
                        <span className="text-reds">
                            {slides[currentSlide].highlight}
                        </span>
                        {slides[currentSlide].title.split('’')[1]}
                    </h1>
                    <p className="text-white font-medium uppercase xl:text-xl lg:text-lg sm:text-base text-sm middle:mb-[61px] mb-[40px] middle:text-start text-center home-text">
                        {slides[currentSlide].subtitle}
                    </p>
                    <a
                        href="#contacts"
                        className="flex justify-between items-center bg-black hover:bg-white20 active:bg-white15 w-[143px] h-[36px] pr-4 pl-1 rounded-lg cursor-style home-link middle:mx-0 mx-auto"
                    >
                        <Image
                            src="/images/arrow-right.svg"
                            alt="arrow"
                            width={30}
                            height={30}
                        />
                        <span className="text-white">Contact</span>
                    </a>
                </div>
            </div>
            <div className="home-right middle:flex bg-darks hidden"></div>
            <Link
                href="/"
                className="home-center flex middle:h-[469px] h-auto middle:max-w-[40.3%] max-w-[100%] min-w-[20%] laptop:pt-[53px] pt-5 laptop:pb-0 pb-5 laptop:pl-[57px] laptop:pr-[57px] pl-5 pr-5 font-normal text-sm leading-7 middle:top-[179px] top-0 sm:mt-0 mt-[-40px] middle:left-[50.6%] left-0 bg-grays z-40 cursor-style middle:absolute relative overflow-hidden"
            >
                <p
                    className="typed-text text-white middle:text-base text-sm overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: typedText || '' }}
                />
            </Link>
        </div>
    );
};

export default HomePage;

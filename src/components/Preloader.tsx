'use client';
import React, { useEffect } from 'react';

const Preloader: React.FC = () => {
    useEffect(() => {
        const animateCoding = () => {
            const codingText = document.querySelector(
                '.coding-text'
            ) as HTMLElement;
            if (!codingText) return;
            codingText.style.opacity = '1';
            const moveAmount = codingText.offsetWidth;
            const moveDuration = 2600; // Время в миллисекундах для анимации
            const fps = 120;
            const frames = moveDuration / (500 / fps);
            let currentFrame = 0;

            const move = () => {
                currentFrame++;
                const progress = currentFrame / frames;
                const moveX = moveAmount * progress * -1;
                codingText.style.transform = `translateX(${moveX}px)`;

                if (currentFrame < frames) {
                    requestAnimationFrame(move);
                }
            };

            move();
        };

        const showLoader = () => {
            const preloader = document.querySelector(
                '.preloader'
            ) as HTMLElement;
            if (preloader) {
                preloader.classList.add('visible');
                animateCoding();
            }
        };

        const hideLoader = () => {
            const preloader = document.querySelector(
                '.preloader'
            ) as HTMLElement;
            if (preloader) {
                preloader.classList.remove('visible');
                preloader.classList.add('hidden');
            }
        };

        showLoader();

        const delay = 2600;

        const timeout = setTimeout(() => {
            hideLoader();
        }, delay);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="preloader absolute w-full h-full z-[100] bg-black text-white flex flex-col justify-center items-center opacity-0 overflow-hidden">
            <p
                className="coding-text absolute middle:font-semibold font-medium middle:text-[360px] text-[300px] middle:leading-[443px] leading text-darkText translate-x-7p opacity-0"
                style={{ opacity: 0.4 }}
            >
                CODING
            </p>
            <div className="square absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mobile:w-[400px] phone:w-[300px] w-[250px] mobile:h-[320px] phone:h-[240px] h-[208px] z-200 bg-darkGray"></div>
            <div className="preloader-text font-medium z-[1000] middle:text-[72px] sm:text-[60px] phone:text-[46px] text-[36px] middle:leading-[91px] sm:leading-[76px] phone:leading-[55px] leading-[43px] text-white opacity-0 text-center xl:mt-[30%] laptop:mt-[40%] middle:mt-[50%] mobile:mt-[60%] phone:mt-[100%] mt-[110%]">
                <p>
                    Full-stack developer
                    <br />
                    Olena Redko
                </p>
            </div>
        </div>
    );
};

export default Preloader;

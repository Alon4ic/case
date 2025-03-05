import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence, wrap, Variants } from 'framer-motion';
import { rewSrc } from '@/constans';

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
        position: 'absolute',
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        position: 'relative',
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
        position: 'absolute',
    }),
} as const satisfies Variants;

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) =>
    Math.abs(offset) * velocity;

const Reviews = () => {
    const [[page, direction], setPage] = useState([0, 1]);

    const imageIndex = wrap(0, rewSrc.length, page);
    const { src, link } = rewSrc[imageIndex];

    const paginate = (newDirection: number) => {
        if (
            (page === 0 && newDirection === -1) ||
            (page === rewSrc.length - 1 && newDirection === 1)
        ) {
            return; // Prevent moving out of bounds
        }
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div id="reviews" className="bg-maxDark">
            <div className="box-top flex flex-col items-center lg:pt-[70px] middle:pt-[57px] pt-[30px]">
                <h2 className="text-white middle:text-[50px] sm:text-[40px] text-[30px] font-semibold middle:leading-[90px] sm:leading-[60px] leading-[48px] uppercase">
                    Reviews<span className="text-reds">.</span>
                </h2>
                <p className="box-desc middle:text-xl text-lg font-medium uppercase middle:leading-[35px] leading-6 middle:mb-[52px] mb-[30px] text-white">
                    Hear from my Customers
                </p>
            </div>
            <div className="gallery-container flex justify-center relative lg:min-h-[300px] middle:min-h-[250px] sm:min-h-[200px] mobile:min-h-[150px] min-h-[100px] w-full">
                <AnimatePresence initial={false} custom={direction}>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={page}
                        className="pb-0 cursor-style"
                    >
                        <motion.img
                            src={src}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="w-auto lg:max-h-[300px] middle:max-h-[250px] sm:max-h-[200px] mobile:max-h-[150px] max-h-[100px] cursor-style"
                            transition={{
                                x: {
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 30,
                                },
                                opacity: { duration: 0.2 },
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                        />
                    </a>
                </AnimatePresence>
                <button
                    className={`absolute top-[50%] laptop:left-[15%] left-[5%] cursor-style ${
                        page === 0
                            ? 'text-[rgb(82, 79, 79)] cursor-not-allowed opacity-50'
                            : 'text-white'
                    }`}
                    onClick={() => paginate(-1)}
                    disabled={page === 0}
                >
                    {'◄'}
                </button>

                <button
                    className={`absolute top-[50%] laptop:right-[15%] right-[5%] cursor-style ${
                        page === rewSrc.length - 1
                            ? 'text-[rgb(82, 79, 79)] cursor-not-allowed opacity-50'
                            : 'text-white'
                    }`}
                    onClick={() => paginate(1)}
                    disabled={page === rewSrc.length - 1}
                >
                    {'►'}
                </button>
            </div>
        </div>
    );
};

export default Reviews;

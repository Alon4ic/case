'use client';
import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence, wrap, Variants } from 'framer-motion';

import { toolsSrc } from '@/constans';

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

const Gallery = () => {
    const [[page, direction], setPage] = useState([0, 1]);

    const imageIndex = wrap(0, toolsSrc.length, page);

    const paginate = (newDirection: number) => {
        if (
            (page === 0 && newDirection === -1) ||
            (page === toolsSrc.length - 1 && newDirection === 1)
        ) {
            return; // Prevent moving out of bounds
        }
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className="gallery-container lg:mt-[100px] middle:mt-[50px] mt-[30px] flex justify-center relative lg:min-h-[500px] sm:min-h-[300px] mobile:min-h-[200px] min-h-[150px] w-full">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    src={toolsSrc[imageIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-auto lg:max-h-[500px] sm:max-h-[300px] mobile:max-h-[200px] max-h-[150px]"
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
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
                    page === toolsSrc.length - 1
                        ? 'text-[rgb(82, 79, 79)] cursor-not-allowed opacity-50'
                        : 'text-white'
                }`}
                onClick={() => paginate(1)}
                disabled={page === toolsSrc.length - 1}
            >
                {'►'}
            </button>
        </div>
    );
};

export default Gallery;

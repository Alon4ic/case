import Image from 'next/image';
import React from 'react';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    children,
    ...props
}) => {
    return (
        <button
            className="relative flex flex-row items-center gap-2 px-4 py-2 bg-transparent active:bg-white15 text-white uppercase sm:text-base text-sm overflow-hidden transition-colors duration-300 group cursor-style rounded-lg"
            {...props}
        >
            <Image
                src="/images/arrow-right.svg"
                alt="arrow"
                className="block-icon"
                width={18}
                height={18}
            />
            <span className="relative group-hover:text-white z-10">
                {children}
            </span>
            <span className="absolute inset-x-0 bottom-0 h-0 bg-white20 transition-all duration-300 ease-in-out group-hover:h-full z-0"></span>
        </button>
    );
};

export default Button;

'use client';
import { navLinks } from '@/constans/index';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [isRouting, setisRouting] = useState(false);
    const path = usePathname();
    const [prevPath, setPrevPath] = useState('/');

    useEffect(() => {
        if (prevPath !== path) {
            setisRouting(true);
        }
    }, [path, prevPath]);

    useEffect(() => {
        if (isRouting) {
            setPrevPath(path);
            const timeout = setTimeout(() => {
                setisRouting(false);
            }, 1200);

            return () => clearTimeout(timeout);
        }
    }, [isRouting, path]);

    return (
        <div className="md:flex hidden justify-between rounded-lg items-center laptop:gap-[57px] lg:gap-[40px] gap-[30px] md:left-[20%] md:absolute">
            {navLinks.map((nav) => (
                <Link
                    key={nav.name}
                    href={nav.href}
                    className="relative link group cursor-style"
                >
                    {nav.name}
                    <span className="absolute left-0 top-[26px] h-[2px] bg-reds w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out transform -translate-y-1/2 origin-left group-[&:not(:hover)]:origin-right"></span>
                </Link>
            ))}
        </div>
    );
};

export default Navbar;

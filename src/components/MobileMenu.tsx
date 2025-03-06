import React, { useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/constans';
import SocialLink from './SocialLink';
import { Mail } from 'lucide-react';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => document.body.classList.remove('overflow-hidden');
    }, [isOpen]);

    return (
        <div
            className={`fixed inset-0 z-50 transition-opacity duration-300 ${
                isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            onClick={onClose}
        >
            {/* Фон затемнения */}
            <div className="fixed inset-0 bg-black/80" onClick={onClose}></div>
            <div
                className={`fixed top-0 left-0 w-[100vw] bg-[url('/images/bg-burger.jpg')] bg-repeat shadow-lg transform transition-transform duration-300 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Верхняя панель с логотипом и кнопкой */}
                <div
                    className="flex justify-between px-10 py-5 items-center"
                    onClick={onClose}
                >
                    <Link href="/" onClick={onClose}>
                        <Image
                            src="/images/AR..svg"
                            alt="logo"
                            width={67}
                            height={60}
                        />
                    </Link>
                    <button
                        onClick={onClose}
                        className="rounded-[10px] bg-transparent hover:bg-white20 active:bg-white15 text-sm p-2"
                    >
                        <Image
                            src="/icons/close.svg"
                            alt="Button"
                            width={42}
                            height={42}
                        />
                    </button>
                </div>
                <div className="relative flex phone:pt-[34px] pt-[70px] middle:gap-[205px] gap-[100px]">
                    <div className="flex md:max-w-[359px] w-[100%] flex-col justify-center md:items-start items-center md:pl-[40px] pl-0">
                        {navLinks.map((item) => (
                            <Link
                                onClick={onClose}
                                href={item.href}
                                key={item.id}
                                className="relative text-white hover:text-[#BDBDBD] text-base  group font-normal whitespace-nowrap py-2 rounded overflow-hidden"
                            >
                                {item.name}
                                <span className="absolute left-0 top-[30px] h-[2px] bg-reds w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-in-out transform -translate-y-1/2 origin-left group-[&:not(:hover)]:origin-right"></span>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="phone:pt-[49px] pt-[36px] pb-[22px] flex justify-center">
                    <div className="flex gap-[10px] mb-[16px] z-[100] cursor-pointer">
                        <Mail />
                        <a
                            href="mailto:admin@hello@area51dxb.com"
                            className="text-lg leading-6 font-normal text-white"
                        >
                            o.redjko@gmail.com
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-6 pb-[19px]">
                    <SocialLink />
                </div>
            </div>
        </div>
    );
}

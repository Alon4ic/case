import Image from 'next/image';
import React, { useState } from 'react';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import SocialLink from './SocialLink';
import BurgerBtn from './BurgerBtn';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="absolute lg:w-[79.3%] w-[97%] top-[33px] lg:left-[12%] left-5 lg:pr-0 pr-5">
            <div className="flex justify-between items-center">
                <div className="logo">
                    <Image
                        src="/images/AR..svg"
                        alt="logo"
                        width={67}
                        height={60}
                    />
                </div>
                <div className="flex items-center">
                    <BurgerBtn isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
                    <Navbar />
                </div>
                <div>
                    <SocialLink />
                </div>
            </div>
            <MobileMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </header>
    );
};

export default Header;

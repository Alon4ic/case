'use client';
import React, { useState, useEffect } from 'react';


const sections = [
    { id: 'home', name: 'Home' },
    { id: 'works', name: 'Works' },
    { id: 'reviews', name: 'Reviews' },
    { id: 'skills', name: 'Skills' },
    { id: 'contacts', name: 'Contact' },
];

const NavFix = () => {
    const [activeSection, setActiveSection] = useState('');
    const [showNavFix, setShowNavFix] = useState(false);
    const [menuStyle, setMenuStyle] = useState({});
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            let newActiveSection = '';

            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        newActiveSection = section.id;
                    }
                }
            });

            setActiveSection(newActiveSection);

            const headerHeight = 60;
            const body = document.body;
            const bodyRect = body.getBoundingClientRect();
            const bodyRightEdge = bodyRect.right;
            const viewportWidth = window.innerWidth;
            const rightOffset = viewportWidth - bodyRightEdge + 10; // 20px от края body

            setMenuStyle({
                right: `${rightOffset}px`,
            });

            if (window.scrollY > headerHeight) {
                setShowNavFix(true);
            } else {
                setShowNavFix(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll); // Учет изменения ширины
        handleScroll(); // Инициализация при загрузке
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed top-1/2 -translate-y-1/2 flex flex-col items-center transition-opacity duration-300 z-[10000] ${
                showNavFix ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            style={menuStyle}
        >
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => scrollToSection(`${section.id}`)}
                    className="cursor-style py-2 pl-2"
                >
                    <p
                        className={`group relative flex items-center no-underline ${
                            activeSection === section.id ? 'active' : ''
                        }`}
                    >
                        <span
                            className={`w-[15px] h-[15px] rounded-full bg-transparent transition-colors duration-300 border border-white ${
                                activeSection === section.id
                                    ? 'bg-white'
                                    : 'group-hover:bg-white'
                            }`}
                        ></span>
                        <span className="absolute right-[80px] whitespace-nowrap max-w-[100px] overflow-hidden text-ellipsis text-white opacity-0 translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                            {section.name}
                        </span>
                    </p>
                </button>
            ))}
        </div>
    );
};

export default NavFix;

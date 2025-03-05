import React, { useEffect, useRef } from 'react';

const MousePointer: React.FC = () => {
    const mouseRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Выполняем логику только на клиенте
        if (typeof window === 'undefined') return;

        const mouse = mouseRef.current;
        if (!mouse) return;

        const slide = document.querySelector('.home-center') as HTMLElement;
        const links = document.querySelectorAll('a');
        const btns = document.querySelectorAll('button');
        const fields = document.querySelectorAll('.contacts-field');

        let mouseX = 0;
        let mouseY = 0;
        let mouseVisible = true;

        const updateMousePosition = () => {
            mouse.style.opacity = mouseVisible ? '1' : '0';
            mouse.style.transform = `translate(${mouseX - 15}px, ${
                mouseY - 15
            }px)`;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (
                e.clientX < 5 ||
                e.clientY < 5 ||
                e.clientY > window.innerHeight - 5 ||
                e.clientX > window.innerWidth - 5
            ) {
                mouseVisible = false;
            } else {
                mouseVisible = true;
            }
            requestAnimationFrame(updateMousePosition);
        };

        if (window.innerWidth >= 768) {
            document.addEventListener('mousemove', handleMouseMove);

            if (slide) {
                slide.addEventListener('mouseover', () => {
                    mouse.classList.add('view-visible');
                });
                slide.addEventListener('mouseleave', () => {
                    mouse.classList.remove('view-visible');
                });
            }

            links.forEach((link) => {
                link.addEventListener('mouseover', () => {
                    mouse.classList.add('links-visible');
                });
                link.addEventListener('mouseleave', () => {
                    mouse.classList.remove('links-visible');
                });
            });

            btns.forEach((btn) => {
                btn.addEventListener('mouseover', () => {
                    mouse.classList.add('links-visible');
                });
                btn.addEventListener('mouseleave', () => {
                    mouse.classList.remove('links-visible');
                });
            });

            fields.forEach((field) => {
                field.addEventListener('mouseover', () => {
                    mouse.classList.add('hidden-cursor');
                });
                field.addEventListener('mouseleave', () => {
                    mouse.classList.remove('hidden-cursor');
                });
            });
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);

            if (slide) {
                slide.removeEventListener('mouseover', () => {
                    mouse.classList.add('view-visible');
                });
                slide.removeEventListener('mouseleave', () => {
                    mouse.classList.remove('view-visible');
                });
            }

            links.forEach((link) => {
                link.removeEventListener('mouseover', () => {
                    mouse.classList.add('links-visible');
                });
                link.removeEventListener('mouseleave', () => {
                    mouse.classList.remove('links-visible');
                });
            });

            btns.forEach((btn) => {
                btn.removeEventListener('mouseover', () => {
                    mouse.classList.add('links-visible');
                });
                btn.removeEventListener('mouseleave', () => {
                    mouse.classList.remove('links-visible');
                });
            });

            fields.forEach((field) => {
                field.removeEventListener('mouseover', () => {
                    mouse.classList.add('hidden-cursor');
                });
                field.removeEventListener('mouseleave', () => {
                    mouse.classList.remove('hidden-cursor');
                });
            });
        };
    }, []);

    return (
        <div ref={mouseRef} className="mouse" aria-hidden="true">
            <div className="mouse__view " />
        </div>
    );
};

export default MousePointer;

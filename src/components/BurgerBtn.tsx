import React from 'react';
import { AlignJustify } from 'lucide-react';

interface BurgerBtnProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

export default function BurgerBtn({ isOpen, setIsOpen }: BurgerBtnProps) {
    return (
        <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-[10px] text-white font-bold hover:bg-white20 active:bg-white15"
            onClick={() => setIsOpen(!isOpen)}
        >
            <AlignJustify className="h-[30px] w-[38px]" />
        </button>
    );
}

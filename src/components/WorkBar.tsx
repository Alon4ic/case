import React, { useState } from 'react';

interface WorkBarProps {
    onFilterChange: (filter: string) => void;
}

const WorkBar: React.FC<WorkBarProps> = ({ onFilterChange }) => {
    const [activeFilter, setActiveFilter] = useState<string>('Gallery');

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter);
        onFilterChange(filter);
    };

    return (
        <div className="filter-buttons flex w-[320px] bg-black rounded-[30px] px-[39px] py-[15px] gap-[15px] cursor-style">
            <button
                className={`filter-btn flex justify-center items-center bg-black border-none text-white text-base relative overflow-hidden transition-all duration-300 cursor-pointer cursor-style ${
                    activeFilter === 'Gallery' ? 'underline' : ''
                }`}
                onClick={() => handleFilterChange('Gallery')}
            >
                <span
                    className={`dot inline-block middle:w-[9px] w-[6px] middle:h-[9px] h-[6px] rounded-full mr-2 transition-colors duration-300 ease-in-out ${
                        activeFilter === 'Gallery' ? 'bg-reds' : 'bg-white'
                    }`}
                ></span>
                Gallery
            </button>
            <button
                className={`filter-btn flex justify-center items-center bg-black border-none text-white text-base relative overflow-hidden transition-all duration-300 cursor-pointer cursor-style ${
                    activeFilter === 'Single' ? 'underline' : ''
                }`}
                onClick={() => handleFilterChange('Single')}
            >
                <span
                    className={`dot inline-block w-[9px] h-[9px] rounded-full mr-2 transition-colors duration-300 ease-in-out ${
                        activeFilter === 'Single' ? 'bg-reds' : 'bg-white'
                    }`}
                ></span>
                Single
            </button>
            <button
                className={`filter-btn flex justify-center items-center bg-black border-none text-white text-base relative overflow-hidden transition-all duration-300 cursor-pointer cursor-style ${
                    activeFilter === 'Group' ? 'underline' : ''
                }`}
                onClick={() => handleFilterChange('Group')}
            >
                <span
                    className={`dot inline-block w-[9px] h-[9px] rounded-full mr-2 transition-colors duration-300 ease-in-out ${
                        activeFilter === 'Group' ? 'bg-reds' : 'bg-white'
                    }`}
                ></span>
                Group
            </button>
        </div>
    );
};

export default WorkBar;

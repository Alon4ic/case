import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-footerBg w-[100%] flex lg:flex-row flex-col lg:gap-0 gap-3 justify-between items-center py-8 border-t-[1px] xl:px-[7.2%] px-5 border-t-white20">
            <div className="text-white mobile:text-sm text-xs mobile:leading-[17px] leading-[14px]">
                © 2025, Portfolio. This website was coded by Olena Redko
            </div>
            <div className="text-white mobile:text-sm text-xs mobile:leading-[17px] leading-[14px]">
                Special thanks to&nbsp;
                <a
                    href="https://www.linkedin.com/in/maria-r-38315614a/"
                    className="text-blue-400"
                >
                    Maria Redko
                </a>
                &nbsp;for the portfolio design
            </div>
        </footer>
    );
};

export default Footer;

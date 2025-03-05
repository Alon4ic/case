import { socialLinks } from '@/constans';
import Image from 'next/image';
import React from 'react';

const SocialLink: React.FC = () => {
    return (
        <div className="flex justify-between items-center phone:gap-6 md:gap-10 gap-2">
            {socialLinks.map((social) => (
                <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-style"
                >
                    <Image
                        src={social.icon}
                        alt={social.name}
                        className="social-icon"
						width={18}
						height={18}
                    />
                </a>
            ))}
        </div>
    );
};

export default SocialLink;

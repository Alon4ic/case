import { contactsLinks } from '@/constans';
import Image from 'next/image';
import React from 'react';
import SocialLink from './SocialLink';
import ContactForm from './ContactForm';

const ContactsPage = () => {
    return (
        <div
            className=" middle:flex block lg:mt-[80px] middle:mt-[47px] mt-[30px] w-full"
            id="contacts"
        >
            <div className="xl:pl-[14.4%] pl-5 min-w-[50%] bg-maxDark pt-[68px] middle:pb-[85px] pb-[30px]">
                <div className="block middle:mx-0 mx-auto">
                    <div className="w-full flex middle:justify-start justify-center logo mb-[41px] contacts-logo">
                        <Image
                            src="/images/AR..svg"
                            alt="logo"
                            width={67}
                            height={60}
                        />
                    </div>
                    {contactsLinks.map((contact, index) => (
                        <div
                            className="contacts-links w-full flex middle:justify-start justify-center pb-4"
                            key={index}
                        >
                            <a
                                className="font-normal text-base text-grayLight cursor-style wrap-text"
                                href={contact.link}
                                target="_blank"
                            >
                                <span className="font-bold text-white text-base">
                                    {contact.name}&nbsp;&nbsp;
                                </span>
                                {contact.content}
                            </a>
                        </div>
                    ))}
                    <div className="w-full middle:text-start text-center pt-[30px]">
                        <p className="uppercase font-medium text-base text-white">
                            follow me
                        </p>
                        <div className="flex middle:justify-start justify-center mt-5">
                            <SocialLink />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-bgDark min-w-[50%] xl:pr-[14.4%] pl-5 pr-5 middle:pt-[64px] pt-[30px] lg:pb-[65px] middle:pb-[50px] pb-[30px]">
                <div className="contacts-right--box middle:text-start text-center">
                    <p className="contacts-title uppercase mb-[30px] text-xl text-white font-medium">
                        contact me
                    </p>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default ContactsPage;

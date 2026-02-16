import { useState, useEffect } from 'react';
import { Poppins } from 'next/font/google';

import Preloader from '@/components/Preloader';
import MousePointer from '@/components/MousePointer';
import NavFix from '@/components/NavFix';
import HomePage from '@/components/Home';
import Works from '@/components/Works';
import Skills from '@/components/Skills';
import ContactsPage from '@/components/Contacts';
import { ToastContainer } from 'react-toastify';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';
import Head from 'next/head';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700'],
});

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.body.style.cursor = 'none'; // Принудительно скрываем курсор
        }
        const handleLoad = () => {
            setTimeout(() => {
                setLoading(false);
            }, 2000); // Задержка 2 секунды
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    return (
        <>
            <Head>
                <title>Olena Redko - Full Stack Developer Portfolio</title>
                <meta
                    name="description"
                    content="Portfolio of Olena Redko, a fullstack developer from Ukraine. I create modern websites and applications using React and Next.js"
                />
                <meta
                    name="keywords"
                    content="full-stack, fullstack, full stack, fullstack developer, developer, react, nestjs, nextjs, node, web-developer, React, Next.js"
                />
                <meta name="author" content="Olena Redko" />
                <meta name="robots" content="index, follow" />
                <meta
                    property="og:title"
                    content="Olena Redko - Fullstack Developer Portfoli"
                />
                <meta
                    property="og:description"
                    content="Portfolio of Olena Redko, a fullstack developer from Ukraine. I create modern websites and applications using React and Next.js."
                />
                <meta property="og:type" content="website" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://case-jet-one.vercel.app/"
                />
                <meta
                    property="og:image"
                    content="https://case-jet-one.vercel.app/images/og-image.png"
                />
            </Head>
            <div className={`${poppins.className} text-white`}>
                {loading ? (
                    <Preloader />
                ) : (
                    <>
                        <MousePointer />
                        <NavFix />
                        <HomePage />
                        <Works />
                        <Reviews />
                        <Skills />
                        <ContactsPage />
                        <ToastContainer />
                        <Footer />
                    </>
                )}
            </div>
        </>
    );
}

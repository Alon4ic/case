// import { useState, useEffect } from 'react';
import { Poppins } from 'next/font/google';

// import Preloader from '@/components/Preloader';
import MousePointer from '@/components/MousePointer';
import NavFix from '@/components/NavFix';
import HomePage from '@/components/Home';
import Works from '@/components/Works';
import Skills from '@/components/Skills';
import ContactsPage from '@/components/Contacts';
import { ToastContainer } from 'react-toastify';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700'],
});

export default function App() {
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         document.body.style.cursor = 'none'; // Принудительно скрываем курсор
    //     }
    //     const handleLoad = () => {
    //         setTimeout(() => {
    //             setLoading(false);
    //         }, 2000); // Задержка 2 секунды
    //     };

    //     if (document.readyState === 'complete') {
    //         handleLoad();
    //     } else {
    //         window.addEventListener('load', handleLoad);
    //         return () => window.removeEventListener('load', handleLoad);
    //     }
    // }, []);

    return (
        <div className={`${poppins.className} text-white`}>
            {/* {loading ? (
                <Preloader />
            ) : ( */}
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
            {/* )} */}
        </div>
    );
}

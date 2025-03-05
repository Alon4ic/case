import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                darks: '#191b1e',
                darkText: '#25272c',
                darkGray: '#464951',
                reds: '#CE0C0C',
                grays: '#2F3136',
                maxDark: '#161617',
                bgDark: '#17181b',
                white15: 'rgba(255, 255, 255, 0.15)',
                white20: 'rgba(255, 255, 255, 0.1)',
                white30: 'rgba(255, 255, 255, 0.3)',
                borderColor: '#BDBDBD',
                footerBg: '#121315',
            },
            screens: {
                phone: '350px',
                mobile: '450px',
                sm: '640px',
                md: '720px',
                middle: '768px',
                lg: '960px',
                laptop: '1040px',
                xl: '1200px',
                desktop: '1360px',
            },
        },
    },
    plugins: [],
} satisfies Config;

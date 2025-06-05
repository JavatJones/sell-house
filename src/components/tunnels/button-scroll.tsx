"use client"
// components/ScrollToQuoteButton.js
import React from 'react';

interface ScrollQuoteProps {
    id: string;
    text: string;

}

export const ButtonScroll_v1 = ({ id, text }: ScrollQuoteProps) => {

    const scrollToQuote = () => {

        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };



    return (
        <button
            onClick={scrollToQuote}
            className="block py-3 px-5 cursor-pointer bg-emerald-400 hover:bg-emerald-500 text-white font-bold rounded-lg drop-shadow-2xl drop-shadow-emerald-400/50 transition duration-300 ease-in-out transform hover:scale-105"
        >
            <span className='block text-md tracking-wide'>{text}</span>
        </button>
    )
};

export const ButtonScroll_v2 = ({ id, text }: ScrollQuoteProps) => {

    const scrollToQuote = () => {

        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };



    return (
        <button
            onClick={scrollToQuote}
            className="block py-3 px-5 cursor-pointer border-2 border-emerald-400 bg-white text-emerald-400 font-bold rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
            <span className='block text-md tracking-wide'>{text}</span>
        </button>
    )
};



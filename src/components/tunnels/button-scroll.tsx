"use client"
// components/ScrollToQuoteButton.js
import React from 'react';
import { sendGTMEvent } from '@next/third-parties/google'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
interface ScrollQuoteProps {
    id: string;
    text: string;

}





export const ButtonScroll_v1 = ({ id, text }: ScrollQuoteProps) => {
    const path = usePathname();

    if (path !== '/') {

        const GtmEvent = () => {
            // *** Agregar el evento GTM aquí ***
            sendGTMEvent({
                event: 'button_click', // Nombre del evento, puedes personalizarlo
                button_id: id,        // ID de la sección a la que se desplaza
                button_text: text,    // Texto del botón
                button_type: 'scroll_v1', // Tipo de botón para diferenciar
                location: window.location.pathname // Ruta de la página actual
            });
        };

        return (
            <Link onClick={GtmEvent} href={"/"} className='block text-xs lg:text-lg tracking-wide  py-3 px-4 cursor-pointer bg-emerald-400 hover:bg-emerald-500 text-white font-bold rounded-lg drop-shadow-2xl drop-shadow-emerald-400/50 transition duration-300 ease-in-out transform hover:scale-105'>
                {text}
            </Link>
        );
    }

    const scrollToQuote = () => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });

            // *** Agregar el evento GTM aquí ***
            sendGTMEvent({
                event: 'button_click', // Nombre del evento, puedes personalizarlo
                button_id: id,        // ID de la sección a la que se desplaza
                button_text: text,    // Texto del botón
                button_type: 'scroll_v1', // Tipo de botón para diferenciar
                location: window.location.pathname // Ruta de la página actual
            });
        }
    };

    return (
        <button
            onClick={scrollToQuote}
            className="block py-3 px-4 cursor-pointer bg-emerald-400 hover:bg-emerald-500 text-white font-bold rounded-lg drop-shadow-2xl drop-shadow-emerald-400/50 transition duration-300 ease-in-out transform hover:scale-105"
        >
            <span className='block text-xs lg:text-lg tracking-wide'>{text}</span>
        </button>
    );
};

export const ButtonScroll_v2 = ({ id, text }: ScrollQuoteProps) => {
    const scrollToQuote = () => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });

            // *** Agregar el evento GTM aquí ***
            sendGTMEvent({
                event: 'button_click', // Nombre del evento
                button_id: id,
                button_text: text,
                button_type: 'scroll_v2', // Tipo de botón para diferenciar
                location: window.location.pathname
            });
        }
    };

    return (
        <button
            onClick={scrollToQuote}
            className="block py-3 px-4 cursor-pointer border-2 border-emerald-400 bg-white text-emerald-400 font-bold rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
            <span className='block text-xs lg:text-lg tracking-wide'>{text}</span>
        </button>
    );
};


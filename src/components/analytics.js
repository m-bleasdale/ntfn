'use client';

import { useEffect } from "react";

export default function Analytics () {
    useEffect(() => {
        if (window.location.hostname === 'localhost') return;

        const cookieBot = document.createElement('script');
        cookieBot.id = 'Cookiebot';
        cookieBot.src = 'https://consent.cookiebot.com/uc.js';
        cookieBot.type = 'text/javascript';
        cookieBot.setAttribute('data-cbid', 'd368d88e-41e7-4efe-ac83-8dd9b3ffcc2e');
        cookieBot.setAttribute('data-blockingmode', 'auto');
        cookieBot.async = true;
        document.head.appendChild(cookieBot);

        const gaScript = document.createElement('script');
        gaScript.setAttribute('data-cookieconsent', 'statistics');
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-4CBE8EKD6F';
        gaScript.async = true;
        document.head.appendChild(gaScript);

        const inlineScript = document.createElement('script');
        inlineScript.type = 'text/plain';
        inlineScript.setAttribute('data-cookieconsent', 'statistics');
        inlineScript.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4CBE8EKD6F');
            `;
        document.head.appendChild(inlineScript);
    }, []);

    return null;
}
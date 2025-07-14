'use client';

import { useEffect } from "react";

export default function Analytics () {
    useEffect(() => {
        //Skip tracking if on localhost
        if (window.location.hostname === 'localhost') return;

        //Sets all consent categories to denied by default
        const consentScript = document.createElement('script');
        consentScript.setAttribute('data-cookieconsent', 'ignore');
        consentScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag("consent", "default", {
            ad_personalization: "denied",
            ad_storage: "denied",
            ad_user_data: "denied",
            analytics_storage: "denied",
            functionality_storage: "denied",
            personalization_storage: "denied",
            security_storage: "granted",
            wait_for_update: 500
        });
        gtag("set", "ads_data_redaction", true);
        gtag("set", "url_passthrough", false);
        `;
        document.head.appendChild(consentScript);

        //Loads GA but only runs if user accepts statistics cookies
        const gaScript = document.createElement('script');
        gaScript.setAttribute('data-cookieconsent', 'statistics');
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-4CBE8EKD6F';
        gaScript.async = true;
        document.head.appendChild(gaScript);

        //Configures GA tracking (delayed until consent)
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
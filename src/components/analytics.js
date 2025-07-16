'use client';

import { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // Avoid running on localhost
    if (typeof window === 'undefined') return;
    const isLocalhost = window.location.hostname === 'localhost';

    if (isLocalhost) return;

    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }
    gtag('consent', 'default', {
        ad_storage: 'denied',
        analytics_storage: 'denied',
        wait_for_update: 500,
    });


    // Add Cookiebot script
    const cookiebotScript = document.createElement('script');
    cookiebotScript.id = 'Cookiebot';
    cookiebotScript.src = 'https://consent.cookiebot.com/uc.js';
    cookiebotScript.setAttribute('data-cbid', 'd368d88e-41e7-4efe-ac83-8dd9b3ffcc2e');
    cookiebotScript.setAttribute('data-blockingmode', 'auto');
    cookiebotScript.type = 'text/javascript';
    cookiebotScript.async = true;
    document.head.appendChild(cookiebotScript);

    // Add GA4 only if consent is given (via Cookiebot callback)
    window.addEventListener('CookieConsentDeclaration', () => {
      if (
        window.Cookiebot &&
        window.Cookiebot.consents &&
        window.Cookiebot.consents.given &&
        window.Cookiebot.consents.given.statistics
      ) {

        gtag('consent', 'update', {
          analytics_storage: 'granted',
        });

        // Inject GA4 script
        const gaScript = document.createElement('script');
        gaScript.src = `https://www.googletagmanager.com/gtag/js?id=G-4CBE8EKD6F`;
        gaScript.async = true;
        document.head.appendChild(gaScript);

        // gtag config
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }

        gtag('js', new Date());
        gtag('config', 'G-4CBE8EKD6F', {
          anonymize_ip: true,
        });
      }
    });
  }, []);

  return null;
};

export default Analytics;

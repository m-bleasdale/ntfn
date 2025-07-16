'use client';

import Script from 'next/script';
import { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.location.hostname === 'localhost') return;

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }

    gtag('consent', 'default', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
      wait_for_update: 500,
    });

    // CookieConsentDeclaration listener
    const handleConsent = () => {
      console.log('CookieConsentDeclaration event fired');
      console.log('Cookiebot consent object:', window.Cookiebot?.consents);

      if (
        window.Cookiebot?.consents?.given?.statistics
      ) {
        console.log('Consent granted — loading GA');

        gtag('consent', 'update', {
          analytics_storage: 'granted',
        });

        const gaScript = document.createElement('script');
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-4CBE8EKD6F';
        gaScript.async = true;
        document.head.appendChild(gaScript);

        gtag('js', new Date());
        gtag('config', 'G-4CBE8EKD6F', {
          anonymize_ip: true,
        });
      } else {
        console.log('Consent not granted for statistics.');
      }
    };

    window.addEventListener('CookieConsentDeclaration', handleConsent);

    return () => {
      window.removeEventListener('CookieConsentDeclaration', handleConsent);
    };
  }, []);

  // Cookiebot script in head using <Script />
  return (
    <>
      <Script
        id="cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        strategy="beforeInteractive"
        data-cbid="d368d88e-41e7-4efe-ac83-8dd9b3ffcc2e"
        data-blockingmode="auto"
        data-consentmode="test"
        type="text/javascript"
      />
    </>
  );
};

export default Analytics;

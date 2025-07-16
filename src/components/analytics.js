'use client';

import { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // Avoid running on localhost
    if (typeof window === 'undefined') return;
    const isLocalhost = window.location.hostname === 'localhost';

    if (isLocalhost) return;

    // Add Cookiebot script with test mode
    const cookiebotScript = document.createElement('script');
    cookiebotScript.id = 'Cookiebot';
    cookiebotScript.src = 'https://consent.cookiebot.com/uc.js';
    cookiebotScript.setAttribute('data-cbid', 'd368d88e-41e7-4efe-ac83-8dd9b3ffcc2e');
    cookiebotScript.setAttribute('data-blockingmode', 'auto'); // Blocks cookies until consent
    cookiebotScript.setAttribute('data-consentmode', 'test'); // Force showing the banner in all regions (testing mode)
    cookiebotScript.type = 'text/javascript';
    cookiebotScript.async = true;
    document.head.appendChild(cookiebotScript);

    // Log to confirm the script is injected
    console.log('Cookiebot script injected:', cookiebotScript);

    // Initialize GA consent with "denied" state for analytics_storage
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('consent', 'default', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
      wait_for_update: 500,
    });

    // Wait for Cookiebot consent event
    window.addEventListener('CookieConsentDeclaration', () => {
      // Log Cookiebot state
      console.log('Cookiebot consent event triggered.');

      if (
        window.Cookiebot &&
        window.Cookiebot.consents &&
        window.Cookiebot.consents.given &&
        window.Cookiebot.consents.given.statistics
      ) {
        console.log('Consent for analytics granted');

        // Grant GA consent after user accepts analytics cookies
        gtag('consent', 'update', {
          analytics_storage: 'granted',
        });

        // Inject GA4 script
        const gaScript = document.createElement('script');
        gaScript.src = `https://www.googletagmanager.com/gtag/js?id=G-4CBE8EKD6F`;
        gaScript.async = true;
        document.head.appendChild(gaScript);

        // Configure GA with anonymized IP
        gtag('js', new Date());
        gtag('config', 'G-4CBE8EKD6F', {
          anonymize_ip: true,
        });
      } else {
        console.log('Consent for analytics not granted.');
      }
    });
  }, []);

  return null;
};

export default Analytics;

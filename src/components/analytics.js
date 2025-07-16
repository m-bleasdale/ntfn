'use client';

import Script from 'next/script';

const Analytics = () => {
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return null; // Don't load anything on localhost
  }

  return (
    <>
      {/* Cookiebot script: must load before anything else */}
      <Script
        id="cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        strategy="beforeInteractive"
        data-cbid="d368d88e-41e7-4efe-ac83-8dd9b3ffcc2e"
        data-blockingmode="auto"
        data-consentmode="test"
        type="text/javascript"
      />

      {/* gtag init script: sets default to denied */}
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            ad_storage: 'denied',
            analytics_storage: 'denied',
            wait_for_update: 500
          });
        `}
      </Script>

      {/* Consent listener & GA load */}
      <Script id="ga-consent-handler" strategy="afterInteractive">
        {`
          window.addEventListener('CookieConsentDeclaration', function () {
            if (
              window.Cookiebot &&
              window.Cookiebot.consents &&
              window.Cookiebot.consents.given &&
              window.Cookiebot.consents.given.statistics
            ) {
              console.log('[Cookiebot] Consent for statistics granted. Loading GA...');
              
              gtag('consent', 'update', {
                analytics_storage: 'granted'
              });

              var gaScript = document.createElement('script');
              gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-4CBE8EKD6F";
              gaScript.async = true;
              document.head.appendChild(gaScript);

              gtag('js', new Date());
              gtag('config', 'G-4CBE8EKD6F', { anonymize_ip: true });
            } else {
              console.log('[Cookiebot] Consent not granted for statistics.');
            }
          });
        `}
      </Script>
    </>
  );
};

export default Analytics;

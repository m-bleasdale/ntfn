'use client';

import { useEffect } from "react";

import Script from 'next/script';

export default function Analytics () {

    useEffect(() => {
        if (window.location.hostname === 'localhost') return; 
    }, []);

    return (
        <Script 
            data-goatcounter="https://ntfn.goatcounter.com/count"
            async src="//gc.zgo.at/count.js">
        </Script>
    )
}
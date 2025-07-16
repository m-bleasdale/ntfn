'use client';

import { useEffect } from "react";

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
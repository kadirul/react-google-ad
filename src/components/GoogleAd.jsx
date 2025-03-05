import React, { useEffect, useRef } from "react";

function GoogleAd({ client, slot, format = "auto", responsive = "true" }) {
  const adRef = useRef(null);
  const isAdLoaded = useRef(false); // Track if the ad is already loaded

  useEffect(() => {
    if (adRef.current && !isAdLoaded.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isAdLoaded.current = true; // Prevent multiple ad loads
      } catch (e) {
        console.error("AdSense Error:", e);
      }
    }
  }, []);

  return (
    <div className="ad-container">
        {    console.log('ads==', client, slot)
        }
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      ></ins>
    </div>
  );
}

export default GoogleAd;

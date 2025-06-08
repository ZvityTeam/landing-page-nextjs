'use client'

import { useEffect } from 'react';

export default function WaitlistWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://waitlister.me/js/embed.js';
    script.defer = true;
    document.body.appendChild(script);

        const interval = setInterval(() => {
      const iframe = document.querySelector('.waitlister-form iframe') as HTMLIFrameElement;
      if (iframe) {
        iframe.style.maxWidth = '100%'; // ✅ override maxWidth
        iframe.style.width = '100%';    // ensure full width
        clearInterval(interval); // stop once applied
      }
    }, 200); // keep checking every 200ms until iframe appears


    return () => {
      document.body.removeChild(script);
       clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="waitlister-form w-full"
      data-waitlist-key="7mXTQhVxuYTD"
      data-height="400px"
      style={{ overflowX: 'hidden', overflowY: 'hidden', width:"100%" , maxWidth:"100%!important"}}
    />
  );
}

"use client";

import React, { useState, useEffect } from 'react';
import { Logo } from '@/components/logo';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      {/* Placeholder for Logo */}
      <div className="mb-8 flex justify-center">
        <Logo className="w-16 h-16" />
      </div>

      <h1 className="text-5xl font-bold mb-4">
        vibetolaunch
      </h1>

      <p className="text-lg text-center max-w-xl mb-8">
        Real-world AI SaaS insights from the trenches
        <br /> as we build, launch and grow AI SaaS products
      </p>

      <div className="w-full max-w-md border border-gray-700 rounded-md overflow-hidden">
        {isClient && (
          <iframe src="https://embeds.beehiiv.com/68d67b66-da9d-4a3b-8270-5755d3500cc8?slim=true" data-test-id="beehiiv-embed" height="52" frameBorder="0" scrolling="no" style={{ margin: 0, borderRadius: '0px', backgroundColor: 'transparent', width: '100%' }}></iframe>
        )}
      </div>
    </div>
  );
}

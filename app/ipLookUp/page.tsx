'use client';

import React, { useState, useEffect } from 'react';

export default function MyIpPage() {
  const [ip, setIp] = useState<string>('Loading...');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Function to fetch the public IP address
  const fetchIp = async () => {
    setIsLoading(true);
    setIp('Loading...');
    try {
      const response = await fetch('https://ipify.org');
      if (!response.ok) throw new Error('Network response failed');
      
      const data = await response.json();
      setIp(data.ip);
    } catch (error) {
      setIp('Error fetching IP');
      console.error('Failed to get IP address:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchIp();
  }, []);

  return (



    <main className="flex h-screen w-screen items-center justify-center bg-slate-700 font-serif">
	<div class="fixed inset-x-0 top-0 h-8 bg-slate-800 border-b border-slate-600">
	  <div class="flex items-center justify-between gap-8 mt-1 px-4 sm:px-6">
	     <div class="flex items-center gap-4">
		<h1 class="font-serif text-white">Jack Dockus</h1>
	     </div>
		<div class="flex items-center gap-6">
		  <a class="text-sm/6 text-white" href="/">Home</a>
		  <a class="text-sm/6 text-white" href="/ipLookUp">Link</a>
		</div>
	  </div>
	</div>


      <div className="w-full max-w-md rounded-xl bg-slate-400 p-8 text-center shadow-lg transition-all duration-300">
        <h1 className="mb-5 text-xl font-semibold text-mist-900">
          Your Public IP Address
        </h1>
        
        <div className="mb-6 flex min-h-[70px] items-center justify-center break-all rounded-lg bg-gray-50 p-4 text-2xl font-bold text-indigo-500 border border-indigo-300">
          {ip}
        </div>
        
        <button 
          onClick={fetchIp} 
          disabled={isLoading}
          className={`w-full rounded-lg px-6 py-3 text-base font-medium text-slate-900 shadow-sm transition-colors duration-200 
            ${isLoading 
              ? 'bg-indigo-500 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
            }`}
        >
          {isLoading ? 'Fetching...' : 'Refresh IP'}
        </button>
      </div>
    </main>
  );
}



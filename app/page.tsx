import Image from "next/image";

export default function Home() {
  return (
	<html class="bg-gray-700">
	<div class="fixed inset-x-0 top-0 h-8 bg-slate-800 border-b border-slate-600">
	  <div class="flex items-center justify-between gap-8 mt-1 px-4 sm:px-6">
	     <div class="flex items-center gap-4">
		<h1 class="font-serif text-white">Jack Dockus</h1>
	     </div>
		<div class="flex items-center gap-6">
		  <a class="text-sm/6 text-white" href="/ipLookUp">Link</a>
		</div>
	  </div>
	</div>

	  <div class="flex justify-end bg-gray-700 gap-y-10">

	 	 <div class="m-10 w-fit rounded-xl bg-indigo-950 px-10 py-4 shadow-lg outline-2 outline-offset-1 outline-indigo-900">
		  <div>
	    		<div class="text-xl font-medium text-pink-200">You're Home!!</div>
	    		<p class="text-gray-500 dark:text-gray-400">Take a Seat</p>
			<Image 
			src="/HomePaint.png" 
			width={50}
			height={50}
			alt="home"
			/>
		   </div>
		</div>
     </div>
   </html>
  );
}



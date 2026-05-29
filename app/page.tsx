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
		  <a class="text-sm/6 text-white" href="">Link</a>
		</div>
	  </div>
	</div>

	  <div class="md:flex-initial items-center bg-gray-700 grid grid-cols-3 grid-flow-row auto-rows-max gap-y-10">

	 	 <div class="flex-initial m-10 col-2 rounded-xl bg-indigo-950 px-10 py-4 shadow-lg outline-2 outline-offset-1 outline-indigo-900">
		  <div>
	    		<div class="text-xl font-medium text-pink-200">Home Page</div>
	    		<p class="text-gray-500 dark:text-gray-400">I made random stuff!</p>
		   </div>
		</div>

	<div class="mx-auto items-center bg-gray-700">
		<button class="outline-1 outline-offset-0 outline-pink-300 bg-orange-300 
		transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-200 hover:bg-orange-600">Button</button>
	</div>

     </div>
   </html>
  );
}


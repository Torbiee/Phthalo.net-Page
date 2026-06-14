"use client";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { useRef } from "react";

export default function Home() {
  return (
    <div className="bg-slate-950">
      {/*
      <div className="fixed inset-x-0 top-0 h-8 bg-slate-800 border-b border-slate-600">
        <div className="flex items-center justify-between gap-8 mt-1 px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <h1 className="font-serif text-white">Jack Dockus</h1>
          </div>
          <div className="flex items-center gap-6 font-serif">
            <Link
              className="text-sm/6 text-white hover:text-sky-500"
              href="/ipLookUp"
            >
              Link
            </Link>
            <Link
              className="text-sm/6 text-white hover:text-sky-500"
              href="/excelDataP"
            >
              Excel
            </Link>
            <Link
              className="text-sm/6 text-white hover:text-sky-500"
              href="/raspStats"
            >
              Stats
            </Link>
          </div>
        </div>
      </div>
      */}

      <div className="relative ml-20 mt-20">
        <span className="relative z-10 text-white text-9xl">Enter</span>
        <motion.span
          className="absolute inset-0 text-red-500 text-9xl"
          style={{ mixBlendMode: "screen" }}
          initial={{ x: 0, opacity: 1 }}
          animate={{
            x: [-3, -6, 0, -4, -3],
            opacity: [1, 0.8, 1, 0.9, 1],
          }}
          transition={{
            duration: 0.15,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          Enter
        </motion.span>
        <motion.span
          className="absolute inset-0 text-cyan-400 text-9xl"
          style={{ clipPath: "inset(30% 0 50% 0)" }}
          animate={{
            x: [0, 12, -8, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            repeatDelay: 2.5,
          }}
        >
          Enter
        </motion.span>
      </div>

      <hr className="border-t border-white/20 my-8 mx-8" />

      <div 
      className="w-fit" 
      style={{
	      border: "2px solid cyan",
	      outline: "2px solid red",
	      outlineOffset: "3px",
      }}>
      <a href="/excelDataP">Test</a>
      </div>

      {/*
      <div className="flex justify-center bg-gray-700 gap-y-10">
        <div className="m-10 w-fit rounded-xl bg-indigo-950 px-10 py-4 shadow-lg outline-2 outline-offset-1 outline-indigo-900">
          <div className="items-center">
            <div className="text-xl font-medium text-pink-200">
              You're Home!!
            </div>
            <p className="text-gray-500 dark:text-gray-400">Take a Seat</p>
            <Image src="/HomePaint.png" width={150} height={150} alt="home" />
          </div>
        </div>
      </div>
      <div style={{ filter: "url(#goo)" }}>
        <motion.div 
	drag
          style={{
            width: 300,
            height: 300,
	    left: 100,
	    top: 80,
	    background: "radial-gradient(circle at 38% 38%, #4F46E5, #5adaedaa)",
          }}
	  animate={{
		  x: [0, 120, 60, 0],
		  y: [0, 80, 200, 0],
		  scale: [1, 1.1, 0.9, 1],
	  }}
	  transition={{
		  duration: 14,
		  ease: "easeInOut",
		  repeat: Infinity,
	  }}
          className="absolute rounded-full flex justify-center"
        />
         </div>
	 <svg className="absolute w-0 h-0">
	 <defs>
	 <filter id="goo">
	 <feGaussainBlur in="SourceGraphic" stdDeviation="18" result="blur" />
	 <feColorMatrix
	 in="blur"
	 mode="matrix"
	 values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 26 -10"
	 result="goo"
	 />
	 </filter>
	 </defs>
	 </svg> 

      <div className="isolate flex justify-center size-30 perspective-dramatic m-15">
        <div className="font-serif bg-violet-300/75 text-white-400 -translate-z-15 -rotate-x-30 rotate-y-25 mix-blend-soft-light">
          This
        </div>
        <div class="-translate-z-12 rotate-y-20 bg-pink-300/75 mix-blend-soft-light">
          website
        </div>
        <div class="translate-x-5 rotate-y-30 rotate-x-15 bg-lime-300/75">
          was
        </div>
        <div class="translate-x-12 -rotate-y-25 - rotate-x-15 bg-sky-300/75">
          created
        </div>
        <div class="translate-y-20 translate-x-20 rotate-y-10 bg-yellow-300/75">
          to
        </div>
        <div class="translate-y-20 translate-x-25 -rotate-x-20 bg-orange-300/75">
          learn
        </div>
      </div>
      <div className="bg-gray-700 flex justify-center">
        <div className="items-center mt-10">
          <p className="font-serif font-semibold underline list-disc">Facts</p>
          <ul>
            <li>- Five Nights at Freddys?? is real lore</li>
            <li>- Deadlock is one of the best shooters ever made</li>
            <li className="text-pink-200">
              - JigglyPuff is the most powerful pokemon.
            </li>
          </ul>
        </div>
      </div>
      */}
    </div>
  );
}

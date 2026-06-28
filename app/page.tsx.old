"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, Variants } from "motion/react";
import { useRef, useState, useEffect } from "react";

function TableRow({ name, description, href }) {
  const router = useRouter();
  return (
    <tr
      onClick={() => router.push(href)}
      className="cursor-pointer border-b border-white/30 hover:bg-mauve-400/50 transition"
    >
      <td className="px-4 font-serif text-md">{name}</td>
      <td className="py-1 px-4 font-serif text-sm">
        {description}
      </td>
    </tr>
  );
}

const draw: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        type: "tween",
        duration: 2,
        ease: "linear",
      },
    },
  },
};

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-mauve-800 h-[100vh]">
      <div className="flex justify-center">
        <motion.svg
          viewBox="0 0 200 230"
          width="150"
          height="180"
          fill="transparent"
          stroke="white"
          strokeWidth="2.0"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M 100 10 L 100 145"
            variants={draw}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M 100 10 L 125 18 L 100 26 Z"
            fill="transparent"
            stroke="white"
            initial="hidden"
            animate="visible"
            variants={draw}
          />
          <motion.path
            d="M 100 30 L 168 132 L 100 140 Z"
            fill="transparent"
            stroke="white"
            variants={draw}
          />
          <motion.path
            d="M 100 45 L 38 122 L 100 138 Z"
            fill="transparent"
            stroke="white"
            variants={draw}
          />
          <motion.path
            d="M 30 148 L 45 165 Q 100 182 155 165 L 170 148 Z"
            fill="transparent"
            stroke="white"
            variants={draw}
          />
          <motion.path
            d="M 10 178 Q 50 168 90 178 Q 130 188 170 178 Q 195 171 210 178"
            fill="transparent"
            stroke="white"
            variants={draw}
          />
        </motion.svg>
      </div>

      <p className="font-serif text-xs mx-8">Jacks(AKA Boats) Projects</p>
      <hr className="border-t border-white/20 mb-2 mx-8" />

      <table className="border-collapse mx-8 flex justify-center">
        <tbody>
          <TableRow
            name="Excel Sorter"
            description="Excel Spreadsheet Sorter"
            href="/excelDataP"
          />
          <TableRow
            name="RaspPi Stats"
            description="Current Stats of my Raspberry Pi"
            href="/raspStats"
          />
	  <TableRow
	  name="testing"
	  description="testing"
	  href="/testing"
	  />
        </tbody>
      </table>
    </div>
  );
}


/*

<td className="w-1/2 font-serif text-left text-xs px-4">
              Projects
            </td>
            <td className="w-1/2 font-serif text-left text-xs px-4">
              Description
            </td>

 *
 *
   */

"use client";
import { Michroma } from "next/font/google";
import * as THREE from "three";
import { useMemo, useRef, useLayoutEffect, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Mesh, PlaneGeometry } from "three";
import { Gradient } from "./background.js";
import "./styles.css";
import Image from "next/image";
import dynamic from "next/dynamic";

const WaterBackground = dynamic(() => import("@/components/WaterBackground"), {
  ssr: false,
});

const fontmich = Michroma({
  weight: "400",
  display: "swap",
  variable: "--font-michroma",
  subsets: ["latin"],
});

export default function Terrain() {
  return (
    <main className={`absolute inset-0 ${fontmich.className} mx-[10%]`}>
      <div className="flex justify-center mt-[10%]">
        <div
          className="relative rounded-3xl border border-cyan-300/25 bg-slate-950/30 backdrop-blur-xl p-8 shadow-[0_0_40px_rgba(34,211,238,.18)] transition-all duration-500 hover:border-cyan-200/50 hover:shadow-[0_0_70px_rgba(34,211,238,.35)]
	  animate-float"
        >
          <p className="text-7xl  text-cyan-100 neon-text">Boat</p>
        </div>
      </div>

      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, -20, 20], fov: 75 }}>
          <WaterBackground />
          <ambientLight intensity={0.1} />
          <directionalLight position={[0, 30, 0]} intensity={10} />
          <fog attach="fog" args={["#0b4275", 1, 120]} />
          <color attach="background" args={["#001220"]} />
        </Canvas>
      </div>
    </main>
  );
}

//<fog attach="fog" args={["#002a33", 5, 50]} />

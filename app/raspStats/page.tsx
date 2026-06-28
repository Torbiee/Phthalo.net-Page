"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { Stars, Caustics } from "@react-three/drei";
import { Michroma } from "next/font/google";

const fontmich = Michroma({
  weight: "400",
  display: "swap",
  variable: "--font-michroma",
  subsets: ["latin"],
});

export default function Page() {
  const [stats, setStats] = useState(null);
  useEffect(() => {
    const fetchStats = () => {
      fetch("http://192.168.1.188:8080/api/stats")
        .then((res) => res.json())
        .then((data) => setStats(data));
    };

    fetchStats();
    const interval = setInterval(fetchStats, 5000); //5 seconcds
    return () => clearInterval(interval);
  }, []);

  if (!stats)
    return (
      <div className="neon-text mt-[50vh]">
        <div className="flex justify-center place-content-center font-bold text-2xl bg-neutral-950 animate-bounce">
          <p>Loading...</p>
        </div>
      </div>
    );

  return (
    <main
      className={`relative min-h-screen flex justify-center items-center neon-text ${fontmich.className}`}
    >
      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center gap-12 ">
        {/* Title */}
        <h1 className="text-8xl">Stats</h1>

        {/* Stat Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* CPU */}
          <div className="glass-panel px-4 py-2">
            <p className="underline">CPU Temp</p>
            <p>{stats.cpuTemp}</p>
            <p>Ideal: Below 60</p>
            <p>Normal: 60–70</p>
            <p>Not Ideal: 70–80</p>
          </div>

          {/* Memory */}
          <div className="glass-panel px-4 py-2">
            <h3 className="underline">Memory</h3>
            <p>Total Memory: {stats.memTotal}</p>
            <p>Used Memory: {stats.usedMem}</p>
            <p>Free Memory: {stats.freeMem}</p>
            <p>Percent Used: {stats.memoryUsedPercent}</p>
          </div>

          {/* Uptime */}
          <div className="glass-panel px-4 py-2">
            <h3 className="underline">Uptime</h3>
            <p>{stats.uptimeDays}</p>
            <p>{stats.uptimeMinutes}</p>
          </div>

          {/* Tasks */}
          <div className="glass-panel px-4 py-2">
            <h3 className="underline">Tasks</h3>
            <p>Total Tasks: {stats.totalTasks}</p>
            <p>Running Tasks: {stats.runningTasks}</p>
            <p>Sleeping Tasks: {stats.sleepingTasks}</p>
            <p>Stopped Tasks: {stats.stoppedTasks}</p>
          </div>
        </div>
        <Link
          href="/"
          className="text-xl neon-link" 
        >
          Home
        </Link>
      </div>

      {/* Background */}
      <div className="fixed inset-0 z-0">
        <Canvas
          className="h-full w-full"
          camera={{
            position: [0, 0, 5],
            fov: 75,
          }}
        >
          <color attach="background" args={["#001220"]} />
          <fog attach="fog" args={["#0b4275", 1, 120]} />

          <Stars
            radius={100}
            depth={50}
            count={50000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />

          <ambientLight intensity={0.1} />
          <directionalLight position={[0, 30, 0]} intensity={10} />
        </Canvas>
      </div>
    </main>
  );
}

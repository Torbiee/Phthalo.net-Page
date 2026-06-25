"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

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
      <div className="bg-mauve-800">
        <div className="flex justify-center place-content-center font-bold text-2xl bg-mauve-800 animate-bounce">
          <p>Loading...</p>
        </div>
      </div>
    );

  return (
    <div className="bg-mauve-800">
      <div className="ml-3 flex flex-row gap-2">
        <Link href="/">
          <svg
            viewBox="0 0 200 230"
            width="50"
            height="80"
            fill="transparent"
            stroke="white"
            strokeWidth="2.0"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M 100 10 L 100 145" />
            <path
              d="M 100 10 L 125 18 L 100 26 Z"
              fill="transparent"
              stroke="white"
              initial="hidden"
              animate="visible"
            />
            <path
              d="M 100 30 L 168 132 L 100 140 Z"
              fill="transparent"
              stroke="white"
            />
            <path
              d="M 100 45 L 38 122 L 100 138 Z"
              fill="transparent"
              stroke="white"
            />
            <path
              d="M 30 148 L 45 165 Q 100 182 155 165 L 170 148 Z"
              fill="transparent"
              stroke="white"
            />
            <path
              d="M 10 178 Q 50 168 90 178 Q 130 188 170 178 Q 195 171 210 178"
              fill="transparent"
              stroke="white"
            />
          </svg>
        </Link>
	<p className="font-serif mt-5">Pi Stats</p>
      </div>
      <div className="bg-mauve-800 font-serif">
        <div className="mt-5">
          <div className="flex w-fit flex-wrap sm:flex-col sm:justify-center gap-2 ml-2">
            <div className="px-4 outline outline-mauve-500 rounded bg-mauve-500/30">
              <p className="underline">CPU Temp</p>
              <p>{stats.cpuTemp}</p>
              <p>Ideal: Below 60°C</p>
              <p>Normal: 60°-70°</p>
              <p>Not Ideal: 70°-80°</p>
            </div>

            <div className="px-4 outline outline-mauve-500 rounded bg-mauve-500/30">
              <h3 className="underline">Memory</h3>
              <p>Total Memory: {stats.memTotal}</p>
              <p>Used Memory: {stats.usedMem}</p>
              <p>Free Memory: {stats.freeMem}</p>
              <p>Percent Used: {stats.memoryUsedPercent}</p>
            </div>

            <div className="px-4 outline outline-mauve-500 rounded bg-mauve-500/30">
              <p className="underline"> Uptime</p>
              <p>{stats.uptimeDays} </p>
              <p>{stats.uptimeMinutes} </p>
            </div>
            <div className="px-4 outline outline-mauve-500 rounded bg-mauve-500/30">
              <h3 className="underline">Tasks</h3>
              <p>Total Tasks: {stats.totalTasks}</p>
              <p>Running Tasks: {stats.runningTasks}</p>
              <p>Sleeping Tasks: {stats.sleepingTasks}</p>
              <p>Stopped Tasks: {stats.stoppedTasks}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

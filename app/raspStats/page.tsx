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
      <div className="bg-gray-700">
        <div className="flex justify-center place-content-center font-bold text-2xl bg-gray-700 animate-bounce">
          <p>Loading...</p>
        </div>
      </div>
    );

  return (
    <div>
      <div className="fixed inset-x-0 top-0 h-8 bg-slate-800 border-b border-slate-600">
        <div className="flex items-center justify-between gap-8 mt-1 px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <h1 className="font-serif text-white">Jack Dockus</h1>
          </div>
          <div className="flex items-center gap-6 font-serif">
            <Link className="text-sm/6 text-white hover:text-sky-500" 
	       href="/">
              Home
            </Link>

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

      <div className="bg-gray-700 mt-10">
        <div className="flex justify-center text-2xl font-bold underline underline-offset-3">
          <h1>Pi Stats</h1>
        </div>
        <div className="mt-5 divide-y-2 divide-gray-500">
          <div className="flex justify-center divide-x-2 divide-gray-500">
            <div className="px-4">
              <p className="underline">CPU Temp</p>
              <p>{stats.cpuTemp}</p>
              <p>Ideal: Below 60°C</p>
              <p>Normal: 60°-70°</p>
              <p>Not Ideal: 70°-80°</p>
            </div>

            <div className="px-4">
              <h3 className="underline">Memory</h3>
              <p>Total Memory: {stats.memTotal}</p>
              <p>Used Memory: {stats.usedMem}</p>
              <p>Free Memory: {stats.freeMem}</p>
              <p>Percent Used: {stats.memoryUsedPercent}</p>
            </div>
          </div>

          <div className="flex justify-center divide-x-2 divide-gray-500">
            <div className="px-4">
              <p className="underline"> Uptime</p>
              <p>{stats.uptimeDays} </p>
              <p>{stats.uptimeMinutes} </p>
            </div>
            <div className="px-4">
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

import Image from "next/image";

export default function Home() {
  return (
	  <div>
      <div className="fixed inset-x-0 top-0 h-8 bg-slate-800 border-b border-slate-600">
        <div className="flex items-center justify-between gap-8 mt-1 px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <h1 className="font-serif text-white">Jack Dockus</h1>
          </div>
          <div className="flex items-center gap-6">
            <a className="text-sm/6 text-white hover:text-sky-500" href="/ipLookUp">
              Link
            </a>
            <a className="text-sm/6 text-white hover:text-sky-500" href="/excelDataP">
              Excel
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-gray-700 gap-y-10">
        <div className="m-10 w-fit rounded-xl bg-indigo-950 px-10 py-4 shadow-lg outline-2 outline-offset-1 outline-indigo-900">
          <div className="items-center">
            <div className="text-xl font-medium text-pink-200">You're Home!!</div>
            <p className="text-gray-500 dark:text-gray-400">Take a Seat</p>
            <Image src="/HomePaint.png" width={150} height={150} alt="home" />
          </div>
        </div>
      </div>
      </div>
  );
}

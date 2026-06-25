import { Gradient } from "./background.js";



export default function Terrain() {
  useLayoutEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);
  return (
    <main className="relative flex items-center justify-center">
      <div className="box-border p-[20px] flex justify-center">
        <div className="relative flex flex-col w-[50vh] h-[5vh]">
          <canvas
            className="rounded-xl absolute inset-0 "
            id="gradient-canvas"
            data-transition-in
          />
          <div className="relative z-10 text-black flex flex-col justify-center items-center px-10">
            <p className="mt-2">test2</p>
          </div>

          <Canvas></Canvas>
        </div>
      </div>
    </main>
  );
}

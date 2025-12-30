import { FaDumbbell } from "react-icons/fa";

export default function SplashScreen({ onFinish }) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center
                 bg-black text-white overflow-hidden"
    >
      {/* GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20
                      blur-[160px] rounded-full animate-pulse" />

      {/* CONTENT */}
      <div
        className="relative flex flex-col items-center gap-4
                   animate-[splashIn_1.2s_ease-out_forwards]"
      >
        <FaDumbbell className="text-cyan-400 text-6xl animate-bounce" />

        <h1 className="text-3xl font-extrabold tracking-widest">
          GYM<span className="text-cyan-400">.</span>
        </h1>

        <p className="text-gray-400 text-sm tracking-wide">
          Build • Train • Transform
        </p>
      </div>

      {/* AUTO EXIT */}
      <div className="absolute inset-0 animate-[splashOut_1s_ease-in_2.2s_forwards]"
           onAnimationEnd={onFinish}
      />
    </div>
  );
}

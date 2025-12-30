import { FiArrowUpRight } from "react-icons/fi";

export default function ProgramCard({ program }) {
  const Icon = program.icon;

  return (
    <div
      className="group relative p-6 rounded-3xl
                 bg-white/5 backdrop-blur-xl
                 border border-white/10
                 hover:border-cyan-400/40
                 hover:-translate-y-2
                 transition-all duration-500"
    >
      {/* ICON */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center
                   bg-cyan-400/10 text-cyan-400 text-2xl
                   group-hover:scale-110 transition"
      >
        <Icon />
      </div>

      {/* CONTENT */}
      <h3 className="text-xl font-semibold mt-6 text-white">
        {program.title}
      </h3>

      <p className="text-gray-400 text-sm mt-3 leading-relaxed">
        {program.desc}
      </p>

      {/* ARROW */}
      <div
        className="absolute bottom-6 right-6 text-gray-400
                   group-hover:text-cyan-400
                   group-hover:rotate-45 transition"
      >
        <FiArrowUpRight size={22} />
      </div>
    </div>
  );
}

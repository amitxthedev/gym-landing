import programsData from "../../data/programsData";
import ProgramCard from "./ProgramCard";

export default function Programs() {
  return (
    <section
      id="programs"
      className="relative py-24 bg-black text-white scroll-mt-28"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-cyan-950/40" />

      <div className="relative max-w-[1200px] mx-auto px-5 md:px-8">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Our <span className="text-cyan-400">Programs</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Choose a program that fits your fitness goals.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programsData.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

      </div>
    </section>
  );
}

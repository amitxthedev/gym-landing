import { FaDumbbell, FaUsers, FaAward } from "react-icons/fa";

export default function About() {
  return (
    <section className="relative py-28 text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-black to-purple-950" />
      <div className="absolute inset-0 bg-black/70" />

      {/* GLOWS */}
      <div className="absolute -top-40 left-20 w-[420px] h-[420px] bg-cyan-500/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-20 w-[420px] h-[420px] bg-purple-500/20 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            About <span className="text-cyan-400">Our Gym</span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            We are more than just a gym — we are a community driven by results,
            discipline, and transformation.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">

          {/* LEFT */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Founded with the mission to empower people through fitness, our
              gym provides a supportive environment where beginners and
              professionals train side by side.
            </p>

            <p className="text-gray-300 leading-relaxed">
              With certified trainers, modern equipment, and science-backed
              programs, we help you build strength, confidence, and a healthier
              lifestyle.
            </p>

            {/* STATS */}
            <div className="flex gap-8 pt-6">
              <AboutStat icon={<FaUsers />} value="5000+" label="Members" />
              <AboutStat icon={<FaAward />} value="10+" label="Years Experience" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20
                          rounded-3xl p-8 space-y-6">
            <div className="flex items-center gap-3">
              <FaDumbbell className="text-cyan-400 text-xl" />
              <h3 className="text-xl font-semibold">Why Choose Us?</h3>
            </div>

            <ul className="space-y-3 text-gray-300 text-sm">
              <li>✔ Certified professional trainers</li>
              <li>✔ Modern gym equipment</li>
              <li>✔ Personalized workout plans</li>
              <li>✔ Friendly & motivating environment</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

/* =======================
   ABOUT STAT
======================= */
function AboutStat({ icon, value, label }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-cyan-400 text-xl">{icon}</div>
      <div>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-sm text-gray-400">{label}</p>
      </div>
    </div>
  );
}

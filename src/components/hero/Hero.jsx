import { useEffect, useState } from "react";
import heroData from "../../data/heroData";
import heroImg from "../../assets/gym.jpg";

/* React Icons */
import { FaDumbbell, FaUsers, FaMedal, FaClock } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { HiCheckCircle } from "react-icons/hi";

/* =======================
   COUNTER
======================= */
function Counter({ end, suffix = "", duration = 1500 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = Math.max(1, Math.floor(end / (duration / 16)));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

/* =======================
   STAT ITEM
======================= */
function Stat({ icon, value, label }) {
  return (
    <div className="flex items-center gap-3 min-w-[90px] sm:min-w-[140px]">
      <div className="text-cyan-400 text-xl sm:text-2xl">
        {icon}
      </div>
      <div>
        <p className="text-xl sm:text-2xl font-bold text-white leading-none">
          {value}
        </p>
        <p className="text-[11px] sm:text-xs text-gray-400">
          {label}
        </p>
      </div>
    </div>
  );
}

/* =======================
   HERO
======================= */
export default function Hero() {
  const {
    title,
    subtitle,
    highlightLine,
    description,
    primaryButton,
    secondaryButton,
    features,
  } = heroData;

  return (
    <section
      id="home"
      className="relative py-32 lg:py-40
 pt-24 text-white scroll-mt-28"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-black to-purple-950" />
      <div className="absolute inset-0 bg-black/60" />

      {/* GLOWS */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-cyan-500/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 -right-40 w-[420px] h-[420px] bg-purple-500/20 blur-[160px] rounded-full" />

      <div className="
  relative z-10 max-w-[1200px] mx-auto px-5 md:px-8
  py-16 lg:min-h-[calc(100vh-6rem)]
  lg:flex lg:items-center
">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center w-full">

          {/* IMAGE SECTION */}
          <div className="relative flex flex-col items-center lg:items-end lg:order-2">

            {/* IMAGE */}
            <div
              className="relative w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px]
                         h-[320px] sm:h-[320px] md:h-[320px] lg:h-[320px]
                         rounded-3xl overflow-hidden shadow-2xl
                         animate-[floatSlow_6s_ease-in-out_infinite]
                         hover:-translate-y-2 transition-all duration-700"
            >
              <img
                src={heroImg}
                alt="Gym Training"
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* WHY CHOOSE US — DESKTOP */}
            <div
              className="absolute -bottom-12 right-0 w-80 rounded-3xl
                         bg-white/10 backdrop-blur-xl border border-white/20
                         p-6 shadow-xl hidden lg:block
                         opacity-0 animate-[fadeUp_0.8s_ease-out_0.8s_forwards]"
            >
              <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                {features.map((item, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <HiCheckCircle className="text-cyan-400 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* WHY CHOOSE US — MOBILE */}
            <div className="lg:hidden mt-8 w-full rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6">
              <h3 className="text-lg font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                {features.map((item, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <HiCheckCircle className="text-cyan-400 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="space-y-6 text-center lg:text-left lg:order-1">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]">
              {title}
              <br />
              {subtitle}
            </h1>

            <p className="text-cyan-400 text-base sm:text-lg font-semibold opacity-0 animate-[fadeUp_0.8s_ease-out_0.15s_forwards]">
              {highlightLine}
            </p>

            <p className="text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed opacity-0 animate-[fadeUp_0.8s_ease-out_0.3s_forwards]">
              {description}
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-[fadeUp_0.8s_ease-out_0.45s_forwards]">
              <a
                href={primaryButton.link}
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 hover:shadow-2xl transition"
              >
                <FaDumbbell />
                {primaryButton.label}
              </a>

              <a
                href={secondaryButton.link}
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl border border-white/30 hover:bg-white/10 hover:border-cyan-400 transition"
              >
                {secondaryButton.label}
                <FiArrowUpRight />
              </a>
            </div>

            {/* STATS — ALWAYS HORIZONTAL */}
            <div
              className="flex items-center justify-between gap-4 sm:gap-6
                         pt-10 text-sm text-gray-400
                         opacity-0 animate-[fadeUp_0.8s_ease-out_0.6s_forwards]"
            >
              <Stat
                icon={<FaUsers />}
                value={<Counter end={5000} suffix="+" />}
                label="Active Members"
              />
              <Stat
                icon={<FaMedal />}
                value={<Counter end={25} suffix="+" />}
                label="Expert Trainers"
              />
              <Stat
                icon={<FaClock />}
                value={<Counter end={10} suffix="+" />}
                label="Years Experience"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

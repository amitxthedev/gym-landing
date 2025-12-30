import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  HiHome,
  HiOutlineCollection,
  HiCurrencyDollar,
  HiMail,
  HiMenuAlt3,
  HiX,
} from "react-icons/hi";
import { FaDumbbell } from "react-icons/fa";

const links = [
  { name: "Home", href: "#home", icon: <HiHome /> },
  { name: "Programs", href: "#programs", icon: <HiOutlineCollection /> },
  { name: "Pricing", href: "#pricing", icon: <HiCurrencyDollar /> },
  { name: "Contact", href: "#contact", icon: <HiMail /> },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  /* =======================
     SCROLL EFFECT
  ======================= */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* =======================
     ACTIVE HASH (IMPORTANT)
  ======================= */
  useEffect(() => {
    const updateActive = () => {
      setActive(window.location.hash || "#home");
    };

    updateActive();
    window.addEventListener("hashchange", updateActive);

    return () => window.removeEventListener("hashchange", updateActive);
  }, []);

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50
      w-[calc(100%-2rem)] max-w-[1200px]
      top-4 transition-all duration-500
      rounded-2xl border border-white/10
      ${
        scrolled
          ? "backdrop-blur-xl bg-black/70 shadow-2xl"
          : "backdrop-blur-md bg-black/40"
      }`}
    >
      {/* =======================
          MAIN BAR
      ======================= */}
      <div className="px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="#home"
          className="flex items-center gap-2 text-xl font-bold tracking-wide group"
        >
          <FaDumbbell className="text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
          GYM<span className="text-cyan-400">.</span>
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-10 text-sm">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative flex items-center gap-2 py-2 transition-all duration-300
                ${
                  active === link.href
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
            >
              <span className="text-lg">{link.icon}</span>
              {link.name}

              {/* UNDERLINE */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full rounded-full
                transition-all duration-300
                ${
                  active === link.href
                    ? "bg-cyan-400 shadow-[0_0_12px_#22d3ee]"
                    : "bg-transparent"
                }`}
              />
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-xl
                     bg-white text-black font-semibold
                     hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          <FaDumbbell />
          Join Now
        </a>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl transition-transform duration-300"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* =======================
          MOBILE MENU
      ======================= */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500
        ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pb-6 pt-4 space-y-4 bg-black/80 backdrop-blur-xl rounded-b-2xl">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 text-lg transition-all duration-300
                ${
                  active === link.href
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-white"
                }`}
            >
              <span className="text-xl">{link.icon}</span>
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 mt-4 px-6 py-3
                       rounded-xl bg-white text-black font-semibold"
          >
            <FaDumbbell />
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
}

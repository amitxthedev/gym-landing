import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        flex items-center justify-center
        backdrop-blur-xl
        bg-white/10 border border-white/20
        shadow-lg
        transition-all duration-300
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}
        hover:bg-cyan-400/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]
      `}
    >
      <HiArrowUp className="text-white text-xl" />
    </button>
  );
}

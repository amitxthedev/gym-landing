import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaDumbbell,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-32 text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-cyan-950/30 to-black" />
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-16">

        {/* TOP */}
        <div className="grid gap-12 md:grid-cols-4">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold mb-4">
              <FaDumbbell className="text-cyan-400" />
              GYM<span className="text-cyan-400">.</span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Transform your body and mind with world-class training,
              expert coaches, and a motivating environment.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#programs" className="hover:text-white transition">
                  Programs
                </a>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Personal Training</li>
              <li>Strength Programs</li>
              <li>Fat Loss</li>
              <li>Cardio Fitness</li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>

            <div className="flex gap-4">
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaTwitter />} />
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px bg-white/10" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row gap-4 justify-between text-sm text-gray-400">
          <p>© {new Date().getFullYear()} GYM. All rights reserved.</p>
          <p>Designed & Built with ❤️</p>
        </div>

      </div>
    </footer>
  );
}

/* =======================
   SOCIAL ICON
======================= */
function SocialIcon({ icon }) {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-xl flex items-center justify-center
                 bg-white/10 border border-white/20
                 text-gray-300 hover:text-cyan-400
                 hover:border-cyan-400/40
                 hover:-translate-y-1
                 transition-all duration-300"
    >
      {icon}
    </a>
  );
}

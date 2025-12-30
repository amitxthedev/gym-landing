import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 text-white scroll-mt-28"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-black to-purple-950" />
      <div className="absolute inset-0 bg-black/70" />

      {/* GLOWS */}
      <div className="absolute -top-40 left-1/4 w-[420px] h-[420px] bg-cyan-500/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-purple-500/20 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8">

        {/* HEADER */}
        <div className="text-center mb-16 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Have questions or want to join our gym? We’d love to hear from you.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* CONTACT INFO */}
          <div className="space-y-6">
            <InfoCard
              icon={<FaPhoneAlt />}
              title="Phone"
              text="+91 98765 43210"
            />
            <InfoCard
              icon={<FaEnvelope />}
              title="Email"
              text="contact@gymfit.com"
            />
            <InfoCard
              icon={<FaMapMarkerAlt />}
              title="Location"
              text="Durgapur, West Bengal, India"
            />
          </div>

          {/* CONTACT FORM */}
          <form
            className="bg-white/10 backdrop-blur-xl border border-white/20
                       rounded-3xl p-8 space-y-6
                       opacity-0 animate-[fadeUp_0.8s_ease-out_0.2s_forwards]"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="input"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="input"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="input resize-none"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-cyan-400 text-black
                         font-semibold hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* =======================
   INFO CARD
======================= */
function InfoCard({ icon, title, text }) {
  return (
    <div
      className="flex items-center gap-4 p-6 rounded-2xl
                 bg-white/5 backdrop-blur-xl border border-white/10
                 hover:border-cyan-400/40 transition"
    >
      <div className="text-cyan-400 text-xl">
        {icon}
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-gray-400 text-sm">{text}</p>
      </div>
    </div>
  );
}

export default function PricingCard({ plan }) {
  return (
    <div
      className={`relative rounded-3xl p-8 border backdrop-blur-xl
        transition-all duration-500 group
        ${
          plan.popular
            ? "bg-white/10 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.35)] scale-[1.03]"
            : "bg-white/5 border-white/10 hover:border-cyan-400 hover:-translate-y-2"
        }`}
    >
      {/* POPULAR BADGE */}
      {plan.popular && (
        <span
          className="absolute -top-4 left-1/2 -translate-x-1/2
          px-4 py-1 rounded-full bg-cyan-400 text-black
          text-xs font-bold tracking-wide"
        >
          MOST POPULAR
        </span>
      )}

      {/* TITLE */}
      <h3 className="text-2xl font-semibold mb-2">
        {plan.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-400 mb-6 text-sm">
        {plan.description}
      </p>

      {/* PRICE */}
      <div className="text-4xl font-extrabold mb-6">
        ₹{plan.price}
        <span className="text-base text-gray-400 font-medium"> / month</span>
      </div>

      {/* FEATURES */}
      <ul className="space-y-3 mb-8 text-gray-300 text-sm">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-cyan-400 mt-0.5">✔</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* BUTTON */}
      <a
        href="#contact"
        className={`block text-center px-6 py-3 rounded-xl font-semibold
          transition-all duration-300
          ${
            plan.popular
              ? "bg-cyan-400 text-black hover:scale-105"
              : "bg-white text-black hover:scale-105"
          }`}
      >
        Get Started
      </a>
    </div>
  );
}

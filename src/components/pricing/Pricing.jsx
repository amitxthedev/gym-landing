import pricingData from "../../data/pricing";
import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <section
      id="pricing"
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
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Membership <span className="text-cyan-400">Plans</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Choose a plan that fits your fitness goals and lifestyle.
          </p>
        </div>

        {/* PRICING GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pricingData.map((plan, i) => (
            <PricingCard key={i} plan={plan} />
          ))}
        </div>

      </div>
    </section>
  );
}

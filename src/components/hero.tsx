import Link from "next/link";
import { ArrowDown, Dumbbell } from "lucide-react";

export default function Hero() {
  return (
    <section className="border-b border-[#292929] bg-[#0b0b0b]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#ccff00]">
            Workout Library
          </p>

          <h1 className="display-font max-w-3xl text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Train With Intent.
            <br />
            Log Every Set.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-[#929292] sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <Link
            href="#library"
            className="mt-8 inline-flex items-center gap-3 bg-[#ccff00] px-6 py-4 text-sm font-bold uppercase tracking-wider text-black transition hover:bg-white"
          >
            <Dumbbell size={18} />
            Browse Workouts
            <ArrowDown size={17} />
          </Link>
        </div>

        <div className="relative min-h-[320px] overflow-hidden border border-[#292929] bg-[#141414] sm:min-h-[420px]">
          <img
            src="https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740"
            alt="Workout"
            className="h-full min-h-[320px] w-full object-cover grayscale"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute bottom-5 left-5 border-l-4 border-[#ccff00] pl-4">
            <p className="display-font text-2xl font-bold uppercase">
              Train Hard
            </p>
            <p className="text-xs uppercase tracking-widest text-[#929292]">
              Log Honest
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

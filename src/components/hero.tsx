import Link from "next/link";
import { ArrowDown, ArrowRight, Dumbbell } from "lucide-react";
import Image from "next/image";
import banner from "../../assets/banner.png";

export default function Hero() {
  return (
    <section className="bg-[#0b0b0b] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="relative mx-auto grid max-w-7xl overflow-hidden rounded-2xl bg-[#15171D] lg:grid-cols-2">
        {/* Decorative top-left shape */}
        <div className="absolute left-0 top-0 h-16 w-16 bg-[#ccff00] opacity-90 [clip-path:polygon(0_0,100%_0,0_100%)]" />

        {/* Decorative bottom-right shape */}
        <div className="absolute bottom-0 right-0 h-20 w-20 bg-[#ccff00] opacity-10 [clip-path:polygon(100%_0,100%_100%,0_100%)]" />

        {/* LEFT CONTENT */}
        <div className="relative z-10 flex items-center px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
          <div className="max-w-xl">
            {/* Small heading */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#ccff00]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ccff00] sm:text-xs">
                Workout Library
              </p>
            </div>

            {/* Main heading */}
            <h1 className="display-font text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-[56px]">
              Train With Intent.
              <br />
              <span className="text-[#ccff00]">Log Every Set.</span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-md text-sm leading-6 text-[#929292] sm:text-base">
              FitLog is a dark, no-nonsense gym companion. Pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="#library"
                className="group inline-flex items-center gap-3 bg-[#ccff00] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-white"
              >
                <Dumbbell size={17} />
                Browse Workouts
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#library"
                className="inline-flex items-center gap-2 border border-[#3a3a3a] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
              >
                Explore Library
                <ArrowDown size={15} />
              </Link>
            </div>

            {/* Mini Stats */}
            <div className="mt-8 flex max-w-md border-t border-[#292929] pt-5">
              <div className="flex-1">
                <p className="display-font text-2xl font-bold text-white">
                  12+
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-widest text-[#666]">
                  Workouts
                </p>
              </div>

              <div className="border-l border-[#292929] pl-5">
                <p className="display-font text-2xl font-bold text-white">5</p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-widest text-[#666]">
                  Daily Lifts
                </p>
              </div>

              <div className="border-l border-[#292929] pl-5">
                <p className="display-font text-2xl font-bold text-white">
                  100%
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-widest text-[#666]">
                  Focus
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex items-center justify-center px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          {/* Image */}
          <div className="relative w-full max-w-[480px]">
            <Image
              src={banner}
              alt="Workout"
              width={600}
              height={600}
              priority
              className="h-auto w-full object-contain"
            />

            {/* Image bottom gradient */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#15171D]/70 to-transparent" />

            {/* Image label */}
            <div className="absolute bottom-5 left-5">
              <p className="display-font text-xl font-bold uppercase sm:text-2xl">
                Train Hard
              </p>

              <div className="mt-1 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ccff00]" />

                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#b5b5b5]">
                  Log Honest
                </p>
              </div>
            </div>

            {/* FitLog badge */}
            <div className="absolute right-3 top-3 bg-black/60 px-3 py-2 backdrop-blur-sm">
              <p className="text-[9px] font-bold uppercase tracking-widest text-[#ccff00]">
                FitLog
              </p>
            </div>
          </div>

          {/* Decorative line */}
          <div className="absolute bottom-10 right-4 hidden h-20 w-[2px] bg-[#ccff00]/30 lg:block" />
        </div>
      </div>
    </section>
  );
}

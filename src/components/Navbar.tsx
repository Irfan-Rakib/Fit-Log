"use client";

import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { usePathname } from "next/navigation";

import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const pathname = usePathname();

  const { plan, saved } = useFitLog();

  return (
    <header className="sticky top-0 z-50 border-b border-[#292929] bg-[#0b0b0b]/95 backdrop-blur">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center ">
            <div className="flex h-9 w-9 items-center justify-center text-[#ccff00] ">
              <Dumbbell size={20} />
            </div>

            <span className="display-font text-xl font-bold">FITLOG</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className={`text-sm font-semibold uppercase tracking-wider transition ${
              pathname === "/"
                ? "text-[#ccff00]"
                : "text-white hover:text-[#ccff00]"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`text-sm font-semibold uppercase tracking-wider transition ${
              pathname === "/my-plan"
                ? "text-[#ccff00]"
                : "text-white hover:text-[#ccff00]"
            }`}
          >
            My Plan
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-3 py-2 text-xs font-bold uppercase text-black"
          >
            Plan {plan.length}
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-white/40 px-3 py-2 text-xs font-bold uppercase text-white"
          >
            Saved {saved.length}
          </Link>
        </div>
      </div>

      <div className="flex border-t border-[#292929] md:hidden">
        <Link
          href="/"
          className={`flex flex-1 justify-center py-3 text-xs font-bold uppercase tracking-widest ${
            pathname === "/" ? "bg-[#ccff00] text-black" : "text-white"
          }`}
        >
          Workout
        </Link>

        <Link
          href="/my-plan"
          className={`flex flex-1 justify-center py-3 text-xs font-bold uppercase tracking-widest ${
            pathname === "/my-plan" ? "bg-[#ccff00] text-black" : "text-white"
          }`}
        >
          My Plan
        </Link>
      </div>
    </header>
  );
}

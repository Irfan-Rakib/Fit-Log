import { Dumbbell } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#292929] bg-[#070707]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center ">
            <div className="flex h-9 w-9 items-center justify-center text-[#ccff00] ">
              <Dumbbell size={20} />
            </div>

            <span className="display-font text-xl font-bold">FITLOG</span>
          </div>
        </Link>

        <p className="text-sm text-[#929292]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}

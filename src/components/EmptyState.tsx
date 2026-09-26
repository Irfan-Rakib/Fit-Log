import Link from "next/link";
import { ArrowRight, Dumbbell } from "lucide-react";

interface EmptyStateProps {
  saved?: boolean;
}

export default function EmptyState({ saved = false }: EmptyStateProps) {
  return (
    <div className="border border-dashed border-[#292929] px-5 py-20 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center border border-[#292929] text-[#ccff00]">
        <Dumbbell size={28} />
      </div>

      <h3 className="display-font mt-6 text-4xl font-bold uppercase">
        {saved ? "NOTHING SAVED YET" : "NOTHING HERE YET"}
      </h3>

      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#929292]">
        {saved
          ? "Save workouts from the library and keep them here for later."
          : "Browse the library and add a lift to get today moving."}
      </p>

      <Link
        href="/"
        className="mt-7 inline-flex items-center gap-2 bg-[#ccff00] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-white"
      >
        Go to Workouts
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}

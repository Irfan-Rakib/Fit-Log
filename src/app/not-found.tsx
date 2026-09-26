import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#ccff00]">
          Error 404
        </p>

        <h1 className="display-font text-6xl font-bold uppercase sm:text-8xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-5 max-w-md text-[#929292]">
          The workout page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 bg-[#ccff00] px-6 py-3 text-sm font-bold uppercase text-black"
        >
          <ArrowLeft size={17} />
          Back to workouts
        </Link>
      </div>
    </section>
  );
}

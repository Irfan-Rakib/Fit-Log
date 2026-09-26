"use client";

import Link from "next/link";
import { Check, Clock3, ExternalLink, Flame, Star, Trash2 } from "lucide-react";

import { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";

interface MyPlanCardProps {
  workout: Workout;
  saved?: boolean;
}

export default function MyPlanCard({
  workout,
  saved = false,
}: MyPlanCardProps) {
  const { removeFromPlan, removeFromSaved, markAsDone } = useFitLog();

  return (
    <article className="border border-[#292929] bg-[#141414]">
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div className="relative h-56 w-full shrink-0 overflow-hidden sm:h-auto sm:w-56">
          <img
            src={workout.image}
            alt={workout.name}
            className="h-full w-full object-cover grayscale"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute bottom-3 left-3">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="mr-1 inline-block bg-[#ccff00] px-2 py-1 text-[9px] font-bold uppercase text-black"
              >
                {group}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="display-font text-3xl font-bold uppercase leading-none">
                {workout.name}
              </h3>

              <p className="mt-2 text-sm text-[#929292]">{workout.equipment}</p>
            </div>

            <span className="w-fit border border-[#292929] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#929292]">
              {workout.difficulty}
            </span>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-3 border-y border-[#292929] py-4">
            <div className="flex items-center gap-2">
              <Clock3 size={16} className="text-[#ccff00]" />

              <div>
                <p className="text-[9px] uppercase tracking-wider text-[#666]">
                  Duration
                </p>

                <p className="text-xs font-semibold">{workout.duration} min</p>
              </div>
            </div>

            <div className="flex items-center gap-2 border-l border-[#292929] pl-3">
              <Flame size={16} className="text-[#ccff00]" />

              <div>
                <p className="text-[9px] uppercase tracking-wider text-[#666]">
                  Calories
                </p>

                <p className="text-xs font-semibold">
                  {workout.caloriesBurned} kcal
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 border-l border-[#292929] pl-3">
              <Star size={16} className="fill-[#ccff00] text-[#ccff00]" />

              <div>
                <p className="text-[9px] uppercase tracking-wider text-[#666]">
                  Rating
                </p>

                <p className="text-xs font-semibold">{workout.rating}</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              href={`/details/${workout.id}`}
              className="inline-flex items-center gap-2 border border-[#292929] px-4 py-2.5 text-xs font-bold uppercase tracking-wide transition hover:border-[#ccff00] hover:text-[#ccff00]"
            >
              <ExternalLink size={15} />
              View Details
            </Link>

            {!saved && (
              <button
                onClick={() => markAsDone(workout.id)}
                className="inline-flex items-center gap-2 bg-[#ccff00] px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-black transition hover:bg-white"
              >
                <Check size={15} />
                Mark as Done
              </button>
            )}

            <button
              onClick={() =>
                saved ? removeFromSaved(workout.id) : removeFromPlan(workout.id)
              }
              className="inline-flex items-center gap-2 border border-red-500/40 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-red-400 transition hover:bg-red-500 hover:text-white"
            >
              <Trash2 size={15} />
              Remove
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

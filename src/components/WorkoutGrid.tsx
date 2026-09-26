"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

import { Workout } from "@/types/workout";
import WorkoutCard from "@/components/WorkoutCard";

interface WorkoutGridProps {
  workouts: Workout[];
}

type SortOption = "duration" | "calories" | "rating";

export default function WorkoutGrid({ workouts }: WorkoutGridProps) {
  const [sortBy, setSortBy] = useState<SortOption>("duration");

  const sortedWorkouts = useMemo(() => {
    const copied = [...workouts];

    copied.sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      return b.rating - a.rating;
    });

    return copied;
  }, [workouts, sortBy]);

  return (
    <section
      id="library"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8"
    >
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#ccff00]">
            12 Exercises
          </p>

          <h2 className="display-font text-5xl font-bold uppercase leading-none sm:text-6xl">
            The Library
          </h2>

          <p className="mt-4 text-sm text-[#929292] sm:text-base">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="relative w-full sm:w-48">
          <label
            htmlFor="sort"
            className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-[#666]"
          >
            Sort By
          </label>

          <div className="relative">
            <select
              id="sort"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value as SortOption)}
              className="w-full appearance-none border border-[#292929] bg-[#141414] px-4 py-3 text-sm font-semibold uppercase text-white outline-none focus:border-[#ccff00]"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>

            <ChevronDown
              size={17}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#ccff00]"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedWorkouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
}

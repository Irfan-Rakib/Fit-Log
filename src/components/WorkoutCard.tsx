import Link from "next/link";
import { ArrowUpRight, Clock3, Flame, Star } from "lucide-react";

import { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link
      href={`/details/${workout.id}`}
      className="group block overflow-hidden border border-[#292929] bg-[#141414] transition hover:-translate-y-1 hover:border-[#ccff00]"
    >
      <div className="relative h-56 overflow-hidden bg-[#1b1b1b]">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="bg-[#ccff00] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-black"
            >
              {group}
            </span>
          ))}
        </div>

        <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#ccff00] text-black opacity-0 transition group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </div>
      </div>

      <div className="p-5">
        <h3 className="display-font text-2xl font-bold uppercase leading-none">
          {workout.name}
        </h3>

        <p className="mt-3 text-sm text-[#929292]">{workout.equipment}</p>

        <div className="mt-5 grid grid-cols-3 border-t border-[#292929] pt-4">
          <div className="flex items-center gap-2">
            <Clock3 size={15} className="text-[#ccff00]" />

            <div>
              <p className="text-[10px] uppercase text-[#666]">Duration</p>
              <p className="text-xs font-semibold">{workout.duration} min</p>
            </div>
          </div>

          <div className="flex items-center gap-2 border-l border-[#292929] pl-3">
            <Flame size={15} className="text-[#ccff00]" />

            <div>
              <p className="text-[10px] uppercase text-[#666]">Calories</p>
              <p className="text-xs font-semibold">
                {workout.caloriesBurned} kcal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 border-l border-[#292929] pl-3">
            <Star size={15} className="fill-[#ccff00] text-[#ccff00]" />

            <div>
              <p className="text-[10px] uppercase text-[#666]">Rating</p>
              <p className="text-xs font-semibold">{workout.rating}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

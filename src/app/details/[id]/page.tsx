"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Bookmark,
  Check,
  Clock3,
  Dumbbell,
  Flame,
  ListChecks,
  Star,
  Target,
} from "lucide-react";

import { getWorkout } from "@/lib/api";
import { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";
import Loading from "@/components/Loading";

export default function WorkoutDetailsPage() {
  const params = useParams();

  const id = String(params.id);

  const [workout, setWorkout] = useState<Workout | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { addToPlan, saveWorkout, isInPlan, isSaved } = useFitLog();

  useEffect(() => {
    async function loadWorkout() {
      try {
        setLoading(true);
        setError("");

        const data = await getWorkout(id);

        setWorkout(data);
      } catch (error) {
        console.error(error);

        setError("Workout not found.");
      } finally {
        setLoading(false);
      }
    }

    loadWorkout();
  }, [id]);

  if (loading) {
    return <Loading text="Loading workout..." />;
  }

  if (error || !workout) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#ccff00]">
            Error
          </p>

          <h1 className="display-font text-5xl font-bold uppercase">
            Workout Not Found
          </h1>

          <p className="mt-4 text-[#929292]">
            We couldn't find the workout you're looking for.
          </p>

          <Link
            href="/"
            className="mt-7 inline-flex items-center gap-2 bg-[#ccff00] px-6 py-3 text-sm font-bold uppercase text-black"
          >
            <ArrowLeft size={17} />
            Back to Library
          </Link>
        </div>
      </section>
    );
  }

  const alreadyInPlan = isInPlan(workout.id);
  const alreadySaved = isSaved(workout.id);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
      {/* Back Button */}
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#929292] transition hover:text-[#ccff00]"
      >
        <ArrowLeft size={16} />
        Back to Library
      </Link>

      <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
        {/* LEFT SIDE */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative overflow-hidden border border-[#292929] bg-[#141414]">
            <img
              src={workout.image}
              alt={workout.name}
              className="aspect-square h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5">
              <span className="bg-[#ccff00] px-3 py-1.5 text-xs font-bold uppercase text-black">
                {workout.difficulty}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          {/* Category */}
          <div className="mb-5 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="border border-[#ccff00] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#ccff00]"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="display-font text-5xl font-bold uppercase leading-[0.95] sm:text-6xl">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mt-6 text-base leading-7 text-[#929292]">
            {workout.description}
          </p>

          {/* Specs */}
          <div className="mt-8 border border-[#292929] bg-[#141414]">
            <div className="border-b border-[#292929] px-5 py-4">
              <div className="flex items-center gap-2">
                <Target size={18} className="text-[#ccff00]" />

                <h2 className="text-xs font-bold uppercase tracking-[0.2em]">
                  Key Specs
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3">
              <SpecItem label="Equipment" value={workout.equipment} />

              <SpecItem label="Difficulty" value={workout.difficulty} />

              <SpecItem label="Sets" value={String(workout.sets)} />

              <SpecItem label="Reps" value={workout.reps} />

              <SpecItem label="Duration" value={`${workout.duration} min`} />

              <SpecItem
                label="Calories"
                value={`${workout.caloriesBurned} kcal`}
              />

              <SpecItem label="Rating" value={`${workout.rating}`} last />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <QuickStat
              icon={<Clock3 size={18} />}
              label="Duration"
              value={`${workout.duration} min`}
            />

            <QuickStat
              icon={<Flame size={18} />}
              label="Calories"
              value={`${workout.caloriesBurned} kcal`}
            />

            <QuickStat
              icon={<Star size={18} />}
              label="Rating"
              value={String(workout.rating)}
            />
          </div>

          {/* Instructions */}
          <div className="mt-10">
            <div className="mb-5 flex items-center gap-2">
              <ListChecks size={20} className="text-[#ccff00]" />

              <h2 className="display-font text-3xl font-bold uppercase">
                Instructions
              </h2>
            </div>

            <div className="space-y-4">
              {workout.instructions.map((instruction, index) => (
                <div
                  key={index}
                  className="flex gap-4 border-b border-[#292929] pb-4"
                >
                  <span className="display-font text-2xl font-bold text-[#ccff00]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="pt-1 text-sm leading-6 text-[#b5b5b5]">
                    {instruction}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <button
              onClick={() => addToPlan(workout)}
              disabled={alreadyInPlan}
              className={`flex items-center justify-center gap-2 px-5 py-4 text-sm font-bold uppercase tracking-wide transition ${
                alreadyInPlan
                  ? "cursor-not-allowed bg-[#292929] text-[#777]"
                  : "bg-[#ccff00] text-black hover:bg-white"
              }`}
            >
              {alreadyInPlan ? (
                <>
                  <Check size={18} />
                  In Today's Plan
                </>
              ) : (
                <>
                  <Dumbbell size={18} />
                  Add to Today's Plan
                </>
              )}
            </button>

            <button
              onClick={() => saveWorkout(workout)}
              disabled={alreadySaved}
              className={`flex items-center justify-center gap-2 border px-5 py-4 text-sm font-bold uppercase tracking-wide transition ${
                alreadySaved
                  ? "cursor-not-allowed border-[#292929] text-[#777]"
                  : "border-white/40 text-white hover:border-[#ccff00] hover:text-[#ccff00]"
              }`}
            >
              {alreadySaved ? (
                <>
                  <Check size={18} />
                  Saved
                </>
              ) : (
                <>
                  <Bookmark size={18} />
                  Save for Later
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- */
/* Small reusable components */
/* -------------------------------- */

function SpecItem({
  label,
  value,
  last = false,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`min-h-[90px] border-b border-[#292929] p-4 ${
        last ? "sm:col-span-1" : ""
      }`}
    >
      <p className="mb-2 text-[9px] font-bold uppercase tracking-widest text-[#666]">
        {label}
      </p>

      <p className="text-sm font-semibold leading-5">{value}</p>
    </div>
  );
}

function QuickStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="border border-[#292929] bg-[#141414] p-4">
      <div className="mb-2 text-[#ccff00]">{icon}</div>

      <p className="text-[9px] font-bold uppercase tracking-widest text-[#666]">
        {label}
      </p>

      <p className="mt-1 text-sm font-bold">{value}</p>
    </div>
  );
}

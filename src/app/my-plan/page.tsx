"use client";

import { useMemo, useState } from "react";
import { Activity, Flame, ListChecks, Timer } from "lucide-react";

import { useFitLog } from "@/context/FitLogContext";
import MyPlanCard from "@/components/MyPlanCard";
import EmptyState from "@/components/EmptyState";

type Tab = "plan" | "saved";

export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState<Tab>("plan");

  const { plan, saved } = useFitLog();

  const activeWorkouts = activeTab === "plan" ? plan : saved;

  const metrics = useMemo(() => {
    return {
      exercises: plan.length,

      minutes: plan.reduce((total, workout) => total + workout.duration, 0),

      calories: plan.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0,
      ),
    };
  }, [plan]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      {/* Header */}
      <div className="border-b border-[#292929] pb-10">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#ccff00]">
          Your Workout Log
        </p>

        <h1 className="display-font text-6xl font-bold uppercase leading-none sm:text-7xl">
          My Plan
        </h1>

        <p className="mt-5 max-w-xl text-sm leading-6 text-[#929292] sm:text-base">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Metrics */}
      <div className="grid gap-3 py-8 sm:grid-cols-3">
        <MetricCard
          icon={<ListChecks size={22} />}
          label="Exercises"
          value={metrics.exercises}
        />

        <MetricCard
          icon={<Timer size={22} />}
          label="Minutes"
          value={metrics.minutes}
        />

        <MetricCard
          icon={<Flame size={22} />}
          label="Calories"
          value={metrics.calories}
        />
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#292929]">
        <button
          onClick={() => setActiveTab("plan")}
          className={`relative px-5 py-4 text-xs font-bold uppercase tracking-widest transition sm:px-8 ${
            activeTab === "plan"
              ? "text-[#ccff00]"
              : "text-[#666] hover:text-white"
          }`}
        >
          Today's Plan
          {activeTab === "plan" && (
            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#ccff00]" />
          )}
        </button>

        <button
          onClick={() => setActiveTab("saved")}
          className={`relative px-5 py-4 text-xs font-bold uppercase tracking-widest transition sm:px-8 ${
            activeTab === "saved"
              ? "text-[#ccff00]"
              : "text-[#666] hover:text-white"
          }`}
        >
          Saved
          {activeTab === "saved" && (
            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#ccff00]" />
          )}
        </button>
      </div>

      {/* List */}
      <div className="mt-8 space-y-4">
        {activeWorkouts.length === 0 ? (
          <EmptyState saved={activeTab === "saved"} />
        ) : (
          activeWorkouts.map((workout) => (
            <MyPlanCard
              key={workout.id}
              workout={workout}
              saved={activeTab === "saved"}
            />
          ))
        )}
      </div>

      {/* Bottom info */}
      {activeTab === "plan" && plan.length > 0 && (
        <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-wider text-[#666]">
          <Activity size={15} className="text-[#ccff00]" />
          {plan.length} of 5 lifts loaded for today
        </div>
      )}
    </section>
  );
}

function MetricCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {
  return (
    <div className="border border-[#292929] bg-[#141414] p-5">
      <div className="flex items-start justify-between">
        <div className="text-[#ccff00]">{icon}</div>

        <span className="text-[9px] font-bold uppercase tracking-widest text-[#555]">
          Live
        </span>
      </div>

      <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#666]">
        {label}
      </p>

      <p className="display-font mt-1 text-4xl font-bold">{value}</p>
    </div>
  );
}

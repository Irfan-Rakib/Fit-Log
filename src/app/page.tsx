"use client";

import { useEffect, useState } from "react";

import Hero from "@/components/hero";
import Loading from "@/components/Loading";
import WorkoutGrid from "@/components/WorkoutGrid";

import { getWorkouts } from "@/lib/api";
import { Workout } from "@/types/workout";

export default function Home() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadWorkouts() {
      try {
        setLoading(true);
        setError("");

        const data = await getWorkouts();

        setWorkouts(data);
      } catch (error) {
        console.error(error);

        setError("Unable to load workouts. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    loadWorkouts();
  }, []);

  return (
    <>
      <Hero />

      {loading && <Loading />}

      {!loading && error && (
        <section className="mx-auto max-w-7xl px-4 py-20 text-center">
          <p className="text-red-400">{error}</p>

          <button
            onClick={() => window.location.reload()}
            className="mt-5 bg-[#ccff00] px-5 py-3 text-sm font-bold uppercase text-black"
          >
            Try Again
          </button>
        </section>
      )}

      {!loading && !error && <WorkoutGrid workouts={workouts} />}
    </>
  );
}

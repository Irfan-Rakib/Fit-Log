import { Workout } from "@/types/workout";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch(API_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data = await response.json();

  return data;
}

export async function getWorkout(id: string): Promise<Workout> {
  const response = await fetch(`${API_URL}/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Workout not found");
  }

  const data = await response.json();

  return data;
}

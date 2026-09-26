"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { Workout } from "@/types/workout";
import toast from "react-hot-toast";

interface FitLogContextType {
  plan: Workout[];
  saved: Workout[];

  addToPlan: (workout: Workout) => void;
  removeFromPlan: (id: string | number) => void;

  saveWorkout: (workout: Workout) => void;
  removeFromSaved: (id: string | number) => void;

  markAsDone: (id: string | number) => void;

  isInPlan: (id: string | number) => boolean;
  isSaved: (id: string | number) => boolean;
}

const FitLogContext = createContext<FitLogContextType | undefined>(undefined);

export function FitLogProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem("fitlog-plan");
      const storedSaved = localStorage.getItem("fitlog-saved");

      if (storedPlan) {
        setPlan(JSON.parse(storedPlan));
      }

      if (storedSaved) {
        setSaved(JSON.parse(storedSaved));
      }
    } catch (error) {
      console.error("Failed to load FitLog data", error);
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan, loaded]);

  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved, loaded]);

  const addToPlan = (workout: Workout) => {
    if (plan.length >= 5) {
      toast.error("Today's plan can contain only 5 lifts");
      return;
    }

    const exists = plan.some((item) => String(item.id) === String(workout.id));

    if (exists) {
      toast("Already in today's plan");
      return;
    }

    setPlan((previous) => [...previous, workout]);

    toast.success("Added to today's plan");
  };

  const removeFromPlan = (id: string | number) => {
    setPlan((previous) =>
      previous.filter((item) => String(item.id) !== String(id)),
    );

    toast.success("Removed from today's plan");
  };

  const saveWorkout = (workout: Workout) => {
    const exists = saved.some((item) => String(item.id) === String(workout.id));

    if (exists) {
      toast("Already saved");
      return;
    }

    setSaved((previous) => [...previous, workout]);

    toast.success("Saved for later");
  };

  const removeFromSaved = (id: string | number) => {
    setSaved((previous) =>
      previous.filter((item) => String(item.id) !== String(id)),
    );

    toast.success("Removed from saved");
  };

  const markAsDone = (id: string | number) => {
    setPlan((previous) =>
      previous.filter((item) => String(item.id) !== String(id)),
    );

    toast.success("Workout marked as done");
  };

  const isInPlan = (id: string | number) => {
    return plan.some((item) => String(item.id) === String(id));
  };

  const isSaved = (id: string | number) => {
    return saved.some((item) => String(item.id) === String(id));
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeFromSaved,
        markAsDone,
        isInPlan,
        isSaved,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("useFitLog must be used inside FitLogProvider");
  }

  return context;
}

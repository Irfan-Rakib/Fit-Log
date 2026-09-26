export interface Workout {
  id: string | number;
  name: string;
  category: string[];
  equipment: string[];
  image: string;
  description: string;
  difficulty: string;
  sets: number;
  reps: string;
  duration: number;
  calories: number;
  rating: number;
  instructions: string[];
}

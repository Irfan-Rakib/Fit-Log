# FitLog - Workout Library

**Live Website:** [FitLog Live Demo](https://fitlog-14a6.vercel.app/)

FitLog is a modern workout library and personal workout planning web application built with Next.js. Users can browse workouts, view detailed exercise information, add workouts to today's plan, save workouts for later, and track their workout progress.

## Technologies Used

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Next.js App Router
- React Hot Toast
- Lucide React
- REST API
- LocalStorage

## Key Features

1. **Workout Library**
   - Browse 12 different workouts covering major muscle groups.
   - View workout images, equipment, duration, calories, and ratings.

2. **Workout Details**
   - View complete workout information.
   - See muscle groups, difficulty, sets, reps, and step-by-step instructions.

3. **Today's Workout Plan**
   - Add workouts to today's plan.
   - Maximum 5 workouts can be added to the plan.
   - View total exercises, workout minutes, and calories.

4. **Saved Workouts**
   - Save workouts for later.
   - View and remove saved workouts from the My Plan page.

5. **Workout Progress**
   - Mark workouts as completed.
   - Remove workouts from today's plan.

6. **Sorting**
   - Sort workouts by duration, calories, or rating.

7. **LocalStorage Persistence**
   - Plan and saved workouts remain available after refreshing the browser.

8. **Responsive Design**
   - Fully responsive layout for mobile, tablet, and desktop devices.

## API

FitLog uses the following REST API:

- All workouts:
  `https://api.abcz.workers.dev/api/fitlog`

- Single workout:
  `https://api.abcz.workers.dev/api/fitlog/:id`

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. React uses JSX to describe what the user interface should look like. It makes components easier to read and write.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time and cause the component to re-render.

### 3. What is the useState hook, and how does it work?

The useState hook is used to store and manage changing data inside a React component. It returns the current state value and a function that can update that value.

### 4. How can you share state across multiple components?

State can be shared using React Context API. We can create a context, provide it around the components that need the data, and access the shared state using a custom hook.

### 5. What is the purpose of useEffect?

useEffect is used to perform side effects in React components. For example, it can be used to fetch API data, read data from localStorage, or perform an action when a component renders or when specific data changes.

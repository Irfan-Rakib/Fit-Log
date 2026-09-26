export default function Loading({
  text = "Loading workouts...",
}: {
  text?: string;
}) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center gap-5">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#292929] border-t-[#ccff00]" />

      <p className="text-sm font-semibold uppercase tracking-widest text-[#929292]">
        {text}
      </p>
    </div>
  );
}

export default function Loading({
  text = "Loading workouts...",
}: {
  text?: string;
}) {
  return (
    <div className="flex min-h-[360px] items-center justify-center px-4">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center border border-[#292929] bg-[#141414]">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#292929] border-t-[#ccff00]" />
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-[#929292]">
          {text}
        </p>

        <div className="mx-auto mt-4 h-1 w-32 overflow-hidden bg-[#292929]">
          <div className="h-full w-1/2 animate-pulse bg-[#ccff00]" />
        </div>
      </div>
    </div>
  );
}

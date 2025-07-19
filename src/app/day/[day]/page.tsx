"use client";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { useRouter } from "next/navigation";

export default function DayPage() {
  const params = useParams();
  const router = useRouter();
  const dayStr = params?.day ? String(params.day) : undefined;
  const dayNum = useMemo(() => {
    const n = dayStr ? parseInt(dayStr, 10) : NaN;
    return isNaN(n) ? null : n;
  }, [dayStr]);

  const imgPath = dayNum ? `/calendar/day-${dayNum}.jpg` : null;
  const placeholder = "/file.svg";

  if (!dayNum || dayNum < 1 || dayNum > 36) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-900 to-yellow-100 p-8">
        <div className="bg-white/90 rounded-lg shadow-lg p-8 max-w-lg w-full flex flex-col items-center gap-6">
          <button
            onClick={() => router.back()}
            className="self-start mb-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition font-semibold shadow"
          >
            ← Back
          </button>
          <div className="text-2xl font-bold text-red-700">Invalid Day</div>
          <div className="text-lg text-gray-700 text-center">
            The day parameter is invalid. Please select a valid day from the calendar.
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-900 to-yellow-100 p-8">
      <div className="bg-white/90 rounded-lg shadow-lg p-8 max-w-lg w-full flex flex-col items-center gap-6">
        <button
          onClick={() => router.back()}
          className="self-start mb-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition font-semibold shadow"
        >
          ← Back
        </button>
        <div className="text-4xl font-bold text-red-700">Day {dayNum}</div>
        <img
          src={imgPath!}
          alt={`Day ${dayNum} photo`}
          width={400}
          height={250}
          className="rounded shadow object-cover"
          onError={(e) => {
            e.currentTarget.src = placeholder;
          }}
        />
        <div className="text-lg text-gray-700 text-center">
          This is a placeholder page for Day {dayNum} of the July Uprising calendar. You can add more details here.
        </div>
      </div>
    </main>
  );
} 
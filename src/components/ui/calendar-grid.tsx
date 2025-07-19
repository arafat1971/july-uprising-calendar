import Link from "next/link";

const calendarData = Array.from({ length: 36 }, (_, i) => ({
  day: i + 1,
  title: `Day ${i + 1}`,
  description: "Placeholder description",
}));

export default function CalendarGrid() {
  return (
    <div className="grid grid-cols-7 gap-2 md:gap-4 bg-red-700/50 p-4 rounded-lg">
      {calendarData.map((item) => (
        <Link key={item.day} href={`/day/${item.day}`} className="focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded">
          <div
            className="bg-white/90 rounded shadow flex flex-col items-center justify-center p-2 min-h-[70px] md:min-h-[100px] border border-red-200 hover:bg-yellow-100 transition cursor-pointer"
          >
            <div className="text-lg font-bold text-red-700">{item.day}</div>
            <div className="text-xs md:text-sm font-semibold text-gray-700 text-center">{item.title}</div>
            <div className="text-[10px] md:text-xs text-gray-500 text-center">{item.description}</div>
          </div>
        </Link>
      ))}
    </div>
  );
} 
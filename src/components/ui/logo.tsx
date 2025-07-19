import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-6 py-6">
      <div className="w-[120px] h-[120px] bg-red-700 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
        SADA
      </div>
      <span className="text-2xl md:text-3xl font-bold text-white">STUDENT AGAINST DISCRIMINATION ARCHIVE (SADA)</span>
    </div>
  );
} 
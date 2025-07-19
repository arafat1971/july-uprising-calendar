import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-6 py-6">
      <Image src="/sadalogo.png" alt="SADA Logo" width={200} height={200} />
      <span className="text-2xl md:text-3xl font-bold text-white">STUDENT AGAINST DISCRIMINATION ARCHIVE (SADA)</span>
    </div>
  );
} 
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-6 py-6">
      <div className="w-[120px] h-[120px] rounded-lg overflow-hidden">
        <img 
          src="/sadalogo.png" 
          alt="SADA Logo" 
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const nextElement = target.nextElementSibling as HTMLElement;
            if (nextElement) {
              nextElement.style.display = 'flex';
            }
          }}
        />
        <div className="w-full h-full bg-red-700 flex items-center justify-center text-white text-2xl font-bold" style={{display: 'none'}}>
          SADA
        </div>
      </div>
      <span className="text-2xl md:text-3xl font-bold text-white">STUDENT AGAINST DISCRIMINATION ARCHIVE (SADA)</span>
    </div>
  );
} 
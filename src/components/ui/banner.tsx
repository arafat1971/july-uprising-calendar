import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-red-800 to-yellow-600 py-8 rounded-lg mt-6">
      <Image
        src="/WhatsApp Image 2025-07-10 at 17.47.56.jpeg"
        alt="July Uprising Banner"
        width={600}
        height={250}
        className="rounded shadow mb-4 object-cover"
      />
      <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow mb-2 text-center">জুলাই গণঅভ্যুত্থান সাতক্ষীরা</h2>
      <p className="text-white text-center max-w-2xl">বাংলাদেশের ইতিহাসে জুলাই মাসের গণঅভ্যুত্থান ও ছাত্র আন্দোলনের স্মরণে।</p>
    </div>
  );
} 
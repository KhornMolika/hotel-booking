import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Slider({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev >= images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handleNext = () => {
    setActive((prev) => (prev >= images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActive((prev) => (prev <= 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="w-full max-w-6xl h-75 md:h-125 mx-auto relative overflow-hidden rounded-2xl shadow-xl" data-aos="zoom-in" data-aos-duration="500">
      <div 
        className="flex h-full w-full transition-transform duration-700 ease-in-out" 
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {images.map((img, i) => (
          <div className="min-w-full h-full" key={i}>
            <img src={img} alt={`Slide ${i}`} className="object-cover object-center w-full h-full" />
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full px-4 flex justify-between pointer-events-none">
        <button onClick={handlePrev} className="pointer-events-auto w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm text-white border-none flex items-center justify-center cursor-pointer transition-all hover:bg-primary-1 hover:scale-110 shadow-md">
          <ChevronLeft size={24} />
        </button>
        <button onClick={handleNext} className="pointer-events-auto w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm text-white border-none flex items-center justify-center cursor-pointer transition-all hover:bg-primary-1 hover:scale-110 shadow-md">
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="absolute bottom-6 left-0 w-full flex justify-center gap-3">
        {images.map((_, i) => (
          <button 
            key={i} 
            className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-accent" : "w-2 bg-white/60 hover:bg-white"}`}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

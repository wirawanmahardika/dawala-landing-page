import { useEffect, useRef, useState } from "react";

const HERO_IMAGES = [
  { src: "/img/carousel-1.jpg", alt: "Dawala Hotel exterior" },
  { src: "/img/room-2.jpg", alt: "Dawala Hotel room" },
  { src: "/img/room-3.jpg", alt: "Dawala Hotel suite" },
];

export function HeroCarousel() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = (index: number) => {
    const slider = sliderRef.current;
    setActiveSlide(index);
    if (!slider) return;
    slider.scrollTo({
      behavior: "smooth",
      left: index * slider.clientWidth,
    });
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((prev) => {
        const next = (prev + 1) % HERO_IMAGES.length;
        const slider = sliderRef.current;
        if (slider) {
          slider.scrollTo({
            behavior: "smooth",
            left: next * slider.clientWidth,
          });
        }
        return next;
      });
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="hero min-h-[82vh] relative overflow-hidden">
      <div ref={sliderRef} className="carousel w-full h-full absolute inset-0">
        {HERO_IMAGES.map((img) => (
          <div key={img.src} className="carousel-item w-full h-full">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="hero-overlay bg-linear-to-t from-neutral/90 via-neutral/55 to-neutral/35 z-10" />

      <div className="hero-content text-center text-neutral-content z-20 max-w-3xl px-4">
        <div className="flex flex-col items-center gap-5">
          <span className="badge badge-warning badge-outline px-4 py-3 text-xs sm:text-sm uppercase tracking-widest font-semibold">
            Makassar Luxury Stay
          </span>

          <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl capitalize font-poppins leading-tight drop-shadow-md">
            Discover A Brand <br className="sm:hidden" />
            <span className="text-warning">Luxurious</span> Hotel
          </h1>

          <p className="text-sm sm:text-base text-neutral-content/85 max-w-xl font-roboto">
            Experience warm hospitality, modern comfort, and serene spaces
            designed for business travelers and memorable family stays.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <a
              href="#rooms"
              className="btn btn-warning btn-md sm:btn-lg font-semibold uppercase font-roboto shadow-lg"
            >
              Explore Rooms
            </a>
            <a
              href="https://wa.me/6285175143435"
              className="btn btn-outline btn-neutral-content btn-md sm:btn-lg font-semibold uppercase font-roboto border-white/60 text-white hover:bg-white hover:text-neutral"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {HERO_IMAGES.map((img, index) => (
          <button
            key={img.src}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${activeSlide === index
                ? "w-8 bg-warning"
                : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
          />
        ))}
      </div>
    </section>
  );
}

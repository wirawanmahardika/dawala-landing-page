import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

interface Room {
  id: string;
  name: string;
  price: string;
  badge: string;
  amenities: string[];
  images: string[];
  bookingHref: string;
}

const ROOMS: Room[] = [
  {
    id: "room-1",
    name: "Deluxe Room",
    price: "Rp 500.000",
    badge: "Executive Choice",
    amenities: ["King Bed", "Free WiFi", "AC", "Breakfast"],
    images: ["/img/room-1.jpg", "/img/room-2.jpg", "/img/room-3.jpg"],
    bookingHref:
      "https://wa.me/6285175143435?text=Halo,%20Berikan%20saya%20detail%20tentang%20kamar%20Executive%20Suite",
  },
  {
    id: "room-2",
    name: "Suite Room",
    price: "Rp 300.000",
    badge: "Cozy Stay",
    amenities: ["Queen Bed", "Free WiFi", "AC", "Smart TV"],
    images: ["/img/room-3.jpg", "/img/room-2.jpg", "/img/room-1.jpg"],
    bookingHref:
      "https://wa.me/6285175143435?text=Halo,%20Berikan%20saya%20detail%20tentang%20kamar%20Junior%20Suite",
  },
];

function RoomCard({ room }: { room: Room }) {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? room.images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === room.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-base-300/60 overflow-hidden">
      <figure className="relative aspect-16/10 overflow-hidden" id={room.id}>
        <img
          src={room.images[current]}
          alt={`${room.name} view ${current + 1}`}
          className="w-full h-full object-cover transition-all duration-300"
        />

        <span className="badge badge-neutral/80 text-white border-none absolute top-3 right-3 text-xs">
          {current + 1} / {room.images.length}
        </span>

        <div className="absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between">
          <button
            type="button"
            aria-label={`Previous ${room.name} image`}
            onClick={handlePrev}
            className="btn btn-circle btn-sm md:btn-md bg-base-100/85 border-none hover:btn-warning shadow"
          >
            ❮
          </button>
          <button
            type="button"
            aria-label={`Next ${room.name} image`}
            onClick={handleNext}
            className="btn btn-circle btn-sm md:btn-md bg-base-100/85 border-none hover:btn-warning shadow"
          >
            ❯
          </button>
        </div>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {room.images.map((img, idx) => (
            <button
              key={img}
              type="button"
              aria-label={`Select ${room.name} image ${idx + 1}`}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${current === idx ? "w-6 bg-warning" : "w-2 bg-white/60"
                }`}
            />
          ))}
        </div>
      </figure>

      <div className="card-body p-6 gap-y-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="card-title text-2xl font-bold">{room.name}</h3>
          <span className="badge badge-warning badge-soft font-medium">
            {room.badge}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {room.amenities.map((amenity) => (
            <span key={amenity} className="badge badge-ghost badge-sm">
              {amenity}
            </span>
          ))}
        </div>

        <div className="card-actions justify-between items-center pt-3 border-t border-base-200 mt-1">
          <div>
            <span className="text-xl font-bold text-warning">{room.price}</span>
            <span className="text-xs text-base-content/60"> / night</span>
          </div>
          <a
            href={room.bookingHref}
            className="btn btn-warning font-semibold shadow-sm"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}

export function RoomsSection() {
  return (
    <section className="py-14 md:py-20 bg-base-200/60" id="rooms">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          title="Rooms"
          subtitle="Explore our thoughtfully appointed rooms tailored to your comfort."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {ROOMS.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}

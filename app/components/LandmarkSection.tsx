import { SectionHeading } from "./SectionHeading";

const LANDMARKS = Array.from({ length: 6 }, (_, index) => ({
  id: index,
  name: "Sulawesi Tenggara",
  price: "Start from Rp 250.000",
  image:
    "https://images.pexels.com/photos/3948080/pexels-photo-3948080.jpeg?auto=compress&cs=tinysrgb&w=600",
}));

export function LandmarkSection() {
  return (
    <section className="py-14 md:py-20 bg-base-200/60" id="landmarks">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          title="Landmark"
          subtitle="Discover nearby destinations and scenic getaways around the region."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {LANDMARKS.map((landmark) => (
            <div
              key={landmark.id}
              className="card image-full shadow-lg hover:shadow-2xl overflow-hidden aspect-4/3 group"
            >
              <figure>
                <img
                  src={landmark.image}
                  alt={landmark.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>
              <div className="card-body justify-end items-center text-center p-4 bg-linear-to-t from-black/75 via-black/25 to-transparent">
                <h3 className="font-bold text-sm sm:text-lg text-white">
                  {landmark.name}
                </h3>
                <span className="badge badge-warning badge-sm font-medium">
                  {landmark.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

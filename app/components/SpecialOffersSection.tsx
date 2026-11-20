import { SectionHeading } from "./SectionHeading";

const OFFERS = [
  {
    title: "Weekend Offer",
    badge: "Popular",
    image: "/img/room-1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolore Lorem ipsum dolor sit amet.",
    href: "https://wa.me/6285175143435",
  },
  {
    title: "Staycation Offer",
    badge: "Best Value",
    image: "/img/room-2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolore Lorem ipsum dolor sit amet.",
    href: "https://wa.me/6285175143435",
  },
  {
    title: "Best Flexible Rate",
    badge: "Flexible",
    image: "/img/carousel-1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolore Lorem ipsum dolor sit amet.",
    href: "https://wa.me/6285175143435",
  },
  {
    title: "Early Bird Deal",
    badge: "Save 15%",
    image: "/img/room-3.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolore Lorem ipsum dolor sit amet.",
    href: "https://wa.me/6285175143435",
  },
];

export function SpecialOffersSection() {
  return (
    <section className="py-14 md:py-20 bg-base-200/60">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          title="Special Offers"
          subtitle="Exclusive packages crafted for a relaxing and rewarding stay."
        />

        <div className="overflow-x-auto pb-4 gap-6 flex flex-nowrap sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {OFFERS.map((offer, index) => (
            <div
              key={`${offer.title}-${index}`}
              className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 w-72 shrink-0 sm:w-auto sm:shrink border border-base-300/60 group overflow-hidden"
            >
              <figure className="relative aspect-4/3 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="badge badge-warning font-semibold absolute top-3 left-3 shadow">
                  {offer.badge}
                </span>
              </figure>

              <div className="card-body p-5 gap-y-2">
                <h3 className="card-title text-lg font-bold">{offer.title}</h3>
                <p className="text-xs sm:text-sm text-base-content/70 leading-relaxed">
                  {offer.description}
                </p>
                <div className="card-actions mt-auto pt-3">
                  <a
                    href={offer.href}
                    className="btn btn-outline btn-warning btn-sm w-full gap-2"
                  >
                    More Info
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

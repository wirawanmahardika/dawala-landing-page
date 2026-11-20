import { SectionHeading } from "./SectionHeading";

const SHOWCASES = [
  {
    title: "Rest Room",
    tag: "Interior Tour",
    embedUrl: "https://www.youtube.com/embed/zMgBmr9OUV4?si=fnMd1L1h7AM8pvG3",
  },
  {
    title: "Parking Lot",
    tag: "Facilities",
    embedUrl: "https://www.youtube.com/embed/7QoCsrs8aJk?si=JonFzcVu8jDYeLkp",
  },
  {
    title: "Hotel Grounds",
    tag: "Environment",
    embedUrl: "https://www.youtube.com/embed/7QoCsrs8aJk?si=JonFzcVu8jDYeLkp",
  },
];

export function ShowcasesSection() {
  return (
    <section className="py-14 md:py-20 bg-base-100" id="showcases">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          title="Showcases"
          subtitle="Take a closer look at our hotel facilities and atmosphere."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {SHOWCASES.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-base-300/60 overflow-hidden"
            >
              <figure className="aspect-video w-full bg-neutral">
                <iframe
                  className="w-full h-full"
                  src={item.embedUrl}
                  title={`YouTube video player - ${item.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </figure>
              <div className="card-body p-5 flex-row items-center justify-between">
                <h3 className="card-title text-lg font-bold">{item.title}</h3>
                <span className="badge badge-warning badge-outline badge-sm">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

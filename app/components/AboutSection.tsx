import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "./SectionHeading";

interface StatItem {
  label: string;
  desc: string;
  target: number;
  icon: React.ReactNode;
}

const STATS: StatItem[] = [
  {
    label: "Rooms",
    desc: "Comfortable & modern suites",
    target: 24,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="size-9 fill-current"
      >
        <path
          fillRule="evenodd"
          d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "Events",
    desc: "Memorable gatherings hosted",
    target: 10,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="size-9 fill-current"
      >
        <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
        <path
          fillRule="evenodd"
          d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "Clients",
    desc: "Happy returning guests",
    target: 20,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-9 fill-current"
      >
        <path
          fillRule="evenodd"
          d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
          clipRule="evenodd"
        />
        <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
      </svg>
    ),
  },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState<number[]>(() => STATS.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const intervals = STATS.map((stat, index) => {
      let current = 0;
      return window.setInterval(() => {
        current += 1;
        setCounts((prev) => {
          const next = [...prev];
          next[index] = current;
          return next;
        });
        if (current >= stat.target) {
          window.clearInterval(intervals[index]);
        }
      }, 50);
    });

    return () => {
      intervals.forEach((id) => window.clearInterval(id));
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-14 md:py-20 bg-base-100" id="about">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          title="About Us"
          subtitle="A warm sanctuary of comfort and elegance in Makassar."
        />

        <div className="max-w-3xl mx-auto text-center mb-10">
          <h3 className="font-bold text-2xl sm:text-3xl mb-4">
            Welcome To <span className="text-warning">Dawala</span>
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-base-content/75 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            explicabo accusamus placeat soluta nulla necessitatibus excepturi
            nesciunt iusto voluptas quae quod cupiditate ad. Dolore amet
            asperiores impedit sunt id libero.
          </p>
        </div>

        <div className="stats stats-vertical md:stats-horizontal shadow-lg w-full border border-warning/40 bg-base-100">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="stat place-items-center py-6 transition-colors hover:bg-warning/5"
            >
              <div className="stat-figure text-warning bg-warning/10 p-3 rounded-2xl">
                {stat.icon}
              </div>
              <div className="stat-value text-3xl sm:text-4xl text-base-content mt-2">
                {counts[index]}+
              </div>
              <div className="stat-title font-semibold text-base-content text-base mt-1">
                {stat.label}
              </div>
              <div className="stat-desc text-base-content/60">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

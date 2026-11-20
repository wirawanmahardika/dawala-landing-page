import { SectionHeading } from "./SectionHeading";

const COMMENTS = Array.from({ length: 4 }, (_, index) => ({
  id: index,
  author: "Purbiantoro Ipung",
  source: "Google Review",
  rating: 5,
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas at non illo Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, reiciendis.",
}));

export function GuestCommentsSection() {
  return (
    <section className="py-14 md:py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          title="Guest Comments"
          subtitle="Hear what our valued guests say about their stay at Dawala Hotel."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {COMMENTS.map((comment) => (
            <div
              key={comment.id}
              className="card bg-base-100 shadow-lg border border-base-300/60 hover:border-warning/60 transition-colors p-6"
            >
              <div className="flex items-start gap-4">
                <div className="avatar shrink-0">
                  <div className="w-12 rounded-full bg-warning/15 text-warning p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-full"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="rating rating-sm">
                      {Array.from({ length: comment.rating }, (_, starIdx) => (
                        <span
                          key={starIdx}
                          className="mask mask-star-2 bg-warning"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <span className="badge badge-ghost badge-sm">
                      {comment.source}
                    </span>
                  </div>

                  <p className="text-base-content/75 text-sm leading-relaxed font-roboto italic">
                    “{comment.text}”
                  </p>

                  <span className="text-sm font-semibold text-base-content pt-1">
                    {comment.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

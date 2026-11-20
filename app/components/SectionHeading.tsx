interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-10">
      <div className="divider divider-warning max-w-md mx-auto">
        <h2 className="font-bold text-warning text-2xl sm:text-3xl uppercase tracking-wider px-3">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-base-content/70 text-sm sm:text-base max-w-xl mx-auto mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}

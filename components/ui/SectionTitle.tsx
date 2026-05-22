interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  center = true,
}: SectionTitleProps) {
  return (
    <div className={`${center ? "text-center" : "text-left"} mb-14`}>
      {subtitle && (
        <p className="text-sm uppercase tracking-[0.3em] text-red-700 mb-3 font-medium">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
        {title}
      </h2>
    </div>
  );
}
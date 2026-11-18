import { Instagram } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Circular, slowly rotating "follow us" seal linking to Instagram. */
export function InstagramBadge({
  className,
  decorative = false,
}: {
  className?: string;
  /** Render without a link, for use inside another link. */
  decorative?: boolean;
}) {
  const text = `INSTAGRAM'DA TAKİP EDİN • ${site.instagramHandle.toUpperCase()} •`;
  const cls = cn("group relative grid h-36 w-36 place-items-center md:h-44 md:w-44", className);
  const inner = (
    <>
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden>
        <defs>
          <path id="ig-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text className="fill-foreground font-wide text-[13px] font-semibold">
          <textPath href="#ig-circle" textLength={486} lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="glow-ring grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 group-hover:scale-110 md:h-20 md:w-20">
        <Instagram className="h-7 w-7 md:h-8 md:w-8" aria-hidden />
      </span>
    </>
  );
  if (decorative) {
    return (
      <span aria-hidden className={cls}>
        {inner}
      </span>
    );
  }
  return (
    <a
      href={site.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`FY Reklam Instagram hesabı ${site.instagramHandle}`}
      className={cls}
    >
      {inner}
    </a>
  );
}

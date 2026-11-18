import type { ReactNode } from "react";

type Props = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  image?: string;
};

/** Opening band for inner pages: big type, optional blurred photo backdrop. */
export function PageIntro({ index, eyebrow, title, lead, image }: Props) {
  return (
    <section className="grain relative isolate overflow-hidden pt-40 pb-20 md:pt-52 md:pb-28">
      {image && (
        <div aria-hidden className="absolute inset-0 -z-10">
          <img src={image} alt="" className="hero-blur h-full w-full object-cover" />
          <div className="veil-hero absolute inset-0" />
          <div className="veil-floor absolute inset-0" />
        </div>
      )}
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="rise flex items-center gap-4" style={{ "--rise-delay": "100ms" } as React.CSSProperties}>
          <span className="eyebrow text-primary">{index}</span>
          <span className="h-px w-12 bg-brass" />
          <span className="eyebrow text-muted-foreground">{eyebrow}</span>
        </div>
        <h1 className="display-xl rise mt-8 max-w-[14ch]" style={{ "--rise-delay": "200ms" } as React.CSSProperties}>
          {title}
        </h1>
        {lead && (
          <p
            className="rise mt-8 max-w-xl text-lg text-muted-foreground md:ml-[38%]"
            style={{ "--rise-delay": "350ms" } as React.CSSProperties}
          >
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}

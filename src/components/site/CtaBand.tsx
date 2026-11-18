import { Instagram } from "lucide-react";
import { shot } from "@/lib/media";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";
import { InstagramBadge } from "./InstagramBadge";

const bg = shot("royal-car-service-gece", 4 / 3, "");

export function CtaBand() {
  return (
    <section className="grain relative isolate overflow-hidden py-28 md:py-40">
      <div aria-hidden className="absolute inset-0 -z-10">
        <img src={bg.src} alt="" loading="lazy" className="hero-blur h-full w-full object-cover" />
        <div className="absolute inset-0 bg-night/60" />
        <div className="veil-glow absolute inset-0 animate-glow" />
      </div>
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-9">
          <Reveal>
            <p className="eyebrow text-brass">Sıradaki proje</p>
            <h2 className="display-lg mt-6 max-w-[16ch]">
              Markanızın adı, sokakta <span className="serif-accent text-shimmer">parlasın.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-foreground/75">
              Cephenizin bir fotoğrafını Instagram'dan gönderin, gerisini birlikte planlayalım.
            </p>
          </Reveal>
          <Reveal delay={150} className="mt-10">
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-signal">
              <Instagram className="h-4 w-4" aria-hidden /> Instagram'dan yazın
            </a>
          </Reveal>
        </div>
        <Reveal delay={250} className="hidden justify-self-end lg:col-span-3 lg:block">
          <InstagramBadge />
        </Reveal>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { shot } from "@/lib/media";
import { Reveal } from "./Reveal";

const bg = shot("royal-car-service-gece", 4 / 3, "");

export function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden py-28 md:py-40">
      <div aria-hidden className="absolute inset-0 -z-10">
        <img src={bg.src} alt="" loading="lazy" className="hero-blur h-full w-full object-cover" />
        <div className="absolute inset-0 bg-night/60" />
        <div className="veil-glow absolute inset-0 animate-glow" />
      </div>
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p className="eyebrow text-brass">Sıradaki proje</p>
          <h2 className="display-lg mt-6 max-w-[16ch]">
            Markanızın adı, sokakta <span className="serif-accent text-brass">parlasın.</span>
          </h2>
        </Reveal>
        <Reveal delay={150} className="mt-12 flex flex-wrap items-center gap-6">
          <Link to="/iletisim" className="btn-signal">
            Keşif ve teklif isteyin <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link to="/projeler" className="link-draw text-sm font-semibold tracking-wide uppercase">
            Önce işlerimize bakın
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

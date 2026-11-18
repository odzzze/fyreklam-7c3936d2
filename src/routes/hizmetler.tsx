import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/lib/services";
import { shot } from "@/lib/media";
import { PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/hizmetler")({
  head: () => ({
    meta: [
      { title: "Hizmetler — Işıklı Kutu Harf, Cephe Tabelası, Cam Giydirme | FY Reklam" },
      {
        name: "description",
        content:
          "FY Reklam hizmetleri: ışıklı kutu harf, cephe tabelası, cam giydirme ve folyo, dijital baskı, iç mekan logo, keşif ve montaj. Kepez, Antalya.",
      },
      { property: "og:title", content: "Hizmetler | FY Reklam" },
      {
        property: "og:description",
        content: "Işıklı kutu harften cam giydirmeye, keşiften montaja tabela ve reklam hizmetleri.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const introBg = shot("seda-isler-butik", 3 / 4, "");

function ServicesPage() {
  return (
    <>
      <PageIntro
        index="01"
        eyebrow="Hizmetler"
        image={introBg.src}
        title={
          <>
            Her yüzeye <span className="serif-accent text-brass">doğru</span> çözüm.
          </>
        }
        lead="Bir dükkan tabelasından kurumsal iç mekan logosuna kadar; tasarım, üretim ve montajı tek elden yürütüyoruz."
      />

      <nav aria-label="Hizmet listesi" className="sticky top-[72px] z-30 border-y border-border glass-bar">
        <ul className="mx-auto flex max-w-[1400px] gap-2 overflow-x-auto px-5 py-3 md:px-10">
          {services.map((s, i) => (
            <li key={s.id} className="shrink-0">
              <a
                href={`#${s.id}`}
                className="block rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-brass hover:text-foreground"
              >
                <span className="mr-2 text-primary">0{i + 1}</span>
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        {services.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <article
              key={s.id}
              id={s.id}
              className="grid scroll-mt-40 items-center gap-10 border-b border-border py-20 md:grid-cols-12 md:gap-16 md:py-28"
            >
              <Reveal className={`md:col-span-6 ${flip ? "md:order-2 md:col-start-7" : ""}`}>
                <div className="relative">
                  <img
                    src={s.image.src}
                    alt={s.image.alt}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="lift aspect-[4/5] w-full rounded-sm object-cover"
                  />
                  <span className="font-wide absolute -top-6 text-7xl font-extrabold text-outline opacity-60 md:-top-10 md:text-9xl"
                    style={{ [flip ? "right" : "left"]: "-0.5rem" }}
                    aria-hidden
                  >
                    0{i + 1}
                  </span>
                </div>
              </Reveal>
              <Reveal delay={120} className={`md:col-span-5 ${flip ? "md:order-1 md:col-start-1" : "md:col-start-8"}`}>
                <p className="eyebrow text-primary">Hizmet 0{i + 1}</p>
                <h2 className="display-md mt-5">{s.title}</h2>
                <p className="serif-accent mt-4 text-2xl text-brass">{s.short}</p>
                <p className="mt-6 text-muted-foreground">{s.body}</p>
                <ul className="mt-8 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/iletisim" className="link-draw mt-10 text-sm font-semibold tracking-wide uppercase">
                  Bu hizmet için bize yazın <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Reveal>
            </article>
          );
        })}
      </div>

      <CtaBand />
    </>
  );
}

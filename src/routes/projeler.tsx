import { createFileRoute } from "@tanstack/react-router";
import { Expand } from "lucide-react";
import { useMemo, useState } from "react";
import { categories, categoryLabel, gallery, type CategoryId } from "@/lib/projects";
import { shot } from "@/lib/media";
import { PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { Lightbox } from "@/components/site/Lightbox";
import { CtaBand } from "@/components/site/CtaBand";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projeler")({
  head: () => ({
    meta: [
      { title: "Projeler — Tabela ve Reklam Uygulamalarımız | FY Reklam" },
      {
        name: "description",
        content:
          "FY Reklam'ın Antalya'da tamamladığı tabela, ışıklı kutu harf, cam giydirme ve dijital baskı projelerinden seçkiler.",
      },
      { property: "og:title", content: "Projeler | FY Reklam" },
      {
        property: "og:description",
        content: "Royal, Hadrian, Baybars, Seda İşler ve daha fazlası: sahadaki gerçek işlerimiz.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

const introBg = shot("royal-car-service-gece", 4 / 3, "");
type Filter = CategoryId | "tumu";

function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("tumu");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "tumu" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter],
  );

  const filters: { id: Filter; label: string; count: number }[] = [
    { id: "tumu", label: "Tümü", count: gallery.length },
    ...categories.map((c) => ({
      id: c.id as Filter,
      label: c.label,
      count: gallery.filter((g) => g.category === c.id).length,
    })),
  ];

  return (
    <>
      <PageIntro
        index="02"
        eyebrow="Projeler"
        image={introBg.src}
        title={
          <>
            Sokakta <span className="serif-accent text-brass">imzamız</span> var.
          </>
        }
        lead="Aşağıdaki her fotoğraf, ürettiğimiz ve yerine taktığımız gerçek bir iş. Büyütmek için bir görsele dokunun."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div role="group" aria-label="Kategoriye göre filtrele" className="flex flex-wrap gap-2 border-b border-border pb-8">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={filter === f.id}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-colors",
                  filter === f.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-brass hover:text-foreground",
                )}
              >
                {f.label} <span className="ml-1 opacity-60 tabular-nums">{f.count}</span>
              </button>
            ))}
          </div>

          <ul className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3" key={filter}>
            {items.map((g, i) => (
              <li key={g.src} className="mb-5 break-inside-avoid">
                <Reveal delay={(i % 3) * 80}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="group relative block w-full overflow-hidden rounded-sm bg-card text-left"
                    aria-label={`${g.client} görselini büyüt`}
                  >
                    <img
                      src={g.thumb}
                      alt={g.alt}
                      loading={i < 3 ? "eager" : "lazy"}
                      width={760}
                      height={Math.round(760 / g.ratio)}
                      className="h-auto w-full transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
                    />
                    <div className="veil-card absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-end justify-between gap-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                      <div>
                        <p className="eyebrow text-brass">{categoryLabel(g.category)}</p>
                        <p className="font-wide mt-1 font-bold">{g.client}</p>
                      </div>
                      <Expand className="h-5 w-5 shrink-0" aria-hidden />
                    </div>
                  </button>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Lightbox items={items} index={active} onIndexChange={setActive} />
      <CtaBand />
    </>
  );
}

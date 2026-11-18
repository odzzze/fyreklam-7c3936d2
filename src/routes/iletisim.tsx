import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Camera, Instagram, MapPin, Ruler, Sparkles } from "lucide-react";
import { site } from "@/lib/site";
import { shot } from "@/lib/media";
import { PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { InstagramBadge } from "@/components/site/InstagramBadge";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim — Instagram'dan Bize Yazın | FY Reklam Kepez, Antalya" },
      {
        name: "description",
        content:
          "FY Reklam'a Instagram (@fyreklam) üzerinden ulaşın: tabela, kutu harf, cam giydirme ve baskı işleriniz için mesaj gönderin. Kepez, Antalya.",
      },
      { property: "og:title", content: "İletişim | FY Reklam" },
      {
        property: "og:description",
        content: "Tabela projeniz için Instagram'dan @fyreklam'a yazın. Kepez, Antalya.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const introBg = shot("mevlana-market-gece", 3 / 4, "");

const tips = [
  { icon: Camera, t: "Cephenizin fotoğrafı", d: "Tabelanın takılacağı yeri karşıdan çekin." },
  { icon: Ruler, t: "Yaklaşık ölçü", d: "Genişlik ve yükseklik, kabaca bile olsa yeterli." },
  { icon: Sparkles, t: "Logonuz ve fikriniz", d: "Varsa logonuz, aklınızdaki stil ya da örnekler." },
];

function ContactPage() {
  return (
    <>
      <PageIntro
        index="04"
        eyebrow="İletişim"
        image={introBg.src}
        title={
          <>
            Bir <span className="serif-accent text-shimmer">mesaj</span> yeter.
          </>
        }
        lead="Bize Instagram'dan ulaşın. Projenizi kısaca anlatın, birlikte planlayalım."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="grain group relative isolate grid items-center gap-10 overflow-hidden rounded-sm border border-border bg-card p-8 transition-colors duration-500 hover:border-primary md:grid-cols-12 md:p-14"
            >
              <span aria-hidden className="veil-glow absolute inset-0 -z-10 opacity-60 transition-opacity duration-700 group-hover:opacity-100" />
              <span className="block md:col-span-8">
                <p className="eyebrow flex items-center gap-3 text-brass">
                  <Instagram className="h-4 w-4" aria-hidden /> Instagram
                </p>
                <p className="font-wide mt-6 text-[12vw] leading-[0.9] font-extrabold tracking-tighter md:text-[6.5vw]">
                  @fy<span className="serif-accent font-normal text-brass">reklam</span>
                </p>
                <p className="mt-6 max-w-md text-muted-foreground">
                  Teklif, soru ve randevu talepleriniz için bize Instagram'dan mesaj gönderin.
                </p>
                <span className="btn-signal mt-10">
                  Mesaj gönder <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" aria-hidden />
                </span>
              </span>
              <span className="hidden justify-self-end md:col-span-4 md:block">
                <InstagramBadge decorative />
              </span>
            </a>
          </Reveal>

          <div className="mt-20 grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow text-primary">Mesajınıza ekleyin</p>
              <h2 className="display-md mt-5">Hızlı teklif için üç şey.</h2>
              <ol className="mt-10 space-y-8">
                {tips.map((t, i) => (
                  <li key={t.t} className="flex gap-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-border text-primary">
                      <t.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="font-wide font-bold">
                        <span className="mr-2 text-primary">0{i + 1}</span>
                        {t.t}
                      </p>
                      <p className="mt-1 text-muted-foreground">{t.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border-y border-border py-6"
              >
                <MapPin className="h-5 w-5 text-primary" aria-hidden />
                <span className="eyebrow w-20 text-muted-foreground">Konum</span>
                <span className="font-wide flex-1 text-lg font-semibold">{site.address}</span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-primary" aria-hidden />
              </a>
              <div className="mt-8 overflow-hidden rounded-sm border border-border">
                <iframe
                  title="FY Reklam konumu — Kepez, Antalya"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
                  className="h-80 w-full grayscale invert-[0.9] hue-rotate-180"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

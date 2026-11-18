import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { shot } from "@/lib/media";
import { PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: [
      { title: "Hakkımızda — Kepez'de Tabela ve Reklam Atölyesi | FY Reklam" },
      {
        name: "description",
        content:
          "FY Reklam, Kepez, Antalya'da tabela tasarlayan, üreten ve monte eden bir reklam atölyesidir. Yaklaşımımızı ve çalışma biçimimizi tanıyın.",
      },
      { property: "og:title", content: "Hakkımızda | FY Reklam" },
      {
        property: "og:description",
        content: "Kepez, Antalya'da tasarlayan, üreten ve monte eden tabela atölyesi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const introBg = shot("cd-hair-duvar-logo", 3 / 4, "");
const [montaj, hadrianIc, sariyer] = [
  shot("royal-car-service-montaj", 4 / 3, "Royal Luxury Car Service tabela montajı sahada"),
  shot("hadrian-hukuk-ic-mekan", 3 / 4, "Hadrian Hukuk iç mekan logo uygulaması"),
  shot("sariyer-borekcisi-tabela", 3 / 4, "Sarıyer Börekçisi tabela montajı, merdiven ve ekipman"),
] as const;

const principles = [
  {
    t: "Okunabilirlik",
    d: "Bir tabela önce okunmalı. Harf boyutunu, kontrastı ve görülme mesafesini cepheye göre belirliyoruz.",
  },
  {
    t: "Dayanıklılık",
    d: "Antalya güneşi, nemi ve yağmuru tabelayı sınar. Malzeme seçimini buna göre yapıyoruz.",
  },
  {
    t: "Karakter",
    d: "Her marka farklı konuşur. Logonuzun ruhunu malzemeye ve ışığa doğru şekilde aktarıyoruz.",
  },
  {
    t: "Tek muhatap",
    d: "Keşif, tasarım, üretim ve montaj aynı ekipte. Sorularınızın cevabı tek bir yerde.",
  },
];

function AboutPage() {
  return (
    <>
      <PageIntro
        index="03"
        eyebrow="Hakkımızda"
        image={introBg.src}
        title={
          <>
            Atölyeden <span className="serif-accent text-brass">sokağa.</span>
          </>
        }
        lead="FY Reklam, Kepez, Antalya'da tabela ve reklam ürünleri tasarlayan, üreten ve yerine monte eden bir atölyedir."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-5 md:px-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-primary">Hikâyemiz</p>
            <h2 className="display-md mt-6">
              İşimiz, markaların <span className="serif-accent text-brass">görünür</span> olması.
            </h2>
          </Reveal>
          <Reveal delay={120} className="space-y-6 text-lg text-muted-foreground lg:col-span-6 lg:col-start-7">
            <p>
              Mahallenin marketinden kurumsal ofislere kadar her işletmenin sokakla kurduğu ilk bağ
              tabelasıdır. Biz bu bağı doğru kurmak için çalışıyoruz.
            </p>
            <p>
              Işıklı kutu harf, cephe tabelası, cam giydirme, dijital baskı ve iç mekan logo
              uygulamalarını kendi atölyemizde hazırlıyor, sahada kendi ekibimizle tamamlıyoruz.
            </p>
            <p>
              Projeler sayfamızdaki her fotoğraf, bu yaklaşımla ürettiğimiz gerçek bir iş.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-label="Sahadan kareler" className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-[1400px] gap-5 px-5 md:grid-cols-12 md:px-10">
          <Reveal className="md:col-span-7">
            <img src={montaj.src} alt={montaj.alt} loading="lazy" className="lift aspect-[4/3] w-full rounded-sm object-cover" />
          </Reveal>
          <Reveal delay={120} className="md:col-span-5 md:mt-24">
            <img src={hadrianIc.thumb} alt={hadrianIc.alt} loading="lazy" className="lift aspect-[3/4] w-full rounded-sm object-cover" />
          </Reveal>
          <Reveal delay={60} className="md:col-span-4 md:col-start-3 md:-mt-32">
            <img src={sariyer.thumb} alt={sariyer.alt} loading="lazy" className="lift aspect-[3/4] w-full rounded-sm object-cover" />
          </Reveal>
          <Reveal delay={160} className="flex items-end md:col-span-5 md:col-start-8">
            <blockquote className="serif-accent text-3xl leading-tight text-brass md:text-4xl">
              “İyi bir tabela, işletme kapalıyken bile çalışmaya devam eder.”
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <p className="eyebrow text-primary">İlkelerimiz</p>
            <h2 className="display-lg mt-6 max-w-[16ch]">
              Neye <span className="serif-accent">önem veriyoruz?</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.t} delay={i * 80} className="border-t border-ink/20 pt-8">
                <div className="flex items-baseline gap-6">
                  <span className="font-wide text-sm font-bold text-primary">0{i + 1}</span>
                  <div>
                    <h3 className="font-wide text-2xl font-bold md:text-3xl">{p.t}</h3>
                    <p className="mt-4 max-w-md text-ink-muted">{p.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16">
            <Link to="/projeler" className="link-draw text-sm font-semibold tracking-wide uppercase">
              İşlerimizi inceleyin <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

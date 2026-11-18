import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { heroImage } from "@/lib/media";
import { clientNames, projects, categoryLabel } from "@/lib/projects";
import { services } from "@/lib/services";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FY Reklam — Işıklı Tabela, Kutu Harf ve Cam Giydirme | Kepez, Antalya" },
      {
        name: "description",
        content:
          "Kepez, Antalya'da tabela ve reklam atölyesi. Işıklı kutu harf, cephe tabelası, cam giydirme, dijital baskı ve iç mekan logo; keşiften montaja.",
      },
      { property: "og:title", content: "FY Reklam — Markanızı ışıkla yazıyoruz" },
      {
        property: "og:description",
        content: "Işıklı kutu harf, cephe tabelası, cam giydirme ve iç mekan logo. Kepez, Antalya.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const d = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as CSSProperties;

function HomePage() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <Approach />
      <FeaturedWork />
      <ServicesIndex />
      <Process />
      <CtaBand />
    </>
  );
}

function Hero() {
  return (
    <section
      aria-labelledby="hero-baslik"
      className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* Background: the Hadrian sign, softly blurred */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={heroImage}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="hero-blur-soft lg:hero-blur h-full w-full animate-slow-zoom object-cover object-[60%_30%]"
        />
        <div className="veil-hero absolute inset-0" />
        <div className="veil-glow absolute inset-0 animate-glow" />
        <div className="veil-floor absolute inset-0" />
      </div>

      <div className="mx-auto grid w-full max-w-[1400px] flex-1 items-end gap-12 px-5 pt-36 pb-16 md:px-10 lg:grid-cols-12 lg:items-center lg:pt-32 lg:pb-24">
        <div className="lg:col-span-7">
          <div className="rise flex items-center gap-4" style={d(150)}>
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="eyebrow text-foreground/80">Tabela & Reklam Atölyesi — Kepez, Antalya</span>
          </div>

          <h1 id="hero-baslik" className="display-xl mt-8">
            <span className="rise block" style={d(250)}>
              Markanızı
            </span>
            <span className="rise block" style={d(400)}>
              <span className="serif-accent text-brass text-[1.08em] font-normal">ışıkla</span>
            </span>
            <span className="rise block" style={d(550)}>
              yazıyoruz<span className="text-primary">.</span>
            </span>
          </h1>

          <p className="rise mt-8 max-w-lg text-base text-foreground/75 md:text-lg" style={d(750)}>
            Işıklı kutu harften cam giydirmeye; keşiften montaja kadar markanızın sokaktaki yüzünü
            tasarlıyor, üretiyor ve yerine takıyoruz.
          </p>

          <div className="rise mt-10 flex flex-wrap items-center gap-6" style={d(900)}>
            <Link to="/projeler" className="btn-signal">
              Projeleri keşfedin <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link to="/iletisim" className="link-draw text-sm font-semibold tracking-wide uppercase">
              Teklif alın
            </Link>
          </div>
        </div>

        {/* The same photograph, in sharp focus — framed like a gallery piece */}
        <div className="hidden lg:col-span-5 lg:block">
          <figure className="rise relative ml-auto w-[min(100%,420px)]" style={d(600)}>
            <div className="relative animate-float">
              <div className="frame-glow relative aspect-[3/4] overflow-hidden rounded-[2px]">
                <img
                  src={heroImage}
                  alt="Hadrian Hukuk ve Danışmanlık için çıtalı duvar üzerine altın tonlu kabartma logo"
                  width={1086}
                  height={1448}
                  className="h-full w-full object-cover"
                />
              </div>
              <span aria-hidden className="absolute -top-4 -left-4 h-16 w-16 border-t border-l border-brass/70" />
              <span aria-hidden className="absolute -right-4 -bottom-4 h-16 w-16 border-r border-b border-brass/70" />
            </div>
            <figcaption className="mt-8 flex items-start justify-between gap-6">
              <div>
                <p className="eyebrow text-brass">Seçili iş</p>
                <p className="font-wide mt-2 text-sm font-bold">Hadrian Hukuk & Danışmanlık</p>
              </div>
              <p className="max-w-[16ch] text-right text-xs text-muted-foreground">
                Altın tonlu kabartma harf · İç mekan
              </p>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1400px] items-center justify-between border-t border-border/70 px-5 py-5 md:px-10">
        <a href="#yaklasim" className="eyebrow flex items-center gap-3 text-muted-foreground hover:text-foreground">
          <ArrowDownRight className="h-4 w-4 text-primary" aria-hidden /> Kaydırın
        </a>
        <ul className="hidden gap-8 md:flex" aria-label="Öne çıkan hizmetler">
          {["Işıklı Kutu Harf", "Cephe Tabelası", "Cam Giydirme"].map((t, i) => (
            <li key={t} className="eyebrow text-muted-foreground">
              <span className="text-primary">0{i + 1}</span> {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ClientMarquee() {
  const names = [...clientNames, ...clientNames];
  return (
    <section aria-label="Tabelasını ürettiğimiz işletmeler" className="overflow-hidden border-y border-border bg-night py-8">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap hover:[animation-play-state:paused]">
        {names.map((n, i) => (
          <span key={i} className="flex items-center gap-10" aria-hidden={i >= clientNames.length}>
            <span
              className={
                i % 2 === 0
                  ? "font-wide text-3xl font-extrabold tracking-tight md:text-5xl"
                  : "serif-accent text-3xl text-brass md:text-5xl"
              }
            >
              {n}
            </span>
            <span className="h-2 w-2 rotate-45 bg-primary" />
          </span>
        ))}
      </div>
    </section>
  );
}

function Approach() {
  const seda = projects.find((p) => p.slug === "seda-isler")!.shots[0]!;
  return (
    <section id="yaklasim" className="relative py-28 md:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-5 md:px-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-2">
          <p className="eyebrow text-primary">01 — Yaklaşım</p>
        </Reveal>
        <div className="lg:col-span-10">
          <Reveal as="h2" className="display-lg max-w-[20ch]">
            Tabela, bir markanın sokağa söylediği{" "}
            <span className="serif-accent text-brass">ilk cümledir.</span>
          </Reveal>

          <div className="mt-20 grid items-end gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-5" delay={100}>
              <figure>
                <img
                  src={seda.thumb}
                  alt={seda.alt}
                  width={760}
                  height={1013}
                  loading="lazy"
                  className="lift aspect-[4/5] w-full rounded-sm object-cover"
                />
                <figcaption className="eyebrow mt-4 text-muted-foreground">Seda İşler Butik — arkadan aydınlatmalı harf</figcaption>
              </figure>
            </Reveal>
            <Reveal className="space-y-6 text-lg text-muted-foreground md:col-span-6 md:col-start-7" delay={200}>
              <p>
                Gündüz okunması, gece fark edilmesi ve yıllarca aynı netlikte kalması gerekir. Bu
                yüzden her işe malzemeden önce cepheyi, ışığı ve markanın karakterini anlayarak
                başlıyoruz.
              </p>
              <p>
                Kepez'deki atölyemizde tasarlayıp ürettiğimiz tabelaları kendi ekibimizle yerine
                monte ediyoruz. Tek muhatap, tek sorumluluk.
              </p>
              <Link to="/hakkimizda" className="link-draw mt-4 text-sm font-semibold tracking-wide text-foreground uppercase">
                Atölyeyi tanıyın <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedWork() {
  const pick = (slug: string, i = 0) => {
    const p = projects.find((x) => x.slug === slug)!;
    return { ...p.shots[i]!, client: p.client, category: p.category };
  };
  const tiles = [
    { ...pick("royal"), cls: "md:col-span-8 aspect-[4/3] md:aspect-auto md:row-span-2" },
    { ...pick("mr-pala"), cls: "md:col-span-4 aspect-[4/5]" },
    { ...pick("cd-hair"), cls: "md:col-span-4 aspect-[4/5]" },
    { ...pick("baybars"), cls: "md:col-span-4 aspect-[4/5]" },
    { ...pick("mevlana-market", 1), cls: "md:col-span-4 aspect-[4/5]" },
    { ...pick("fresh-fruit-juice"), cls: "md:col-span-4 aspect-[4/5]" },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <p className="eyebrow text-primary">02 — Seçili işler</p>
            <h2 className="display-lg mt-6">
              Sahada, <span className="serif-accent text-brass">gerçek</span> işler.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/projeler" className="btn-quiet">
              Tüm projeler <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-12 md:gap-5">
          {tiles.map((t, i) => (
            <Reveal key={t.src} delay={(i % 3) * 90} className={t.cls}>
              <Link
                to="/projeler"
                className="group relative block h-full w-full overflow-hidden rounded-sm bg-card"
                aria-label={`${t.client} projesini görüntüle`}
              >
                <img
                  src={i === 0 ? t.src : t.thumb}
                  alt={t.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                />
                <div className="veil-card absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-7">
                  <div>
                    <p className="eyebrow text-brass">{categoryLabel(t.category)}</p>
                    <p className={`font-wide mt-2 font-bold ${i === 0 ? "text-2xl md:text-4xl" : "text-lg"}`}>{t.client}</p>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 translate-y-2 place-items-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesIndex() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-5 md:px-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow text-primary">03 — Hizmetler</p>
            <h2 className="display-md mt-6">
              Harften cepheye, <span className="serif-accent text-brass">camdan duvara.</span>
            </h2>
            <p className="mt-6 max-w-sm text-muted-foreground">
              Her ölçekte iş için aynı özen: dükkan tabelasından kurumsal iç mekan logosuna.
            </p>
          </div>
        </Reveal>
        <ol className="border-t border-border lg:col-span-8">
          {services.map((s, i) => (
            <Reveal as="li" key={s.id} delay={i * 60} className="border-b border-border">
              <Link
                to="/hizmetler"
                hash={s.id}
                className="group relative grid grid-cols-[3rem_1fr_auto] items-center gap-4 py-7 md:grid-cols-[4rem_1fr_9rem_auto] md:gap-8 md:py-9"
              >
                <span className="eyebrow text-muted-foreground transition-colors group-hover:text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="font-wide block text-xl font-bold transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                    {s.title}
                  </span>
                  <span className="mt-2 block text-sm text-muted-foreground">{s.short}</span>
                </span>
                <span className="hidden h-24 overflow-hidden rounded-sm md:block">
                  <img
                    src={s.image.thumb}
                    alt=""
                    loading="lazy"
                    className="h-full w-full scale-110 object-cover opacity-0 grayscale transition-all duration-700 group-hover:scale-100 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </span>
                <ArrowUpRight
                  className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:rotate-45 group-hover:text-primary"
                  aria-hidden
                />
              </Link>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

const steps = [
  { t: "Keşif", d: "Yerinde ölçü alıyor, cepheyi, ışığı ve görülme mesafesini inceliyoruz." },
  { t: "Tasarım", d: "Markanıza uygun malzeme ve ışık önerisini görselleştirip onayınıza sunuyoruz." },
  { t: "Üretim", d: "Onaylanan tasarımı atölyemizde, detaylarına özen göstererek üretiyoruz." },
  { t: "Montaj", d: "Kendi ekibimizle güvenli şekilde monte ediyor, son kontrolleri yapıyoruz." },
];

function Process() {
  return (
    <section className="bg-paper py-24 text-ink md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-primary">04 — Süreç</p>
            <h2 className="display-lg mt-6 max-w-[14ch]">
              Dört adımda <span className="serif-accent">yerinde.</span>
            </h2>
          </div>
          <p className="max-w-sm text-ink-muted">
            Keşiften montaja kadar tüm süreci tek ekip olarak yürütüyoruz.
          </p>
        </Reveal>
        <ol className="mt-16 grid gap-px overflow-hidden rounded-sm bg-ink/15 md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.t} delay={i * 100} className="group bg-paper p-8 transition-colors duration-500 hover:bg-ink hover:text-paper md:p-10">
              <span className="font-wide block text-6xl font-extrabold text-primary md:text-7xl">0{i + 1}</span>
              <h3 className="font-wide mt-10 text-2xl font-bold">{s.t}</h3>
              <p className="mt-3 text-ink-muted transition-colors group-hover:text-paper/70">{s.d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

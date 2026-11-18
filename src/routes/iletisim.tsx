import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { site, whatsappLink } from "@/lib/site";
import { services } from "@/lib/services";
import { shot } from "@/lib/media";
import { PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim — Teklif ve Keşif Talebi | FY Reklam Kepez, Antalya" },
      {
        name: "description",
        content:
          "FY Reklam ile iletişime geçin: tabela, kutu harf, cam giydirme ve baskı işleriniz için keşif ve teklif isteyin. Kepez, Antalya.",
      },
      { property: "og:title", content: "İletişim | FY Reklam" },
      {
        property: "og:description",
        content: "Tabela projeniz için keşif ve teklif isteyin. Kepez, Antalya.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const introBg = shot("mevlana-market-gece", 3 / 4, "");

const fieldCls =
  "w-full border-0 border-b border-input bg-transparent px-0 py-4 text-lg text-foreground placeholder:text-muted-foreground/60 focus:border-brass focus:outline-none focus:ring-0";

function ContactPage() {
  const [service, setService] = useState<string>("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("ad") ?? "").trim();
    const phone = String(data.get("telefon") ?? "").trim();
    const message = String(data.get("mesaj") ?? "").trim();
    if (!name || !phone) {
      toast.error("Lütfen adınızı ve telefon numaranızı yazın.");
      return;
    }
    const text = [
      `Merhaba FY Reklam, ben ${name}.`,
      service ? `İlgilendiğim hizmet: ${service}.` : "",
      message,
      `Telefon: ${phone}`,
    ]
      .filter(Boolean)
      .join("\n");

    const wa = whatsappLink(text);
    if (wa) {
      window.open(wa, "_blank", "noopener,noreferrer");
      return;
    }
    if (site.email) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Teklif talebi")}&body=${encodeURIComponent(text)}`;
      return;
    }
    toast("Mesajınız hazır", {
      description: "İletişim bilgilerimiz çok yakında burada olacak. Lütfen kısa süre sonra tekrar deneyin.",
    });
  }

  const wa = whatsappLink("Merhaba FY Reklam, tabela için bilgi almak istiyorum.");

  const channels = [
    {
      icon: Phone,
      label: "Telefon",
      value: site.phoneDisplay,
      href: site.phoneHref ? `tel:${site.phoneHref}` : null,
    },
    { icon: MessageCircle, label: "WhatsApp", value: wa ? "Mesaj gönderin" : site.phoneDisplay, href: wa },
    { icon: Mail, label: "E-posta", value: site.email || "—", href: site.email ? `mailto:${site.email}` : null },
    { icon: MapPin, label: "Adres", value: site.address, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}` },
  ];

  return (
    <>
      <PageIntro
        index="04"
        eyebrow="İletişim"
        image={introBg.src}
        title={
          <>
            Bir <span className="serif-accent text-brass">merhaba</span> yeter.
          </>
        }
        lead="Projenizi kısaca anlatın; keşif ve teklif için size dönelim."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-5 md:px-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <ul className="divide-y divide-border border-y border-border">
              {channels.map((c) => {
                const inner = (
                  <>
                    <c.icon className="h-5 w-5 text-primary" aria-hidden />
                    <span className="eyebrow w-24 shrink-0 text-muted-foreground">{c.label}</span>
                    <span className="font-wide flex-1 text-base font-semibold md:text-lg">{c.value}</span>
                    {c.href && (
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-primary" aria-hidden />
                    )}
                  </>
                );
                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="group flex items-center gap-5 py-6">
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-5 py-6">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 overflow-hidden rounded-sm border border-border">
              <iframe
                title="FY Reklam konumu — Kepez, Antalya"
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
                className="h-72 w-full grayscale invert-[0.9] hue-rotate-180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <form onSubmit={onSubmit} className="space-y-10" noValidate>
              <div>
                <h2 className="display-md">Teklif formu</h2>
                <p className="mt-3 text-muted-foreground">Birkaç bilgi yeterli, gerisini konuşarak netleştiririz.</p>
              </div>

              <fieldset>
                <legend className="eyebrow text-muted-foreground">İlgilendiğiniz hizmet</legend>
                <div className="mt-4 flex flex-wrap gap-2">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      aria-pressed={service === s.title}
                      onClick={() => setService((v) => (v === s.title ? "" : s.title))}
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm transition-colors",
                        service === s.title
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-muted-foreground hover:border-brass hover:text-foreground",
                      )}
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="eyebrow text-muted-foreground">Ad Soyad *</span>
                  <input name="ad" required autoComplete="name" maxLength={80} className={fieldCls} placeholder="Adınız" />
                </label>
                <label className="block">
                  <span className="eyebrow text-muted-foreground">Telefon *</span>
                  <input name="telefon" required type="tel" autoComplete="tel" maxLength={20} className={fieldCls} placeholder="05XX XXX XX XX" />
                </label>
              </div>
              <label className="block">
                <span className="eyebrow text-muted-foreground">Mesajınız</span>
                <textarea
                  name="mesaj"
                  rows={4}
                  maxLength={1000}
                  className={cn(fieldCls, "resize-none")}
                  placeholder="Ölçü, konum, aklınızdaki fikir…"
                />
              </label>
              <button type="submit" className="btn-signal">
                Gönder <ArrowUpRight className="h-4 w-4" aria-hidden />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import { Link } from "@tanstack/react-router";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/services";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden border-t border-border bg-night">
      <div className="mx-auto max-w-[1400px] px-5 pt-20 pb-10 md:px-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo className="h-20 w-20" />
            <p className="mt-6 max-w-sm text-muted-foreground">
              Kepez, Antalya'da tabela ve reklam atölyesi. Işıklı harften cam giydirmeye, keşiften
              montaja kadar.
            </p>
          </div>
          <div className="md:col-span-2">
            <h2 className="eyebrow text-brass">Sayfalar</h2>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-muted-foreground transition-colors hover:text-foreground">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <h2 className="eyebrow text-brass">Hizmetler</h2>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    to="/hizmetler"
                    hash={s.id}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h2 className="eyebrow text-brass">İletişim</h2>
            <address className="mt-5 space-y-3 not-italic text-muted-foreground">
              <p>{site.address}</p>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-foreground hover:text-primary"
              >
                Instagram · {site.instagramHandle}
              </a>
            </address>
          </div>
        </div>

        <p
          aria-hidden
          className="font-wide mt-20 select-none text-center text-[19vw] leading-[0.8] font-extrabold tracking-tighter text-outline opacity-25 md:text-[15vw]"
        >
          FY REKLAM
        </p>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} FY Reklam. Tüm hakları saklıdır.</p>
          <p>Kepez · Antalya · Türkiye</p>
        </div>
      </div>
    </footer>
  );
}

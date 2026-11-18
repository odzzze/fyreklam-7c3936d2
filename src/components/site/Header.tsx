import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Instagram, Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-bar border-b border-border py-3" : "py-5 md:py-7",
      )}
    >
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        İçeriğe geç
      </a>
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-10">
        <Link to="/" className="flex items-center gap-3" aria-label="FY Reklam ana sayfa">
          <Logo className={cn("transition-all duration-500", scrolled ? "h-10 w-10" : "h-12 w-12")} />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-wide text-sm font-bold tracking-[0.18em]">FY REKLAM</span>
            <span className="mt-1 text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase">
              Kepez · Antalya
            </span>
          </span>
        </Link>

        <nav aria-label="Ana menü" className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full border border-border bg-night/40 p-1 backdrop-blur-md">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "bg-secondary text-foreground" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-signal hidden !py-3 !px-5 md:inline-flex"
          >
            <Instagram className="h-4 w-4" aria-hidden /> {site.instagramHandle}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-night/40 backdrop-blur-md lg:hidden"
            aria-expanded={open}
            aria-controls="mobil-menu"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobil-menu"
        className={cn(
          "fixed inset-0 top-0 -z-10 flex flex-col bg-night px-6 pt-28 pb-10 transition-all duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav aria-label="Mobil menü" className="flex-1">
          <ul className="space-y-1">
            {nav.map((item, i) => (
              <li
                key={item.to}
                className={cn("transition-all duration-500", open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}
                style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
              >
                <Link
                  to={item.to}
                  className="flex items-baseline justify-between border-b border-border py-4"
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                >
                  <span className="display-md">{item.label}</span>
                  <span className="eyebrow text-muted-foreground">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-signal justify-center">
          <Instagram className="h-4 w-4" aria-hidden /> Instagram'dan yazın
        </a>
      </div>
    </header>
  );
}

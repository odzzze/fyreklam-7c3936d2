// Single source of truth for business details shown across the site.
// Values marked TODO are placeholders until the real details are provided.
export const site = {
  name: "FY Reklam",
  tagline: "Tabela & Reklam Atölyesi",
  city: "Antalya",
  district: "Kepez",
  // TODO: replace with the real phone number (digits only for links).
  phoneDisplay: "+90 5XX XXX XX XX",
  phoneHref: "",
  whatsapp: "",
  // TODO: replace with the real e-mail address.
  email: "",
  // TODO: replace with the full street address.
  address: "Kepez, Antalya",
  hours: "",
  mapQuery: "Kepez, Antalya",
} as const;

export const nav = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/hizmetler", label: "Hizmetler" },
  { to: "/projeler", label: "Projeler" },
  { to: "/hakkimizda", label: "Hakkımızda" },
  { to: "/iletisim", label: "İletişim" },
] as const;

export function whatsappLink(message?: string) {
  if (!site.whatsapp) return null;
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${site.whatsapp}${text}`;
}

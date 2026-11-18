// Single source of truth for business details shown across the site.
// FY Reklam is reached through Instagram only (no phone line).
export const site = {
  name: "FY Reklam",
  tagline: "Tabela & Reklam Atölyesi",
  city: "Antalya",
  district: "Kepez",
  instagramUrl: "https://www.instagram.com/fyreklam/",
  instagramHandle: "@fyreklam",
  address: "Kepez, Antalya",
  mapQuery: "Kepez, Antalya",
} as const;

export const nav = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/hizmetler", label: "Hizmetler" },
  { to: "/projeler", label: "Projeler" },
  { to: "/hakkimizda", label: "Hakkımızda" },
  { to: "/iletisim", label: "İletişim" },
] as const;

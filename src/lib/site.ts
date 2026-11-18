// Single source of truth for business details shown across the site.
// FY Reklam is reached through Instagram only (no phone line).
export const site = {
  name: "FY Reklam",
  tagline: "Tabela & Reklam Atölyesi",
  city: "Antalya",
  district: "Kepez",
  street: "Göksu, 6857. Sk.",
  postalCode: "07260",
  country: "Türkiye",
  instagramUrl: "https://www.instagram.com/fyreklam/",
  instagramHandle: "@fyreklam",
  // One-line form used in prose and meta descriptions.
  address: "Göksu, 6857. Sk., 07260 Kepez/Antalya",
  // Address split into lines for the footer / contact card.
  addressLines: ["Göksu, 6857. Sk.", "07260 Kepez / Antalya", "Türkiye"] as const,
  // Precise enough for a Google Maps pin on the right corner.
  mapQuery: "Göksu, 6857. Sk, 07260 Kepez, Antalya, Turkey",
} as const;

export const nav = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/hizmetler", label: "Hizmetler" },
  { to: "/projeler", label: "Projeler" },
  { to: "/hakkimizda", label: "Hakkımızda" },
  { to: "/iletisim", label: "İletişim" },
] as const;

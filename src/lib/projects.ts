import { shot, type Shot } from "./media";

export type CategoryId = "isikli-harf" | "cephe" | "cam" | "baski" | "ic-mekan";

export const categories: { id: CategoryId; label: string }[] = [
  { id: "isikli-harf", label: "Işıklı Kutu Harf" },
  { id: "cephe", label: "Cephe Tabelası" },
  { id: "cam", label: "Cam Giydirme & Folyo" },
  { id: "baski", label: "Dijital Baskı & Pano" },
  { id: "ic-mekan", label: "İç Mekan Logo" },
];

export type Project = {
  slug: string;
  client: string;
  category: CategoryId;
  summary: string;
  shots: Shot[];
};

const P = 3 / 4; // portrait
const L = 4 / 3; // landscape

export const projects: Project[] = [
  {
    slug: "hadrian",
    client: "Hadrian Hukuk & Danışmanlık",
    category: "ic-mekan",
    summary: "Çıtalı duvar paneli üzerine altın tonlu kabartma harf ve amblem, arkadan dolaylı ışık.",
    shots: [
      shot("hadrian-hero", P, "Hadrian Hukuk ve Danışmanlık altın kabartma logo, çıtalı siyah duvar"),
      shot("hadrian-hukuk-ic-mekan", P, "Hadrian Hukuk iç mekan logo uygulaması"),
    ],
  },
  {
    slug: "royal",
    client: "Royal Luxury Car Service",
    category: "isikli-harf",
    summary: "Geniş cepheli servis binası için ışıklı kutu harf ve logo tabelası; üretimden montaja.",
    shots: [
      shot("royal-car-service-gece", L, "Royal Luxury Car Service ışıklı tabelası gece görünümü"),
      shot("royal-car-service-cephe", P, "Royal Luxury Car Service cephe tabelası ve giriş"),
      shot("royal-car-service-montaj", L, "Royal Luxury Car Service tabela montaj aşaması"),
    ],
  },
  {
    slug: "seda-isler",
    client: "Seda İşler Butik",
    category: "isikli-harf",
    summary: "Arkadan aydınlatmalı serif kutu harfler ve ışıklı butik etiketi.",
    shots: [shot("seda-isler-butik", P, "Seda İşler Butik arkadan aydınlatmalı kutu harf tabela")],
  },
  {
    slug: "colpez",
    client: "Çölpez Group",
    category: "isikli-harf",
    summary: "Cephe üzerinde kabartma harfli kurumsal tabela.",
    shots: [shot("colpez-group-tabela", P, "Çölpez Group kabartma harfli cephe tabelası")],
  },
  {
    slug: "mevlana-market",
    client: "Mevlana Market",
    category: "cephe",
    summary: "Işıklı cephe tabelası ve vitrin baskıları ile bütünlüklü mağaza görünümü.",
    shots: [
      shot("mevlana-market-cephe", P, "Mevlana Market ışıklı cephe tabelası"),
      shot("mevlana-market-gece", P, "Mevlana Market tabelası gece görünümü"),
    ],
  },
  {
    slug: "mr-pala",
    client: "Mr. Pala Tost Evi",
    category: "cephe",
    summary: "Kabartma harfli cephe tabelası, logo ve vitrin folyo uygulaması.",
    shots: [shot("mr-pala-tost-evi", P, "Mr. Pala Tost Evi cephe tabelası ve cam folyo")],
  },
  {
    slug: "sariyer",
    client: "Sarıyer Börekçisi",
    category: "cephe",
    summary: "Köşe cephe boyunca devam eden tabela uygulaması.",
    shots: [
      shot("sariyer-borekcisi-tabela", P, "Sarıyer Börekçisi cephe tabelası montajı"),
      shot("sariyer-borekcisi-cephe", P, "Sarıyer Börekçisi köşe cephe tabelası"),
    ],
  },
  {
    slug: "kepez-optik",
    client: "Kepez Optik",
    category: "cephe",
    summary: "Köşe bina cephesinde çok katlı tabela düzeni.",
    shots: [
      shot("kepez-optik-cephe", 9 / 16, "Kepez Optik köşe bina cephe tabelaları"),
      shot("kepez-optik-bina", 9 / 16, "Kepez Optik bina cephe görünümü"),
    ],
  },
  {
    slug: "bastug",
    client: "Baştuğ Bilişim Otomotiv",
    category: "cephe",
    summary: "Marka logolarını bir araya getiren geniş cephe tabelası ve kampanya panoları.",
    shots: [shot("bastug-motosiklet-cephe", L, "Baştuğ Bilişim Otomotiv motosiklet cephe tabelası")],
  },
  {
    slug: "mescit",
    client: "Mescit",
    category: "cephe",
    summary: "Sade, okunaklı cephe tabelası.",
    shots: [shot("mescit-tabela", 16 / 9, "Mescit cephe tabelası")],
  },
  {
    slug: "oto-yikama",
    client: "Oto Yıkama",
    category: "cephe",
    summary: "Tente üstü tabela ve yönlendirme uygulamaları.",
    shots: [shot("oto-yikama-tabela", P, "Oto yıkama işletmesi tabelası")],
  },
  {
    slug: "baybars",
    client: "Baybars Adana Kebap",
    category: "cam",
    summary: "Vitrin camlarına tam kaplama baskı, logo ve iletişim bilgileri.",
    shots: [
      shot("baybars-kose-cephe", P, "Baybars Adana Kebapçısı köşe cephe ve cam giydirme"),
      shot("baybars-kb-vitrin", P, "Baybars KB logolu vitrin giydirme"),
      shot("baybars-cam-giydirme", P, "Baybars Adana Kebap cam giydirme baskı"),
      shot("baybars-pencere", P, "Baybars Adana Kebap pencere giydirme"),
    ],
  },
  {
    slug: "cd-hair",
    client: "CD Hair & Beauty",
    category: "cam",
    summary: "Buzlu cam folyo üzerine logo, iç mekanda duvar logosu ve yönlendirme etiketleri.",
    shots: [
      shot("cd-hair-cam-logo", P, "CD Hair & Beauty buzlu cam üzerine logo"),
      shot("cd-hair-buzlu-folyo", P, "CD Hair & Beauty buzlu cam folyo uygulaması"),
      shot("cd-hair-duvar-logo", P, "CD Hair & Beauty iç mekan duvar logosu"),
    ],
  },
  {
    slug: "fresh-fruit-juice",
    client: "Fresh Fruit Juice",
    category: "baski",
    summary: "Canlı renkli dijital baskı panolar.",
    shots: [
      shot("fresh-fruit-juice-pano", P, "Fresh Fruit Juice portakal ve nar dijital baskı pano"),
      shot("fresh-fruit-juice-portakal", P, "Fresh Fruit Juice portakal görselli pano"),
    ],
  },
];

export type GalleryItem = Shot & { client: string; category: CategoryId; slug: string };

export const gallery: GalleryItem[] = projects.flatMap((p) =>
  p.shots.map((s) => ({ ...s, client: p.client, category: p.category, slug: p.slug })),
);

export const categoryLabel = (id: CategoryId) => categories.find((c) => c.id === id)?.label ?? id;

export const clientNames = projects.map((p) => p.client);

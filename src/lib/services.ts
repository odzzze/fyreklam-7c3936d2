import { shot, type Shot } from "./media";

export type Service = {
  id: string;
  title: string;
  short: string;
  body: string;
  points: string[];
  image: Shot;
};

export const services: Service[] = [
  {
    id: "isikli-kutu-harf",
    title: "Işıklı Kutu Harf",
    short: "Gece de okunan, gündüz de duran harfler.",
    body: "Önden ya da arkadan aydınlatmalı kutu harfler, logonuzun karakterini koruyarak üretilir. Harf yüksekliği, ışık rengi ve montaj mesafesi cepheye göre birlikte belirlenir.",
    points: ["Önden ve arkadan aydınlatma", "Kabartma ve kutu harf", "LED ışık uygulamaları"],
    image: shot("seda-isler-butik", 3 / 4, "Seda İşler Butik arkadan aydınlatmalı kutu harf"),
  },
  {
    id: "cephe-tabelasi",
    title: "Cephe Tabelası",
    short: "Sokaktan ilk bakışta tanınan mağaza yüzü.",
    body: "Dükkan, mağaza ve iş yerleri için cepheye özel ölçülendirilen tabela sistemleri. Bina dokusuyla uyumlu, uzaktan okunur ve dayanıklı çözümler.",
    points: ["Işıklı ve ışıksız cephe tabelası", "Köşe ve çok cepheli uygulamalar", "Tente üstü tabela"],
    image: shot("mevlana-market-gece", 3 / 4, "Mevlana Market ışıklı cephe tabelası gece"),
  },
  {
    id: "cam-giydirme",
    title: "Cam Giydirme & Folyo",
    short: "Vitrini bir vitrin olmaktan çıkarıp markaya dönüştürür.",
    body: "Buzlu cam folyo, kesim folyo ve tam kaplama vitrin baskıları ile camlarınız hem mahremiyet sağlar hem de markanızı anlatır.",
    points: ["Buzlu (kumlama efekt) folyo", "Kesim folyo logo ve yazı", "Tam kaplama vitrin baskısı"],
    image: shot("cd-hair-cam-logo", 3 / 4, "CD Hair & Beauty buzlu cam folyo logo"),
  },
  {
    id: "dijital-baski",
    title: "Dijital Baskı & Pano",
    short: "Renkleri canlı, mesajı net baskılar.",
    body: "Pano, afiş ve dış mekan baskıları için yüksek çözünürlüklü dijital baskı. Tasarımdan uygulamaya kadar tek elden.",
    points: ["Dış mekan pano baskı", "Afiş ve kampanya görselleri", "Tasarım desteği"],
    image: shot("fresh-fruit-juice-pano", 3 / 4, "Fresh Fruit Juice dijital baskı pano"),
  },
  {
    id: "ic-mekan-logo",
    title: "İç Mekan Logo & Yönlendirme",
    short: "Ofisinize adım atan herkesin gördüğü ilk detay.",
    body: "Resepsiyon duvarı, bekleme alanı ve koridorlar için kabartma logo, duvar yazısı ve yönlendirme etiketleri.",
    points: ["Kabartma duvar logosu", "Altın, gümüş ve mat yüzeyler", "Kapı ve yön etiketleri"],
    image: shot("hadrian-hero", 3 / 4, "Hadrian Hukuk altın tonlu iç mekan logosu"),
  },
  {
    id: "tasarim-montaj",
    title: "Keşif, Tasarım & Montaj",
    short: "Ölçüden montaja kadar tek muhatap.",
    body: "Yerinde keşif ile başlar, tasarım ve üretimle devam eder, montajla tamamlanır. Süreç boyunca karşınızda tek bir ekip olur.",
    points: ["Yerinde keşif ve ölçü", "Tasarım ve görselleştirme", "Profesyonel montaj"],
    image: shot("royal-car-service-montaj", 4 / 3, "Royal Luxury Car Service tabela montajı"),
  },
];

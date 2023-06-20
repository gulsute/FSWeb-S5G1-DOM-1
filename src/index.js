const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

const nav = document.querySelector(".container nav");
const navitems = document.querySelectorAll(".container nav a");

navitems.forEach((item, index) => {
  item.textContent = siteContent.nav[`nav-item-${index + 1}`];
  item.classList.add("italic");
});

const logo = document.querySelector(".container header img");
logo.src = siteContent.images["logo-img"];

const ctaImg = document.querySelector("section img");
ctaImg.src = siteContent.images["cta-img"];

const mainImage = document.querySelector(".main-content img");
mainImage.src = siteContent.images["accent-img"];
document.querySelector("section h1").textContent = siteContent.cta["h1"];
document.querySelector("section button").textContent =
  siteContent.cta["button"];

const topContent = document.querySelector(
  ".container .main-content .top-content"
);
const topContentH4 = topContent.querySelectorAll("h4");
topContentH4[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
topContentH4[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];

const topContentP = topContent.querySelectorAll("p");
topContentP[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
topContentP[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];

const bottomCont = document.querySelector(
  ".container .main-content .bottom-content"
);
const bottomConth4 = bottomCont.querySelectorAll("h4");

bottomConth4[0].textContent = siteContent["ana-içerik"]["servisler-h4"];
bottomConth4[1].textContent = siteContent["ana-içerik"]["ürünler-h4"];
bottomConth4[2].textContent = siteContent["ana-içerik"]["vizyon-h4"];

const bottomContP = bottomCont.querySelectorAll("p");
bottomContP[0].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
bottomContP[1].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
bottomContP[2].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

document.querySelector("footer a").textContent = siteContent.footer.copyright;
document.querySelector("footer a").classList = "bold";

const iletisim = document.querySelector(".container .contact");

iletisim.querySelector("h4").textContent =
  siteContent["iletisim"]["iletişim-h4"];

const iletisimP = iletisim.querySelectorAll("p");
iletisimP[0].textContent = siteContent["iletisim"]["adres"];
iletisimP[1].textContent = siteContent["iletisim"]["telefon"];
iletisimP[2].textContent = siteContent["iletisim"]["email"];

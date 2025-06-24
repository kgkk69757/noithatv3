import { c as createComponent, m as maybeRenderHead, a as addAttribute, r as renderTemplate, e as createAstro, f as renderSlot, g as renderComponent, h as renderHead } from '../chunks/astro/server_4UF2hbPg.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

async function fetchActivePhones() {
  const apiUrl = `${"https://tshy.io.vn/admin/api"}/phones`;
  const res = await fetch(apiUrl);
  const json = await res.json();
  if (json.success && Array.isArray(json.data)) {
    return json.data.filter((phone) => phone.is_active);
  } else {
    throw new Error("Invalid API response");
  }
}
async function fetchSiteSettings() {
  const apiUrl = `${"https://tshy.io.vn/admin/api"}/site-settings`;
  const res = await fetch(apiUrl);
  const json = await res.json();
  if (json.success && json.data) {
    return json.data;
  } else {
    throw new Error("Invalid Site Settings API response");
  }
}
async function fetchCompanyInfo() {
  const apiUrl = `${"https://tshy.io.vn/admin/api"}/company-info`;
  const res = await fetch(apiUrl);
  const json = await res.json();
  if (json.success && json.data) {
    return json.data;
  } else {
    throw new Error("Invalid Company Info API response");
  }
}

const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  let phoneNumber = "";
  let logoUrl = "";
  let logoAlt = "";
  try {
    const activePhones = await fetchActivePhones();
    const activePhone = activePhones.length > 0 ? activePhones[0] : null;
    phoneNumber = activePhone ? activePhone.number : "1234567890";
  } catch (e) {
    phoneNumber = "";
  }
  try {
    const siteSettings = await fetchSiteSettings();
    logoUrl = siteSettings.logo.file_url;
    logoAlt = siteSettings.logo.alt_text || "Logo";
  } catch (e) {
    logoUrl = "";
    logoAlt = "Logo";
  }
  return renderTemplate`${maybeRenderHead()}<header> <!-- Thanh top --> <div class="header-top"> <p class="header-contact"> <span><i class="fa-solid fa-phone"></i> ${phoneNumber}</span> <span><i class="fa-solid fa-location-dot"></i> 104 Ngô Quyền, P. Tân Lợi, TP.
        BMT</span> </p> <div class="header-social"> <i class="fa-brands fa-square-facebook"></i> <i class="fa-brands fa-youtube"></i> <i class="fa-brands fa-tiktok"></i> </div> </div> <!-- Hero and Navigation Container --> <div class="hero-nav-container"> <!-- Hero Section --> <div class="hero-section"> <!-- Logo --> <div class="logo"> <img${addAttribute(logoUrl, "src")}${addAttribute(logoAlt, "alt")}> </div> <!-- Tìm kiếm --> <div class="search-container"> <input type="search" placeholder="Tìm kiếm..." class="search-input"> <i class="fa-solid fa-magnifying-glass search-icon"></i> </div> <!-- Hotline --> <div class="hotline"> <div class="hotline-icon"> <i class="fa-solid fa-magnifying-glass"></i> </div> <span class="hotline-text">${phoneNumber}</span> </div> </div> <nav class="navigation"> <button class="mobile-menu-button" onclick="toggleMobileMenu()"> <i class="fa-solid fa-bars"></i> </button> <ul class="nav-list" id="navList"> <li class="nav-item"> <a href="#"> <i class="fa-solid fa-house"></i>
Trang chủ
</a> </li> <li class="nav-item"> <a href="#"> <i class="fa-solid fa-circle-info"></i>
Giới thiệu
</a> </li> <li class="nav-item"> <a href="#"> <i class="fa-solid fa-screwdriver-wrench"></i>
Dịch vụ
</a> </li> <li class="nav-item"> <a href="#"> <i class="fa-solid fa-building"></i>
Dự án đã hoàn thiện
</a> </li> <li class="nav-item"> <a href="#"> <i class="fa-solid fa-book"></i>
Cẩm nang
</a> </li> <li class="nav-item"> <a href="#"> <i class="fa-solid fa-comments"></i>
Chia sẻ kinh nghiệm
</a> </li> <li class="nav-item"> <a href="#"> <i class="fa-solid fa-video"></i>
Video công trình hoàn thiện
</a> </li> <li class="nav-item"> <a href="#"> <i class="fa-solid fa-paper-plane"></i>
Gửi yêu cầu
</a> </li> </ul> </nav> </div> <div class="divider"> <div class="divider-line"></div> </div> </header>`;
}, "C:/woa/fe/testasstro/src/components/Header.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a$2 || (_a$2 = __template$2([`<html lang="vi" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- <meta name="generator" content={Astro.generator} /> --><title>Astro Basics</title><!-- Non-critical CSS - Load asynchronously --><link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">`, `<noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"></noscript><!-- Fonts - Load asynchronously --><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" media="print" onload="this.media='all'"><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&display=swap" rel="stylesheet" media="print" onload="this.media='all'"><link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;600&display=swap" rel="stylesheet" media="print" onload="this.media='all'"><!-- Swiper CSS - Load asynchronously --><link rel="preload" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"></noscript><!-- JavaScript - Load with defer --><script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" defer><\/script><script src="/js/header.js" defer><\/script>`, "</head> <body data-astro-cid-sckkx6r4> ", " ", " </body></html>"])), maybeRenderHead(), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true }), renderSlot($$result, $$slots["default"]));
}, "C:/woa/fe/testasstro/src/layouts/Layout.astro", void 0);

async function fetchBanners() {
  try {
    const res = await fetch(`${"https://tshy.io.vn/admin/api"}/banners`);
    if (!res.ok) {
      throw new Error("Lỗi khi fetch dữ liệu banner");
    }
    const json = await res.json();
    return json.data.filter((banner) => banner.is_active);
  } catch (error) {
    console.error("Error fetching banners:", error);
    return [];
  }
}

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Banner = createComponent(async ($$result, $$props, $$slots) => {
  const banners = await fetchBanners();
  function getSubtitle(banner) {
    return banner.description || "";
  }
  function getButtonText(banner) {
    return banner.link_name || "Xem th\xEAm";
  }
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<section class="hero-banner"> <div class="swiper hero-swiper"> <div class="swiper-wrapper"> ', ' </div> <!-- Navigation buttons --> <div class="swiper-button-next" aria-label="Slide ti\u1EBFp theo"></div> <div class="swiper-button-prev" aria-label="Slide tr\u01B0\u1EDBc \u0111\xF3"></div> <!-- Pagination --> <div class="swiper-pagination" aria-label="\u0110i\u1EC1u h\u01B0\u1EDBng slide"></div> <!-- Progress bar --> <div class="hero-progress" aria-hidden="true"> <div class="hero-progress-bar"></div> </div> <!-- Autoplay progress --> <div class="autoplay-progress" aria-hidden="true"> <svg viewBox="0 0 48 48" aria-hidden="true"> <circle cx="24" cy="24" r="20"></circle> </svg> <span>5s</span> </div> </div> </section> <!-- Preload critical resources --> <script src="/js/Banner.js" defer><\/script>'])), maybeRenderHead(), banners.map((banner, index) => renderTemplate`<div class="swiper-slide hero-slide"> <div class="hero-bg"${addAttribute(`background-image: url('${banner.image_url}')`, "style")}${addAttribute(banner.image_url, "data-bg")}></div> <div class="hero-overlay"> <div class="hero-content"> <h1 class="hero-title">${banner.title || ""}</h1> ${getSubtitle(banner) && renderTemplate`<h2 class="hero-subtitle">${getSubtitle(banner)}</h2>`} <div class="hero-cta"> <a${addAttribute(banner.link || "#", "href")} class="hero-btn"${addAttribute(index.toString(), "data-slide")}${addAttribute(`${getButtonText(banner)} - ${banner.title}`, "aria-label")}> ${getButtonText(banner)} </a> </div> </div> </div> </div>`));
}, "C:/woa/fe/testasstro/src/components/Banner.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Gioithieu = createComponent(async ($$result, $$props, $$slots) => {
  const companyInfo = await fetchCompanyInfo();
  return renderTemplate(_a || (_a = __template(["", '<section class="intro-section"> <div class="intro-title"> <h1>', '</h1> </div> <div class="intro-bg"> <div class="intro-bg-video"> <iframe', ' title="Video gi\u1EDBi thi\u1EC7u c\xF4ng ty" frameborder="0" allow="autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe> </div> <div class="intro-content"> <!-- Ph\u1EA7n b\xEAn tr\xE1i --> <div class="intro-left"> <!-- Ti\xEAu \u0111\u1EC1 --> <div class="intro-subtitle"> <h1>', '</h1> </div> <!-- Accordion n\u1ED9i dung --> <div class="accordion-container"> <!-- N\u1ED9i dung gi\u1EDBi thi\u1EC7u ban \u0111\u1EA7u --> <p class="noidunggioithieu accordion-text"> ', ' </p> <!-- N\u1ED9i dung th\xEAm --> <div class="accordion-extra" id="extraContent"> <p class="noidunggioithieu accordion-text"> ', ` </p> </div> <!-- N\xFAt toggle n\u1ED9i dung --> <button class="accordion-button" onclick="toggleAccordion()"> <span id="toggleText">Xem th\xEAm</span> </button> </div> </div> <!-- Ph\u1EA7n b\xEAn ph\u1EA3i --> <div class="intro-right"> <div class="map-container"> <div class="map-img-wrapper"> <img src="/images/bandohoanchinh.png" alt="B\u1EA3n \u0111\u1ED3 chi nh\xE1nh" class="map-img" loading="lazy"> <div class="location-dropdown"> <i class="fa-solid fa-location-dot location-icon"></i> <button class="location-button" onclick="toggleDropdown()"> <span id="selectedLocation">TP H\u1ED3 Ch\xED Minh</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <!-- Danh s\xE1ch t\u1EC9nh --> <div class="dropdown-menu" id="dropdownMenu"> <div class="dropdown-item" onclick="selectLocation('H\xE0 N\u1ED9i')">
H\xE0 N\u1ED9i
</div> <div class="dropdown-item" onclick="selectLocation('Bu\xF4n Ma Thu\u1ED9t')">
Bu\xF4n Ma Thu\u1ED9t
</div> <div class="dropdown-item" onclick="selectLocation('H\u1ED3 Ch\xED Minh')">
H\u1ED3 Ch\xED Minh
</div> </div> </div> </div> </div> </div> </div> </div> </section> <script src="/js/Gioithieu.js" defer><\/script>`])), maybeRenderHead(), companyInfo?.title, addAttribute(`https://www.youtube.com/embed/${companyInfo?.video_id}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&playlist=${companyInfo?.video_id}&iv_load_policy=3&disablekb=1&fs=0&cc_load_policy=0&start=0&end=0&origin=https://your-domain.com`, "src"), companyInfo?.subtitle, companyInfo?.description, companyInfo?.extended_description);
}, "C:/woa/fe/testasstro/src/components/Gioithieu.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Banner", $$Banner, {})} ${renderComponent($$result2, "Gioithieu", $$Gioithieu, {})} ` })}`;
}, "C:/woa/fe/testasstro/src/pages/index.astro", void 0);

const $$file = "C:/woa/fe/testasstro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

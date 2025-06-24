import { c as createComponent, m as maybeRenderHead, a as addAttribute, r as renderTemplate } from '../chunks/astro/server_4UF2hbPg.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch("https://tshy.io.vn/admin/api/baiviets");
  const json = await response.json();
  const baiviets = json.data;
  return renderTemplate`${maybeRenderHead()}<ul> ${baiviets.map((bv) => renderTemplate`<li> <h2>${bv.tieudebaiviet}</h2> <img${addAttribute(bv.img_url, "src")}${addAttribute(bv.img_alt, "alt")}> </li>`)} </ul>`;
}, "C:/woa/fe/testasstro/src/pages/baiviet/index.astro", void 0);

const $$file = "C:/woa/fe/testasstro/src/pages/baiviet/index.astro";
const $$url = "/baiviet";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

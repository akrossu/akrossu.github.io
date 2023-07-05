import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const app = "";
const hoverColor = "hover:text-sky-300";
const transition = "transition transition-duration-1000 ease-in-out";
const _pages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" }
  ];
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  return `<li><a class="${escape(hoverColor, true) + " " + escape(transition, true)}"${add_attribute("href", links[0].href, 0)}>${escape(links[0].name)}</a></li> <li><a class="${escape(hoverColor, true) + " " + escape(transition, true)}"${add_attribute("href", links[1].href, 0)}>${escape(links[1].name)}</a></li> <li><a class="${escape(hoverColor, true) + " " + escape(transition, true)}"${add_attribute("href", links[2].href, 0)}>${escape(links[2].name)}</a></li> <li><a class="${escape(hoverColor, true) + " " + escape(transition, true)}"${add_attribute("href", links[3].href, 0)}>${escape(links[3].name)}</a></li> <li><a class="${escape(hoverColor, true) + " " + escape(transition, true)}"${add_attribute("href", links[4].href, 0)}>${escape(links[4].name)}</a></li>`;
});
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="flex justify-center"><nav class="relative top-6"><ul class="flex space-x-7 rounded-full py-[.55rem] px-7 bg-zinc-800 border-zinc-700 border">${validate_component(_pages, "Links").$$render($$result, {}, {}, {})}</ul></nav> <div style="height: 8rem"></div></header> `;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="mt-32"><div class="flex w-full max-w-screen-xl mx-auto pb-16 pt-10 px-16 border-t border-neutral-800 justify-between"><ul class="flex flex-wrap items-center space-x-7">${validate_component(_pages, "Links").$$render($$result, {}, {}, {})}</ul> <span class="text-neutral-400" data-svelte-h="svelte-1x6sj16">© 2023 Akross. All Rights Reserved.</span></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Nav, "Navbar").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};

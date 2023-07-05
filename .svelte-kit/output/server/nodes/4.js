

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.343247c0.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.67206439.js"];
export const stylesheets = [];
export const fonts = [];



export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.343247c0.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.67206439.js"];
export const stylesheets = [];
export const fonts = [];

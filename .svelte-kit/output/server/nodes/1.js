

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a8f3d24e.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.67206439.js","_app/immutable/chunks/singletons.4e935b75.js"];
export const stylesheets = [];
export const fonts = [];

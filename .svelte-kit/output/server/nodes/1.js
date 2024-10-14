

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DXcLtbIv.js","_app/immutable/chunks/scheduler.BaBfSrOV.js","_app/immutable/chunks/index.CcuidEqz.js","_app/immutable/chunks/entry.Bsa2vs20.js"];
export const stylesheets = [];
export const fonts = [];

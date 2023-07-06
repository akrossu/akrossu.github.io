export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","fonts/GeneralSans-Regular.woff","fonts/GeneralSans-Regular.woff2","fonts/GeneralSans-Semibold.woff","fonts/GeneralSans-Semibold.woff2","fonts/JetBrainsMono-Bold.woff2","fonts/JetBrainsMono-Regular.woff2","img/About.png","img/Kumiko.png","img/Taki.png","img/Website.png"]),
	mimeTypes: {".png":"image/png",".woff":"font/woff",".woff2":"font/woff2"},
	_: {
		client: {"start":"_app/immutable/entry/start.9b71e578.js","app":"_app/immutable/entry/app.6d5c0cbe.js","imports":["_app/immutable/entry/start.9b71e578.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.8d711d2d.js","_app/immutable/entry/app.6d5c0cbe.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.67206439.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

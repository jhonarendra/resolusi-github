const staticDev = "resolusi-github"
const assets = [
	"/",
	"/index.html",
	"/apple-touch-icon.png",
	"/apple-touch-icon-57x57.png",
	"/apple-touch-icon-72x72.png",
	"/apple-touch-icon-76x76.png",
	"/apple-touch-icon-114x114.png",
	"/apple-touch-icon-120x120.png",
	"/apple-touch-icon-144x144.png",
	"/apple-touch-icon-152x152.png",
	"/apple-touch-icon-180x180.png",
	"/favicon.ico",
	"/favicon.png",
	"/css/app.7ac1b19e.css",
	"/css/chunk-vendors.367538c2.css",
	"/fonts/fa-brands-400.cbd387d9.eot",
	"/fonts/fa-brands-400.d30c44aa.woff",
	"/fonts/fa-brands-400.d6ac6c96.ttf",
	"/fonts/fa-brands-400.eac60e8a.woff2",
	"/fonts/fa-regular-400.4b218302.woff2",
	"/fonts/fa-regular-400.8c1f0780.eot",
	"/fonts/fa-regular-400.e32cb360.woff",
	"/fonts/fa-regular-400.f1994ecd.ttf",
	"/fonts/fa-solid-900.2e302fa4.eot",
	"/fonts/fa-solid-900.5dc01cfc.woff2",
	"/fonts/fa-solid-900.80c404ff.ttf",
	"/fonts/fa-solid-900.a8eedaad.woff",
	"/fonts/QdVUSTchPBm7nuUeVf70viFl.0ae6341d.woff2",
	"/img/1.d32108b0.svg",
	"/img/10.60fac2e3.svg",
	"/img/11.c5563f41.svg",
	"/img/12.b816b5f7.svg",
	"/img/13.09bcc523.svg",
	"/img/14.02cc09af.svg",
	"/img/15.e4d7ad24.svg",
	"/img/16.57baaf94.svg",
	"/img/17.9a85e44f.svg",
	"/img/18.86ceb7d2.svg",
	"/img/19.2151da02.svg",
	"/img/2.9bb92d48.svg",
	"/img/20.d3e4d33e.svg",
	"/img/21.a5576f66.svg",
	"/img/22.001934c5.svg",
	"/img/3.27dfb703.svg",
	"/img/4.0d94cc64.svg",
	"/img/5.91ac6eed.svg",
	"/img/6.b5c302f9.svg",
	"/img/7.f9c67d91.svg",
	"/img/8.c337c040.svg",
	"/img/9.12150cb5.svg",
	"/img/avatar-1.e3973b64.png",
	"/img/fa-brands-400.4568b5b5.svg",
	"/img/fa-regular-400.26d8edc8.svg",
	"/img/fa-solid-900.b7c60297.svg",
	"/js/app.8544e1a2.js"
	"/js/app.8544e1a2.js.map"
	"/js/chunk-vendors.8ca1ebd2.js"
	"/js/chunk-vendors.8ca1ebd2.js.map"
]
self.addEventListener("install", installEvent => {
	installEvent.waitUntil(
		caches.open(staticDev).then(cache => {
			cache.addAll(assets)
		})
	)
})
self.addEventListener("fetch", fetchEvent => {
	fetchEvent.respondWith(
		caches.match(fetchEvent.request).then(res => {
			return res || fetch(fetchEvent.request)
		})
	)
})
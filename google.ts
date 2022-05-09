/// <reference path="./deployctl.d.ts" />

addEventListener(
	"fetch",event => {
		let url=new URL(event.request.url);
		url.hostname="www.google.com";
		let request=new Request(url,event.request);
		event. respondWith(
			fetch(request)
		)
	}
)

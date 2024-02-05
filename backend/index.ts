Bun.serve({
	port: 3000,
	async fetch(req) {
		return new Response("ok");
	},
});
console.log("App started on port 3000");

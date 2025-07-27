export default {
  async fetch(request, env, ctx) {
    return new Response("✅ Hello from your Cloudflare Worker!", {
      headers: { "content-type": "text/plain" },
    });
  }
};

import app from "./app.js";

Deno.serve(
  {
    port: Number(Deno.env.get("PORT") || 8000),
    hostname: "0.0.0.0",
    onListen: ({ hostname, port }) => {
      console.log(`[none]: ${hostname}:${port}`);
    },
  },
  app.fetch
);

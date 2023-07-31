import { cors } from "hono/cors";
import { compress } from "hono/compress";
import { logger } from "hono/logger";

import { z } from "zod";

import { hono } from "~/utils";
import { bundlejs, npm, ui } from "~/routes";

const app = hono();

app
  .use("*", cors({ origin: "*" }))
  .use("*", compress());

if (process.env.NODE_ENV === "development") {
  app.use("*", logger());
}

app
  .route("/npm", npm)
  .route("/bundlejs", bundlejs)
  .route("/ui", ui);

app
  .get("/", (ctx) => ctx.json({ name: "none" }))
  .notFound((ctx) => ctx.json({ message: "Not found" }, 404))
  .onError((error, ctx) => {
    let status: number = 500;
    let message: string = "Internal server error";

    if (error instanceof z.ZodError) {
      status = 400;
      message = error.issues.at(0)?.message ?? "Validation Error";
    } else if (error instanceof Error) {
      message = error.message;
    }

    return ctx.json({ message }, status);
  });

export default app;

import { cors } from "hono/cors";
import { compress } from "hono/compress";
import { logger } from "hono/logger";

import dayjs from "dayjs";
import dayjs_relativeTime from "dayjs/plugin/relativeTime";
import { z } from "zod";

import { hono } from "~/utils";
import { bundlejs, npm, tilde, ui } from "~/routes";

dayjs.extend(dayjs_relativeTime);

const app = hono();

const build = dayjs().format("DD-MM-YYYY");

app.use("*", cors({ origin: "*" })).use("*", compress());

if (process.env.NODE_ENV === "development") {
  app.use("*", logger());
}

app.route("/~", tilde).route("/npm", npm).route("/bundlejs", bundlejs).route("/ui", ui);

app
  .get("/", (ctx) => ctx.json({ name: "none", build }))
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

import { Hono } from "hono";
import { cors } from "hono/cors";
import { compress } from "hono/compress";
import { logger } from "hono/logger";

import { z } from "zod";

import svg, { tag } from "~/svg";
import { ColorSchema, ThemeSchema, LucideIconSchema, SimpleIconSchema, Badge, Button, Icon, LucideIcons, SimpleIcons } from "~/ui";

const hono = (fn: (hono: Hono) => Hono = (x) => x) => fn(new Hono());

const app = hono();

app.use("*", cors({ origin: "*" }));
app.use("*", compress());

if (process.env.NODE_ENV === "development") {
  app.use("*", logger());
}

app.route(
  "/ui",
  hono((x) => {
    x.route(
      "/badge",
      hono((x) => {
        const BadgeQuerySchema = z.object({
          c: ColorSchema,
          t: ThemeSchema,
          e: z.string().min(2).max(48).default("badge"),
        });

        x.get("/", async (ctx) => {
          const { c, t, e } = await BadgeQuerySchema.parseAsync(ctx.req.query());

          return await svg(
            ctx,
            {
              _: "ui/badge",
              c,
              t,
              e,
            },
            () => Badge({ c, t, w: e.length * 9.5 + 18, children: e })
          );
        });

        return x;
      })
    );

    x.route(
      "/button",
      hono((x) => {
        const ButtonQuerySchema = z.object({
          c: ColorSchema,
          t: ThemeSchema,
          e: z.string().min(2).max(48).default("button"),
        });

        x.get("/", async (ctx) => {
          const { c, t, e } = await ButtonQuerySchema.parseAsync(ctx.req.query());

          return await svg(
            ctx,
            {
              _: "ui/button",
              c,
              t,
              e,
            },
            () => Button({ c, t, w: e.length * 10 + 38, children: e })
          );
        });

        const ButtonLucideQuerySchema = z.object({
          c: ColorSchema,
          t: ThemeSchema,
          i: LucideIconSchema,
          e: z.string().min(2).max(48).default("github"),
        });

        x.get("/lucide", async (ctx) => {
          const { c, t, i, e } = await ButtonLucideQuerySchema.parseAsync(ctx.req.query());

          return await svg(
            ctx,
            {
              _: "ui/button/lucide",
              c,
              t,
              i,
              e,
            },
            () =>
              Button({
                c,
                t,
                w: e.length * 10 + 58,
                children: tag("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    paddingRight: 2,
                  },
                  children: [
                    tag("div", {
                      style: {
                        display: "flex",
                      },
                      children: LucideIcons[i]({}),
                    }),
                    tag("div", {
                      style: {
                        display: "flex",
                      },
                      children: e,
                    }),
                  ],
                }),
              })
          );
        });

        const ButtonSimpleQuerySchema = z.object({
          c: ColorSchema,
          t: ThemeSchema,
          i: SimpleIconSchema,
          e: z.string().min(2).max(48).default("github"),
        });

        x.get("/simple", async (ctx) => {
          const { c, t, i, e } = await ButtonSimpleQuerySchema.parseAsync(ctx.req.query());

          return await svg(
            ctx,
            {
              _: "ui/button/simple",
              c,
              t,
              i,
              e,
            },
            () =>
              Button({
                c,
                t,
                w: e.length * 10 + 58,
                children: tag("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    paddingRight: 2,
                  },
                  children: [
                    tag("div", {
                      style: {
                        display: "flex",
                      },
                      children: SimpleIcons[i]({}),
                    }),
                    tag("div", {
                      style: {
                        display: "flex",
                      },
                      children: e,
                    }),
                  ],
                }),
              })
          );
        });

        return x;
      })
    );

    x.route(
      "/icon",
      hono((x) => {
        const IconLucideQuerySchema = z.object({
          c: ColorSchema,
          t: ThemeSchema,
          i: LucideIconSchema,
        });

        x.get("/lucide", async (ctx) => {
          const { c, t, i } = await IconLucideQuerySchema.parseAsync(ctx.req.query());

          return await svg(
            ctx,
            {
              _: "ui/icon/lucide",
              c,
              t,
              i,
            },
            () => Icon({ c, t, children: LucideIcons[i]({}) })
          );
        });

        const IconSimpleQuerySchema = z.object({
          c: ColorSchema,
          t: ThemeSchema,
          i: SimpleIconSchema,
        });

        x.get("/simple", async (ctx) => {
          const { c, t, i } = await IconSimpleQuerySchema.parseAsync(ctx.req.query());

          return await svg(
            ctx,
            {
              _: "ui/icon/simple",
              c,
              t,
              i,
            },
            () => Icon({ c, t, children: SimpleIcons[i]({}) })
          );
        });

        return x;
      })
    );

    x.route(
      "/icon-button",
      hono((x) => {
        const IconButtonQuerySchema = z.object({
          c: ColorSchema,
          t: ThemeSchema,
          e: z.string().length(1).default("x"),
        });

        x.get("/", async (ctx) => {
          const { c, t, e } = await IconButtonQuerySchema.parseAsync(ctx.req.query());

          return await svg(
            ctx,
            {
              _: "ui/icon-button",
              c,
              t,
              e,
            },
            () => Button({ c, t, children: e })
          );
        });

        const IconButtonLucideQuerySchema = z.object({
          c: ColorSchema,
          t: ThemeSchema,
          i: LucideIconSchema,
        });

        x.get("/lucide", async (ctx) => {
          const { c, t, i } = await IconButtonLucideQuerySchema.parseAsync(ctx.req.query());

          return await svg(
            ctx,
            {
              _: "ui/icon-button/lucide",
              c,
              t,
              i,
            },
            () => Button({ c, t, children: LucideIcons[i]({}) })
          );
        });

        const IconButtonSimpleQuerySchema = z.object({
          c: ColorSchema,
          t: ThemeSchema,
          i: SimpleIconSchema,
        });

        x.get("/simple", async (ctx) => {
          const { c, t, i } = await IconButtonSimpleQuerySchema.parseAsync(ctx.req.query());

          return await svg(
            ctx,
            {
              _: "ui/icon-button/simple",
              c,
              t,
              i,
            },
            () => Button({ c, t, children: SimpleIcons[i]({}) })
          );
        });

        return x;
      })
    );

    return x;
  })
);

app.get("/", (ctx) => ctx.json({ name: "none" }));

app.notFound((ctx) => ctx.json({ message: "Not found" }, 404));

app.onError((error, ctx) => {
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

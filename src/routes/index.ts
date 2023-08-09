import { z } from "zod";

import dayjs from "dayjs";

import svg, { CACHE } from "~/libs/svg";
import { getPackageItem, PackageNameSchema } from "~/libs/npm";
import { getBundleItem } from "~/libs/bundlejs";
import {
  Badge,
  Button,
  ButtonChildIcon,
  calcBadgeWidth,
  calcButtonIconWidth,
  calcButtonWidth,
  Icon,
  LucideIcons,
  LucideIconSchema,
  SimpleIcons,
  SimpleIconSchema,
} from "~/ui/components";
import { ColorSchema, ThemeSchema } from "~/ui/utils";
import { formatSize, hono } from "~/utils";

export const tilde = hono((x) => {
  x.route(
    "/svg",
    hono((x) => {
      x.route(
        "/cache",
        hono((x) => {
          const getEntries = () => Object.entries(CACHE.value);

          x.get("/", (ctx) => {
            const now = Date.now();
            const entries = getEntries();
            let size = 0;
            let bytes: number;

            const object: Record<string, string> = {};

            entries.forEach(([key, { e, v }]) => {
              bytes = new Blob([v]).size;
              size += bytes;
              object[key] = `${formatSize(bytes)} | ${dayjs(now).to(e)}`;
            });

            return ctx.json({
              length: Object.keys(object).length,
              size: formatSize(size),
              value: object,
            });
          });

          x.get("/clean", (ctx) => {
            const now = Date.now();
            const entries = getEntries();
            let size = 0;
            let bytes: number;

            const object: Record<string, string> = {};

            entries
              .filter(([, { e }]) => e < now)
              .forEach(([key, { v }]) => {
                CACHE.del(key);

                bytes = new Blob([v]).size;
                size += bytes;
                object[key] = `${formatSize(bytes)}`;
              });

            return ctx.json({
              length: Object.keys(object).length,
              size: formatSize(size),
              value: object,
            });
          });

          return x;
        })
      );

      return x;
    })
  );

  return x;
});

export const npm = hono((x) => {
  const BasicNPMQuerySchema = z.object({
    c: ColorSchema,
    t: ThemeSchema,
    n: PackageNameSchema,
  });

  x.route(
    "/api",
    hono((x) => {
      const PackageItemQuerySchema = z.object({
        n: PackageNameSchema,
      });

      x.get("/item", async (ctx) => {
        const { n } = await PackageItemQuerySchema.parseAsync(ctx.req.query());
        return ctx.json(await getPackageItem(n));
      });
      return x;
    })
  );

  x.get("/v", async (ctx) => {
    const { c, t, n } = await BasicNPMQuerySchema.parseAsync(ctx.req.query());

    const v = (await getPackageItem(n)).version;

    return await svg(
      ctx,
      {
        _: "npm/v",
        c,
        t,
        n,
      },
      () => Badge({ c, t, w: calcBadgeWidth(v), children: v })
    );
  });

  x.get("/l", async (ctx) => {
    const { c, t, n } = await BasicNPMQuerySchema.parseAsync(ctx.req.query());

    const l = (await getPackageItem(n)).license ?? "UNLICENSED";

    return await svg(
      ctx,
      {
        _: "npm/l",
        c,
        t,
        n,
      },
      () => Badge({ c, t, w: calcBadgeWidth(l), children: l })
    );
  });

  return x;
});

export const bundlejs = hono((x) => {
  const BasicBundleJSQuerySchema = z.object({
    c: ColorSchema,
    t: ThemeSchema,
    n: PackageNameSchema,
  });

  x.route(
    "/api",
    hono((x) => {
      const BundleItemQuerySchema = z.object({
        n: PackageNameSchema,
      });

      x.get("/item", async (ctx) => {
        const { n } = await BundleItemQuerySchema.parseAsync(ctx.req.query());
        return ctx.json(await getBundleItem(n));
      });
      return x;
    })
  );

  x.get("/m", async (ctx) => {
    const { c, t, n } = await BasicBundleJSQuerySchema.parseAsync(ctx.req.query());

    const s = (await getBundleItem(n)).size.uncompressedSize;

    return await svg(
      ctx,
      {
        _: "bundlejs/m",
        c,
        t,
        n,
      },
      () => Badge({ c, t, w: calcBadgeWidth(s), children: s })
    );
  });

  x.get("/mz", async (ctx) => {
    const { c, t, n } = await BasicBundleJSQuerySchema.parseAsync(ctx.req.query());

    const s = (await getBundleItem(n)).size.compressedSize;

    return await svg(
      ctx,
      {
        _: "bundlejs/mz",
        c,
        t,
        n,
      },
      () => Badge({ c, t, w: calcBadgeWidth(s), children: s })
    );
  });

  return x;
});

export const ui = hono((x) => {
  const expires = 24 * 60 * 60 * 1000;

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
          () => Badge({ c, t, w: calcBadgeWidth(e), children: e }),
          { expires }
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
          () => Button({ c, t, w: calcButtonWidth(e), children: e }),
          { expires }
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
              w: calcButtonIconWidth(e),
              children: ButtonChildIcon({ c: LucideIcons[i]({}), e }),
            }),
          { expires }
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
              w: calcButtonIconWidth(e),
              children: ButtonChildIcon({ c: SimpleIcons[i]({}), e }),
            }),
          { expires }
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
          () => Icon({ c, t, children: LucideIcons[i]({}) }),
          { expires }
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
          () => Icon({ c, t, children: SimpleIcons[i]({}) }),
          { expires }
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
          () => Button({ c, t, children: e }),
          { expires }
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
          () => Button({ c, t, children: LucideIcons[i]({}) }),
          { expires }
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
          () => Button({ c, t, children: SimpleIcons[i]({}) }),
          { expires }
        );
      });

      return x;
    })
  );

  return x;
});

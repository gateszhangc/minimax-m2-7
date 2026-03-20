import { expect, test } from "@playwright/test";
import { faqItems } from "../lib/site-content";

const routes = [
  {
    path: "/",
    title: /MiniMax M2\.7 Guide: API, Benchmarks, Pricing & Features/,
    heading: /MiniMax M2\.7 guide for API access, benchmarks, pricing, and highspeed workflows/i,
    text: /API entry points, pricing routes, and feature positioning/i,
    description: /MiniMax M2\.7 benchmarks, API access, pricing, MiniMax-M2\.7-highspeed/i,
  },
  {
    path: "/features",
    title: /MiniMax M2\.7 Features & Use Cases/,
    heading: /MiniMax M2\.7 features and use cases for coding, agents, and document workflows/i,
    text: /software engineering, tool use, Office editing, and long-running execution/i,
    description: /MiniMax M2\.7 features.*agent workflows.*Office editing/i,
  },
  {
    path: "/pricing",
    title: /MiniMax M2\.7 Pricing & API Access/,
    heading: /MiniMax M2\.7 pricing, API access, and evaluation paths/i,
    text: /where to check official MiniMax M2\.7 pricing/i,
    description: /MiniMax M2\.7 pricing routes, API access, MiniMax-M2\.7-highspeed/i,
  },
  {
    path: "/faq",
    title: /MiniMax M2\.7 FAQ: Benchmarks, API, Pricing & Highspeed/,
    heading: /MiniMax M2\.7 FAQ for benchmarks, API access, pricing, and highspeed variants/i,
    text: /common MiniMax M2\.7 search intent/i,
    description: /MiniMax M2\.7 FAQ answers for benchmarks, API access, pricing/i,
  },
  {
    path: "/official-links",
    title: /MiniMax M2\.7 Official Links, Docs, API & Agent Paths/,
    heading: /Official MiniMax M2\.7 links for API access, docs, agent testing, and model research/i,
    text: /official MiniMax M2\.7 platform, developer docs, MiniMax Agent, or the public model overview/i,
    description: /official links hub.*API platform.*docs.*MiniMax Agent/i,
  },
];

function normalizeUrl(value: string | null) {
  return (value ?? "").replace(/\/$/, "");
}

function normalizePath(value: string | null) {
  if (!value) {
    return "";
  }

  const pathname = new URL(value).pathname.replace(/\/$/, "");
  return pathname || "/";
}

test("routes render with expected titles and primary content", async ({ page }) => {
  for (const route of routes) {
    await page.goto(route.path);
    await expect(page).toHaveTitle(route.title);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.getByRole("heading", { level: 1, name: route.heading })).toBeVisible();
    await expect(page.getByText(route.text)).toBeVisible();
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", route.description);

    const canonical = await page.locator('link[rel="canonical"]').first().getAttribute("href");
    const ogUrl = await page.locator('meta[property="og:url"]').getAttribute("content");

    expect(normalizeUrl(canonical)).toBe(normalizeUrl(ogUrl));
    expect(normalizePath(canonical)).toBe(route.path);
    expect(normalizePath(ogUrl)).toBe(route.path);
  }
});

test("home primary CTA points to the official platform and keeps readable contrast", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.getByAltText("MiniMax M2.7 logo").first()).toBeVisible();
  const heroCta = page.locator("main").getByRole("link", { name: /^Access API$/ }).first();
  await expect(heroCta).toBeVisible();
  await expect(heroCta).toHaveAttribute("href", "https://platform.minimax.io");

  const contrastRatio = await heroCta.evaluate((element) => {
    const parseRgb = (value: string) => {
      const match = value.match(/\d+(\.\d+)?/g);
      return (match ?? ["0", "0", "0"]).slice(0, 3).map(Number);
    };

    const luminance = ([red, green, blue]: number[]) => {
      const [r, g, b] = [red, green, blue].map((channel) => {
        const normalized = channel / 255;
        return normalized <= 0.03928
          ? normalized / 12.92
          : ((normalized + 0.055) / 1.055) ** 2.4;
      });

      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    const style = getComputedStyle(element);
    const foreground = parseRgb(style.color);
    const background = parseRgb(style.backgroundColor);
    const lighter = Math.max(luminance(foreground), luminance(background));
    const darker = Math.min(luminance(foreground), luminance(background));

    return Number(((lighter + 0.05) / (darker + 0.05)).toFixed(2));
  });

  expect(contrastRatio).toBeGreaterThan(4.5);
});

test("hero heading keeps safe line-height on desktop and mobile", async ({ page }) => {
  const viewports = [
    { width: 1440, height: 1200 },
    { width: 390, height: 844 },
  ];

  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    await page.goto("/");
    await page.waitForFunction(() => document.fonts.status === "loaded");

    const heroHeading = page.getByRole("heading", {
      level: 1,
      name: /MiniMax M2\.7 guide for API access, benchmarks, pricing, and highspeed workflows/i,
    });

    await expect(heroHeading).toBeVisible();

    const metrics = await heroHeading.evaluate((element) => {
      const style = getComputedStyle(element);
      const parsedLineHeight = Number.parseFloat(style.lineHeight);
      return {
        fontSize: Number.parseFloat(style.fontSize),
        lineHeight: Number.isFinite(parsedLineHeight)
          ? parsedLineHeight
          : Number.parseFloat(style.fontSize),
      };
    });

    expect(metrics.lineHeight).toBeGreaterThanOrEqual(metrics.fontSize);
  }
});

test("hero insights panel keeps content readable without horizontal clipping", async ({ page }) => {
  const viewports = [
    { width: 1440, height: 1200 },
    { width: 390, height: 844 },
  ];

  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    await page.goto("/");
    await page.waitForFunction(() => document.fonts.status === "loaded");

    const heroInsightsPanel = page.getByTestId("hero-insights-panel");
    const developerSurfaceCard = page.getByTestId("developer-surface-card");

    await expect(heroInsightsPanel).toBeVisible();
    await expect(developerSurfaceCard).toBeVisible();
    await expect(heroInsightsPanel.getByText("Benchmark snapshot")).toBeVisible();
    await expect(heroInsightsPanel.getByText("Developer surface", { exact: true })).toBeVisible();
    await expect(heroInsightsPanel.getByText("SWE-Pro")).toBeVisible();
    await expect(heroInsightsPanel.getByText("Terminal Bench 2")).toBeVisible();
    await expect(heroInsightsPanel.getByText("Skill adherence")).toBeVisible();
    await expect(heroInsightsPanel.getByText("Model variants")).toBeVisible();
    await expect(heroInsightsPanel.getByText("POST /v1/text/chatcompletion_v2")).toBeVisible();
    await expect(
      heroInsightsPanel.getByText("MiniMax-M2.7 / MiniMax-M2.7-highspeed"),
    ).toBeVisible();

    const heroPanelMetrics = await heroInsightsPanel.evaluate((element) => ({
      clientWidth: element.clientWidth,
      scrollWidth: element.scrollWidth,
    }));
    const developerSurfaceMetrics = await developerSurfaceCard.evaluate((element) => ({
      clientWidth: element.clientWidth,
      scrollWidth: element.scrollWidth,
    }));

    expect(heroPanelMetrics.scrollWidth).toBeLessThanOrEqual(heroPanelMetrics.clientWidth + 1);
    expect(developerSurfaceMetrics.scrollWidth).toBeLessThanOrEqual(
      developerSurfaceMetrics.clientWidth + 1,
    );
  }
});

test("home research map surfaces keyword-aligned internal paths", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      level: 2,
      name: /MiniMax M2\.7 research paths that keep the site aligned with real developer search intent/i,
    }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /Read benchmark claims with context/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /Match workflows to the strongest M2\.7 fits/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /Verify pricing and highspeed access paths/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /Jump to the right MiniMax surface/i })).toBeVisible();
  await expect(page.getByText("Music Library Website")).toHaveCount(0);
});

test("page exposes generated favicon and icon links", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator('link[rel="icon"]').first()).toHaveAttribute("href", /favicon\.ico|icon/);
  await expect(page.locator('link[rel="apple-touch-icon"]').first()).toHaveAttribute(
    "href",
    /apple-icon/,
  );
});

test("home exposes analytics, social metadata, and structured data", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.locator('link[rel="preload"][href*="googletagmanager.com/gtag/js?id=G-KSQ938VHFQ"]'),
  ).toHaveCount(1);
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    /\/opengraph-image/,
  );
  await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute(
    "content",
    /\/twitter-image/,
  );

  const structuredData = page.locator('script[type="application/ld+json"]').first();
  const structuredDataText = await structuredData.textContent();
  const websiteData = JSON.parse(structuredDataText ?? "{}");
  expect(websiteData["@type"]).toBe("WebSite");
  expect(websiteData.url).toMatch(/^https?:\/\//);

  const html = await page.content();
  expect(html).toContain("G-KSQ938VHFQ");
  expect(html).toContain("vy0jj0bjwf");
  expect(html).toMatch(/gtag\('config', 'G-KSQ938VHFQ'\)/);
});

test("faq accordion renders with the first answer open", async ({ page }) => {
  await page.goto("/faq");

  const triggers = page.locator("[data-slot='accordion-trigger']");
  const contents = page.locator("[data-slot='accordion-content']");

  await expect(triggers).toHaveCount(faqItems.length);
  await expect(triggers.first()).toBeVisible();
  await expect(triggers.nth(1)).toBeVisible();
  await expect(contents.first()).toBeVisible();
  await expect
    .poll(async () =>
      page.evaluate(() => {
        const trigger = document.querySelectorAll("[data-slot='accordion-trigger']")[0];
        return trigger?.getAttribute("aria-expanded");
      }),
    )
    .toBe("true");
  await expect
    .poll(async () =>
      page.evaluate(() => {
        const panel = document.querySelectorAll("[data-slot='accordion-content']")[0];
        return panel instanceof HTMLElement ? panel.getBoundingClientRect().height > 0 : false;
      }),
    )
    .toBe(true);
});

test("faq page exposes a description meta tag", async ({ page }) => {
  await page.goto("/faq");

  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /MiniMax M2\.7 FAQ answers for benchmarks, API access, pricing/i,
  );
});

test("legacy contact route redirects to official links", async ({ page }) => {
  await page.goto("/contact");
  await expect(page).toHaveURL(/\/official-links$/);
  await expect(page.getByRole("heading", { level: 1, name: /Official MiniMax M2\.7 links/i })).toBeVisible();
});

test("mobile menu can navigate to official links", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await page.getByRole("button", { name: /open menu/i }).click();
  await page
    .locator("header nav")
    .last()
    .getByRole("link", { name: "Official Links", exact: true })
    .click();
  await expect(page).toHaveURL(/\/official-links$/);
  await expect(page).toHaveTitle(/Official Links/);
});

test("robots and sitemap expose the configured host", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBeTruthy();
  const robotsText = await robots.text();
  const hostMatch = robotsText.match(/^Host:\s+(.+)$/m);
  const sitemapMatch = robotsText.match(/^Sitemap:\s+(.+)$/m);
  expect(hostMatch?.[1]).toBeTruthy();
  expect(sitemapMatch?.[1]).toBeTruthy();
  expect(new URL(sitemapMatch?.[1] ?? "").host).toBe(hostMatch?.[1]);

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBeTruthy();
  const sitemapText = await sitemap.text();
  const sitemapHost = new URL(sitemapMatch?.[1] ?? "").host;
  expect(sitemapText).toContain(`<loc>${new URL("/", sitemapMatch?.[1] ?? "").toString()}</loc>`);
  expect(sitemapText).toContain(`<loc>${new URL("/features", sitemapMatch?.[1] ?? "").toString()}</loc>`);
  expect(sitemapText).toContain(
    `<loc>${new URL("/official-links", sitemapMatch?.[1] ?? "").toString()}</loc>`,
  );
  expect(sitemapText).not.toContain("/contact</loc>");
  expect(sitemapText).toContain(sitemapHost);
});

test("www host permanently redirects to the apex canonical host", async ({ request }) => {
  const response = await request.get("/", {
    headers: {
      Host: "www.minimax-m2-7.lol",
      "X-Forwarded-Host": "www.minimax-m2-7.lol",
      "X-Forwarded-Proto": "https",
    },
    maxRedirects: 0,
  });

  expect(response.status()).toBe(308);
  expect(response.headers().location).toBe("https://minimax-m2-7.lol/");
});

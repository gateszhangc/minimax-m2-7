import { expect, test } from "@playwright/test";
import { faqItems } from "../lib/site-content";

const gaMeasurementId = "G-TEST1234567";

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
    path: "/contact",
    title: /MiniMax M2\.7 Official Links, Docs & API Entry Points/,
    heading: /Official MiniMax M2\.7 links for API access, docs, agent testing, and model overview/i,
    text: /official MiniMax M2\.7 platform, developer docs, MiniMax Agent/i,
    description: /official MiniMax M2\.7 API platform, docs, MiniMax Agent/i,
  },
];

function normalizeUrl(value: string | null) {
  return (value ?? "").replace(/\/$/, "");
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

    expect(normalizeUrl(canonical)).toBe(normalizeUrl(page.url()));
    expect(normalizeUrl(ogUrl)).toBe(normalizeUrl(page.url()));
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
    page.locator(`script[src*="googletagmanager.com/gtag/js?id=${gaMeasurementId}"]`),
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
  expect(structuredDataText).toContain('"@type":"WebSite"');
  expect(structuredDataText).toContain('"url":"http://127.0.0.1:3417"');

  const html = await page.content();
  expect(html).toContain(`gtag('config', '${gaMeasurementId}')`);
});

test("faq accordion expands the selected answer", async ({ page }) => {
  await page.goto("/faq");

  const targetQuestion = faqItems[2];
  const trigger = page.locator("[data-slot='accordion-trigger']").filter({
    hasText: targetQuestion.question,
  });
  const answer = page.locator("[data-slot='accordion-content']").filter({
    hasText: targetQuestion.answer,
  });

  await expect(answer).not.toBeVisible();
  await trigger.click();
  await expect(answer).toBeVisible();
});

test("faq page exposes a description meta tag", async ({ page }) => {
  await page.goto("/faq");

  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /MiniMax M2\.7 FAQ answers for benchmarks, API access, pricing/i,
  );
});

test("mobile menu can navigate to features", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await page.getByRole("button", { name: /open menu/i }).click();
  await page.locator("header nav").last().getByRole("link", { name: "Features", exact: true }).click();
  await expect(page).toHaveURL(/\/features$/);
  await expect(page).toHaveTitle(/Features/);
});

test("robots and sitemap expose the configured host", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBeTruthy();
  const robotsText = await robots.text();
  expect(robotsText).toContain("Host: 127.0.0.1:3417");
  expect(robotsText).toContain("Sitemap: http://127.0.0.1:3417/sitemap.xml");

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBeTruthy();
  const sitemapText = await sitemap.text();
  expect(sitemapText).toContain("<loc>http://127.0.0.1:3417/</loc>");
  expect(sitemapText).toContain("<loc>http://127.0.0.1:3417/features</loc>");
});

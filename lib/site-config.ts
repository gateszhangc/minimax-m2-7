const productionSiteUrl = "https://minimax-m2-7.lol";
const developmentSiteUrl = "http://127.0.0.1:3000";
const defaultClarityProjectId = "vy0jj0bjwf";

function normalizeSiteUrl(value: string | undefined) {
  const candidate = value?.trim();

  if (!candidate) {
    return process.env.NODE_ENV === "development" ? developmentSiteUrl : productionSiteUrl;
  }

  try {
    return new URL(candidate).toString().replace(/\/$/, "");
  } catch {
    return productionSiteUrl;
  }
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_WEB_URL);
export const siteHost = new URL(siteUrl).host;
export const projectName = process.env.NEXT_PUBLIC_PROJECT_NAME?.trim() || "minimax-m2-7";
export const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID?.trim() || "";
export const clarityProjectId =
  process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim() || defaultClarityProjectId;

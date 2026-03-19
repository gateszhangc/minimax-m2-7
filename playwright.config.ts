import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: "http://127.0.0.1:3417",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "npm run dev -- --port 3417",
    env: {
      ...process.env,
      NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: "G-TEST1234567",
      NEXT_PUBLIC_PROJECT_NAME: "minimax-m2-7",
      NEXT_PUBLIC_WEB_URL: "http://127.0.0.1:3417",
    },
    url: "http://127.0.0.1:3417",
    reuseExistingServer: false,
    timeout: 120000,
  },
});

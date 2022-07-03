import { test } from "@playwright/test";

test("click end", async ({ page }) => {
  await page.goto(process.env.PLAYWRIGHT_TEST_BASE_URL ?? "");
  await page.type("#username", process.env.USERNAME ?? "");
  await page.type("#password", process.env.PASSWORD ?? "");
  await page.click("#Login");

  await page.click("text=勤怠打刻");
  await page.click("text=退社");
});

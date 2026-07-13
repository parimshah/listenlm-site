import { test, expect } from "@playwright/test";

test("skip link is the first focusable element and jumps to main content", async ({
  page,
}) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Skip to main content" });
  await expect(skipLink).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#content")).toBeVisible();
});

test("primary nav links are reachable and operable by keyboard", async ({ page }) => {
  await page.goto("/");
  const downloadLink = page
    .getByRole("navigation", { name: "Primary" })
    .getByRole("link", { name: "Download", exact: true });
  await downloadLink.focus();
  await expect(downloadLink).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/download$/);
});

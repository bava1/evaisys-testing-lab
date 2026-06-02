import { expect, test } from "@playwright/test";
import { expectLoginPage, loginAsAdmin, logout } from "../../helpers/auth";

test.describe("navigation smoke", () => {
  test("authenticated user can navigate across primary pages", async ({ page }) => {
    await loginAsAdmin(page);
    await expect(page.getByTestId("app-shell")).toBeVisible();
    await expect(page.getByTestId("home-page")).toBeVisible();

    await page.getByTestId("nav-tasks-desktop").click();
    await expect(page.getByTestId("tasks-page")).toBeVisible();

    await page.getByTestId("nav-requests-desktop").click();
    await expect(page.getByTestId("requests-page")).toBeVisible();

    await page.getByTestId("nav-articles-desktop").click();
    await expect(page.getByTestId("articles-page")).toBeVisible();

    await page.getByTestId("nav-contact-desktop").click();
    await expect(page.getByTestId("contact-page")).toBeVisible();

    await page.getByTestId("nav-home-desktop").click();
    await expect(page.getByTestId("home-page")).toBeVisible();

    await logout(page);
    await expect(page).toHaveURL(/\/login$/);
    await expectLoginPage(page);
  });
});

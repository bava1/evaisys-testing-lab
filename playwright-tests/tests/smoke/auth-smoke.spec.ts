import { expect, test } from "@playwright/test";
import { expectLoginPage, loginAsAdmin, logout } from "../../helpers/auth";

test.describe("auth smoke", () => {
  test("login and logout flow works", async ({ page }) => {
    await page.goto("/login");
    await expectLoginPage(page);

    await loginAsAdmin(page);
    await expect(page.getByTestId("app-shell")).toBeVisible();
    await expect(page.getByTestId("home-page")).toBeVisible();

    await logout(page);
    await expect(page).toHaveURL(/\/login$/);
  });
});

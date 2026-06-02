import { expect, test } from "@playwright/test";
import { expectLoginPage, loginAsAdmin } from "../../helpers/auth";

test.describe("valid login", () => {
  test("admin can sign in and reach the home page", async ({ page }) => {
    await page.goto("/login");
    await expectLoginPage(page);

    await loginAsAdmin(page);
    await expect(page.getByTestId("app-shell")).toBeVisible();
    await expect(page.getByTestId("home-page")).toBeVisible();
  });
});

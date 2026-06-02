import { expect, test } from "@playwright/test";
import { expectLoginPage } from "../../helpers/auth";

test.describe("invalid login", () => {
  test("user stays on login page after invalid credentials", async ({ page }) => {
    await page.goto("/login");
    await expectLoginPage(page);

    await page.getByTestId("login-username-input").fill("admin");
    await page.getByTestId("login-password-input").fill("wrong-password");
    await page.getByTestId("login-submit-button").click();

    await expect(page.getByTestId("login-error-message")).toBeVisible();
    await expectLoginPage(page);
    await expect(page).toHaveURL(/\/login$/);
  });
});

import { expect, test } from "@playwright/test";
import { expectLoginPage } from "../../helpers/auth";

test.describe("valid login", () => {
  // Verify that valid admin credentials unlock the protected app shell and leave the login route.
  test("admin can sign in and reach the home page", async ({ page }) => {
    await page.goto("/login");

    // Start from the login screen to validate the full sign-in flow.
    await expectLoginPage(page);
    await expect(page).toHaveURL(/\/login$/);

    // Submit the known working demo credentials.
    await page.getByTestId("login-username-input").fill("admin");
    await page.getByTestId("login-password-input").fill("123456");
    await page.getByTestId("login-submit-button").click();

    // A successful login should expose the protected shell and home page content.
    await expect(page.getByTestId("app-shell")).toBeVisible();
    await expect(page.getByTestId("home-page")).toBeVisible();
    await expect(page).not.toHaveURL(/\/login$/);
  });
});

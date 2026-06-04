import { expect, test } from "@playwright/test";
import { expectLoginPage } from "../../helpers/auth";

test.describe("invalid login", () => {
  // Verify that invalid credentials keep the user unauthenticated and surface a meaningful error.
  test("user stays on login page after invalid credentials", async ({ page }) => {
    await page.goto("/login");

    // Start from the login page before sending invalid credentials.
    await expectLoginPage(page);
    await expect(page).toHaveURL(/\/login$/);

    await page.getByTestId("login-username-input").fill("admin");
    await page.getByTestId("login-password-input").fill("wrong-password");
    await page.getByTestId("login-submit-button").click();

    // The rejected attempt should show an actionable auth error without revealing the protected shell.
    await expect(page.getByTestId("login-error-message")).toBeVisible();
    await expect(page.getByTestId("login-error-message")).toContainText(
      /invalid|username|password/i
    );
    await expect(page.getByTestId("app-shell")).toHaveCount(0);

    // The user should remain on the login route after the failed attempt.
    await expectLoginPage(page);
    await expect(page).toHaveURL(/\/login$/);
  });
});

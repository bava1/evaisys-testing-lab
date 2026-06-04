import { expect, test } from "@playwright/test";
import { expectLoginPage, loginAsAdmin, logout } from "../../helpers/auth";

const AUTH_STORAGE_KEY = "evaisys-demo-auth-state";

test.describe("logout", () => {
  // Verify that logout clears the session, returns the user to login, and blocks protected routes again.
  test("user loses access to protected routes after logout", async ({ page }) => {
    // Establish an authenticated session and confirm the protected shell is available.
    await loginAsAdmin(page);
    await expect(page.getByTestId("app-shell")).toBeVisible();
    await expect(
      page.evaluate((storageKey) => window.localStorage.getItem(storageKey), AUTH_STORAGE_KEY)
    ).resolves.toBeTruthy();

    // Open a protected page to prove access works before the logout action.
    await page.goto("/tasks");
    await expect(page.getByTestId("tasks-page")).toBeVisible();

    // Logout should return the user to login and remove the protected shell.
    await logout(page);
    await expectLoginPage(page);
    await expect(page).toHaveURL(/\/login$/);
    await expect(page.getByTestId("app-shell")).toHaveCount(0);
    await expect(
      page.evaluate((storageKey) => window.localStorage.getItem(storageKey), AUTH_STORAGE_KEY)
    ).resolves.toBeNull();

    // After logout, direct navigation to a protected route should redirect back to login.
    await page.goto("/tasks");
    await expectLoginPage(page);
    await expect(page).toHaveURL(/\/login$/);
    await expect(page.getByTestId("app-shell")).toHaveCount(0);
  });
});

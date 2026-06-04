import { expect, test } from "@playwright/test";
import { expectLoginPage } from "../../helpers/auth";

const protectedRoutes = ["/", "/tasks", "/requests", "/articles", "/contact", "/testing-lab"];

test.describe("protected routes", () => {
  for (const route of protectedRoutes) {
    // Verify that direct access to each protected route redirects unauthenticated users to login.
    test(`redirects unauthenticated user from ${route} to login`, async ({ page }) => {
      // Navigate directly to the protected route without creating an authenticated session.
      await page.goto(route);

      // The app should redirect to the login route instead of rendering the protected shell.
      await expect(page).toHaveURL(/\/login$/);
      await expectLoginPage(page);
      await expect(page.getByTestId("app-shell")).toHaveCount(0);
    });
  }
});

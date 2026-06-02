import { expect, test } from "@playwright/test";
import { expectLoginPage } from "../../helpers/auth";

const protectedRoutes = ["/", "/tasks", "/requests", "/articles", "/contact"];

test.describe("protected routes", () => {
  for (const route of protectedRoutes) {
    test(`redirects unauthenticated user from ${route} to login`, async ({ page }) => {
      await page.goto(route);

      await expectLoginPage(page);
      await expect(page).toHaveURL(/\/login$/);
    });
  }
});

import { expect, test } from "@playwright/test";
import { expectLoginPage, loginAsAdmin, logout } from "../../helpers/auth";

test.describe("logout", () => {
  test("user loses access to protected routes after logout", async ({ page }) => {
    await loginAsAdmin(page);

    await page.goto("/tasks");
    await expect(page.getByTestId("tasks-page")).toBeVisible();

    await logout(page);
    await expect(page).toHaveURL(/\/login$/);

    await page.goto("/tasks");
    await expectLoginPage(page);
    await expect(page).toHaveURL(/\/login$/);
  });
});

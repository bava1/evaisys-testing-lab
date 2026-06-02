import { expect, test, devices, type Page } from "@playwright/test";
import { expectLoginPage, loginAsAdmin } from "../../helpers/auth";

test.use({
  ...devices["iPhone 13"],
});

async function openMobileMenu(page: Page) {
  await page.getByTestId("mobile-navigation-menu-button").click();
  await expect(page.getByTestId("mobile-navigation-drawer")).toBeVisible();
}

async function navigateFromMobileMenu(page: Page, linkTestId: string, pageTestId: string) {
  await openMobileMenu(page);
  await page.getByTestId(linkTestId).click();
  await expect(page.getByTestId(pageTestId)).toBeVisible();
}

async function logoutFromMobileMenu(page: Page) {
  await openMobileMenu(page);
  await page.getByTestId("mobile-logout-button").click();
  await expectLoginPage(page);
}

test.describe("responsive mobile navigation", () => {
  test("mobile login works", async ({ page }) => {
    await loginAsAdmin(page);
    await expect(page.getByTestId("home-page")).toBeVisible();
  });

  test("mobile navigation drawer opens", async ({ page }) => {
    await loginAsAdmin(page);

    await expect(page.getByTestId("mobile-navigation-menu-button")).toBeVisible();
    await openMobileMenu(page);
  });

  test("mobile menu navigates through primary modules", async ({ page }) => {
    await loginAsAdmin(page);

    await navigateFromMobileMenu(page, "nav-home-mobile", "home-page");
    await navigateFromMobileMenu(page, "nav-tasks-mobile", "tasks-page");
    await navigateFromMobileMenu(page, "nav-requests-mobile", "requests-page");
    await navigateFromMobileMenu(page, "nav-articles-mobile", "articles-page");
    await navigateFromMobileMenu(page, "nav-contact-mobile", "contact-page");
  });

  test("mobile logout returns user to login page", async ({ page }) => {
    await loginAsAdmin(page);

    await logoutFromMobileMenu(page);
  });

  test("protected route redirects to login after mobile logout", async ({ page }) => {
    await loginAsAdmin(page);
    await logoutFromMobileMenu(page);

    await page.goto("/tasks");
    await expectLoginPage(page);
    await expect(page).toHaveURL(/\/login$/);
  });
});

import { expect, type Page } from "@playwright/test";

export async function expectLoginPage(page: Page) {
  await expect(page.getByTestId("login-page")).toBeVisible();
}

export async function loginAsAdmin(page: Page) {
  await page.goto("/login");
  await expectLoginPage(page);
  await page.getByTestId("login-username-input").fill("admin");
  await page.getByTestId("login-password-input").fill("123456");
  await page.getByTestId("login-submit-button").click();
  await expect(page.getByTestId("app-shell")).toBeVisible();
}

export async function logout(page: Page) {
  await page.getByTestId("header-logout-button").click();
  await expectLoginPage(page);
}

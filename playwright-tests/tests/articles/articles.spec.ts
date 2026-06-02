import { expect, test, type Locator, type Page } from "@playwright/test";
import { loginAsAdmin } from "../../helpers/auth";

async function openArticlesPage(page: Page) {
  await page.getByTestId("nav-articles-desktop").click();
  await expect(page.getByTestId("articles-page")).toBeVisible();
}

function articleCards(page: Page) {
  return page.getByTestId("article-card");
}

function firstArticleCard(page: Page) {
  return articleCards(page).first();
}

async function firstArticleTitleText(page: Page) {
  const text = await firstArticleCard(page).getByTestId("article-title").textContent();
  if (!text) {
    throw new Error("First article title was not found.");
  }

  return text.trim();
}

async function selectCategory(control: Locator, optionName: string) {
  await control.locator("xpath=..").getByRole("combobox").click();
  await control.page().getByRole("option", { name: optionName }).click();
}

test.describe("articles", () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
    await openArticlesPage(page);
  });

  test("articles list is visible", async ({ page }) => {
    await expect(page.getByTestId("articles-list")).toBeVisible();
    await expect(articleCards(page).first()).toBeVisible();
  });

  test("search filters and restores the list", async ({ page }) => {
    const initialCount = await articleCards(page).count();
    const firstTitle = await firstArticleTitleText(page);

    await page.getByTestId("articles-search-input").fill(firstTitle);
    await expect(articleCards(page).first()).toBeVisible();
    await expect(articleCards(page)).toHaveCount(1);
    await expect(firstArticleCard(page).getByTestId("article-title")).toHaveText(firstTitle);

    await page.getByTestId("articles-search-input").fill("");
    await expect(articleCards(page)).toHaveCount(initialCount);
  });

  test("category filter keeps the list in a valid state", async ({ page }) => {
    await selectCategory(page.getByTestId("articles-category-filter"), "Testing");

    const emptyStateVisible = await page.getByTestId("articles-empty-state").isVisible();
    if (emptyStateVisible) {
      await expect(page.getByTestId("articles-empty-state")).toBeVisible();
      return;
    }

    await expect(page.getByTestId("articles-list")).toBeVisible();
    await expect(articleCards(page).first()).toBeVisible();
  });

  test("shows no results state for unknown search", async ({ page }) => {
    await page.getByTestId("articles-search-input").fill("no-such-article-123456");
    await expect(page.getByTestId("articles-empty-state")).toBeVisible();
  });

  test("opens article details", async ({ page }) => {
    await firstArticleCard(page).getByTestId("article-details-button").click();

    await expect(page.getByTestId("article-details-dialog")).toBeVisible();
    await expect(page.getByTestId("article-details-title")).toBeVisible();
    await expect(page.getByTestId("article-metadata").first()).toBeVisible();
    await expect(page.getByTestId("article-content")).toBeVisible();
  });
});

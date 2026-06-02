import { expect, test, type Page } from "@playwright/test";
import { loginAsAdmin } from "../../helpers/auth";

async function openContactPage(page: Page) {
  await page.getByTestId("nav-contact-desktop").click();
  await expect(page.getByTestId("contact-page")).toBeVisible();
}

function contactCards(page: Page) {
  return page.getByTestId("contact-card");
}

function firstContactCard(page: Page) {
  return contactCards(page).first();
}

async function firstContactName(page: Page) {
  const text = await firstContactCard(page).getByTestId("contact-name").textContent();
  if (!text) {
    throw new Error("First contact name was not found.");
  }

  return text.trim();
}

async function fillFeedbackForm(page: Page, name: string, email: string, message: string) {
  await page.getByTestId("feedback-name-input").fill(name);
  await page.getByTestId("feedback-email-input").fill(email);
  await page.getByTestId("feedback-message-input").fill(message);
}

test.describe("contacts and feedback", () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
    await openContactPage(page);
  });

  test("contacts list is visible", async ({ page }) => {
    await expect(page.getByTestId("contacts-list")).toBeVisible();
    await expect(contactCards(page).first()).toBeVisible();
  });

  test("contact search filters and restores the list", async ({ page }) => {
    const initialCount = await contactCards(page).count();
    const name = await firstContactName(page);

    await page.getByTestId("contacts-search-input").fill(name);
    await expect(contactCards(page).first()).toBeVisible();
    await expect(contactCards(page)).toHaveCount(1);
    await expect(firstContactCard(page).getByTestId("contact-name")).toHaveText(name);

    await page.getByTestId("contacts-search-input").fill("");
    await expect(contactCards(page)).toHaveCount(initialCount);
  });

  test("feedback validation shows error for empty submit", async ({ page }) => {
    await expect(page.getByTestId("feedback-form-container")).toBeVisible();
    await page.getByTestId("feedback-submit-button").click();

    await expect(page.getByTestId("feedback-validation-error")).toBeVisible();
  });

  test("feedback validation shows error for invalid email", async ({ page }) => {
    await fillFeedbackForm(page, "QA Tester", "invalid-email", "Valid message content.");
    await page.getByTestId("feedback-submit-button").click();

    await expect(page.getByTestId("feedback-validation-error")).toBeVisible();
  });

  test("feedback can be submitted successfully", async ({ page }) => {
    await fillFeedbackForm(
      page,
      "QA Tester",
      "qa.tester@example.com",
      "This is a valid feedback message for smoke verification.",
    );
    await page.getByTestId("feedback-submit-button").click();

    await expect(page.getByTestId("feedback-success-message")).toBeVisible();
  });
});

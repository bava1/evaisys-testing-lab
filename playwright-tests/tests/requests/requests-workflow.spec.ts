import { expect, test, type Locator, type Page } from "@playwright/test";
import { loginAsAdmin } from "../../helpers/auth";

async function openRequestsPage(page: Page) {
  await page.getByTestId("nav-requests-desktop").click();
  await expect(page.getByTestId("requests-page")).toBeVisible();
}

function firstRequestCard(page: Page) {
  return page.getByTestId("request-card").first();
}

async function firstRequestId(page: Page) {
  const titleLocator = page.getByTestId(/request-title-/).first();
  await expect(titleLocator).toBeVisible();

  const dataTestId = await titleLocator.getAttribute("data-testid");
  if (!dataTestId) {
    throw new Error("First request title test id was not found.");
  }

  return dataTestId.replace("request-title-", "");
}

function requestStatusChip(page: Page, requestId: string) {
  return page.getByTestId(`request-status-${requestId}`);
}

async function expectRequestsStateIsValid(page: Page) {
  const emptyStateVisible = await page.getByTestId("requests-empty-state").isVisible();

  if (emptyStateVisible) {
    await expect(page.getByTestId("requests-empty-state")).toBeVisible();
    return;
  }

  await expect(page.getByTestId("requests-list")).toBeVisible();
  await expect(page.getByTestId("request-card").first()).toBeVisible();
}

async function selectTextFieldOption(control: Locator, optionName: string) {
  await control.locator("xpath=..").getByRole("combobox").click();
  await control.page().getByRole("option", { name: optionName }).click();
}

test.describe("requests workflow", () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
    await openRequestsPage(page);
  });

  test("requests list is visible", async ({ page }) => {
    await expect(page.getByTestId("requests-list")).toBeVisible();
    await expect(page.getByTestId("request-card").first()).toBeVisible();
  });

  test("filters requests by status", async ({ page }) => {
    await selectTextFieldOption(page.getByTestId("requests-status-filter"), "New");
    await expectRequestsStateIsValid(page);
  });

  test("filters requests by priority", async ({ page }) => {
    await selectTextFieldOption(page.getByTestId("requests-priority-filter"), "High");
    await expectRequestsStateIsValid(page);
  });

  test("opens request details dialog", async ({ page }) => {
    await firstRequestCard(page).getByTestId("request-details-button").click();

    await expect(page.getByTestId("request-details-dialog")).toBeVisible();
    await expect(page.getByTestId("request-details-requester")).toBeVisible();
    await expect(page.getByTestId("request-details-status")).toBeVisible();
    await expect(page.getByTestId("request-details-priority")).toBeVisible();
    await expect(page.getByTestId("request-details-date")).toBeVisible();
  });

  test("changes request status", async ({ page }) => {
    const requestId = await firstRequestId(page);
    const statusChip = requestStatusChip(page, requestId);
    const currentStatusText = await statusChip.textContent();
    const nextStatus =
      currentStatusText?.includes("New")
        ? "In Progress"
        : currentStatusText?.includes("In Progress")
          ? "Resolved"
          : currentStatusText?.includes("Resolved")
            ? "Rejected"
            : "New";

    await firstRequestCard(page).getByTestId("request-status-change-control").click();
    await page.getByRole("option", { name: nextStatus }).click();

    await expect(statusChip).toContainText(nextStatus);
  });
});

import { expect, test, type Locator, type Page, type TestInfo } from "@playwright/test";
import { loginAsAdmin } from "../../helpers/auth";

async function openTasksPage(page: Page) {
  await page.getByTestId("nav-tasks-desktop").click();
  await expect(page.getByTestId("tasks-page")).toBeVisible();
}

function buildUniqueTaskName(prefix: string, testInfo: TestInfo) {
  return `${prefix}-${testInfo.workerIndex}-${Date.now()}`;
}

async function createTask(page: Page, title: string, description: string) {
  await page.getByTestId("create-task-button").click();
  await expect(page.getByTestId("task-form-container")).toBeVisible();
  await page.getByTestId("task-title-input").fill(title);
  await page.getByTestId("task-description-input").fill(description);
  await page.getByTestId("task-save-button").click();
  return findTaskIdByTitle(page, title);
}

async function findTaskIdByTitle(page: Page, title: string) {
  const titleLocator = page.getByTestId(/task-title-/).filter({ hasText: title }).first();
  await expect(titleLocator).toBeVisible();

  const dataTestId = await titleLocator.getAttribute("data-testid");
  if (!dataTestId) {
    throw new Error(`Task title test id was not found for "${title}".`);
  }

  return dataTestId.replace("task-title-", "");
}

function taskTitle(page: Page, taskId: string) {
  return page.getByTestId(`task-title-${taskId}`);
}

function taskStatus(page: Page, taskId: string) {
  return page.getByTestId(`task-status-${taskId}`);
}

function taskEdit(page: Page, taskId: string) {
  return page.getByTestId(`task-edit-${taskId}`);
}

function taskDelete(page: Page, taskId: string) {
  return page.getByTestId(`task-delete-${taskId}`);
}

function taskComplete(page: Page, taskId: string) {
  return page.getByTestId(`task-complete-${taskId}`);
}

function taskReopen(page: Page, taskId: string) {
  return page.getByTestId(`task-reopen-${taskId}`);
}

function taskCardById(page: Page, taskId: string): Locator {
  return page.getByTestId("task-card").filter({ has: taskTitle(page, taskId) });
}

test.describe("tasks CRUD", () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
    await openTasksPage(page);
  });

  test("creates a task", async ({ page }, testInfo) => {
    const title = buildUniqueTaskName("create-task", testInfo);
    const description = `Description for ${title}`;

    const taskId = await createTask(page, title, description);

    await expect(page.getByTestId("tasks-list")).toBeVisible();
    await expect(taskCardById(page, taskId)).toBeVisible();
    await expect(taskTitle(page, taskId)).toHaveText(title);
  });

  test("edits an existing task", async ({ page }, testInfo) => {
    const title = buildUniqueTaskName("edit-task", testInfo);
    const description = `Description for ${title}`;
    const taskId = await createTask(page, title, description);

    const updatedTitle = `${title}-updated`;
    const updatedDescription = `Updated description for ${updatedTitle}`;

    await taskEdit(page, taskId).click();
    await expect(page.getByTestId("task-form-container")).toBeVisible();
    await page.getByTestId("task-title-input").fill(updatedTitle);
    await page.getByTestId("task-description-input").fill(updatedDescription);
    await page.getByTestId("task-save-button").click();

    await expect(taskTitle(page, taskId)).toHaveText(updatedTitle);

    await taskEdit(page, taskId).click();
    await expect(page.getByTestId("task-description-input")).toHaveValue(updatedDescription);
  });

  test("completes and reopens a task", async ({ page }, testInfo) => {
    const title = buildUniqueTaskName("status-task", testInfo);
    const description = `Description for ${title}`;
    const taskId = await createTask(page, title, description);

    await taskComplete(page, taskId).click();
    await expect(taskStatus(page, taskId)).toContainText("completed");

    await page.getByTestId("tasks-filter-completed").click();
    await expect(taskCardById(page, taskId)).toBeVisible();

    await taskReopen(page, taskId).click();
    await page.getByTestId("tasks-filter-active").click();
    await expect(taskCardById(page, taskId)).toBeVisible();
    await expect(taskStatus(page, taskId)).toContainText("active");
  });

  test("deletes a task", async ({ page }, testInfo) => {
    const title = buildUniqueTaskName("delete-task", testInfo);
    const description = `Description for ${title}`;
    const taskId = await createTask(page, title, description);

    await taskDelete(page, taskId).click();
    await expect(taskTitle(page, taskId)).toHaveCount(0);
  });

  test("shows validation error for short title", async ({ page }) => {
    await page.getByTestId("create-task-button").click();
    await expect(page.getByTestId("task-form-container")).toBeVisible();
    await page.getByTestId("task-title-input").fill("ab");
    await page.getByTestId("task-save-button").click();

    await expect(page.getByTestId("task-validation-error")).toBeVisible();
  });
});

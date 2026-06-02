import { expect, test } from "@playwright/test";
import { apiUrl, uniqueApiName } from "../../helpers/api";

test.describe("tasks api", () => {
  test("GET /tasks returns a task collection", async ({ request }) => {
    const response = await request.get(apiUrl("/tasks"));

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        title: expect.any(String),
        completed: expect.any(Boolean),
      }),
    );
  });

  test("task CRUD endpoints support create update and delete", async ({ request }) => {
    const title = uniqueApiName("api-task");

    const createResponse = await request.post(apiUrl("/tasks"), {
      data: {
        title,
      },
    });
    expect(createResponse.status()).toBe(201);

    const createdTask = await createResponse.json();
    expect(createdTask).toMatchObject({
      title,
      completed: false,
    });
    expect(createdTask.id).toEqual(expect.any(Number));

    const updatedTitle = `${title}-updated`;
    const updateResponse = await request.patch(apiUrl(`/tasks/${createdTask.id}`), {
      data: {
        title: updatedTitle,
        completed: true,
      },
    });
    expect(updateResponse.status()).toBe(200);

    const updatedTask = await updateResponse.json();
    expect(updatedTask).toMatchObject({
      id: createdTask.id,
      title: updatedTitle,
      completed: true,
    });

    const deleteResponse = await request.delete(apiUrl(`/tasks/${createdTask.id}`));
    expect(deleteResponse.status()).toBe(204);

    const listResponse = await request.get(apiUrl("/tasks"));
    expect(listResponse.status()).toBe(200);
    const tasks = await listResponse.json();
    expect(tasks.some((task: { id: number }) => task.id === createdTask.id)).toBe(false);
  });

  test("POST /tasks rejects invalid title", async ({ request }) => {
    const response = await request.post(apiUrl("/tasks"), {
      data: {
        title: "",
      },
      failOnStatusCode: false,
    });

    expect(response.status()).toBe(422);

    const body = await response.json();
    expect(body.detail).toBeTruthy();
  });
});

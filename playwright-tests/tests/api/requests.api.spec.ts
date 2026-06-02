import { expect, test } from "@playwright/test";
import { apiUrl } from "../../helpers/api";

test.describe("requests api", () => {
  test("GET /requests returns a request collection", async ({ request }) => {
    const response = await request.get(apiUrl("/requests"));

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        title: expect.any(String),
        status: expect.any(String),
        priority: expect.any(String),
      }),
    );
  });

  test("PATCH /requests/{id} updates request workflow fields", async ({ request }) => {
    const listResponse = await request.get(apiUrl("/requests"));
    expect(listResponse.status()).toBe(200);
    const requests = await listResponse.json();
    const targetRequest = requests[0];

    const nextStatus =
      targetRequest.status === "new"
        ? "in-progress"
        : targetRequest.status === "in-progress"
          ? "resolved"
          : targetRequest.status === "resolved"
            ? "rejected"
            : "new";
    const nextPriority =
      targetRequest.priority === "low"
        ? "medium"
        : targetRequest.priority === "medium"
          ? "high"
          : "low";

    const response = await request.patch(apiUrl(`/requests/${targetRequest.id}`), {
      data: {
        status: nextStatus,
        priority: nextPriority,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toMatchObject({
      id: targetRequest.id,
      title: targetRequest.title,
      status: nextStatus,
      priority: nextPriority,
    });
  });

  test("PATCH /requests/{id} returns error for unknown request", async ({ request }) => {
    const response = await request.patch(apiUrl("/requests/999999"), {
      data: {
        status: "resolved",
      },
      failOnStatusCode: false,
    });

    expect(response.status()).toBe(404);

    const body = await response.json();
    expect(body.detail).toBe("Request not found");
  });
});

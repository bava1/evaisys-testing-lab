import { expect, test } from "@playwright/test";
import { apiUrl } from "../../helpers/api";

test.describe("health api", () => {
  test("GET /health returns healthy service state", async ({ request }) => {
    const response = await request.get(apiUrl("/health"));

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toMatchObject({
      status: "ok",
      service: "evaisys-testing-lab-backend",
    });
  });
});

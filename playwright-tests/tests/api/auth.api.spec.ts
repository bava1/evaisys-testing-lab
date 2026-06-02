import { expect, test } from "@playwright/test";
import { apiUrl } from "../../helpers/api";

test.describe("auth api", () => {
  test("POST /auth/login returns success for valid credentials", async ({ request }) => {
    const response = await request.post(apiUrl("/auth/login"), {
      data: {
        username: "admin",
        password: "123456",
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.success).toBe(true);
    expect(body.user).toMatchObject({
      username: "admin",
      role: "tester",
    });
    expect(body.token).toBeTruthy();
  });

  test("POST /auth/login returns 401 for invalid credentials", async ({ request }) => {
    const response = await request.post(apiUrl("/auth/login"), {
      data: {
        username: "admin",
        password: "wrong-password",
      },
      failOnStatusCode: false,
    });

    expect(response.status()).toBe(401);

    const body = await response.json();
    expect(body.detail).toBe("Invalid username or password");
  });
});

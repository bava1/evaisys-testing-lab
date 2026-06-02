import { expect, test } from "@playwright/test";
import { apiUrl } from "../../helpers/api";

test.describe("contact api", () => {
  test("POST /contact accepts valid feedback payload", async ({ request }) => {
    const response = await request.post(apiUrl("/contact"), {
      data: {
        name: "QA Tester",
        email: "qa.tester@example.com",
        topic: "Automation feedback",
        message: "This is a valid feedback message for API verification.",
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toMatchObject({
      success: true,
      message: "Contact request received",
    });
  });

  test("POST /contact rejects invalid email", async ({ request }) => {
    const response = await request.post(apiUrl("/contact"), {
      data: {
        name: "QA Tester",
        email: "invalid-email",
        topic: "Automation feedback",
        message: "This is a valid feedback message for API verification.",
      },
      failOnStatusCode: false,
    });

    expect(response.status()).toBe(422);

    const body = await response.json();
    expect(body.detail).toBeTruthy();
  });

  test("POST /contact rejects empty required fields", async ({ request }) => {
    const response = await request.post(apiUrl("/contact"), {
      data: {
        name: "",
        email: "",
        topic: "",
        message: "",
      },
      failOnStatusCode: false,
    });

    expect(response.status()).toBe(422);

    const body = await response.json();
    expect(body.detail).toBeTruthy();
  });
});

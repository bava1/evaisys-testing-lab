import { expect, test } from "@playwright/test";
import { apiUrl } from "../../helpers/api";

test.describe("articles api", () => {
  test("GET /articles returns an article collection", async ({ request }) => {
    const response = await request.get(apiUrl("/articles"));

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        title: expect.any(String),
        category: expect.any(String),
        summary: expect.any(String),
        content: expect.any(String),
      }),
    );
  });

  test("GET /articles/{id} returns a specific article", async ({ request }) => {
    const listResponse = await request.get(apiUrl("/articles"));
    expect(listResponse.status()).toBe(200);
    const articles = await listResponse.json();
    const targetArticle = articles[0];

    const response = await request.get(apiUrl(`/articles/${targetArticle.id}`));
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toMatchObject({
      id: targetArticle.id,
      title: targetArticle.title,
      category: targetArticle.category,
    });
  });

  test("GET /articles/{id} returns error for unknown article", async ({ request }) => {
    const response = await request.get(apiUrl("/articles/999999"), {
      failOnStatusCode: false,
    });

    expect(response.status()).toBe(404);

    const body = await response.json();
    expect(body.detail).toBe("Article not found");
  });
});

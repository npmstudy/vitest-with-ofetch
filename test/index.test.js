import { ofetch } from "ofetch";
import { describe, expect, it } from "vitest";
import Koa from "koa";
import supertest from "supertest";

describe("lib", async () => {
  const app = new Koa();

  app.use(async (ctx) => {
    ctx.body = { a: 1 };
  });

  it.only("should render lib", async () => {
    const request = await supertest(app.listen(3000));

    const res = await ofetch("http://127.0.0.1:3000/a.json", {
      method: "GET",
      parseResponse: JSON.parse,
    });

    expect(res.a).toBe(1);
  });
});

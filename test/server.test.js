const request = require("supertest");
const app = require("../index.js");  

describe("GET /api/test", () => {
    it("should return a JSON response", async () => {
        const res = await request(app).get("/api/test");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("success", true);
        expect(res.body).toHaveProperty("message", "Hello, this is a JSON response!");
        expect(res.body).toHaveProperty("timestamp");
    });
});
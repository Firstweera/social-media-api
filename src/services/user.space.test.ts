import { register } from "./user.resolver";

describe("user-Test", () => {
  test("register test", async () => {
    const data = {
      email: "user9@gmail.com",
      password: "P@ssw0rd",
      fname: "Steve",
      lname: "McManaman",
    };

    const result = await register(data);
    // console.log("register result", result);
    expect(result.status === "ok").toBe(true);
  });
});

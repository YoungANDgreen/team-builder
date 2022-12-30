const Engineer = require("../lib/engineer");

test("Can set GitHUb account fromconstructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Billy", 1, "Billy@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Billy", 1, "Billy@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username from getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Billy", 1, "Billy@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
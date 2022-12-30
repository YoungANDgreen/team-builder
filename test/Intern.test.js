const Intern = require("../lib/intern");

test("Can set school from constructor", () => {
  const testValue = "DU";
  const e = new Intern("Billy", 1, "Billy@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Billy", 1, "Billy@test.com", "DU");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school from getSchool()", () => {
  const testValue = "DU";
  const e = new Intern("Billy", 1, "Billy@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("Can set office number from constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Billy", 1, "Billy@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Billy", 1, "Billy@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number from getofficeNumber()", () => {
  const testValue = 100;
  const e = new Manager("Billy", 1, "Billy@test.com", testValue);
  expect(e.getofficeNumber()).toBe(testValue);
});
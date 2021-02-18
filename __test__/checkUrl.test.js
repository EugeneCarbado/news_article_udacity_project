
import { checkUrl } from "../src/client/js/urlChecker.js";

describe("with url protocol", () => {
  test("should return true", () => {
    const input = "https://www.google.co.uk";
    expect(checkUrl(input)).toBe(true);
  });
  test("should return true", () => {
    const input = "http://www.google.co.uk";
    expect(checkUrl(input)).toBe(true);
  });
});

describe("without protocol", () => {
  test("should return true", () => {
    const input = "www.google.co.uk";
    expect(checkUrl(input)).toBe(false);
  });
  test("should return true", () => {
    const input = "google.co.uk";
    expect(checkUrl(input)).toBe(false);
  });
  test("should return false", () => {
    const input = "google . co . uk";
    expect(checkUrl(input)).toBe(false);
  });
});
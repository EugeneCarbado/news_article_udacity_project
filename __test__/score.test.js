
import { score } from "../src/client/js/formHandler";

describe("test score polarity", () => {
  test("should return true", () => {
    const score_tag = "P+" || "P";
    expect(score(score_tag)).toBe("Positive");
  });
  test("should return true", () => {
    const score_tag = "NEU";
    expect(score(score_tag)).toBe("Neutral");
  });
  test("should return true", () => {
    const score_tag = "N+" || "N";
    expect(score(score_tag)).toBe("Negative");
  });
  test("should return true", () => {
    const score_tag = "NONE";
    expect(score(score_tag)).toBe("Non Sentimental");
  });
});
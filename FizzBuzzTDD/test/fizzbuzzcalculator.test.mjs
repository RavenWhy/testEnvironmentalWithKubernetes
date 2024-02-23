import { calculateFizzBuzz } from "../lib/fizzbuzzcalculator.mjs";

describe("when number is 1", () => {
  it("returns 1", () => {
    const result = calculateFizzBuzz(1);
    expect(result).toBe("1");
  });
});

describe("when number is 3", () => {
  it("returns Fizz", () => {
    expect(calculateFizzBuzz(3)).toBe("Fizz");
  });
});

describe("when number is 5", () => {
  it("returns Buzz", () => {
    expect(calculateFizzBuzz(5)).toBe("Buzz");
  });
});

describe("when number is 15", () => {
  it("returns FizzBuzz", () => {
    expect(calculateFizzBuzz(15)).toBe("FizzBuzz");
  });
});

describe("when number is 0", () => {
  it("returns FizzBuzz", () => {
    expect(calculateFizzBuzz(0)).toBe("FizzBuzz");
  });
});

describe("when number is -1", () => {
  it("throw error", () => {
    expect(() => calculateFizzBuzz(-1)).toThrow(Error);
  });
});

describe("when number is 6", () => {
  it("return Fizz", () => {
    expect(calculateFizzBuzz(6)).toBe("Fizz");
  });
});

describe("when number is abc", () => {
  it("throw error", () => {
    expect(() => calculateFizzBuzz("abc")).toThrow(Error);
  });
});

describe("when number is null", () => {
  it("throw error", () => {
    expect(() => calculateFizzBuzz(null)).toThrow(Error);
  });
});

describe("when number is undefined", () => {
  it("throw error", () => {
    expect(() => calculateFizzBuzz(undefined)).toThrow(Error);
  });
});

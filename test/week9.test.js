const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} = require("../challenges/week9");

describe("sumMultiples", () => {
  test("returns sum of multiples of numbers divisible by 3 or 5", () => {
    expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
    expect(sumMultiples([4, 22, 6, 12, 65, 23, 40, 1])).toBe(123);
  });
});

describe("isValidDNA", () => {
  test("returns true if characters C, G, T or A only", () => {
    expect(isValidDNA("CGTGT")).toBe(true);

    expect(isValidDNA("fjhdjfhkjfh")).toBe(false);
  });

  test("ignores capitalisation", () => {
    expect(isValidDNA("CGTAgggtttactGT")).toBe(true);
  });

  test("returns false if there is punctuation", () => {
    expect(isValidDNA("CG,GGA.TT")).toBe(false);
  });

  test("ignores spaces", () => {
    expect(isValidDNA("C GT AG")).toBe(true);
  });
});

describe("getComplementaryDNA", () => {
  test("returns DNA pair as string: T always pairs with A, and C always pairs with G", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");

    expect(getComplementaryDNA("CGTA")).toBe("GCAT");
  });

  test("ignores capitalisation", () => {
    expect(getComplementaryDNA("cGaT")).toBe("GCTA");
  });

  test("ignores spaces", () => {
    expect(getComplementaryDNA("C GT A")).toBe("GCAT");
  });
});

describe("isItPrime", () => {
  test("reverses the digits of a number", () => {
    expect(isItPrime(5)).toBe(true);
    expect(isItPrime(104)).toBe(false);
    expect(isItPrime(11)).toBe(true);
    expect(isItPrime(100)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("returns the total of the numbers in all sub arrays", () => {
    expect(createMatrix(3, "foo")).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"]
    ]);
  });
});

describe.only("areWeCovered", () => {
  test("returns the total of the numbers in all sub arrays", () => {
    expect(
      areWeCovered(
        [
          { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
          {
            name: "Pedro",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"]
          },
          { name: "Tom", rota: ["Tuesday", "Saturday"] }
        ],
        "Tuesday"
      )
    ).toEqual(true);
    expect(
      areWeCovered(
        [
          { name: "Sally", rota: ["Monday", "Friday"] },
          {
            name: "Pedro",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"]
          },
          { name: "Tom", rota: ["Tuesday", "Saturday"] }
        ],
        "Tuesday"
      )
    ).toEqual(false);
  });

  test("ignores case", () => {
    expect(
      areWeCovered(
        [
          { name: "Jeremy", rota: ["Monday", "Tuesday", "Friday", "Sunday"] },
          {
            name: "Boris",
            rota: ["Saturday", "Sunday", "Wednesday"]
          },
          { name: "Nicola", rota: ["Tuesday", "Saturday", "Sunday"] }
        ],
        "sunday"
      )
    ).toEqual(true);
  });
});

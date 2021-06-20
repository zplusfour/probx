test("should return if the problem has a variable", () => {
  expect("2(x+2)=8".includes("x")).toBe(true);
});

test("should return the problem eq", () => {
  expect("2(x+2)=8".split("=")[0]).toBe("2(x+2)")
});

test("should return the problem result", () => {
  expect("2(x+2)=8".split("=")[1]).toBe("8")
});
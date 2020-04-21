import { validateUsername, validatePassword } from "./validation";

describe(__filename, () => {
  describe("validateUsername", () => {
    it("should not validate when username is less than 5 chars", () => {
      expect(validateUsername("123")).toEqual(false);
    });

    it("should validate when username is atleast 5 characters", () => {
      expect(validateUsername("12345")).toEqual(true);
    });
  });

  describe("validatePassword", () => {
    it("should not validate when password is not the correct length ", () => {
      expect(validatePassword("123")).toEqual(false);
    });
    it("should not validate when password does not contain an uppercase letter", () => {
      expect(validatePassword("abc45678")).toEqual(false);
    });

    it("should not validate when password does not contain a lowercase letter", () => {
      expect(validatePassword("ABC45678")).toEqual(false);
    });

    it("should not validate when password does not contain a number", () => {
      expect(validatePassword("Abcdefghi")).toEqual(false);
    });
    it("should validate when password is correct ", () => {
      expect(validatePassword("Abc45678")).toEqual(true);
    });
  });
});

import { login, isLoggedIn, logout } from "./authentication";

describe(__filename, () => {
  beforeEach(() => sessionStorage.removeItem("AUTH_TOKEN"));

  describe("login", () => {
    it("should login successfully", () => {
      expect(login("12345", "Abc45678")).toEqual(true);
      const auth = sessionStorage.getItem("AUTH_TOKEN");
      expect(auth).toEqual("FAKE_TOKEN");
    });
    it("when login fails should not store auth token", () => {
      expect(login("", "")).toEqual(false);
      const auth = sessionStorage.getItem("AUTH_TOKEN");
      expect(auth).toEqual(null);
    });
  });

  describe("logout", () => {
    it("should logout successfully", () => {
      sessionStorage.setItem("AUTH_TOKEN", "FAKE_TOKEN");

      logout();

      const auth = sessionStorage.getItem("AUTH_TOKEN");
      expect(auth).toEqual(null);
    });
  });

  describe("isLoggedIn", () => {
    it("should return false when user is not logged in", () => {
      expect(isLoggedIn()).toEqual(false);
    });

    it("should return true when user is logged in", () => {
      sessionStorage.setItem("AUTH_TOKEN", "FAKE_TOKEN");
      expect(isLoggedIn()).toEqual(true);
    });
  });
});

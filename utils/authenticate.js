import { validateUsername, validatePassword } from "./validate";

const AUTH_TOKEN = "AUTH_TOKEN";

export const login = (username, password) => {
  const isValid = validateUsername(username) && validatePassword(password);
  if (isValid) {
    sessionStorage.setItem(AUTH_TOKEN, "FAKE_TOKEN");
    return true;
  }

  return false;
};

export const isLoggedIn = () => {
  const auth = sessionStorage.getItem(AUTH_TOKEN);
  return !!auth;
};

export const logout = () => {
  sessionStorage.removeItem(AUTH_TOKEN);
};

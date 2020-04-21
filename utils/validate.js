const containsDigits = (val) => /[0-9]/.test(val);
const containsUpper = (val) => /[A-Z]/.test(val);
const containsLower = (val) => /[a-z]/.test(val);

export const validateUsername = (username) => username && username.length >= 5;

export const validatePassword = (password) =>
  password &&
  password.length >= 8 &&
  containsDigits(password) &&
  containsUpper(password) &&
  containsLower(password);

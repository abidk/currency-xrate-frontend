const containsDigits = (val) => /[0-9]/.test(val);
const containsUpper = (val) => /[A-Z]/.test(val);
const containsLower = (val) => /[a-z]/.test(val);

const USERNAME_LENGTH_THRESHOLD = 5;
const PASSWORD_LENGTH_THRESHOLD = 8;

export const validateUsername = (username) =>
  username && username.length >= USERNAME_LENGTH_THRESHOLD;

export const validatePassword = (password) =>
  password &&
  password.length >= PASSWORD_LENGTH_THRESHOLD &&
  containsDigits(password) &&
  containsUpper(password) &&
  containsLower(password);

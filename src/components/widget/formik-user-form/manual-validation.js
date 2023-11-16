export function validateUsername(username = "") {
  if (username.length < 8) {
    return "username a least must have 8 char";
  }
}

export function validateUserForm(user) {
  const fromErrors = {};
  let hasError = false;
  const usernameError = validateUsername(user.username);
  if (usernameError) {
    fromErrors["username"] = usernameError;
    hasError = true;
  }
  return {
    fromErrors,
    hasError,
  };
}

export const validateInput = function (input, type) {
  let value = input.trim();

  if (value === "") {
    return false;
  }

  switch (type) {
    case "text":
      if (!/^[a-zA-Z0-9\s./]+$/.test(value)) {
        return false;
      }
      break;
    case "username":
      if (!/^[0-9A-Za-z]{6,16}$/.test(value)) {
        return false;
      }
      break;

    case "email":
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return false;
      }
      break;

    case "password":
      if (value.length < 6) {
        return false;
      }
      break;

    case "number":
      if (isNaN(value) || value <= 0) {
        return false;
      }
      break;

    default:
      break;
  }

  return true;
};

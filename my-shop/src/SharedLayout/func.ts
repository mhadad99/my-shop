export const validateInput = function (input: string, type: string) {
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
      if (!/^[0-9A-Za-z]{4,16}$/.test(value)) {
        return false;
      }
      break;

    case "email":
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
        return false;
      }
      break;

    case "password":
      if (value.length < 6) {
        return false;
      }
      break;

    case "number":
      if (isNaN(Number(value)) || Number(value) <= 0) {
        return false;
      }
      break;



    default:
      break;
  }

  return true;
};

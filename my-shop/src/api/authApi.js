import axios from "axios";

const baseURL = "http://localhost:3005/users"; // Now it routes through Vite proxy
// Function to authenticate user
const getAllUsers = () => axios.get(baseURL);

const loginUser =
  ({ email, password, navigate }) =>
  async (dispatch) => {
    try {
      const response = await fetch(
        `${baseURL}?email=${email}&password=${password}`
      );
      console.log(response);
      const data = await response.json();

      if (data.length > 0) {
        dispatch(setUser(data[0])); // Store user in Redux
        navigate("/");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

export { loginUser, getAllUsers };

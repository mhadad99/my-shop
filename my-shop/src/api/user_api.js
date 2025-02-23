import axios from "axios";
const baseURL = "http://localhost:3005/users";

const signin_user = async (user) => {
    try {
        const { data: users } = await axios.get(baseURL);
        const existingUser = users.find(u => u.email === user.email && u.password === user.password);
        if (existingUser) {
            return existingUser;
        } else {
            return "Incorrect email or Password"
        }
    } catch (error) {
        throw error;
    }
};

const register_user = async (user) => {
    try {
        const { data: users } = await axios.get(baseURL);
        const existingUser = users.find(u => u.username === user.username || u.email === user.email);
        if (existingUser) {
            return "Username or Email already exists";
        } else {
            const new_user = {
                ...user,
                role: "customer"
            };
            const response = await axios.post(baseURL, new_user);
            console.log(response)
            return response.data;
        }
    } catch (error) {
        throw error;
    }
};

const get_all_users = () => axios.get(baseURL);

const edit_user = (id, user) => axios.put(`${baseURL}/${id}`, user);

export {
    signin_user,
    register_user,
    get_all_users,
    edit_user,
};
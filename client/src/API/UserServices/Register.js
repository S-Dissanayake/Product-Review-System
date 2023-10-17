import axios from "axios";
import BASE_URL from "../../config";

const registerNewUser = async (state) => {
  try {
    const res = await axios.post(`${BASE_URL.COMMON}/register`, {
      name: state.name,
      email: state.email,
      password: state.password,
    });

    console.log(res, "response in register");

    return res.data.status;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default registerNewUser;

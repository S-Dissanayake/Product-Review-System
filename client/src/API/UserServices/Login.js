import axios from "axios";
import BASE_URL from "../../config";

const loginCall = async (state) => {
  try {
    const res = await axios.post(`${BASE_URL.COMMON}/login`, {
      email: state.email,
      password: state.password,
    });

    console.log(res, "response in login");
    localStorage.setItem("userToken", res.data.token);
    localStorage.setItem("userType", res.data.user.userType);
    localStorage.setItem("username", res.data.user.name);

    return res.data.status;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default loginCall;

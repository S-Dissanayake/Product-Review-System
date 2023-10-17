import axios from "axios";
import BASE_URL from "../../config";

const createNewProducts = async (state) => {
  try {
    const res = await axios.post(
      `${BASE_URL.COMMON}/product/new-product`,
      state
    );

    return res.data;
  } catch (error) {
    return error;
  }
};

export default createNewProducts;

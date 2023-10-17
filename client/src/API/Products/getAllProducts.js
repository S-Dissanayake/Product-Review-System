import axios from "axios";
import BASE_URL from "../../config";
import {
  setAutomobile,
  setBags,
  setBeauty,
  setElectronics,
  setFashion,
  setFurniture,
  setJewelry,
  setToys,
} from "../../redux/actions/productActions";

const getAllProducts = async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL.COMMON}/product/view_all`);

    const electronics = [];
    const fashion = [];
    const jewelry = [];
    const bags = [];
    const toys = [];
    const beauty = [];
    const automobile = [];
    const furniture = [];

    res.data.result.forEach((result) => {
      if (
        result.category === "electronic" ||
        result.category === "electronics"
      ) {
        electronics.push(result);
      } else if (result.category === "furniture") {
        furniture.push(result);
      } else if (result.category === "automobile") {
        automobile.push(result);
      } else if (result.category === "beauty and health") {
        beauty.push(result);
      } else if (result.category === "toys") {
        toys.push(result);
      } else if (result.category === "bags and shoes") {
        bags.push(result);
      } else if (result.category === "jewelry") {
        jewelry.push(result);
      } else if (result.category === "fashion") {
        fashion.push(result);
      }
    });

    dispatch(setElectronics(electronics));
    dispatch(setFashion(fashion));
    dispatch(setJewelry(jewelry));
    dispatch(setBags(bags));
    dispatch(setToys(toys));
    dispatch(setBeauty(beauty));
    dispatch(setAutomobile(automobile));
    dispatch(setFurniture(furniture));

    return res.data.message;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default getAllProducts;

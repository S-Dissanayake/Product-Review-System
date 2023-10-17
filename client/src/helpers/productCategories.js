import {
  setAutomobile,
  setBags,
  setBeauty,
  setElectronics,
  setFashion,
  setFurniture,
  setJewelry,
  setToys,
} from "../redux/actions/productActions";

const productCategories = async (data, dispatch) => {
  const electronics = [];
  const fashion = [];
  const jewelry = [];
  const bags = [];
  const toys = [];
  const beauty = [];
  const automobile = [];
  const furniture = [];

//   console.log(data);

  data.forEach((result) => {
    if (result.category === "electronic") {
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
};

export default productCategories;

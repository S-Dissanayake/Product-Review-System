/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Tooltip from "@mui/material/Tooltip";
import "react-toastify/dist/ReactToastify.css";

import data from "../../data/Common/categories.json";
import { createNewProducts, getAllProducts } from "../../API";
import { setProductFetchSucceedNotification } from "../../redux/actions";
import { Grid } from "@mui/material";

const NewReview = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userName = localStorage.getItem("username");
  const [verified, setVerified] = useState(false);

  const [state, setState] = useState({
    type: "",
    product_name: "",
    product_code: "",
    price: "",
    ratings: "",
    category: "",
    brand: "",
    description: "",
    review: "",
  });

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUploadURL, setImageUploadURL] = useState(null);

  const handleVerification = async () => {
    if (
      state.type === "" ||
      state.product_name === "" ||
      state.product_code === "" ||
      state.price === "" ||
      state.ratings === "" ||
      state.category === "" ||
      state.brand === "" ||
      state.description === "" ||
      //state.review === "" ||
      imageUpload === null
    ) {
      setVerified(false);
    } else {
      setVerified(true);
    }
  };

  const handleFileSelect = (e) => {
    setImageUpload(e.target.files[0]);
    setImageUploadURL(URL.createObjectURL(e.target.files[0]));
  };

  const updateReduxStore = async () => {
    try {
      const fetchProducts = await getAllProducts(dispatch);
      dispatch(setProductFetchSucceedNotification());
      toast.success(fetchProducts.toUpperCase());
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    if (verified) {
      const fd = new FormData();
      fd.append("user_name", userName);
      fd.append("type", state.type);
      fd.append("product_name", state.product_name);
      fd.append("product_code", state.product_code);
      fd.append("price", state.price);
      fd.append("ratings", state.ratings);
      fd.append("category", state.category);
      fd.append("brand", state.brand);
      fd.append("description", state.description);
      //fd.append("comment", state.review);
      fd.append("productImages", imageUpload, imageUpload.name);
      fd.append("productImagesURL", imageUploadURL);

      const res = await createNewProducts(fd);

      if (res.status === "200 OK") {
        toast.success(res.message);
        navigate("/");
      } else {
        toast.error(res.errorMessage);
        window.location.reload(true);
      }
    } else {
      toast.error("Please check your inputs before submitting".toUpperCase());
    }
    updateReduxStore();
  };

  useEffect(() => {
    handleVerification();
  }, [state, imageUpload]);

  return (
    <Grid container sx={{margin: "0 2rem 1rem 2rem"}}>
    {/* <div className="container"> */}
      <ToastContainer />
      <Grid item container xs={12}>
      <div
        className="product-title"
        style={{
          color: "#003761",
          textTransform: "uppercase",
          fontWeight: "bolder",
          fontSize: "20px",
          marginTop: "20px",
        }}
      >
        Create A New Review
      </div>
      </Grid>

      <div className="form-container">
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e) => {
              setState({
                ...state,
                type: e.target.value,
              });
            }}
          >
            <FormControlLabel
              value="product"
              control={<Radio />}
              label="Product"
            />
            <FormControlLabel value="male" control={<Radio />} label="Service" />
          </RadioGroup>
        </FormControl>

        <div className="d-flex flex-row align-items-center mb-4">
          <div className="form-outline flex-fill mb-0">
            <input
              type="text"
              id="form3Example4c"
              className="form-control"
              placeholder="Product Name"
              style={{
                width: "300px",
                marginTop: "15px",
                marginBottom: "15px",
              }}
              onChange={(e) => {
                setState({
                  ...state,
                  product_name: e.target.value,
                });
              }}
            />
          </div>

          <div className="form-outline flex-fill mb-0">
            <input
              type="text"
              id="form3Example4c"
              className="form-control"
              placeholder="Product Code"
              style={{
                width: "300px",
                marginTop: "15px",
                marginBottom: "15px",
              }}
              onChange={(e) => {
                setState({
                  ...state,
                  product_code: e.target.value,
                });
              }}
            />
          </div>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <div className="form-outline flex-fill mb-0">
            <input
              type="text"
              id="form3Example4c"
              className="form-control"
              placeholder="Price"
              style={{
                width: "300px",
                marginTop: "15px",
                marginBottom: "15px",
              }}
              onChange={(e) => {
                setState({
                  ...state,
                  price: e.target.value,
                });
              }}
            />
          </div>

          <div className="form-outline flex-fill mb-0">
            <select
              className="form-control"
              placeholder="Select Product Category"
              id="form3Example4c"
              style={{
                width: "300px",
                marginTop: "15px",
                marginBottom: "15px",
              }}
              onChange={(e) => {
                setState({
                  ...state,
                  category: e.target.value,
                });
              }}
            >
              {data.data.map((category) => {
                return (
                  <option
                    value={category.value}
                    style={{
                      color: "#003741",
                    }}
                  >
                    {category.value.toUpperCase()}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-outline flex-fill mb-0">
            <input
              type="text"
              id="form3Example4c"
              className="form-control"
              placeholder="Brand"
              style={{
                width: "300px",
                marginTop: "15px",
                marginBottom: "15px",
              }}
              onChange={(e) => {
                setState({
                  ...state,
                  brand: e.target.value,
                });
              }}
            />
          </div>

          <div className="form-outline flex-fill mb-0">
            <Rating
              name="half-rating"
              defaultValue={0}
              precision={0.5}
              onChange={(event, newValue) => {
                setState({
                  ...state,
                  ratings: newValue,
                });
              }}
            />
          </div>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <div className="form-outline flex-fill mb-0">
            <textarea
              type="text"
              id="form3Example4c"
              className="form-control"
              placeholder="Description"
              style={{
                width: "300px",
                height: "300px",
                marginTop: "15px",
                marginBottom: "15px",
              }}
              onChange={(e) => {
                setState({
                  ...state,
                  description: e.target.value,
                });
              }}
            />
          </div>

          {/* <div className="form-outline flex-fill mb-0">
            <textarea
              type="text"
              id="form3Example4c"
              className="form-control"
              placeholder="New Review"
              style={{
                width: "300px",
                height: "300px",
                marginTop: "15px",
                marginBottom: "15px",
              }}
              onChange={(e) => {
                setState({
                  ...state,
                  review: e.target.value,
                });
              }}
            />
          </div> */}

          <div className="form-outline flex-fill mb-0">
            <Tooltip leaveDelay={200} title="Upload an Image">
              <input
                type="file"
                className="form-control"
                style={{
                  display: "",
                }}
                onChange={(e) => {
                  handleFileSelect(e);
                }}
                // ref={(fileInput) => (fileInput = fileInput)}
              />
              {/* <button onClick={fileInput.click()}>Pick an Image</button> */}
            </Tooltip>
          </div>
        </div>
      </div>
      <Grid item xs={12}>
      <Stack direction="row" spacing={2} style={{ justifyContent: "center" }}>
        <Link to={"/"} className="link">
          <Button variant="outlined" color="error">
            Cancel
          </Button>
        </Link>

        <Button
          variant="outlined"
          onClick={() => {
            handleSubmit();
          }}
        >
          Create A New Review
        </Button>
      </Stack>
      </Grid>
    {/* </div> */}
    </Grid>
  );
};

export default NewReview;

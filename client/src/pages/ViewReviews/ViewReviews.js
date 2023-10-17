/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import Ratings from "../../components/Ratings/Ratings";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link, useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";

const ViewReviews = () => {
  const location = useLocation();
  const { clickedItem } = location?.state;

  const [image, setImage] = useState(null);

  const setImageBase64 = () => {
    let binary = "";
    let bytes = new Uint8Array(clickedItem?.image?.data?.data);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    const base64String = window.btoa(binary);

    setImage(base64String);
  };

  React.useEffect(() => {
    setImageBase64();
  }, [clickedItem]);

  return (
    <Grid container  sx={{margin: "2rem 2rem 2rem 3rem"}}>
      <Grid container item xs={12}>      
        <p
          className="product-title"
          style={{
            color: "#003761",
            textTransform: "uppercase",
            fontWeight: "500",
            fontSize: "30px",
            marginBottom: "1rem"
          }}
        >
          {clickedItem?.category?.toUpperCase()}: {clickedItem?.product_name}
        </p>
      </Grid>

      <Grid container item xs={12}>
        <div className="row">
          <div className="col left-side">
            <div
              style={{
                marginBottom: "25px",
              }}
            >
              <label style={{ color: "#003761", textTransform: "capitalize" , fontWeight: "500"}}>
                PRODUCT NAME
              </label>
              <input
                type="email"
                id="form3Example3c"
                class="form-control"
                placeholder="Product Name"
                value={clickedItem?.product_name}
                disabled
                style={{ backgroundColor: "white", width: "300px" }}
              />
            </div>

            <div
              style={{
                marginBottom: "25px",
              }}
            >
              <label style={{ color: "#003761", textTransform: "capitalize" , fontWeight: "500" }}>
                PRODUCT CODE
              </label>
              <input
                type="email"
                id="form3Example3c"
                class="form-control"
                placeholder="Product Code"
                value={clickedItem?.product_code}
                disabled
                style={{ backgroundColor: "white", width: "300px" }}
              />
            </div>

            <div
              style={{
                marginBottom: "25px",
              }}
            >
              <label style={{ color: "#003761", textTransform: "capitalize" , fontWeight: "500" }}>
                REVIEWER NAME
              </label>
              <input
                type="email"
                id="form3Example3c"
                class="form-control"
                placeholder="Reviewer Name"
                value={
                  clickedItem?.review[0]?.user_name ? (
                    clickedItem?.review[0]?.user_name
                  ) : (
                    <>No Reviewers Yet</>
                  )
                }
                disabled
                style={{ backgroundColor: "white", width: "300px" }}
              />
            </div>

            <div
              style={{
                marginBottom: "25px",
              }}
            >
              <label style={{ color: "#003761", textTransform: "capitalize" , fontWeight: "500" }}>
                PRICE
              </label>
              <input
                type="email"
                id="form3Example3c"
                class="form-control"
                placeholder="Price"
                value={`$ ${clickedItem?.price}`}
                disabled
                style={{ backgroundColor: "white", width: "300px" }}
              />
            </div>

            <div
              style={{
                marginBottom: "25px",
              }}
            >
              <label style={{ color: "#003761", textTransform: "capitalize" , fontWeight: "500" }}>
                BRAND
              </label>
              <input
                type="email"
                id="form3Example3c"
                class="form-control"
                placeholder="Brand"
                value={clickedItem?.brand}
                disabled
                style={{ backgroundColor: "white", width: "300px" }}
              />
            </div>

            <div
              style={{
                marginBottom: "25px",
              }}
            >
              <label style={{ color: "#003761", textTransform: "capitalize" , fontWeight: "500" }}>
                RATE
              </label>
              <Ratings value={clickedItem?.review[0]?.rating} />
            </div>

            <div
              style={{
                marginBottom: "25px",
              }}
            >
              <label style={{ color: "#003761", textTransform: "capitalize" , fontWeight: "500" }}>
                CATEGORY
              </label>
              <input
                type="email"
                id="form3Example3c"
                class="form-control"
                placeholder="Category"
                value={clickedItem?.category}
                disabled
                style={{
                  backgroundColor: "white",
                  width: "300px",
                  textTransform: "capitalize",
                }}
              />
            </div>

            <div
              style={{
                marginBottom: "25px",
              }}
            >
              <label style={{ color: "#003761", textTransform: "capitalize" , fontWeight: "500" }}>
                DESCRIPTION
              </label>
              <textarea
                id="form3Example3c"
                class="form-control"
                placeholder="Description"
                value={clickedItem?.description ? clickedItem?.description : ""}
                disabled
                style={{ backgroundColor: "white", width: "300px" }}
              />
            </div>
          </div>

          <div className="col right-side"style={{ marginLeft: "2rem"}}>
            <Card
              sx={{
                maxWidth: 345,
                width: 400,
                border: "1px solid darkblue",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <CardMedia
                component="img"
                alt={clickedItem?.product_name}
                height="300"
                width="400"
                image={`data:image/png;base64,${image}`}
              />
            </Card>
          </div>
        </div>
      </Grid>
        <Stack direction="row" spacing={2} style={{ justifyContent: "center" }}>
          <Link to={"/"} className="link">
            <Button variant="outlined" color="error">
              Go Back
            </Button>
          </Link>

          {/* <Link
            to={"/similar-reviews"}
            className="link"
            state={{ reviews: clickedItem?.review }}
          >
            <Button variant="outlined" href="#outlined-buttons">
              Similar Reviews
            </Button>
          </Link> */}
        </Stack>
    </Grid>
  );
};

export default ViewReviews;

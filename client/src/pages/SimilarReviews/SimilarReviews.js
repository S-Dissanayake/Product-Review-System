import React from "react";
import { useLocation } from "react-router-dom";
import ReviewList from "../../components/ReviewList/ReviewList";
import "./styles.css";

const SimilarReviews = () => {
  const location = useLocation();
  const { reviews } = location.state;
  console.log("reviews -", reviews);

  return (
    <div
      style={{ backgroundColor: "#eee", marginTop: "20px" }}
      className="container"
    >
      <div className="product-title">Similar Reviews</div>

      <div style={{ backgroundColor: "#eee" }} className="list-container">
        {reviews.map((review) => {
          return <ReviewList data={review} />;
        })}
      </div>
    </div>
  );
};

export default SimilarReviews;

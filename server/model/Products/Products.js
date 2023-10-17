const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema(
  {
    type: {
      type: "string",
      required: true,
    },
    product_name: {
      type: "string",
      required: true,
    },
    product_code: {
      required: true,
      type: "string",
    },
    price: {
      type: "string",
      required: true,
    },
    category: {
      type: "string",
      required: true,
    },
    brand: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    image_url: {
      type: "string",
      required: false,
    },
    review: [
      {
        user_name: String,
        rating: Number,
        comment: String,
      },
    ],
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  { collection: "Products" }
);

module.exports = mongoose.model("Products", ProductsSchema);

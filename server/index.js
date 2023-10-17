const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const PORT = process.env.PORT || 3832;

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload");
  },
  filename: (req, file, cb) => {
    const uniquePrefix = uuidv4();
    cb(null, uniquePrefix + file.originalname);
  },
});

const upload = multer({ storage: storage });

const Products = require("./model/Products/Products");

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/upload", express.static("upload"));

// database connections
mongoose.set("strictQuery", false);
mongoose
  .connect(
    process.env.URL_DB,
    { useNewUrlParser: true },
    { useUnifiedTopology: false }
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(JSON.stringify(err));
  });

const registerRoute = require("./routes/userServices/register");
const loginRoute = require("./routes/userServices/login");
const userRoutes = require("./routes/userServices/user");
const productRoutes = require("./routes/productServices/getAll");

app.get("/", (req, res) => {
  res.status(200).json({ message: `Welcome to Api` });
});

app.post(
  "/api/product/new-product",
  upload.single("productImages"),
  async (req, res) => {
    // console.log(req.body);
    const productNew = new Products({
      type: req.body.type,
      product_name: req.body.product_name,
      product_code: req.body.product_code,
      price: req.body.price,
      category: req.body.category,
      brand: req.body.brand,
      review: {
        user_name: req.body.user_name,
        rating: req.body.ratings,
        comment: req.body.comment,
      },
      description: req.body.description,
      image: {
        data: fs.readFileSync(
          path.join(__dirname, "upload/" + req.file.filename)
        ),
        contentType: "image/png",
      },
      image_url: req.body.productImagesURL,
    });

    try {
      const result = await productNew.save();
      res.status(201).json({
        status: "200 OK",
        result: result,
        user: productNew,
        message: "Products created Successfully",
      });
    } catch (err) {
      return res.status(400).json({
        error: err.error,
        errorMessage: err.message,
        message: "Error while creating the user",
      });
    }
  }
);

app.use("/api/register", registerRoute);
app.use("/api/login", loginRoute);
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);


//listening from the server_error
app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});

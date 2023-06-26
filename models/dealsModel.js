const mongoose = require("mongoose");

const dealsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add the product title name"],
    },
    description: {
      type: String,
      required: [true, "Please add the product description"],
    },
    imagePath: {
      type: String,
      required: [true, "Please add the product image path"],
    },
    rating: {
      type: String,
      required: [true, "Please add the product rating"],
    },
    totalRatings: {
      type: String,
      required: [true, "Please add the product totalRatings"],
    },
    price: {
      type: String,
      required: [true, "Please add the product price"],
    },
    listPrice: {
      type: String,
      required: [true, "Please add the product listPrice"],
    },
    discount: {
      type: String,
      required: [true, "Please add the product discount"],
    },
    link: {
      type: String,
      required: [true, "Please add the product link"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Deals", dealsSchema);

const asyncHandler = require("express-async-handler");
const Products = require("../models/productModel");
const Banners = require("../models/bannerModel");
const Deals = require("../models/dealsModel");
//@desc Get all products
//@route GET /api/products
//@access private
const getProducts = asyncHandler(async (req, res) => {
  const products = await Products.find({});
  res.status(200).json(products);
});

const createProduct = asyncHandler(async (req, res) => {
  console.log("The request product body is :", req.body);
  const {
    title,
    description,
    imagePath,
    rating,
    totalRatings,
    price,
    listPrice,
    discount,
    link,
  } = req.body;
  if (
    !title ||
    !description ||
    !imagePath ||
    !rating ||
    !totalRatings ||
    !price ||
    !listPrice ||
    !discount ||
    !link
  ) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const product = await Products.create({
    title,
    description,
    imagePath,
    rating,
    totalRatings,
    price,
    listPrice,
    discount,
    link,
  });
  res.status(201).json(product);
});

// Update Products
const updateProduct = asyncHandler(async (req, res) => {
  console.log("params id", req.params.id);
  console.log("The request update product body is :", req.body);
  const id = await Products.findById(req.params.id);
  const updatedProduct = await Products.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedProduct);
});

// For banners
const getBanners = asyncHandler(async (req, res) => {
  const banners = await Banners.find({});
  res.status(200).json(banners);
});

const createBanners = asyncHandler(async (req, res) => {
  console.log("The request banner body is :", req.body);
  const {
    title,
    description,
    imagePath,
    rating,
    totalRatings,
    price,
    listPrice,
    discount,
    link,
  } = req.body;
  if (
    !title ||
    !description ||
    !imagePath ||
    !rating ||
    !totalRatings ||
    !price ||
    !listPrice ||
    !discount ||
    !link
  ) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const banner = await Banners.create({
    title,
    description,
    imagePath,
    rating,
    totalRatings,
    price,
    listPrice,
    discount,
    link,
  });
  res.status(201).json(banner);
});

const getProductTopDeals = asyncHandler(async (req, res) => {
  const topDeals = await Deals.find({});
  res.status(200).json(topDeals);
});

const createDeals = asyncHandler(async (req, res) => {
  console.log("The request deals body is :", req.body);
  const {
    title,
    description,
    imagePath,
    rating,
    totalRatings,
    price,
    listPrice,
    discount,
    link,
  } = req.body;
  if (
    !title ||
    !description ||
    !imagePath ||
    !rating ||
    !totalRatings ||
    !price ||
    !listPrice ||
    !discount ||
    !link
  ) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const deals = await Deals.create({
    title,
    description,
    imagePath,
    rating,
    totalRatings,
    price,
    listPrice,
    discount,
    link,
  });
  res.status(201).json(deals);
});

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  getBanners,
  createBanners,
  getProductTopDeals,
  createDeals,
};

const express = require("express");
const {
  getBanners,
  createBanners,
  getProducts,
  createProduct,
  getProductTopDeals,
  createDeals,
} = require("../controllers/productController");

const router = express.Router();

router.route("/").get(getProducts).post(createProduct);
router.route("/banners").get(getBanners).post(createBanners);
router.route("/deals").get(getProductTopDeals).post(createDeals);
// router.post("/banners", bannersList);
// router.post("/top_deals", topDealsList);

module.exports = router;

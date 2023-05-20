const express = require("express");
const {createProduct,getAllProducts,updateProduct,
     deleteProduct, getProductDetails,deleteAllProducts, 
     createProductReview, getProductReviews,deleteProductReview,getAdminProducts
} = require("../controllers/productController");
const {isAuthenticatedUser,authorizeRoles} = require("../middleWare/auth");
const router = express.Router();

router.route("/products").get(getAllProducts).delete(deleteAllProducts);

router.route("/admin/product/:id").get(getProductDetails)
.put(updateProduct).delete(deleteProduct)
      
router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"),
   getAdminProducts);
router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"),
   createProduct);


router.route("/review").put(isAuthenticatedUser, 
  authorizeRoles("admin"),createProductReview);

router.route("/reviews").get(getProductReviews)
.delete(deleteProductReview);


module.exports = router
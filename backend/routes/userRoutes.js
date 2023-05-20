const express = require("express");
const { registerUser,
    loginUser,logOut,
    forgotPassword,
    resetPassword,
    getUserDetails,
    updatePassword,
    updateProfile,
    getAllUsers,
    getUser,
     updateUserRole, 
     deleteUser
 } = require("../controllers/userController");
const {isAuthenticatedUser,authorizeRoles} = require("../middleWare/auth")

const router = express.Router();


router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/me").get(isAuthenticatedUser, getUserDetails);

router.route("/password/update").put(isAuthenticatedUser,updatePassword);

router.route("/me/update").put(isAuthenticatedUser, updateProfile);

router.route("/admin/users").get(isAuthenticatedUser, authorizeRoles("admin"),getAllUsers);

router.route("/admin/user/:id")
.get(isAuthenticatedUser, authorizeRoles("admin"),getUser)
.put(isAuthenticatedUser, authorizeRoles("admin"),updateUserRole)
.delete(isAuthenticatedUser, authorizeRoles("admin"),deleteUser);



router.route("/logout").get(logOut);

module.exports = router;
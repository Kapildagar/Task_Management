import { Router } from "express";
import { register,login,logout } from "../controller/userController.js";
import { Auth } from "../middleware/Auth.js";
const router=Router();


router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(Auth,logout)

export default router;
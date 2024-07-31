import express from "express"
import { signup } from "../Controller/user_controller.js"
import { login } from "../Controller/user_controller.js"
const router=express.Router()
router.post("/signup",signup)
router.post("/login",login)

export default router
import express from "express";
import { registerAdminValidationSchema } from "./admin.validation.js";
import Admin from "./admin.model.js";
import validateReqBody from "../middlewares/validation.middleware.js";

const router = express.Router();

//register admin
router.post(
  "/admin/register",
 validateReqBody(registerAdminValidationSchema),
  async (req, res) => {
    // extract new admin from req.body
    const newAdmin = req.body;

    //find admin with provided email
    const admin = await Admin.findOne({ email: newAdmin.email });

    //if admin exist ,throw error
    if (admin) {
      return res.status(409).send({ message: "Admin already exist." });
    }
    const plainPassword = newAdmin.password;
    const saltRound =10;
    const hashedPassword = await bcrypt.hash(plainPassword,saltRound);
    newAdmin.password = hashedPassword;
    await Admin.create(newAdmin);
 
    return res.status(201).send({message:"Registered....",newAdmin});
  
  //generate hashed password
  }
);
export default router;

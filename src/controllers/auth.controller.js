import Admin from "../models/Admin.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const registerAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
console.log(email,password);

    // Validation
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!email.includes("@")) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (password.length < 4) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if(existingAdmin.password !== password ){
      return  res.status(201).json({ message: "password invalid" });
    }

    

    // Generate JWT token
    const token = jwt.sign(
      { email: email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({ message: "Admin registered successfully!", token });

  } catch (error) {
    console.log("server problem");
    
    res.status(500).json({ message: error.message });
  }
};

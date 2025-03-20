import req from "express/lib/request.js";
import UserType from "../models/UserType.model.js";
import User from "../models/UserType.model.js" 
// Show All Cards
export const userType = async (req, res) => {
    try {
      const userType = await User.find();
      res.status(200).json(userType);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
 
  export const addUserType = async (req, res) => {
      try {
          const { img, name } = req.body;
  
          // Check if the user type already exists
          const existingUserType = await UserType.findOne({ name });
          if (existingUserType) {
              return res.status(400).json({ message: "Type name already exists" });
          }
  
          // Create new user type
          const newUserType = new UserType({ name, img });
          await newUserType.save();
  
          console.log(newUserType, "newUserType");
          
          res.status(201).json(newUserType); // ✅ Return the saved user type
      } catch (error) {
          res.status(500).json({ message: error.message });
      }
  };
  
  // export default action = async(req,res) =>{
  //   try {
  //       console.log("jj");
        
  //   } catch (error) {
  //       res.status(500).json({ message: error.message });
  //   }
  // };

  // export default addAction = async(req, res) => {
  //   try {
        
  //   } catch (error) {
  //       res.status(500).json({ message: error.message });
  //   }
  // };
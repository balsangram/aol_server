import UserType from "../models/UserType.model.js";
import Action from "../models/Action.model.js";
// Show All Cards
export const userType = async (req, res) => {
    try {
      const userType = await UserType.find();
      res.status(200).json(userType);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
 
  export const addUserType = async (req, res) => {
      try {
          const { img, usertype } = req.body;
  
          // Check if the user type already exists
          const existingUserType = await UserType.findOne({ usertype });
          if (existingUserType) {
              return res.status(400).json({ message: "Type name already exists" });
          }
  
          // Create new user type
          const newUserType = new UserType({ usertype, img });
          await newUserType.save();
  
          console.log(newUserType, "newUserType");
          
          res.status(201).json(newUserType); // ✅ Return the saved user type
      } catch (error) {
          res.status(500).json({ message: error.message });
      }
  };
  
  export const action = async (req, res) => {
    try {
        const { usertype } = req.params;
        const actions = await Action.find({ usertype });
console.log(action,"action");

        if (!actions.length) {
            return res.status(404).json({ message: "No actions found" });
        }

        res.status(200).json(actions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add new action
export const addAction = async (req, res) => {
  try {
      const { usertype, language, img, name, link } = req.body;

      // Check if all required fields are provided
      if (!usertype || !language || !img || !name || !link) {
          return res.status(400).json({ message: "All fields are required" });
      }

      // Check if the action already exists
      // const existingAction = await Action.findOne({ usertype, language, name });
      // if (existingAction) {
      //     return res.status(400).json({ message: "Action already exists" });
      // }

      // Create and save new action
      const newAction = new Action({ usertype, language, img, name, link });
      await newAction.save();
console.log(newAction);

      res.status(201).json(newAction);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};
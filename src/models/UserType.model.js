import mongoose from "mongoose";

const userTypeSchema = new mongoose.Schema({
    img:{
        type:String,
        require: true
    },
    name: {
        type: String,
        required: true 
    }
}, {
    timestamps: true
});

const UserType = mongoose.model("UserType", userTypeSchema);
export default UserType;

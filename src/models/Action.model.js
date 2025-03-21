import mongoose from 'mongoose';

const actionSchema = new mongoose.Schema(
  {
    // userType: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "UserType" 
    // },
    usertype:{type: String, required: true},
    language: { type: String, required: true },
    img: { type: String, required: true },
    content: { type: String, required: true },
    link: { type: String, required: true }
  },
  { timestamps: true }
);

const Action = mongoose.model("Action", actionSchema);
export default Action;

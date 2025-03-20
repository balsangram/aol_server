import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema(
  {
    name: { type: String, required: true  },
  },
  { timestamps: true }
);

const Card = mongoose.model('Card', cardSchema);
export default Card;

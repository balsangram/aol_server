import mongoose from 'mongoose';

const actionSchema = new mongoose.Schema({
    type: { type: String , require: true},
    img: { type: String , require: true},
    name: { type: String, required: true },
    link: { type: String, required: true },
}, { timestamps: true });

const Action = mongoose.model('Action', actionSchema);
export default Action;

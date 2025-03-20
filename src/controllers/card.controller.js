import Card from '../models/Card.model.js';

// Show All Cards
export const showAllCards = async (req, res) => {
  try {
    // const token = req.header("Authorization");
    // // console.log(token, "token");
    // if(!token){
    //  return res.status(401).json({ message: "Access denied. No token provided." });
    // }
    
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create Card
export const createCard = async (req, res) => {
  try {
    // const token = req.header("Authorization");
    // // console.log(token, "token");
    // if(!token){
    //  return res.status(401).json({ message: "Access denied. No token provided." });
    // }
    console.log("hello");
    const { name, link } = req.body;
    const newCard = new Card({ name, link });
    const existingCard = await Card.findOne({ name });
    if (existingCard) {
      return res.status(400).json({ message: 'Card name already exists' });
    }
    console.log(newCard,"newcard");
    
    await newCard.save();
    res.status(201).json({ message: 'Card created successfully', newCard });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Card
export const updateCard = async (req, res) => {
  try {
    // const token = req.header("Authorization");
    // // console.log(token, "token");
    // if(!token){
    //  return res.status(401).json({ message: "Access denied. No token provided." });
    // }
    const { id } = req.params;
    const { name, link } = req.body;
    const updatedCard = await Card.findByIdAndUpdate(id, { name, link }, { new: true });
    if (!updatedCard) return res.status(404).json({ message: 'Card not found' });
    res.status(200).json({ message: 'Card updated successfully', updatedCard });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Card
export const removeCard = async (req, res) => {
  try {
    // const token = req.header("Authorization");
    // // console.log(token, "token");
    // if(!token){
    //  return res.status(401).json({ message: "Access denied. No token provided." });
    // }
    const { id } = req.params;
    const deletedCard = await Card.findByIdAndDelete(id);
    if (!deletedCard) return res.status(404).json({ message: 'Card not found' });
    res.status(200).json({ message: 'Card removed successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

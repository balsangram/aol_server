import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './src/config/db.js';
import authRoutes from './src/routes/authRoutes.js';
// import cardRoutes from './src/routes/cardRouter.js';
// import { verifyToken } from './src/middleware/verifyToken.js';
import userRoutes from "./src/routes/userRoutes.js"

dotenv.config();
connectDB();

const app = express();

app.use(cors({ origin: "*", credentials: true }));

app.use(express.json());

app.use('/auth', authRoutes);
// app.use('/cards', verifyToken, cardRoutes);
// app.use('/cards', cardRoutes);
// user type
app.use('/user', userRoutes)
app.get("/", (req, res) => {
    res.send("Hello, this project is Art Of Living");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

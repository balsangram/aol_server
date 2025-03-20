import express from 'express';
import { showAllCards ,createCard,updateCard , removeCard} from '../controllers/card.controller.js';

const router = express.Router();

router.get('/show-all-cards', showAllCards);
router.post('/create-card', createCard);
router.patch('/update-card/:id', updateCard);
router.delete('/remove-card/:id', removeCard);

export default router; // ✅ Ensure correct export

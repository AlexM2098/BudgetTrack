const express = require('express');
const router = express.Router();
const Budget = require('../models/Budget.js');

// Get all budget items
router.get('/', async (req, res) => {
    try {
        const budgetItems = await Budget.find();
        res.json(budgetItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new budget item
router.post('/', async (req, res) => {
    const budgetItem = new Budget({
        title: req.body.title,
        amount: req.body.amount,
        category: req.body.category,
        type: req.body.type
    });
    try {
        const newBudgetItem = await budgetItem.save();
        res.status(201).json(newBudgetItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// ... We can also add routes for updating and deleting budget items later.
router.delete('/:id', async (req, res) => {
    try {
        await Budget.findByIdAndRemove(req.params.id);
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
});

module.exports = router;

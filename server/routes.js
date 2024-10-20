const express = require('express');
const { getDb } = require('./db');
const router = express.Router();

router.use(express.json());
router.get('/todos', async (req, res) => {
    const db = getDb();
    try {
        const todos = await db.collection('todos').find().toArray();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch todos' });
    }
});
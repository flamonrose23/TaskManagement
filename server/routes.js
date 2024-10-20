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

router.post('/todos', async (req, res) => {
    const db = getDb();
    const todo = req.body;

    try {
        const result = await db.collection('todos').insertOne(todo);
        res.status(201).json(result.ops[0]);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create todo' });
    }
});
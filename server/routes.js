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

router.put('/todos/:id', async (req, res) => {
    const db = getDb();
    const id = req.params.id;
    const updatedTodo = req.body;

    try {
        const result = await db.collection('todos').updateOne({ _id: new MongoClient.ObjectID(id) }, { $set: updatedTodo });
        if (result.modifiedCount === 0) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.status(200).json({ message: 'Todo updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update todo' });
    }
});
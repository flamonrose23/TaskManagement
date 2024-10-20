const express = require('express')
const { MongoClient } = require('mongodb')
const jwt = require('jsonwebtoken')
const { getDb } = require('./db')

const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET;

const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]
    if (!token) {
        return res.sendStatus(403)
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.sendStatus(403)
        }
        req.user = user
        next()
    })
}

router.use(express.json())
router.get('/todos', async (req, res) => {
    const db = getDb()
    try {
        const todos = await db.collection('todos').find().toArray()
        res.status(200).json(todos)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch todos' })
    }
})

router.post('/todos', async (req, res) => {
    const db = getDb()
    const todo = req.body

    try {
        const result = await db.collection('todos').insertOne(todo)
        res.status(201).json(result.ops[0])
    } catch (error) {
        res.status(500).json({ error: 'Failed to create todo' })
    }
})

router.put('/todos/:id', async (req, res) => {
    const db = getDb()
    const id = req.params.id
    const updatedTodo = req.body

    try {
        const result = await db.collection('todos').updateOne({ _id: new MongoClient.ObjectID(id) }, { $set: updatedTodo })
        if (result.modifiedCount === 0) {
            return res.status(404).json({ error: 'Todo not found' })
        }
        res.status(200).json({ message: 'Todo updated successfully' })
    } catch (error) {
        res.status(500).json({ error: 'Failed to update todo' })
    }
})

router.delete('/todos/:id', async (req, res) => {
    const db = getDb()
    const id = req.params.id

    try {
        const result = await db.collection('todos').deleteOne({ _id: new MongoClient.ObjectID(id) })
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Todo not found' })
        }
        res.status(204).send()
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete todo' })
    }
})

module.exports = router
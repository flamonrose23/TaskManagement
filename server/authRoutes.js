const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getDb } = require('./db');

const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET;

router.post('/register', async (req, res) => {
    const { userName, email, password } = req.body;

    const db = getDb();

    try {
        const existingUser = await db.collection('users').findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await db.collection('users').insertOne({ userName, email, password: hashedPassword });
        res.status(201).json({ message: 'User created', userId: result.insertedId });
    } catch (error) {
        res.status(500).json({ error: 'Failed to register user' });
    }
});
module.exports = router;
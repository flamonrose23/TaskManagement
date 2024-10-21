require('dotenv').config();

const express = require('express')
const cors = require('cors')
const { connectDb, getDb } = require('./db')
const port = process.env.PORT || 3000;
const todoRoutes = require('./routes') 
const authRoutes = require('./authRoutes')

const app = express()

app.use(cors({
    origin: 'http://localhost:3000'
}));


let db

connectDb((error) => {
    if (!error) {
        app.use(express.json())
        app.use('/api', todoRoutes)
        app.use('/api/auth', authRoutes)
        app.listen(process.env.PORT, () => {
            console.log('Server is running')
        })
        db = getDb()
    }
})
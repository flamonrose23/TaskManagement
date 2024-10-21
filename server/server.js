const express = require('express')
const { connectDb, getDb } = require('./db')
const todoRoutes = require('./routes')
const authRoutes = require('./authRoutes')

const app = express()

let db

connectDb((error) => {
    if (!error) {
        app.use(express.json())
        app.use('/api', todoRoutes)
        app.use('/api/auth', authRoutes)
        app.listen(3000, () => {
            console.log('Server is running')
        })
        db = getDb()
    }
})
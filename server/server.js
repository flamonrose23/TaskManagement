const express = require('express')
const { connectDb, getDb } = require('./db')
const todoRoutes = require('./routes')

const app = express()

let db

connectDb((error) => {
    if (!error) {
        app.use('/api', todoRoutes)
        app.listen(3000, () => {
            console.log('Server is running')
        })
        db = getDb()
    }
})
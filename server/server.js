const express = require('express')
const { connectDb, getDb } = require('./db')

const app = express()

let db

connectDb((error) => {
    if (!error) {
        app.listen(3000, () => {
            console.log('Server is running')
        })
        db = getDb()
    }
})
require('dotenv').config();

const { MongoClient } = require('mongodb')

let dbConnect

module.exports = {
    connectDb: (callBack) => {
        MongoClient.connect(process.env.dbUrl)
        .then((client) => {
            dbConnect = client.db()
            return callBack()
        })
        .catch(error => {
            console.log(error)
            return callBack(error)
        })
    },
    getDb: () => dbConnect
}
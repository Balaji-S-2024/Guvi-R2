const mongoose = require('mongoose')

require('dotenv').config({ path: '../.env'})

// const MONGO_URL = process.env.MONGO_URI
const MONGO_URL = "mongodb+srv://Balaji:Balaji@cluster0.kqvmijf.mongodb.net/GUVi-R2?retryWrites=true&w=majority"

mongoose.connect(MONGO_URL)
.then(() => {
    console.log(`MongoDb connected...`)
}).catch((err) => {
    console.log(`Error: ${err.message}`)
});

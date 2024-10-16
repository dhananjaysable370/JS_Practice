const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors')
const app = express()
const mongoose = require('mongoose');

app.use(express.json())
app.use(cors())
dotenv.config();

mongoose.connect('mongodb://localhost:27017/Operation_Crud').then(() => {
    console.log('Connected to MongoDB')
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
}).catch((error) => {
    console.log('Error connecting to MongoDB', error)
})

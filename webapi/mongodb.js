const mongoose = require('mongoose')

const initMongoDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
}
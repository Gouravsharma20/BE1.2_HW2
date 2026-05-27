const mongoose = require("mongoose")

require("dotenv").config()

const mongodburl = process.env.MONGODB_URI

const databaseConnections = async () => {
    try {
        await mongoose.connect(mongodburl)
        console.log("database connected successfully")
    } catch (err) {
        console.log("Error loading data", err)
    }
}

module.exports = {databaseConnections}
const mongoose = require("mongoose")

require("dotenv").config()

const  {databaseConnections} =  require("./db/db.connect")

const bookModel = require("./models/book.model")

const fs = require("fs")

const jsonData = fs.readFileSync("./data/bookData.json","utf-8")

const bookData = JSON.parse(jsonData)

async function seedData() {
    try {
        for (const books of bookData) { 
            const newBook = new bookModel(
                {
                    title:books.title,
                    author:books.author,
                    publishedYear:books.publishedYear,
                    genre:books.genre,
                    language:books.language,
                    country:books.country,
                    rating:books.rating,
                    summary:books.summary,
                    coverImageUrl:books.coverImageUrl
                }
            )
            await newBook.save()
        }
        console.log("book data stored successfully")

    } catch {
        (err) => {
            console.log("Error storing data in database")
        }
    }
}

databaseConnections()

seedData()
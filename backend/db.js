const mongoose = require('mongoose')
const Mongo_URI = "mongodb://localhost:27017/mern-project"

const dbConnect = () => {
    mongoose.connect(Mongo_URI)
        .then(() => {
            console.log("mongodb connected successfully");

        })
}
module.exports = dbConnect
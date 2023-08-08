const mongoose = require('mongoose');
const { DB_URI } = require("../Helpers/env")

mongoose.set('strictQuery', false);

mongoose.connect(DB_URI).then(function (db) {
    console.log("DB Connected...");
    return db;
}).catch(function (err) {
    console.log("Error Encountered");
})

module.exports = mongoose;
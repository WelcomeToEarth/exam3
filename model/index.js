const mongoose = require('mongoose')
let ablumSchema = new mongoose.Schema({
    album_id: Number,
    album_name: String,
    public_time: String,
    week: Number,
    price: Number,
    cover: String,
    singers: []
})

mongoose.model("test", ablumSchema)
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// установка схемы
const userScheme = new Schema({
    name: String,
    rating: Number,
    description:String,
    img:String
});

const Item = mongoose.model("User", userScheme);
module.exports = Item;
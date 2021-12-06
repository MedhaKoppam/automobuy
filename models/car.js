const mongoose=require('mongoose');

//Schema
const Schema=mongoose.Schema;
const CarSchema = new Schema({
    name: String,
    cost: Number,
    fuel: String,
    color: String,
    status: String,
    category: String
});

//Model
const Car= mongoose.model('Car', CarSchema);

module.exports = Car;
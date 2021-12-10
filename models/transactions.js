const mongoose=require('mongoose');

//Schema
const Schema=mongoose.Schema;
const TransactionSchema = new Schema({
    name: String,
    cost: Number,
    fuel: String,
    color: String,
    status: String,
    category: String
});

//Model
const Transaction= mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;
const mongoose=require('mongoose');

//Schema
const Schema=mongoose.Schema;
const TransactionSchema = new Schema({
    name: String,
    cost: Number,
});

//Model
const Transaction= mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;
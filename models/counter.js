const mongoose = require('mongoose');

const CounterSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,

    },
    seq: {
        type: Number,
        default: 0,
        unique: true
    }
},
    {
        timestamps: true,
    });

const Counter = mongoose.model('counter', CounterSchema);

module.exports = Counter;
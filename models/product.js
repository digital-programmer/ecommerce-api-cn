const mongoose = require('mongoose');
const Counter = require('./counter');


const productSchema = new mongoose.Schema({
    id: {
        type: 'Number',
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },

    quantity: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
});

productSchema.pre('save', function (next) {
    var doc = this;
    Counter.findByIdAndUpdate({ _id: 'entityId' }, { $inc: { seq: 1 } }, { new: true, upsert: true })
        .then(function (count) {
            doc.id = count.seq;
            next();
        })
        .catch(function (error) {
            console.error("counter error-> : " + error);
            throw error;
        });
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
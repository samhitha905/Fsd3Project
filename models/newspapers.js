const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const reviewSchema = require('./reviews');


const newspaperSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    },
    featured: {
        type: Boolean,
        default: false      
    },
    reviews: [ reviewSchema ]
},{
    timestamps: true
});

var Newspapers = mongoose.model('Newspaper', newspaperSchema);

module.exports = Newspapers;
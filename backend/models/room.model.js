const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    roomNo: {type: Number, required: true},
    guest: {type:String, required: false},
    date: {type:Date, required: false},
    }, {
        timpestamps: true,
    });

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
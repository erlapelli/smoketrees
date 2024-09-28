
const mongoose = require('mongoose') 

const addressSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    addressLine: String,
    city: String,
    state: String,
    postalCode: String
});

module.exports = mongoose.model('Address',addressSchema)

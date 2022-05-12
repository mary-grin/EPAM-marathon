const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    status: {
        type: String,
    }
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
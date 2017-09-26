let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let suKien = new Schema({
	
    tenSuKien: {
        type: String,
        required: true
    },
    moTa: {
        type: String,
        default: ""
    },
    batDau:  {
        type: Date,
        required: true
    },
    ketThuc:  {
        type: Date,
        required: true
    },
    ngayKhoiTao: {
        type: Date,
        default: Date.now
    }
},{collection: "sukien"});

module.exports = mongoose.model("sukien",suKien);
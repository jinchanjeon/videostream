const mongoose = require('mongoose');

var DataSchema = mongoose.Schema({   //스키마(Schema) 설정
    deviceId: {type: Number, require:true},
    eventId: { type: Number, require: true},
    description: { type: String, require: true},
    register_date: { type: Date, default:Date.now}
});

module.exports = mongoose.model('Event', DataSchema); //소문자화 후 복수형으로 바꾸어 devices 컬렉션이 됨